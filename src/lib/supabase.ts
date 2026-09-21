/**
 * lib/supabase.ts — Clients Supabase typés, TOUS gardés par des garde-fous.
 * Sans variables d'environnement, les appels lèvent une erreur explicite au
 * moment de l'exécution (jamais au build).
 */
import { createBrowserClient } from '@supabase/ssr';
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
  premium: boolean;
  stripe_customer_id: string | null;
  created_at?: string;
  updated_at?: string;
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

/** Client navigateur (composants 'use client'). */
export function createSupabaseBrowser() {
  const url = requireEnv('NEXT_PUBLIC_SUPABASE_URL', 'Renseignez Supabase.');
  const anon = requireEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY', 'Clé "anon".');
  return createBrowserClient<Database>(url, anon);
}

/** Client serveur (Server Components / route handlers) via cookies. */
export function createSupabaseServer() {
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
          cookiesToSet.forEach(({ name, value, options }) =>
            store.set(name, value, options)
          );
        } catch {
          // Géré par la réponse côté middleware.
        }
      },
    },
  });
}

/** Client "service role" — réservé aux route handlers serveur (webhook). */
export function createSupabaseAdmin(): SupabaseClient<Database> {
  const url = requireEnv('NEXT_PUBLIC_SUPABASE_URL', 'Renseignez Supabase.');
  const roleKey = requireEnv('SUPABASE_SERVICE_ROLE_KEY', 'Clé "service_role".');
  return createClient<Database>(url, roleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

export type { SupabaseClient };

/** True quand Supabase est réellement branché. */
export { HAS_SUPABASE } from '@/lib/config';