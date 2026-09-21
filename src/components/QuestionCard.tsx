'use client';

import { useEffect, useState } from 'react';
import { Check, CircleX, Volume2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { XP_PER_CORRECT } from '@/lib/config';
import type { Question, Skill, Difficulty } from '@/lib/questions';

const skillLabel: Record<Skill, string> = {
  reading: 'Compréhension écrite',
  listening: 'Compréhension orale',
  speaking: 'Expression orale',
  writing: 'Expression écrite',
  vocabulary: 'Vocabulaire',
};

const difficultyLabel: Record<Difficulty, string> = {
  easy: 'Facile',
  medium: 'Intermédiaire',
  hard: 'Difficile',
};

type Props = {
  question: Question;
  onAnswered: (correct: boolean) => void;
};

/** Question unique réutilisable (practice, diagnostic, examens blancs). */
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

  function submit() {
    if (isMc && selected === null) return;
    setSubmitted(true);
    onAnswered(answeredCorrectly);
  }

  return (
    <div className="card-academic p-6 shadow-soft">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-brand-600/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
          {skillLabel[question.skill]} · {difficultyLabel[question.difficulty]}
        </span>
        {question.audio && (
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-faint dark:text-slate-500">
            <Volume2 className="h-4 w-4" />
            Enregistrement audio
          </span>
        )}
      </div>

      {question.context && (
        <p className="mt-4 rounded-lg bg-slate-50 p-4 text-sm leading-relaxed text-ink-soft dark:bg-slate-800 dark:text-slate-300">
          {question.context}
        </p>
      )}

      <h3 className="mt-5 font-serif text-lg leading-relaxed tracking-tight text-ink dark:text-white">
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
                  'flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm font-medium transition',
                  !submitted &&
                    'border-slate-200 hover:border-brand-400 hover:bg-brand-50 dark:border-slate-700 dark:hover:bg-slate-800',
                  submitted && isCorrect && 'border-emerald-500 bg-emerald-50 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-200',
                  submitted && isChosen && !isCorrect && 'border-red-500 bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-200',
                  submitted && !isChosen && !isCorrect && 'border-slate-200 opacity-55 dark:border-slate-700',
                  isChosen && !submitted && 'border-brand-500 bg-brand-50 dark:bg-slate-800'
                )}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-slate-100 text-xs font-bold text-ink-soft dark:bg-slate-700 dark:text-slate-200">
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
        <div className="mt-5 rounded-lg bg-slate-50 p-4 text-sm leading-relaxed text-ink-soft dark:bg-slate-800 dark:text-slate-300">
          Enregistrez ou rédigez votre réponse, puis validez pour découvrir le corrigé type.
        </div>
      )}

      {!submitted ? (
        <button
          type="button"
          onClick={submit}
          disabled={isMc && selected === null}
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800 disabled:opacity-50"
        >
          {selected !== null || !isMc ? 'Valider' : 'Choisir une réponse'} →
        </button>
      ) : (
        <div
          className={cn(
            'mt-6 rounded-lg p-4',
            answeredCorrectly ? 'bg-emerald-50 dark:bg-emerald-500/10' : 'bg-red-50 dark:bg-red-500/10'
          )}
        >
          <p className="flex items-center gap-2 text-sm font-bold">
            {answeredCorrectly ? (
              <span className="text-emerald-700 dark:text-emerald-300">Correct</span>
            ) : (
              <span className="text-red-700 dark:text-red-300">Incorrect</span>
            )}
            <span className="inline-flex items-center rounded-full bg-white px-2 py-0.5 text-xs font-bold text-accent-600 shadow-sm dark:bg-slate-800 dark:text-accent-300">
              +{XP_PER_CORRECT} XP
            </span>
          </p>
          {question.explanation && (
            <div className="mt-3">
              <p className="micro-label">Explication</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft dark:text-slate-300">
                {question.explanation}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}