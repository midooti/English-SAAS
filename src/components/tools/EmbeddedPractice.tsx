'use client';

import { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import QuestionCard from '@/components/QuestionCard';
import Button from '@/components/ui/button';
import { getMcQuestions, type Question } from '@/lib/questions';
import { trackEvent } from '@/lib/analytics';

/**
 * Mini entraînement public indexable (landing /practice/*).
 * 3 questions gratuites et illimitées, aucun compte, aucune donnée privée.
 */
export default function EmbeddedPractice({
  exam,
  skill,
  count = 3,
}: {
  exam: 'toefl' | 'toeic';
  skill: 'reading' | 'listening' | 'vocabulary';
  count?: number;
}) {
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);

  const questions = useMemo<Question[]>(() => {
    const pool = getMcQuestions(exam, skill);
    return pool.sort(() => Math.random() - 0.5).slice(0, count);
  }, [exam, skill, count]);

  if (done) {
    return (
      <div className="rounded-lg border border-slate-200 bg-white p-8 text-center shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <p className="font-serif text-5xl tracking-tight text-brand-700 dark:text-brand-300">
          {correct}/{questions.length}
        </p>
        <p className="mt-2 text-sm text-ink-soft dark:text-slate-400">
          {correct === count
            ? 'Parfait — vos compétences sont en excellente forme.'
            : 'Un bon départ. La bibliothèque d\u2019entraînement complète travaille précisément ce type de questions.'}
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/diagnostic">
            <Button variant="accent">
              Passer le diagnostic gratuit <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Button
            variant="secondary"
            onClick={() => {
              setIndex(0);
              setCorrect(0);
              setDone(false);
            }}
          >
            Recommencer
          </Button>
        </div>
      </div>
    );
  }

  const current = questions[index];

  return (
    <div className="mx-auto max-w-2xl">
      <p className="mb-3 text-sm font-semibold text-ink-soft dark:text-slate-400">
        Entraînement gratuit — question {index + 1} sur {questions.length}
      </p>
      <QuestionCard
        key={current.id}
        question={current}
        onAnswered={(ok) => {
          if (ok) setCorrect((c) => c + 1);
        }}
      />
      <div className="mt-5 flex justify-end">
        <Button
          variant="primary"
          onClick={() => {
            if (index >= questions.length - 1) {
              setDone(true);
              trackEvent('tool_used', { tool: `${exam}-${skill}-practice` });
            } else {
              setIndex((i) => i + 1);
            }
          }}
        >
          {index >= questions.length - 1 ? 'Voir mon résultat' : 'Suivant'}
        </Button>
      </div>
    </div>
  );
}