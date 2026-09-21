'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Flag } from 'lucide-react';
import QuestionCard from '@/components/QuestionCard';
import Button from '@/components/ui/button';
import ProgressBar from '@/components/ProgressBar';
import Paywall from '@/components/Paywall';
import { Badge } from '@/components/ui/badge';
import { getMcQuestions, type Question } from '@/lib/questions';
import type { MockTest } from '@/lib/mockTests';
import { cn } from '@/lib/utils';
import { trackEvent } from '@/lib/analytics';

type Phase = 'intro' | 'running' | 'result';

const difficultyLabels = {
  easy: 'Facile',
  medium: 'Intermédiaire',
  hard: 'Difficile',
} as const;

export default function MockTestApp({
  test,
  canAccessPremium,
}: {
  test: MockTest;
  canAccessPremium: boolean;
}) {
  const [phase, setPhase] = useState<Phase>('intro');
  const [index, setIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(test.durationMin * 60);
  const [answered, setAnswered] = useState<Record<number, boolean>>({});
  const endedRef = useRef(false);

  const questions = useMemo<Question[]>(
    () => getMcQuestions(test.exam).slice(0, test.totalQuestions),
    [test.exam, test.totalQuestions]
  );

  useEffect(() => {
    if (phase !== 'running') return;
    const interval = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(interval);
          if (!endedRef.current) {
            endedRef.current = true;
            setPhase('result');
          }
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [phase]);

  if (test.premium && !canAccessPremium && phase !== 'result') {
    return (
      <Paywall
        title="Cet examen blanc est réservé à la formule Premium."
        body="Passez à Prep-Anglais Premium pour accéder à tous les examens blancs complets."
      />
    );
  }

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const ss = String(secondsLeft % 60).padStart(2, '0');
  const percent = questions.length ? Math.round((correctCount / questions.length) * 100) : 0;
  const estimatedBand = (3 + (percent / 100) * 3).toFixed(1);
  const progress = ((index + (phase === 'result' ? 1 : 0)) / questions.length) * 100;
  const testTitle = `${test.exam.toUpperCase()} — Examen blanc n\u00B0${test.number}`;

  if (phase === 'intro') {
    return (
      <div className="card-academic mx-auto max-w-lg p-8 text-center shadow-soft">
        <Badge variant={test.premium ? 'accent' : 'success'} className="mx-auto">
          {test.premium ? 'Premium' : 'Gratuit'}
        </Badge>
        <h2 className="mt-4 font-serif text-2xl leading-tight tracking-tight text-ink dark:text-white">
          {testTitle}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-slate-400">
          {test.description}
        </p>

        <dl className="mt-6 grid grid-cols-3 gap-3 rounded-lg bg-slate-50 p-4 text-center dark:bg-slate-800">
          <div>
            <dt className="micro-label">Durée</dt>
            <dd className="mt-1 flex items-center justify-center gap-1 font-semibold text-ink dark:text-white">
              <Clock className="h-4 w-4 text-brand-500" /> {test.durationMin} min
            </dd>
          </div>
          <div>
            <dt className="micro-label">Questions</dt>
            <dd className="mt-1 font-semibold text-ink dark:text-white">{test.totalQuestions}</dd>
          </div>
          <div>
            <dt className="micro-label">Difficulté</dt>
            <dd className="mt-1 font-semibold capitalize text-ink dark:text-white">
              {difficultyLabels[test.difficulty]}
            </dd>
          </div>
        </dl>

        <p className="mt-4 text-xs text-ink-faint dark:text-slate-500">
          Scores estimés à titre indicatif — jamais des notes officielles.
        </p>

        <Button
          variant="primary"
          size="lg"
          className="mt-7 w-full"
          onClick={() => {
            endedRef.current = false;
            setPhase('running');
            setIndex(0);
            setCorrectCount(0);
            setAnswered({});
            setSecondsLeft(test.durationMin * 60);
            trackEvent('mock_test_started', { test: test.slug });
          }}
        >
          Lancer l&apos;examen blanc
        </Button>
      </div>
    );
  }

  if (phase === 'result') {
    return (
      <div className="card-academic mx-auto max-w-xl p-8 text-center shadow-soft">
        <p className="micro-label-accent">Score estimé</p>
        <h2 className="mt-3 font-serif text-2xl leading-tight tracking-tight text-ink dark:text-white">
          Examen blanc terminé
        </h2>

        <p className="mt-6 font-serif text-6xl leading-none tracking-tight text-ink dark:text-white">
          {estimatedBand}
        </p>
        <p className="mt-2 text-sm text-ink-soft dark:text-slate-400">
          {correctCount} bonnes réponses · {percent} % de précision
        </p>

        <div className="mt-6 text-left">
          <h3 className="mb-2 text-sm font-bold text-ink dark:text-white">Vos réponses</h3>
          <div className="flex flex-wrap gap-1.5">
            {questions.map((q, i) => (
              <span
                key={q.id}
                className={cn(
                  'flex h-7 w-7 items-center justify-center rounded-md text-xs font-bold',
                  answered[i] ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300' : 'bg-red-500/10 text-red-600 dark:text-red-300'
                )}
              >
                {i + 1}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            variant="primary"
            className="flex-1"
            onClick={() => {
              setPhase('intro');
              setIndex(0);
              setCorrectCount(0);
              setAnswered({});
            }}
          >
            Recommencer
          </Button>
          <Button
            variant="secondary"
            className="flex-1"
            onClick={() => {
              setPhase('running');
              setIndex(0);
              setCorrectCount(0);
              setAnswered({});
              setSecondsLeft(test.durationMin * 60);
            }}
          >
            Relancer l&apos;examen
          </Button>
        </div>
      </div>
    );
  }

  const current = questions[index];

  return (
    <div className="mx-auto max-w-2xl">
      {/* Chronomètre + navigation */}
      <div className="mb-4 flex items-center justify-between">
        <span
          className={cn(
            'inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-bold',
            secondsLeft < 5 * 60 ? 'bg-red-500/10 text-red-600' : 'bg-slate-100 text-ink-soft dark:bg-slate-800 dark:text-white'
          )}
        >
          <Clock className="h-4 w-4" /> {mm}:{ss}
        </span>
        <span className="text-sm font-semibold text-ink-soft dark:text-slate-400">
          Question {index + 1} sur {questions.length}
        </span>
        <Button variant="ghost" size="sm" onClick={() => setPhase('result')}>
          <Flag className="h-4 w-4" /> Valider
        </Button>
      </div>

      <ProgressBar value={progress} className="mb-6" />

      <QuestionCard
        key={current.id}
        question={current}
        onAnswered={(ok) => {
          setAnswered((prev) => ({ ...prev, [index]: ok }));
          if (ok) setCorrectCount((c) => c + 1);
        }}
      />

      <div className="mt-6 flex items-center justify-between">
        <Button variant="secondary" onClick={() => setIndex((i) => Math.max(0, i - 1))} disabled={index === 0}>
          <ChevronLeft className="h-4 w-4" /> Précédente
        </Button>
        <Button
          onClick={() =>
            index >= questions.length - 1 ? setPhase('result') : setIndex((i) => i + 1)
          }
          disabled={questions.length === 0}
        >
          {index >= questions.length - 1 ? "Valider l'examen" : 'Suivante'}
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}