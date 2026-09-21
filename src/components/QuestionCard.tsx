'use client';

import { useEffect, useState } from 'react';
import { Check, CircleX, Volume2, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { XP_PER_CORRECT } from '@/lib/config';
import type { Question } from '@/lib/questions';

type Props = {
  question: Question;
  onAnswered: (correct: boolean) => void;
};

/** Question unique réutilisable (practice, diagnostic, mock tests). */
export default function QuestionCard({ question, onAnswered }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSelected(null);
    setSubmitted(false);
  }, [question.id]);

  const isMc = question.kind === 'mc' && !!question.options;
  const answeredCorrectly =
    isMc && selected !== null ? selected === question.correctIndex : true;
  const showResult = submitted && isMc;

  function submit() {
    if (isMc && selected === null) return;
    setSubmitted(true);
    onAnswered(answeredCorrectly);
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-brand-600/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-700 dark:text-brand-300">
          {question.skill} · {question.difficulty}
        </span>
        {question.audio && (
          <span
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400"
            title="Demo audio placeholder"
          >
            <Volume2 className="h-4 w-4" />
            Audio (demo)
          </span>
        )}
      </div>

      {question.context && (
        <p className="mt-4 rounded-xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          {question.context}
        </p>
      )}

      <h3 className="mt-5 text-lg font-bold leading-relaxed text-slate-900 dark:text-white">
        {question.prompt}
      </h3>

      {isMc && question.options ? (
        <div className="mt-5 space-y-2.5">
          {question.options.map((option, i) => {
            const isCorrect = i === question.correctIndex;
            const isChosen = i === selected;
            return (
              <button
                key={i}
                type="button"
                disabled={submitted}
                onClick={() => setSelected(i)}
                className={cn(
                  'flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition',
                  !submitted &&
                    'border-slate-200 hover:border-brand-400 hover:bg-brand-50 dark:border-slate-700 dark:hover:bg-slate-800',
                  submitted && isCorrect && 'border-emerald-500 bg-emerald-50 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-200',
                  submitted && isChosen && !isCorrect && 'border-red-500 bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-200',
                  submitted && !isChosen && !isCorrect && 'border-slate-200 opacity-55 dark:border-slate-700',
                  isChosen && !submitted && 'border-brand-500 bg-brand-50 dark:bg-slate-800'
                )}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-slate-500 dark:bg-slate-700 dark:text-slate-200">
                  {String.fromCharCode(65 + i)}
                </span>
                {option}
                {submitted && isCorrect && <Check className="ml-auto h-4 w-4 text-emerald-600" />}
                {submitted && isChosen && !isCorrect && <CircleX className="ml-auto h-4 w-4 text-red-500" />}
              </button>
            );
          })}
        </div>
      ) : (
        <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-500 dark:bg-slate-800 dark:text-slate-300">
          Record or write your answer, then mark it complete to unlock the model answer.
        </div>
      )}

      {!submitted ? (
        <button
          type="button"
          onClick={submit}
          disabled={isMc && selected === null}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:opacity-50"
        >
          {selected !== null || !isMc ? 'Submit' : 'Choose an answer'} →
        </button>
      ) : (
        <div
          className={cn(
            'mt-6 rounded-xl p-4',
            answeredCorrectly ? 'bg-emerald-50 dark:bg-emerald-500/10' : 'bg-red-50 dark:bg-red-500/10'
          )}
        >
          <p className="flex items-center gap-2 text-sm font-bold">
            {answeredCorrectly ? (
              <span className="text-emerald-700 dark:text-emerald-300">Correct!</span>
            ) : (
              <span className="text-red-700 dark:text-red-300">Not quite.</span>
            )}
            <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-xs font-bold text-accent-600 shadow-sm">
              <Zap className="h-3 w-3" />+{XP_PER_CORRECT} XP
            </span>
          </p>
          {question.explanation && (
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {question.explanation}
            </p>
          )}
        </div>
      )}
    </div>
  );
}