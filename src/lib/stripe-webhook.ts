/**
 * lib/stripe-webhook.ts — Traitement serveur des événements Stripe.
 *
 * SERVER-ONLY : vérifie la signature avec STRIPE_WEBHOOK_SECRET puis
 * synchronise la table `subscriptions` (source de vérité du statut Premium).
 * Un paiement n'est JAMAIS considéré réussi parce que le navigateur revient
 * sur success_url : seul ce webhook signé fait foi.
 */
import { NextResponse, type NextRequest } from 'next/server';
import type Stripe from 'stripe';
import { getStripe, stripeConfigured, planSlugForPriceId } from '@/lib/stripe';
import { HAS_SUPABASE } from '@/lib/config';
import { createSupabaseAdmin, type SubscriptionRow } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

/** Abonnement Stripe réduit aux champs synchronisés. */
type StripeSubscription = {
  id: string;
  status: string;
  customer: string;
  current_period_start?: number;
  current_period_end?: number;
  cancel_at_period_end?: boolean;
  items?: { data?: { price?: { id?: string } }[] };
  metadata?: { user_id?: string; plan?: string };
};

/**
 * Point d'entrée partagé par POST /api/stripe/webhook et /api/webhook.
 * Vérifie la signature Stripe avant tout traitement.
 */
export async function handleStripeWebhook(req: NextRequest): Promise<NextResponse> {
  if (!stripeConfigured) {
    return NextResponse.json({ received: true, ignored: true });
  }

  const signature = req.headers.get('stripe-signature');
  if (!signature) {
    return NextResponse.json({ error: 'Signature manquante.' }, { status: 400 });
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return NextResponse.json(
      { error: 'STRIPE_WEBHOOK_SECRET non configuré.' },
      { status: 503 }
    );
  }

  const rawBody = await req.text();
  let event: Stripe.Event;

  try {
    event = getStripe().webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (err) {
    console.error('[webhook] signature invalide');
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
    console.error('[webhook] échec de synchronisation', event.type, err);
    return NextResponse.json({ error: 'Erreur de synchronisation.' }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}

async function handleCheckoutCompleted(event: Stripe.Event) {
  if (!HAS_SUPABASE) return;
  const session = event.data.object as {
    subscription?: string | null;
    customer?: string | null;
    client_reference_id?: string | null;
    metadata?: { user_id?: string; plan?: string };
  };
  if (!session.subscription) return;

  const sub = (await getStripe().subscriptions.retrieve(
    session.subscription
  )) as unknown as StripeSubscription;
  const userId =
    session.metadata?.user_id ??
    session.client_reference_id ??
    sub.metadata?.user_id ??
    null;
  await syncSubscription(sub, userId);
}

async function handleSubscription(event: Stripe.Event) {
  if (!HAS_SUPABASE) return;
  const sub = event.data.object as unknown as StripeSubscription;
  const userId = sub.metadata?.user_id ?? (await lookupUserId(sub.customer));
  await syncSubscription(sub, userId);
}

async function handlePaymentFailed(event: Stripe.Event) {
  if (!HAS_SUPABASE) return;
  const invoice = event.data.object as {
    subscription?: string | null;
    customer?: string | null;
  };
  if (!invoice.subscription) return;

  const sub = (await getStripe().subscriptions.retrieve(
    invoice.subscription
  )) as unknown as StripeSubscription;
  const userId = sub.metadata?.user_id ?? (await lookupUserId(sub.customer));
  await syncSubscription(sub, userId);
}

/** Retrouve l'utilisateur à partir des métadonnées du client Stripe. */
async function lookupUserId(customerId: string): Promise<string | null> {
  try {
    const customer = await getStripe().customers.retrieve(customerId);
    return !('deleted' in customer) ? (customer.metadata?.user_id ?? null) : null;
  } catch {
    return null;
  }
}

/**
 * Écrit l'état réel de l'abonnement en base puis aligne `profiles.plan`.
 * Actif = active | trialing. Tous les autres statuts (past_due, canceled,
 * incomplete, unpaid…) laissent le compte en gratuit.
 */
async function syncSubscription(
  sub: StripeSubscription,
  userId: string | null | undefined
): Promise<void> {
  if (!userId) return;

  const admin = createSupabaseAdmin();
  const priceId = sub.items?.data?.[0]?.price?.id ?? null;
  const plan = planSlugForPriceId(priceId);
  const isActive = sub.status === 'active' || sub.status === 'trialing';

  await admin.from('subscriptions').upsert(
    {
      user_id: userId,
      plan,
      status: sub.status as SubscriptionRow['status'],
      stripe_customer_id: sub.customer,
      stripe_subscription_id: sub.id,
      price_id: priceId,
      current_period_start: sub.current_period_start
        ? new Date(sub.current_period_start * 1000).toISOString()
        : null,
      current_period_end: sub.current_period_end
        ? new Date(sub.current_period_end * 1000).toISOString()
        : null,
      cancel_at_period_end: sub.cancel_at_period_end === true,
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'stripe_subscription_id' }
  );

  await admin
    .from('profiles')
    .update({
      plan: isActive ? 'premium' : 'free',
      stripe_customer_id: sub.customer,
      updated_at: new Date().toISOString(),
    })
    .eq('id', userId);
}
