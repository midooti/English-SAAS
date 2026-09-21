/**
 * src/i18n/config.ts — Préparation multi-langue (pas d'implémentation immédiate).
 *
 * Architecture future : /en/, /fr/, /es/, /ar/ avec hreflang correct.
 * Règle : ne PAS dupliquer tout le site maintenant ; ce module pose les
 * conventions pour que la bascule soit faisable sans refonte.
 */

export const locales = ['en', 'fr', 'es', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

/** Chemin localisé (futur). Non utilisé tant que /fr/ etc. ne sont pas créés. */
export function localizePath(path: string, locale: Locale = defaultLocale): string {
  if (locale === defaultLocale) return path.startsWith('/') ? path : `/${path}`;
  return `/${locale}${path.startsWith('/') ? path : `/${path}`}`;
}