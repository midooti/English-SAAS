/**
 * config.ts — Constantes centrales (client-safe : uniquement des NEXT_PUBLIC_).
 */
export const SITE_NAME = process.env.NEXT_PUBLIC_APP_NAME ?? 'ScoreUp';

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
).replace(/\/$/, '');

export const SITE_TAGLINE = 'Get the English score you need.';

export const SITE_DESCRIPTION =
  'Personalized preparation for TOEFL, TOEIC, IELTS and more. Practice smarter, track your progress, and reach your target score.';

/** Plans d'abonnement (Stripe-ready). Les priceId restent vides sans clés. */
export const PLANS = {
  premium_monthly: {
    slug: 'premium_monthly',
    name: 'Monthly',
    price: 9.99,
    priceId: process.env.NEXT_PUBLIC_STRIPE_PREMIUM_MONTHLY_PRICE_ID ?? '',
  },
  premium_yearly: {
    slug: 'premium_yearly',
    name: 'Yearly',
    price: 59.99,
    priceId: process.env.NEXT_PUBLIC_STRIPE_PREMIUM_YEARLY_PRICE_ID ?? '',
  },
} as const;

export type PlanSlug = keyof typeof PLANS;

/** Supabase configuré ? Sinon, l'app bascule en mode démo (aucune casse). */
export const HAS_SUPABASE = Boolean(
  process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

/** Nombre maximum de questions gratuites par jour (paywall freemium). */
export const FREE_DAILY_LIMIT = 5;

/** XP obtenu par une bonne réponse. */
export const XP_PER_CORRECT = 20;