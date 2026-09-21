/**
 * config.ts — Constantes centrales Prep-Anglais (client-safe : uniquement
 * des variables NEXT_PUBLIC_ ou de simples chaînes).
 */

/** Marque unique : Prep-Anglais. Ne jamais modifier. */
export const SITE_NAME = 'Prep-Anglais';

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
).replace(/\/$/, '');

export const SITE_TAGLINE = 'Préparation aux examens d\'anglais';

export const SITE_DESCRIPTION =
  'Plateforme académique de préparation aux examens d\'anglais : TOEFL, TOEIC, IELTS, ' +
  'Cambridge English et Duolingo English Test. Diagnostic, exercices, vocabulaire, ' +
  'examens blancs et suivi de progression. Scores estimés, jamais officiels.';

/** Email de contact affiché publiquement. */
export const CONTACT_EMAIL = 'contact@prep-anglais.fr';

/** Devise affichée publiquement (paramètre d'abonnement Stripe). */
export type Currency = 'EUR' | 'USD' | 'GBP';
export const CURRENCY: Currency =
  ((process.env.NEXT_PUBLIC_CURRENCY ?? 'EUR') as Currency) ?? 'EUR';

export type PlanSlug = 'premium_monthly' | 'premium_yearly';

export type Plan = {
  slug: PlanSlug;
  name: string;
  description: string;
  monthlyPrice: number;
  billingPeriodLabel: string;
  features: string[];
  bestValue: boolean;
  ctaLabel: string;
  /**
   * id de Price Stripe — lu dans l'ordre : NEXT_PUBLIC_... puis
   * STRIPE_PRICE_MONTHLY / STRIPE_PRICE_YEARLY (production). Jamais inventé.
   */
  priceId: string;
};

const PLANS_RAW: Omit<Plan, 'priceId'>[] = [
  {
    slug: 'premium_monthly',
    name: 'Premium mensuel',
    description: 'Pour un objectif à court terme et une préparation soutenue.',
    monthlyPrice: 9.99,
    billingPeriodLabel: '/ mois',
    features: [
      'Exercices illimités',
      'Examens blancs complets',
      'Corrigés et explications détaillés',
      'Suivi de progression complet',
      'Annulable à tout moment',
    ],
    bestValue: false,
    ctaLabel: 'Souscrire au plan mensuel',
  },
  {
    slug: 'premium_yearly',
    name: 'Premium annuel',
    description: 'Le meilleur rapport pour une préparation sur toute l\u2019année.',
    monthlyPrice: 59.99,
    billingPeriodLabel: '/ an',
    features: [
      'Tout le plan mensuel',
      'Économie d\u2019environ 50 % sur l\u2019année',
      'Accès prioritaire aux nouveaux examens',
      'Plan de préparation personnalisé',
    ],
    bestValue: true,
    ctaLabel: 'Souscrire au plan annuel',
  },
];

export const PLANS: Plan[] = PLANS_RAW.map((plan) => ({
  ...plan,
  priceId:
    plan.slug === 'premium_monthly'
      ? (process.env.NEXT_PUBLIC_STRIPE_PREMIUM_MONTHLY_PRICE_ID ??
        process.env.STRIPE_PRICE_MONTHLY ??
        '')
      : (process.env.NEXT_PUBLIC_STRIPE_PREMIUM_YEARLY_PRICE_ID ??
        process.env.STRIPE_PRICE_YEARLY ??
        ''),
}));

export const PLANS_BY_SLUG: Record<PlanSlug, Plan> = {
  premium_monthly: PLANS[0],
  premium_yearly: PLANS[1],
};

export const FREE_PLAN = {
  slug: 'free',
  name: 'Formule gratuite',
  price: 0,
  summary: 'Le diagnostic et les premiers exercices sont gratuits, sans carte bancaire.',
  features: [
    '5 questions gratuites par jour',
    'Diagnostic de niveau gratuit',
    'Corrigés et explications',
    'Vocabulaire et cartes mémoire',
    'Scores estimés à titre indicatif',
  ],
} as const;

/** Supabase configuré ? */
export const HAS_SUPABASE = Boolean(
  process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

/**
 * Nombre maximum de questions gratuites par jour (freemium, plafond quotidien).
 * Les utilisateurs Premium n'ont aucune limite.
 */
export const FREE_DAILY_LIMIT = 5;

/** XP obtenu pour une bonne réponse. */
export const XP_PER_CORRECT = 20;

/** Google Analytics 4 — chargé uniquement si un ID publique est fourni. */
export const GA_ID = (
  process.env.NEXT_PUBLIC_GA_ID ?? process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? ''
).trim();

/** Google Search Console — token de vérification (absent => aucun tag rendu). */
export const GSC_VERIFICATION = (
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ??
  process.env.NEXT_PUBLIC_GSC_VERIFICATION ??
  ''
).trim();