'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { createSupabaseBrowser } from '@/lib/supabase-client';
import { HAS_SUPABASE } from '@/lib/config';

/**
 * Session utilisateur côté navigateur.
 * - Supabase configuré : vraie session Supabase (getSession + listener).
 * - Sans Supabase (développement/preview) : cookie local silencieux
 *   (aucun libellé « démo » visible) pour que le parcours reste navigable.
 */
type SessionUser = { id: string; name: string; email: string } | null;

export const COOKIE_USER = 'prep_user';

function readCookieUser(): SessionUser {
  try {
    const raw = document.cookie
      .split('; ')
      .find((c) => c.startsWith(`${COOKIE_USER}=`))
      ?.split('=')[1];
    if (!raw) return null;
    const parsed = JSON.parse(decodeURIComponent(raw)) as { id?: string; name?: string; email?: string };
    if (!parsed.email) return null;
    return {
      id: parsed.id ?? `dev-${parsed.email}`,
      name: parsed.name ?? parsed.email.split('@')[0],
      email: parsed.email,
    };
  } catch {
    return null;
  }
}

const SessionContext = createContext<{ user: SessionUser; loading: boolean }>({
  user: null,
  loading: true,
});

export function useUser() {
  return useContext(SessionContext);
}

export default function AppProviders({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<SessionUser>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Thème (mode clair par défaut).
    const saved = localStorage.getItem('prep_theme');
    const root = document.documentElement;
    const initial: 'light' | 'dark' =
      saved === 'dark' ? 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    root.classList.toggle('dark', initial === 'dark');

    if (!HAS_SUPABASE) {
      setUser(readCookieUser());
      setLoading(false);
      return;
    }

    const supabase = createSupabaseBrowser();
    let cancelled = false;

    async function load() {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (cancelled) return;
      const active = session?.user;
      setUser(
        active
          ? {
              id: active.id,
              name: (active.user_metadata?.['name'] as string | undefined) ?? active.email?.split('@')[0] ?? 'Étudiant',
              email: active.email ?? '',
            }
          : null
      );
      setLoading(false);
    }

    load();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      const active = session?.user;
      setUser(
        active
          ? {
              id: active.id,
              name: (active.user_metadata?.['name'] as string | undefined) ?? active.email?.split('@')[0] ?? 'Étudiant',
              email: active.email ?? '',
            }
          : null
      );
    });

    return () => {
      cancelled = true;
      subscription.unsubscribe();
    };
  }, []);

  return <SessionContext.Provider value={{ user, loading }}>{children}</SessionContext.Provider>;
}