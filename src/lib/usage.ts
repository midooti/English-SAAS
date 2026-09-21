/**
 * lib/usage.ts — Compteur gratuit quotidien (freemium), côté navigateur.
 * Respecte le mode Premium (cookie scoreup_premium=true => aucun plafond).
 */
'use client';

import { useEffect, useState } from 'react';
import { FREE_DAILY_LIMIT } from '@/lib/config';

const KEY = 'scoreup_usage';

type Usage = { date: string; count: number };

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

export function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function isPremium() {
  try {
    return document.cookie.includes('scoreup_premium=true');
  } catch {
    return false;
  }
}

/** Renvoie l'état du quota gratuit (rechargé 1 fois par jour). */
export function useUsageLimit() {
  const [usage, setUsage] = useState<Usage>({ date: today(), count: 0 });

  useEffect(() => {
    setUsage(read());
  }, []);

  const premium = isPremium();
  const remaining = Math.max(0, FREE_DAILY_LIMIT - usage.count);
  const consumed = premium ? 0 : usage.count;
  const atLimit = !premium && usage.count >= FREE_DAILY_LIMIT;

  function consume() {
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