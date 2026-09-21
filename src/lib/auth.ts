/**
 * lib/auth.ts — Session utilisateur (SERVER-ONLY : importe next/headers).
 *
 * Mode réel : Supabase Auth (getUser via cookies) + statut Premium vérifié
 * côté serveur depuis la table `profiles.plan` (synchronisée par le webhook
 * Stripe via `subscriptions`). Aucune valeur côté client n'est jamais fiable.
 *
 * Sans Supabase (développement/preview) : fallback cookie local silencieux.
 */
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { HAS_SUPABASE } from '@/lib/config';
import { createSupabaseServer, type ProfileRow, type SubscriptionRow } from '@/lib/supabase';

export type User = {
  id: string;
  name: string;
  email: string;
  premium: boolean;
  plan: 'free' | 'premium';
};

export type PlanStatus =
  | 'free'
  | 'active'
  | 'trialing'
  | 'past_due'
  | 'canceled'
  | 'incomplete';

export const COOKIE_USER = 'prep_user';
export const COOKIE_PREMIUM = 'prep_premium';

/** Read & parse du cookie de session locale de développement. */
function parseDevUser(raw: string | undefined): User | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<User>;
    if (!parsed.email) return null;
    return {
      id: parsed.id ?? `dev-${parsed.email}`,
      name: parsed.name ?? parsed.email.split('@')[0] ?? 'Étudiant',
      email: parsed.email,
      premium: parsed.premium === true,
      plan: parsed.premium === true ? 'premium' : 'free',
    };
  } catch {
    return null;
  }
}

/** Récupère l'utilisateur courant (Supabase si configuré, sinon développement). */
export async function getCurrentUser(): Promise<User | null> {
  if (HAS_SUPABASE) {
    try {
      const supabase = createSupabaseServer();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return null;

      // Statut Premium vérifié côté serveur (table profiles, synchro webhook).
      let plan: 'free' | 'premium' = 'free';
      const { data: profile } = await supabase
        .from('profiles')
        .select('plan')
        .eq('id', user.id)
        .maybeSingle();
      if (profile) plan = profile.plan;

      return {
        id: user.id,
        name: user.user_metadata?.['name'] ?? user.email?.split('@')[0] ?? 'Étudiant',
        email: user.email ?? '',
        premium: plan === 'premium',
        plan,
      };
    } catch (err) {
      console.error('[auth] Supabase getUser', err);
      return null;
    }
  }

  const store = cookies();
  const user = parseDevUser(store.get(COOKIE_USER)?.value);
  if (user && store.get(COOKIE_PREMIUM)?.value === 'true') {
    user.premium = true;
    user.plan = 'premium';
  }
  return user;
}

/** Requiert une session : redirige vers /login sinon. */
export async function requireUser(): Promise<User> {
  const user = await getCurrentUser();
  if (!user) redirect('/login');
  return user;
}

/** Vrai si l'utilisateur a un abonnement Premium actif. */
export function isPremium(user: User | null): boolean {
  return user?.premium === true;
}

/**
 * Abonnement Stripe de l'utilisateur (serveur uniquement).
 * Retourne normalisé pour l'affichage du tableau de bord compte.
 */
export async function getSubscriptionStatus(user: User | null): Promise<PlanStatus> {
  if (!user) return 'free';
  if (!HAS_SUPABASE) return user.plan === 'premium' ? 'active' : 'free';
  try {
    const supabase = createSupabaseServer();
    const { data } = await supabase
      .from('subscriptions')
      .select('status')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();
    return (data?.status as PlanStatus | undefined) ?? 'free';
  } catch {
    return 'free';
  }
}

/** Données d'abonnement complètes pour la page compte. */
export async function getSubscription(user: User): Promise<SubscriptionRow | null> {
  if (!HAS_SUPABASE) {
    return user.premium
      ? {
          id: 'dev',
          user_id: user.id,
          plan: 'premium_monthly',
          status: 'active',
          stripe_subscription_id: null,
          current_period_end: null,
        }
      : null;
  }
  const supabase = createSupabaseServer();
  const { data } = await supabase
    .from('subscriptions')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle();
  return (data as SubscriptionRow | null) ?? null;
}

/** Profil complet (champs cibles de l'élève) pour la page compte. */
export async function getProfile(user: User): Promise<ProfileRow | null> {
  if (!HAS_SUPABASE) {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      plan: user.plan,
      stripe_customer_id: null,
      target_exam: null,
      target_score: null,
      exam_date: null,
    };
  }
  const supabase = createSupabaseServer();
  const { data } = await supabase.from('profiles').select('*').eq('id', user.id).maybeSingle();
  return (data as ProfileRow | null) ?? null;
}