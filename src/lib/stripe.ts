/**
 * lib/stripe.ts — Client Stripe paresseux + indicateur de configuration.
 * Le module reste inoffensif au build même si STRIPE_SECRET_KEY est absente.
 */
import Stripe from 'stripe';
import { PLANS } from '@/lib/config';

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

/**
 * Retourne l'ID de Price Stripe d'un plan, ou null s'il n'est pas configuré.
 */
export function getPriceIdForPlan(slug: keyof typeof PLANS) {
  const config = PLANS[slug];
  return config.priceId || null;
}