'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { applyTheme } from '@/components/ThemeToggle';

type DemoUser = { name: string; email: string } | null;

/** Lit le cookie de session démo côté client (aucun appel réseau). */
export function useDemoUser(): { user: DemoUser; loading: boolean } {
  const [user, setUser] = useState<DemoUser>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const raw = document.cookie
      .split('; ')
      .find((c) => c.startsWith('scoreup_user='))
      ?.split('=')[1];
    if (!raw) {
      setLoading(false);
      return;
    }
    try {
      setUser(JSON.parse(decodeURIComponent(raw)) as DemoUser);
    } catch {
      /* cookie corrompu : session démo ignorée */
    }
    setLoading(false);
  }, []);

  return { user, loading };
}

/** Initialise le thème au montage (anti-flash de flash). */
export default function AppProviders({ children }: { children: ReactNode }) {
  useEffect(() => {
    const saved = localStorage.getItem('scoreup_theme');
    applyTheme(saved === 'dark' ? 'dark' : 'light');
  }, []);

  return <>{children}</>;
}