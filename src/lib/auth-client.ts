/**
 * lib/auth-client.ts — Session côté navigateur (mode démo).
 *
 * En mode démo (pas de Supabase configuré), la session est une simple
 * valeur de cookie. Le flux réel (Supabase) est pré-câblé mais désactivé.
 */
'use client';

import { HAS_SUPABASE } from '@/lib/config';

export const COOKIE_USER = 'scoreup_user';
export const COOKIE_PREMIUM = 'scoreup_premium';

function setCookie(name: string, value: string, days = 365) {
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${encodeURIComponent(value)};path=/;max-age=${maxAge};samesite=lax`;
}

function clearCookie(name: string) {
  document.cookie = `${name}=;path=/;max-age=0;samesite=lax`;
}

export type DemoUser = {
  id: string;
  name: string;
  email: string;
};

/** Crée une session démo (mot de passe ignoré — prévu pour Supabase Auth). */
export async function demoSignIn(
  email: string,
  name?: string,
  _password?: string
): Promise<{ user?: DemoUser; error?: string }> {
  if (HAS_SUPABASE) {
    // TODO: déléguer à supabase.auth.signInWithPassword / signInWithOtp
    return { error: 'Supabase configuré : branchez la méthode Supabase Auth.' };
  }

  const valid =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length >= 5;

  if (!valid) {
    return { error: 'Adresse email invalide.' };
  }

  const safeName = name?.trim() || email.split('@')[0] || 'Student';
  const user: DemoUser = { id: `demo-${email}`, name: safeName, email };

  setCookie(COOKIE_USER, JSON.stringify(user));
  setCookie(COOKIE_PREMIUM, 'false');
  return { user };
}

/** Supprime la session démo. */
export function demoSignOut() {
  clearCookie(COOKIE_USER);
  clearCookie(COOKIE_PREMIUM);
}

/** Basculer en Premium de démonstration (uniquement en mode démo). */
export function setDemoPremium(value: boolean) {
  setCookie(COOKIE_PREMIUM, value ? 'true' : 'false');
}

export { HAS_SUPABASE };