'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Lock } from 'lucide-react';
import Button from '@/components/ui/button';

type Props = {
  title?: string;
  body?: string;
};

const benefits = [
  'Exercices illimités',
  'Examens blancs chronométrés',
  'Plan de préparation personnalisé',
  'Suivi de progression détaillé',
  'Correctifs et explications',
];

/**
 * Écran d'information après le plafond quotidien de la formule gratuite :
 * sobre, sans harcèlement, avec une issue claire (« je reviens demain »).
 */
export default function Paywall({
  title = 'Quota quotidien gratuit atteint.',
  body = 'Les 5 questions gratuites d\u2019aujourd\u2019hui sont passées. La formule Premium vous donne un accès illimité.',
}: Props) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="rounded-lg border border-brand-200 bg-brand-50/40 p-8 text-center dark:border-slate-800 dark:bg-slate-900">
      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-brand-700 text-white">
        <Lock className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-serif text-2xl tracking-tight text-ink dark:text-white">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-soft dark:text-slate-400">{body}</p>

      <ul className="mx-auto mt-6 grid max-w-md gap-2 text-left sm:grid-cols-2">
        {benefits.map((b) => (
          <li key={b} className="flex items-center gap-2 text-sm text-ink dark:text-slate-200">
            <Check className="h-4 w-4 shrink-0 text-brand-600 dark:text-brand-300" aria-hidden="true" />
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link href="/pricing" className="w-full sm:w-auto">
          <Button variant="primary" size="lg" className="w-full sm:w-auto">
            Découvrir Premium
          </Button>
        </Link>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="w-full rounded-lg px-5 py-3 text-sm font-semibold text-ink-faint transition hover:text-ink sm:w-auto dark:text-slate-400 dark:hover:text-white"
        >
          Je reviens demain
        </button>
      </div>
    </div>
  );
}