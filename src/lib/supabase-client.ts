/**
 * lib/supabase-client.ts — Client Supabase navigateur (client-safe).
 *
 * Isolé volontairement du module serveur (lib/supabase.ts) qui importe
 * `next/headers` : ce module doit pouvoir être importé depuis des
 * composants « use client » sans tirer de code serveur dans le bundle.
 */
'use client';

import { createBrowserClient } from '@supabase/ssr';
import type { TypedSupabase } from '@/lib/supabase';

export function createSupabaseBrowser(): TypedSupabase {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishable =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !publishable) {
    throw new Error(
      'Supabase non configuré : renseignez NEXT_PUBLIC_SUPABASE_URL et NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY.'
    );
  }
  return createBrowserClient<TypedSupabase>(url, publishable) as unknown as TypedSupabase;
}