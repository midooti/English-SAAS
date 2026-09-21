import { NextResponse, type NextRequest } from 'next/server';
import { getStripe, stripeConfigured } from '@/lib/stripe';
import { getCurrentUser } from '@/lib/auth';
import { HAS_SUPABASE } from '@/lib/config';
import { createSupabaseAdmin } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function POST(_req: NextRequest) {
  try {
    if (!stripeConfigured) {
      return NextResponse.json(
        { error: 'Les paiements en ligne ne sont pas encore activés.' },
        { status: 503 }
      );
    }

    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: 'Non authentifié.' }, { status: 401 });
    }

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
      return NextResponse.json(
        { error: 'Aucun abonnement actif pour ce compte.' },
        { status: 400 }
      );
    }

    const stripe = getStripe();
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${baseUrl}/account`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('[portal]', err);
    return NextResponse.json(
      { error: 'Impossible d\u2019ouvrir l\u2019espace de gestion.' },
      { status: 500 }
    );
  }
}