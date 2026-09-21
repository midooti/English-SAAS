import { NextResponse, type NextRequest } from 'next/server';
import type Stripe from 'stripe';
import { getStripe, stripeConfigured } from '@/lib/stripe';
import { HAS_SUPABASE } from '@/lib/config';
import { createSupabaseAdmin, type SubscriptionRow } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

/**
 * Webhook Stripe — synchronise les abonnements dans la table `subscriptions`
 * et met à jour `profiles.plan`, qui est la source de vérité du statut
 * Premium (vérifié côté serveur).
 *
 * Événements traités :
 *  - checkout.session.completed
 *  - customer.subscription.created / updated / deleted
 *  - invoice.payment_failed
 */
export async function POST(req: NextRequest) {
  if (!stripeConfigured) {
    return NextResponse.json({ received: true, ignored: true });
  }

  const signature = req.headers.get('stripe-signature');
  if (!signature) {
    return NextResponse.json({ error: 'Signature manquante.' }, { status: 400 });
  }

  const rawBody = await req.text();
  let event;

  try {
    const stripe = getStripe();
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (!webhookSecret) {
      return NextResponse.json(
        { error: 'STRIPE_WEBHOOK_SECRET non configuré.' },
        { status: 503 }
      );
    }
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (err) {
    console.error('[webhook] signature', err);
    return NextResponse.json({ error: 'Signature invalide.' }, { status: 400 });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutCompleted(event);
        break;
      case 'customer.subscription.created':
      case 'customer.subscription.updated':
      case 'customer.subscription.deleted':
        await handleSubscription(event);
        break;
      case 'invoice.payment_failed':
        await handlePaymentFailed(event);
        break;
      default:
        break;
    }
  } catch (err) {
    console.error('[webhook] sync', event.type, err);
    return NextResponse.json({ error: 'Erreur de synchronisation.' }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}

type StripeSubscription = {
  id: string;
  status: string;
  customer: string;
  current_period_end: number;
  cancel_at_period_end?: boolean;
  items?: { data?: { price?: { id?: string } }[] };
  metadata?: { user_id?: string; plan?: string };
};

async function handleCheckoutCompleted(event: Stripe.Event) {
  if (!HAS_SUPABASE) return;
  const session = event.data.object as {
    subscription?: string;
    metadata?: { user_id?: string; plan?: string };
  };
  if (!session.subscription) return;

  const stripe = getStripe();
  const sub = (await stripe.subscriptions.retrieve(session.subscription)) as StripeSubscription;
  const userId = session.metadata?.user_id ?? sub.metadata?.user_id;
  await syncSubscription(sub, userId);
}

async function handleSubscription(event: Stripe.Event) {
  if (!HAS_SUPABASE) return;
  const sub = event.data.object as StripeSubscription;
  const userId = sub.metadata?.user_id;
  await syncSubscription(sub, userId);
}

async function handlePaymentFailed(event: Stripe.Event) {
  if (!HAS_SUPABASE) return;
  const invoice = event.data.object as {
    subscription?: string;
    customer?: string;
  };
  if (!invoice.subscription) return;

  const stripe = getStripe();
  const sub = (await stripe.subscriptions.retrieve(invoice.subscription)) as StripeSubscription;
  const customer = await stripe.customers.retrieve(sub.customer);
  const customerUserId = !('deleted' in customer) ? (customer.metadata?.user_id ?? null) : null;
  const userId = sub.metadata?.user_id ?? customerUserId;
  await syncSubscription(sub, userId);
}

async function syncSubscription(sub: StripeSubscription, userId: string | null | undefined) {
  if (!userId) return;

  const admin = createSupabaseAdmin();
  const active = sub.status === 'active' || sub.status === 'trialing';
  const plan =
    sub.items?.data?.[0]?.price?.id === process.env.STRIPE_PRICE_YEARLY
      ? 'premium_yearly'
      : 'premium_monthly';

  if (sub.status === 'canceled' || sub.status === 'incomplete_expired' || sub.status === 'deleted') {
    await admin.from('subscriptions').delete().eq('stripe_subscription_id', sub.id);
    await admin
      .from('profiles')
      .update({ plan: 'free', updated_at: new Date().toISOString() })
      .eq('id', userId);
    return;
  }

  await admin.from('subscriptions').upsert(
    {
      stripe_subscription_id: sub.id,
      user_id: userId,
      plan,
      status: sub.status as SubscriptionRow['status'],
      current_period_end: new Date(sub.current_period_end * 1000).toISOString(),
      cancel_at_period_end: sub.cancel_at_period_end === true,
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'stripe_subscription_id' }
  );

  await admin
    .from('profiles')
    .update({ plan: active ? 'premium' : 'free', updated_at: new Date().toISOString() })
    .eq('id', userId);
}