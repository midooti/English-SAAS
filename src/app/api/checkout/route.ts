import { NextResponse, type NextRequest } from 'next/server';
import { getStripe, stripeConfigured, getPriceIdForPlan } from '@/lib/stripe';
import { PLANS, HAS_SUPABASE } from '@/lib/config';
import { getCurrentUser } from '@/lib/auth';
import { createSupabaseAdmin } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json().catch(() => ({}))) as { plan?: string };
    const slug = body.plan;
    if (!slug || !(slug in PLANS)) {
      return NextResponse.json({ error: 'Invalid plan.' }, { status: 400 });
    }

    if (!stripeConfigured) {
      return NextResponse.json(
        { error: 'STRIPE_NOT_CONFIGURED' },
        { status: 503 }
      );
    }

    const priceId = getPriceIdForPlan(slug as keyof typeof PLANS);
    if (!priceId) {
      return NextResponse.json(
        { error: 'STRIPE_PRICE_NOT_CONFIGURED' },
        { status: 503 }
      );
    }

    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 });
    }

    const stripe = getStripe();

    // Customer Stripe : réutilise l'ID en base si présent, sinon le crée.
    let customerId: string | null = null;
    if (HAS_SUPABASE) {
      try {
        const admin = createSupabaseAdmin();
        const { data } = await admin
          .from('profiles')
          .select('stripe_customer_id')
          .eq('id', user.id)
          .maybeSingle();
        customerId = data?.stripe_customer_id ?? null;
      } catch {
        customerId = null;
      }
    }

    if (!customerId) {
      const customer = await stripe.customers.create({
        email: user.email,
        name: user.name,
        metadata: {
          user_id: user.id,
          source: demoUserOnly(),
        },
      });
      customerId = customer.id;

      if (HAS_SUPABASE) {
        try {
          const admin = createSupabaseAdmin();
          await admin
            .from('profiles')
            .update({ stripe_customer_id: customerId })
            .eq('id', user.id);
        } catch {
          /* sauvegarde best-effort */
        }
      }
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      customer: customerId,
      line_items: [{ price: priceId, quantity: 1 }],
      metadata: { user_id: user.id, is_demo: demoUserOnly() },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'}/dashboard?checkout=success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'}/pricing?checkout=cancelled`,
      allow_promotion_codes: true,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('[checkout]', err);
    return NextResponse.json(
      { error: 'Unable to start checkout.' },
      { status: 500 }
    );
  }
}

function demoUserOnly(): string {
  return HAS_SUPABASE ? 'supabase' : 'demo';
}