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
      <div className="rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 to-accent-50 p-8 text-center dark:border-slate-800 dark:from-slate-900 dark:to-slate-900">
        <p className="text-4xl font-extrabold text-brand-600 dark:text-brand-400">
          {correct}/{questions.length}
        </p>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          {correct === count
            ? 'Perfect — your skills are in great shape.'
            : 'A solid start. The full practice library trains exactly these question types.'}
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/diagnostic">
            <Button variant="accent">
              Take the free diagnostic <ArrowRight className="h-4 w-4" />
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
            Try again
          </Button>
        </div>
      </div>
    );
  }

  const current = questions[index];

  return (
    <div className="mx-auto max-w-2xl">
      <p className="mb-3 text-sm font-semibold text-slate-500 dark:text-slate-400">
        Free practice — question {index + 1} of {questions.length}
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
          {index >= questions.length - 1 ? 'See my result' : 'Next'}
        </Button>
      </div>
    </div>
  );
}