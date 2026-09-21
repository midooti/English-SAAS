/**
 * lib/auth-client.ts — Authentification côté navigateur.
 *
 * Supabase configuré : vraie Auth Supabase (signInWithPassword, signUp,
 * resetPasswordForEmail, signOut sur le client navigateur Supabase). Le
 * statut Premium n'est JAMAIS déterminé ici : il est toujours vérifié côté
 * serveur (voir lib/auth.ts).
 *
 * Sans Supabase : fallback local discret (développement/preview) — aucun
 * libellé « démo » visible dans l'interface.
 */
'use client';

import { HAS_SUPABASE } from '@/lib/config';
import { createSupabaseBrowser } from '@/lib/supabase-client';

export const COOKIE_USER = 'prep_user';
export const COOKIE_PREMIUM = 'prep_premium';

function setCookie(name: string, value: string, days = 365) {
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${encodeURIComponent(value)};path=/;max-age=${maxAge};samesite=lax`;
}

function clearCookie(name: string) {
  document.cookie = `${name}=;path=/;max-age=0;samesite=lax`;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export type AuthResult = { user?: { id: string; name: string; email: string }; error?: string };

/** Création de compte (Supabase : signUp ; sinon cookie de développement). */
export async function signUp(email: string, password: string, name: string): Promise<AuthResult> {
  if (!isValidEmail(email)) return { error: 'Adresse e-mail invalide.' };

  if (HAS_SUPABASE) {
    try {
      const supabase = createSupabaseBrowser();
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { name: name.trim() || email.split('@')[0] } },
      });
      if (error) return { error: messageFor(error.message) };
      const active = data.session?.user ?? data.user;
      if (!active) {
        return { user: undefined, error: undefined };
      }
      return {
        user: {
          id: active.id,
          name: name.trim() || active.email?.split('@')[0] || 'Étudiant',
          email: active.email ?? email,
        },
      };
    } catch (err) {
      return { error: err instanceof Error ? err.message : 'Impossible de créer le compte.' };
    }
  }

  const user = { id: `dev-${email}`, name: name.trim() || email.split('@')[0] || 'Étudiant', email };
  setCookie(COOKIE_USER, JSON.stringify(user));
  setCookie(COOKIE_PREMIUM, 'false');
  return { user };
}

/** Connexion (Supabase : signInWithPassword ; sinon cookie de développement). */
export async function signIn(email: string, password: string): Promise<AuthResult> {
  if (!isValidEmail(email)) return { error: 'Adresse e-mail invalide.' };

  if (HAS_SUPABASE) {
    try {
      const supabase = createSupabaseBrowser();
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) return { error: messageFor(error.message) };
      const active = data.user;
      if (!active) return { error: 'Impossible de récupérer votre session.' };
      return {
        user: {
          id: active.id,
          name: (active.user_metadata?.['name'] as string | undefined) ?? active.email?.split('@')[0] ?? 'Étudiant',
          email: active.email ?? email,
        },
      };
    } catch (err) {
      return { error: err instanceof Error ? err.message : 'Connexion impossible.' };
    }
  }

  const user = { id: `dev-${email}`, name: email.split('@')[0] ?? 'Étudiant', email };
  setCookie(COOKIE_USER, JSON.stringify(user));
  setCookie(COOKIE_PREMIUM, 'false');
  return { user };
}

/** Déconnexion (Supabase : signOut ; sinon effacement du cookie local). */
export async function signOut(): Promise<void> {
  if (HAS_SUPABASE) {
    try {
      const supabase = createSupabaseBrowser();
      await supabase.auth.signOut();
    } catch {
      /* aucune action nécessaire */
    }
    return;
  }
  clearCookie(COOKIE_USER);
  clearCookie(COOKIE_PREMIUM);
}

/** Réinitialisation de mot de passe (Supabase : resetPasswordForEmail). */
export async function sendPasswordReset(email: string): Promise<{ error?: string }> {
  if (!isValidEmail(email)) return { error: 'Adresse e-mail invalide.' };
  if (HAS_SUPABASE) {
    try {
      const supabase = createSupabaseBrowser();
      const redirectTo = `${window.location.origin}/login?reset=1`;
      const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo });
      if (error) return { error: messageFor(error.message) };
      return {};
    } catch (err) {
      return { error: err instanceof Error ? err.message : 'Réinitialisation impossible.' };
    }
  }
  return {};
}

function messageFor(message: string): string {
  const lower = message.toLowerCase();
  if (lower.includes('invalid login credentials')) return 'Identifiants incorrects. Vérifiez votre e-mail et votre mot de passe.';
  if (lower.includes('already registered')) return 'Un compte existe déjà avec cette adresse e-mail.';
  if (lower.includes('password should be at least')) return 'Le mot de passe doit contenir au moins 6 caractères.';
  if (lower.includes('rate limit')) return 'Trop de tentatives. Réessayez dans quelques minutes.';
  if (lower.includes('email not confirmed')) return 'Adresse e-mail non confirmée : vérifiez votre boîte de réception.';
  return message;
}

export { HAS_SUPABASE };