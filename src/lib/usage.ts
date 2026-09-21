/**
 * lib/usage.ts — Compteur gratuit quotidien (freemium), côté navigateur.
 *
 * Le statut Premium vient du SERVEUR (prop passée par la page) — jamais
 * d'un cookie client : seul le plafond quotidien de la formule gratuite est
 * compté localement pour éviter un écran de connexion à chaque question.
 */
'use client';

import { useEffect, useState } from 'react';
import { FREE_DAILY_LIMIT } from '@/lib/config';

const KEY = 'prep_usage_daily';

type Usage = { date: string; count: number };

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function read(): Usage {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { date: today(), count: 0 };
    const parsed = JSON.parse(raw) as Usage;
    if (parsed.date !== today()) return { date: today(), count: 0 };
    return parsed;
  } catch {
    return { date: today(), count: 0 };
  }
}

export function useUsageLimit(premium = false) {
  const [usage, setUsage] = useState<Usage>({ date: today(), count: 0 });

  useEffect(() => {
    setUsage(read());
  }, []);

  const remaining = Math.max(0, FREE_DAILY_LIMIT - usage.count);
  const consumed = premium ? 0 : usage.count;
  const atLimit = !premium && usage.count >= FREE_DAILY_LIMIT;

  function consume() {
    if (premium) return;
    setUsage((prev) => {
      const next = { date: today(), count: (prev.date === today() ? prev.count : 0) + 1 };
      try {
        localStorage.setItem(KEY, JSON.stringify(next));
      } catch {
        /* storage indisponible */
      }
      return next;
    });
  }

  return { remaining, consumed, atLimit, consume, premium, limit: FREE_DAILY_LIMIT };
}

export type { Usage };