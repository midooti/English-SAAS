'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Lock, Sparkles } from 'lucide-react';
import Button from '@/components/ui/button';

type Props = {
  title?: string;
  body?: string;
};

const benefits = [
  'Unlimited exercises',
  'Full mock tests',
  'Personalized study plan',
  'AI Coach',
  'Advanced analytics',
  'Writing feedback',
  'Speaking feedback',
];

/**
 * Paywall élégant et non-agressif : explique le plafond gratuit puis propose
 * Premium, avec une sortie claire ("Continue tomorrow").
 */
export default function Paywall({
  title = "You've reached today's free limit.",
  body = 'Unlock unlimited preparation with ScoreUp Premium.',
}: Props) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 to-accent-50 p-8 text-center dark:border-slate-800 dark:from-slate-900 dark:to-slate-900">
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-lift">
        <Lock className="h-6 w-6" />
      </span>
      <h3 className="mt-5 text-2xl font-extrabold text-slate-900 dark:text-white">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-slate-600 dark:text-slate-300">{body}</p>

      <ul className="mx-auto mt-6 grid max-w-md gap-2 text-left sm:grid-cols-2">
        {benefits.map((b) => (
          <li key={b} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
            <Check className="h-4 w-4 shrink-0 text-brand-500" />
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link href="/pricing" className="w-full sm:w-auto">
          <Button variant="accent" size="lg" className="w-full sm:w-auto">
            <Sparkles className="h-4 w-4" />
            Unlock Premium
          </Button>
        </Link>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="w-full rounded-xl px-5 py-3 text-sm font-semibold text-slate-500 transition hover:text-slate-700 sm:w-auto dark:text-slate-400"
        >
          Continue tomorrow
        </button>
      </div>
    </div>
  );
}