/**
 * lib/supabase.ts — Clients Supabase typés, TOUS gardés par des garde-fous.
 * Sans variables d'environnement, les appels lèvent une erreur explicite au
 * moment de l'exécution (jamais au build). La clé service_role n'est jamais
 * exposée au client : elle vit exclusivement côté serveur (webhook).
 */
import { createServerClient } from '@supabase/ssr';
import type { SetAllCookies } from '@supabase/ssr';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import { HAS_SUPABASE } from '@/lib/config';

// Types du schéma minimal utilisé par l'API (voir supabase/schema.sql).
// Chaque table utilisée est typée explicitement — aucun `any`.
export type ProfileRow = {
  id: string;
  email?: string | null;
  name?: string | null;
  plan: 'free' | 'premium';
  stripe_customer_id: string | null;
  target_exam: string | null;
  target_score: string | null;
  exam_date: string | null;
  preferences?: Record<string, unknown> | null;
  created_at?: string;
  updated_at?: string;
};

/** Statuts d'abonnement Stripe synchronisés (voir schema.sql). */
export type SubscriptionStatus =
  | 'incomplete'
  | 'incomplete_expired'
  | 'trialing'
  | 'active'
  | 'past_due'
  | 'canceled'
  | 'unpaid';

export type SubscriptionRow = {
  id: string;
  user_id: string;
  plan: 'premium_monthly' | 'premium_yearly';
  status: SubscriptionStatus;
  stripe_subscription_id: string | null;
  current_period_end: string | null;
  cancel_at_period_end?: boolean;
  created_at?: string;
  updated_at?: string;
};

export type UserProgressRow = {
  id: string;
  user_id: string;
  overall_band: number;
  questions_completed: number;
  accuracy: number;
  study_minutes: number;
  updated_at?: string;
};

export type StreakRow = {
  id: string;
  user_id: string;
  current_streak: number;
  longest_streak: number;
  last_active_at: string | null;
};

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: ProfileRow;
        Insert: Partial<ProfileRow> & Pick<ProfileRow, 'id'>;
        Update: Partial<ProfileRow>;
        Relationships: [];
      };
      subscriptions: {
        Row: SubscriptionRow;
        Insert: Partial<SubscriptionRow> & Pick<SubscriptionRow, 'user_id'>;
        Update: Partial<SubscriptionRow>;
        Relationships: [];
      };
      user_progress: {
        Row: UserProgressRow;
        Insert: Partial<UserProgressRow> & Pick<UserProgressRow, 'user_id'>;
        Update: Partial<UserProgressRow>;
        Relationships: [];
      };
      streaks: {
        Row: StreakRow;
        Insert: Partial<StreakRow> & Pick<StreakRow, 'user_id'>;
        Update: Partial<StreakRow>;
        Relationships: [];
      };
    };
    Views: {};
    Functions: {};
    Enums: {};
    CompositeTypes: {};
  };
};

function requireEnv(name: string, hint: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Variable manquante : ${name}. ${hint}`);
  return value;
}

/**
 * Versions typées de SupabaseClient. Le cast explicite est nécessaire car
 * @supabase/ssr expose des paramètres de type supplémentaires (NeverKeys…)
 * : le résultat est structurellement le même sans s'appuyer sur `any`.
 */
export type TypedSupabase = SupabaseClient<Database>;

/** Client serveur (Server Components / route handlers) via cookies. */
export function createSupabaseServer(): TypedSupabase {
  const url = requireEnv('NEXT_PUBLIC_SUPABASE_URL', 'Renseignez Supabase.');
  const anon = requireEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY', 'Clé "anon".');
  const store = cookies();
  return createServerClient<Database>(url, anon, {
    cookies: {
      getAll() {
        return store.getAll();
      },
      setAll(cookiesToSet: Parameters<SetAllCookies>[0]) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => store.set(name, value, options));
        } catch {
          // Géré par la réponse côté middleware.
        }
      },
    },
  }) as unknown as TypedSupabase;
}

/** Client "service role" — réservé aux route handlers serveur (webhook). */
export function createSupabaseAdmin(): TypedSupabase {
  const url = requireEnv('NEXT_PUBLIC_SUPABASE_URL', 'Renseignez Supabase.');
  const roleKey = requireEnv('SUPABASE_SERVICE_ROLE_KEY', 'Clé "service_role".');
  return createClient<Database>(url, roleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  }) as unknown as TypedSupabase;
}

export type { SupabaseClient };

/** True quand Supabase est réellement branché. */
export { HAS_SUPABASE } from '@/lib/config';