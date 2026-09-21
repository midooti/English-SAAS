/**
 * lib/analytics.ts — Points d'intégration SEO/analytics.
 *
 * Déclarations prêtes pour Google Search Console (vérification via metadata)
 * et Google Analytics (script injecté quand une mesure est fournie).
 *
 * Trois règles :
 * 1. Aucune donnée personnelle ne doit être envoyée dans les événements.
 * 2. Les événements sont des intentions produit (pas des données utilisateur).
 * 3. Sans ID configuré, tout est no-op (rien ne casse).
 */
export const analyticsConfigured = Boolean(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);

export const analyticsScript = analyticsConfigured
  ? `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`
  : null;

export type AnalyticsEvent =
  | 'diagnostic_started'
  | 'diagnostic_completed'
  | 'practice_question_answered'
  | 'signup_completed'
  | 'premium_checkout_started'
  | 'tool_used'
  | 'share_created';

/**
 * Envoi d'un événement anonyme (aucune donnée personnellement identifiable).
 * No-op tant que GA n'est pas configuré. Remplacera/préparera aussi
 * PostHog/Plausible à l'avenir.
 */
export function trackEvent(_event: AnalyticsEvent, _data?: Record<string, string | number>) {
  // Integration point — jamais de PII dans _data.
  if (!analyticsConfigured || typeof window === 'undefined') return;
  /* TODO GA4 :
   * window.gtag('event', _event, _data);
   */
}