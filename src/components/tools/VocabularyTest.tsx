'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, RotateCcw } from 'lucide-react';
import QuestionCard from '@/components/QuestionCard';
import Button from '@/components/ui/button';
import ProgressBar from '@/components/ProgressBar';
import ShareControls from '@/components/tools/ShareControls';
import { vocabulary } from '@/lib/vocabulary';
import type { Question } from '@/lib/questions';
import { trackEvent } from '@/lib/analytics';

const TOTAL = 10;

/** Test de vocabulaire gratuit : 10 questions construites depuis la banque. */
export default function VocabularyTest() {
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);

  const questions = useMemo<Question[]>(() => {
    const shuffled = [...vocabulary].sort(() => Math.random() - 0.5).slice(0, TOTAL);
    return shuffled.map<Question>((word, i) => {
      const distractors = vocabulary
        .filter((w) => w.id !== word.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((w) => w.definition);
      const options = [...distractors, word.definition].sort(() => Math.random() - 0.5);
      return {
        id: `vt-${i}-${word.id}`,
        exam: 'toefl',
        skill: 'vocabulary',
        difficulty: word.difficulty,
        kind: 'mc',
        prompt: `What does “${word.word}” mean?`,
        options,
        correctIndex: options.indexOf(word.definition),
        explanation: `${word.definition}. “${word.example}”`,
      };
    });
  }, []);

  if (done) {
    const percent = Math.round((correct / TOTAL) * 100);
    const verdict =
      correct >= 8 ? 'Strong academic-range vocabulary.'
      : correct >= 6 ? 'Solid — build themed word families next.'
      : 'Start with weekly word families in context.';
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Vocabulary result</p>
        <p className="mt-2 text-6xl font-extrabold text-brand-600 dark:text-brand-400">{correct}/{TOTAL}</p>
        <p className="mt-3 max-w-sm text-sm text-slate-500 dark:text-slate-400">{verdict}</p>
        <div className="mt-4 flex justify-center">
          <ShareControls text={`I scored ${correct}/${TOTAL} on the free ScoreUp vocabulary test`} />
        </div>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <LinkButton>
            Practise vocabulary free <ArrowRight className="h-4 w-4" />
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
              trackEvent('tool_used', { tool: 'english-vocabulary-test' });
            } else {
              setIndex((i) => i + 1);
            }
          }}
        >
          {index >= TOTAL - 1 ? 'See my score' : 'Next'}
          {index < TOTAL - 1 && <ArrowRight className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
}

import Link from 'next/link';

function LinkButton({ children }: { children: React.ReactNode }) {
  return (
    <Link href="/vocabulary">
      <Button variant="accent" className="inline-flex items-center gap-2">
        {children}
      </Button>
    </Link>
  );
}