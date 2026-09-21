import Link from 'next/link';
import { Lock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { MockTest } from '@/lib/mockTests';

const difficultyLabels = {
  easy: 'Facile',
  medium: 'Intermédiaire',
  hard: 'Difficile',
} as const;

export default function MockTestCard({ test }: { test: MockTest }) {
  const title = `${test.exam.toUpperCase()} — Examen blanc n\u00B0${test.number}`;

  return (
    <Card className="group flex flex-col p-6 transition hover:-translate-y-1 hover:shadow-lift">
      <div className="flex items-center justify-between">
        <Badge variant={test.premium ? 'accent' : 'success'}>
          {test.premium ? 'Premium' : 'Gratuit'}
        </Badge>
        <Badge variant="neutral">{difficultyLabels[test.difficulty]}</Badge>
      </div>

      <h3 className="mt-5 font-serif text-xl tracking-tight text-ink dark:text-white">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft dark:text-slate-400">
        {test.description}
      </p>

      <dl className="mt-5 space-y-1.5 text-sm text-ink-soft dark:text-slate-400">
        <div className="flex items-center justify-between gap-4">
          <dt className="micro-label">Durée</dt>
          <dd className="font-semibold text-ink dark:text-slate-200">{test.durationMin} min</dd>
        </div>
        <div className="flex items-center justify-between gap-4">
          <dt className="micro-label">Questions</dt>
          <dd className="font-semibold text-ink dark:text-slate-200">{test.totalQuestions}</dd>
        </div>
      </dl>

      <Link
        href={`/mock-tests/${test.slug}`}
        className={cn(
          'mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition',
          test.premium
            ? 'border border-slate-300 bg-white text-ink hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100'
            : 'bg-brand-700 text-white shadow-sm hover:bg-brand-800'
        )}
      >
        {test.premium && <Lock className="h-4 w-4" />}
        {test.premium ? 'Débloquer avec Premium' : "Lancer l'examen blanc"}
      </Link>
    </Card>
  );
}