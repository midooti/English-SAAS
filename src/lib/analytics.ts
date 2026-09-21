/**
 * lib/analytics.ts — Google Analytics 4 (anonyme) + vérification Search Console.
 *
 * Règles de confidentialité :
 * 1. Aucune donnée personnelle ne doit jamais être envoyée (pas d'emails, de
 *    mots de passe, de contenu utilisateur ni d'information de paiement).
 * 2. Les événements sont des intentions produit anonymes.
 * 3. Sans NEXT_PUBLIC_GA_ID (ou NEXT_PUBLIC_GA_MEASUREMENT_ID hérité),
 *    tout devient un no-op : rien n'est chargé, rien ne casse.
 */
import { GA_ID } from '@/lib/config';

export const analyticsConfigured = Boolean(GA_ID);

/** URL du script GA4 (servi uniquement si un ID est renseigné). */
export const analyticsScript = analyticsConfigured
  ? `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`
  : null;

/** Bloc d'initialisation gtag inline (pastillé dans <head> via Script). */
export function gtagInitInline(): string {
  return `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{send_page_view:true,anonymize_ip:true});`;
}

export type AnalyticsEvent =
  | 'diagnostic_started'
  | 'diagnostic_completed'
  | 'signup_completed'
  | 'login_completed'
  | 'practice_started'
  | 'practice_completed'
  | 'vocabulary_started'
  | 'mock_test_started'
  | 'pricing_viewed'
  | 'checkout_started'
  | 'subscription_started'
  | 'tool_used'
  | 'share_created';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Envoie un événement GA4 anonyme. No-op si GA n'est pas configuré ou si on
 * n'est pas dans le navigateur. Ne passer que des données non personnelles.
 */
export function trackEvent(event: AnalyticsEvent, data?: Record<string, string | number>) {
  if (!analyticsConfigured || typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }
  window.gtag('event', event, data ?? {});
}