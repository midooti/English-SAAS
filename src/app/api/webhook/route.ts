import { NextResponse, type NextRequest } from 'next/server';
import { getStripe, stripeConfigured } from '@/lib/stripe';
import { HAS_SUPABASE } from '@/lib/config';
import { createSupabaseAdmin } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

// Sans Stripe configuré, le webhook ignore les appels (rien à synchroniser).
export async function POST(req: NextRequest) {
  if (!stripeConfigured) {
    return NextResponse.json({ received: true, ignored: true });
  }

  const signature = req.headers.get('stripe-signature');
  if (!signature) {
    return NextResponse.json({ error: 'Missing signature.' }, { status: 400 });
  }

  const rawBody = await req.text();
  let event;

  try {
    const stripe = getStripe();
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (!webhookSecret) {
      return NextResponse.json(
        { error: 'STRIPE_WEBHOOK_SECRET not set.' },
        { status: 503 }
      );
    }
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (err) {
    console.error('[webhook] signature', err);
    return NextResponse.json(
      { error: 'Invalid signature.' },
      { status: 400 }
    );
  }

  const object = event.data?.object;
  const userId =
    object && 'metadata' in object && typeof object.metadata === 'object' && object.metadata !== null
      ? (object.metadata.user_id ?? null)
      : null;

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as { metadata?: { user_id?: string } };
      await setPremium(session.metadata?.user_id ?? null, true);
      break;
    }
    case 'customer.subscription.updated':
    case 'customer.subscription.deleted':
    case 'invoice.payment_failed': {
      await setPremium(userId, false);
      break;
    }
    default:
      break;
  }

  return NextResponse.json({ received: true });
}

/**
 * Met à jour le statut premium de l'utilisateur.
 * - Supabase branché : écrit dans profiles (via service role).
 * - Mode démo : rien à persister côté serveur (cookie navigateur).
 */
async function setPremium(userId: string | null, premium: boolean) {
  if (!userId || !HAS_SUPABASE) return;
  try {
    const admin = createSupabaseAdmin();
    await admin.from('profiles').upsert(
      { id: userId, premium, updated_at: new Date().toISOString() },
      { onConflict: 'id' }
    );
  } catch (err) {
    console.error('[webhook] setPremium', err);
  }
}