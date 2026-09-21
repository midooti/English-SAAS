'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, RotateCcw } from 'lucide-react';
import QuestionCard from '@/components/QuestionCard';
import Button from '@/components/ui/button';
import ProgressBar from '@/components/ProgressBar';
import ShareControls from '@/components/tools/ShareControls';
import { getMcQuestions, type Question } from '@/lib/questions';
import { trackEvent } from '@/lib/analytics';

const TOTAL = 10;

/** Mini-test de niveau gratuit : 10 questions, résultat estimé immédiat. */
export default function EnglishLevelTest() {
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);

  const questions = useMemo<Question[]>(() => {
    const toefl = getMcQuestions('toefl');
    const toeic = getMcQuestions('toeic');
    const mixed = [...toefl, ...toeic].sort(() => Math.random() - 0.5).slice(0, TOTAL);
    return mixed.length >= TOTAL ? mixed : toefl.slice(0, TOTAL);
  }, []);

  if (done) {
    const percent = Math.round((correct / TOTAL) * 100);
    const band = (3 + (percent / 100) * 3).toFixed(1);
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Your estimated level</p>
        <p className="mt-2 text-6xl font-extrabold text-brand-600 dark:text-brand-400">{band}</p>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          {correct}/{TOTAL} correct · {percent}% accuracy
        </p>
        <div className="mt-4 flex justify-center">
          <ShareControls text={`My estimated English level is ${band} (free ScoreUp test)`} />
        </div>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <LinkButton href="/diagnostic" variant="accent">
            Take the full diagnostic <ArrowRight className="h-4 w-4" />
          </LinkButton>
          <Button
            variant="secondary"
            onClick={() => {
              setIndex(0);
              setCorrect(0);
              setDone(false);
            }}
          >
            <RotateCcw className="h-4 w-4" /> Retry
          </Button>
        </div>
        <p className="mt-4 text-xs text-slate-400">Estimate for guidance — not an official test score.</p>
      </div>
    );
  }

  const current = questions[index];

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-4 flex items-center justify-between text-sm font-semibold text-slate-500 dark:text-slate-400">
        <span>Question {index + 1} of {TOTAL}</span>
        <button
          type="button"
          className="text-brand-600 hover:underline dark:text-brand-400"
          onClick={() => {
            setIndex(0);
            setCorrect(0);
          }}
        >
          Restart
        </button>
      </div>
      <ProgressBar value={((index + 1) / TOTAL) * 100} className="mb-5" />

      <QuestionCard key={current.id} question={current} onAnswered={(ok) => ok && setCorrect((c) => c + 1)} />

      <div className="mt-6 flex justify-end">
        <Button
          variant="primary"
          onClick={() => {
            if (index >= TOTAL - 1) {
              setDone(true);
              trackEvent('diagnostic_completed', { source: 'english-level-test' });
            } else {
              setIndex((i) => i + 1);
            }
          }}
        >
          {index >= TOTAL - 1 ? 'See my level' : 'Next'}
          {index < TOTAL - 1 && <ArrowRight className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
}

import Link from 'next/link';

function LinkButton({
  href,
  variant,
  children,
}: {
  href: string;
  variant: 'accent' | 'secondary' | 'primary';
  children: React.ReactNode;
}) {
  return (
    <Link href={href}>
      <Button variant={variant} className="inline-flex items-center gap-2">
        {children}
      </Button>
    </Link>
  );
}