import type { NextRequest } from 'next/server';
import { handleStripeWebhook } from '@/lib/stripe-webhook';

export const dynamic = 'force-dynamic';

/**
 * Webhook Stripe canonique : POST /api/stripe/webhook
 * Configurer cette URL dans le dashboard Stripe (événements abonnements).
 */
export async function POST(req: NextRequest) {
  return handleStripeWebhook(req);
}
