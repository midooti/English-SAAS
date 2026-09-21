import { NextResponse, type NextRequest } from 'next/server';
import { getStripe, stripeConfigured, getPriceIdForPlan } from '@/lib/stripe';
import { PLANS_BY_SLUG, HAS_SUPABASE, type PlanSlug } from '@/lib/config';
import { getCurrentUser } from '@/lib/auth';
import { createSupabaseAdmin } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

function baseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json().catch(() => ({}))) as { plan?: string };
    const slug = body.plan;
    if (!slug || !(slug in PLANS_BY_SLUG)) {
      return NextResponse.json({ error: 'Formule inconnue.' }, { status: 400 });
    }

    if (!stripeConfigured) {
      return NextResponse.json(
        { error: 'Les paiements en ligne ne sont pas encore activés.' },
        { status: 503 }
      );
    }

    const planSlug = slug as PlanSlug;
    const priceId = getPriceIdForPlan(planSlug);
    if (!priceId) {
      return NextResponse.json(
        { error: 'Le tarif de cette formule n\u2019est pas configuré.' },
        { status: 503 }
      );
    }

    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: 'Non authentifié.' }, { status: 401 });
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
        metadata: { user_id: user.id },
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
      metadata: { user_id: user.id, plan: planSlug },
      success_url: `${baseUrl()}/dashboard?checkout=success`,
      cancel_url: `${baseUrl()}/pricing?checkout=cancelled`,
      allow_promotion_codes: true,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('[checkout]', err);
    return NextResponse.json(
      { error: 'Impossible de lancer la souscription. Réessayez dans quelques instants.' },
      { status: 500 }
    );
  }
}