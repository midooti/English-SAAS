/**
 * lib/auth.ts — Session utilisateur (SERVER-ONLY : importe next/headers).
 *
 * Mode réel : Supabase (getUser via cookies).
 * Mode démo  : cookie signé localement (aucun backend requis pour démo/preview).
 *
 * La bascule est automatique : dès que NEXT_PUBLIC_SUPABASE_URL est renseigné,
 * le code Supabase prend le relais. Rien n'est cassé sans clés.
 */
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { HAS_SUPABASE } from '@/lib/config';
import { createSupabaseServer } from '@/lib/supabase';

export type User = {
  id: string;
  name: string;
  email: string;
  premium: boolean;
};

export const COOKIE_USER = 'scoreup_user';
export const COOKIE_PREMIUM = 'scoreup_premium';

/** Read & parse du cookie de session démo (toujours sans erreur). */
export function parseDemoUser(raw: string | undefined): User | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<User>;
    if (!parsed.email) return null;
    const user: User = {
      id: parsed.id ?? `demo-${parsed.email}`,
      name: parsed.name ?? parsed.email.split('@')[0] ?? 'Student',
      email: parsed.email,
      premium: parsed.premium === true,
    };
    return user;
  } catch {
    return null;
  }
}

/** Récupère l'utilisateur courant (Supabase si configuré, sinon démo). */
export async function getCurrentUser(): Promise<User | null> {
  if (HAS_SUPABASE) {
    try {
      const supabase = createSupabaseServer();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return null;
      return {
        id: user.id,
        name: user.user_metadata?.['name'] ?? user.email?.split('@')[0] ?? 'Student',
        email: user.email ?? '',
        premium: false, // refresh via getPremium() ou la table profiles
      };
    } catch (err) {
      console.error('[auth] Supabase getUser', err);
      return null;
    }
  }

  const store = cookies();
  const user = parseDemoUser(store.get(COOKIE_USER)?.value);
  if (user && store.get(COOKIE_PREMIUM)?.value === 'true') {
    user.premium = true;
  }
  return user;
}

/** Requiert une session : redirige vers /login sinon. */
export async function requireUser(): Promise<User> {
  const user = await getCurrentUser();
  if (!user) redirect('/login');
  return user;
}