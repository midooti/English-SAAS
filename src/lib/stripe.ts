/**
 * lib/stripe.ts — Client Stripe paresseux + indicateur de configuration.
 * Le module reste inoffensif au build même si STRIPE_SECRET_KEY est absente.
 *
 * SERVER-ONLY : STRIPE_SECRET_KEY et les Price IDs ne sont jamais exposés au
 * navigateur (aucune variable NEXT_PUBLIC_ ici).
 */
import Stripe from 'stripe';
import type { PlanSlug } from '@/lib/config';

let cached: Stripe | null = null;

export const stripeConfigured = Boolean(process.env.STRIPE_SECRET_KEY);

export function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error(
      'Stripe non configuré : STRIPE_SECRET_KEY manquante. Voir README.'
    );
  }
  if (!cached) cached = new Stripe(key, { apiVersion: '2024-06-20' });
  return cached;
}

/** Price IDs (jamais codés en dur, jamais exposés au client). */
export const PRICE_MONTHLY = process.env.STRIPE_PRICE_MONTHLY ?? '';
export const PRICE_YEARLY = process.env.STRIPE_PRICE_YEARLY ?? '';

/**
 * Retourne l'ID de Price Stripe d'un plan, ou null s'il n'est pas configuré.
 */
export function getPriceIdForPlan(slug: PlanSlug): string | null {
  const id = slug === 'premium_yearly' ? PRICE_YEARLY : PRICE_MONTHLY;
  return id || null;
}

/** Détermine le slug de plan à partir d'un Price ID Stripe. */
export function planSlugForPriceId(priceId: string | null | undefined): PlanSlug {
  return priceId && priceId === PRICE_YEARLY ? 'premium_yearly' : 'premium_monthly';
}