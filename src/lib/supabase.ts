/**
 * lib/supabase.ts — Clients Supabase typés, TOUS gardés par des garde-fous.
 * Sans variables d'environnement, les appels lèvent une erreur explicite au
 * moment de l'exécution (jamais au build).
 */
import { createBrowserClient } from '@supabase/ssr';
import { createServerClient } from '@supabase/ssr';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import { HAS_SUPABASE } from '@/lib/config';

// Types génériques minimalistes du schéma (voir supabase/schema.sql).
export type Tables = {
  public: {
    Tables: any;
  };
};

function requireEnv(name: string, hint: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Variable manquante : ${name}. ${hint}`);
  return value;
}

/** Client navigateur (composants 'use client'). */
export function createSupabaseBrowser(): SupabaseClient<Tables> {
  const url = requireEnv('NEXT_PUBLIC_SUPABASE_URL', 'Renseignez Supabase.');
  const anon = requireEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY', 'Clé "anon".');
  return createBrowserClient<Tables>(url, anon);
}

/** Client serveur (Server Components / route handlers) via cookies. */
export function createSupabaseServer(): SupabaseClient<Tables> {
  const url = requireEnv('NEXT_PUBLIC_SUPABASE_URL', 'Renseignez Supabase.');
  const anon = requireEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY', 'Clé "anon".');
  const store = cookies();
  return createServerClient<Tables>(url, anon, {
    cookies: {
      getAll() {
        return store.getAll();
      },
      setAll(cookiesToSet) {
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
export function createSupabaseAdmin(): SupabaseClient<Tables> {
  const url = requireEnv('NEXT_PUBLIC_SUPABASE_URL', 'Renseignez Supabase.');
  const roleKey = requireEnv('SUPABASE_SERVICE_ROLE_KEY', 'Clé "service_role".');
  return createClient<Tables>(url, roleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

export type { SupabaseClient };

/** True quand Supabase est réellement branché. */
export { HAS_SUPABASE } from '@/lib/config';