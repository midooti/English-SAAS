'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { CheckCircle2, ChevronLeft, ChevronRight, Clock, Flag, Play } from 'lucide-react';
import QuestionCard from '@/components/QuestionCard';
import Button from '@/components/ui/button';
import ProgressBar from '@/components/ProgressBar';
import Paywall from '@/components/Paywall';
import { Badge } from '@/components/ui/badge';
import { getMcQuestions, type Question } from '@/lib/questions';
import type { MockTest } from '@/lib/mockTests';
import { cn } from '@/lib/utils';

type Phase = 'intro' | 'running' | 'result';

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
    return <Paywall title="This mock test is Premium." body="Unlock full mock tests with ScoreUp Premium." />;
  }

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const ss = String(secondsLeft % 60).padStart(2, '0');
  const percent = questions.length ? Math.round((correctCount / questions.length) * 100) : 0;
  const estimatedBand = (3 + (percent / 100) * 3).toFixed(1);
  const progress = ((index + (phase === 'result' ? 1 : 0)) / questions.length) * 100;

  if (phase === 'intro') {
    return (
      <div className="mx-auto max-w-lg rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <Badge variant={test.premium ? 'accent' : 'success'} className="mx-auto">
          {test.premium ? 'Premium' : 'Free'}
        </Badge>
        <h2 className="mt-4 text-2xl font-extrabold text-slate-900 dark:text-white">{test.title}</h2>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{test.description}</p>

        <dl className="mt-6 grid grid-cols-3 gap-3 rounded-2xl bg-slate-50 p-4 text-center dark:bg-slate-800">
          <div>
            <dt className="text-xs text-slate-400">Duration</dt>
            <dd className="flex items-center justify-center gap-1 font-bold text-slate-800 dark:text-white">
              <Clock className="h-4 w-4 text-brand-500" /> {test.durationMin} min
            </dd>
          </div>
          <div>
            <dt className="text-xs text-slate-400">Questions</dt>
            <dd className="font-bold text-slate-800 dark:text-white">{test.totalQuestions}</dd>
          </div>
          <div>
            <dt className="text-xs text-slate-400">Difficulty</dt>
            <dd className="font-bold capitalize text-slate-800 dark:text-white">{test.difficulty}</dd>
          </div>
        </dl>

        <p className="mt-4 text-xs text-slate-400">
          Results are an estimated practice score — not an official exam score.
        </p>

        <Button
          variant="accent"
          size="lg"
          className="mt-7 w-full"
          onClick={() => {
            endedRef.current = false;
            setPhase('running');
            setIndex(0);
            setCorrectCount(0);
            setAnswered({});
            setSecondsLeft(test.durationMin * 60);
          }}
        >
          <Play className="h-4 w-4" /> Start mock test
        </Button>
      </div>
    );
  }

  if (phase === 'result') {
    return (
      <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500" />
        <h2 className="mt-4 text-2xl font-extrabold text-slate-900 dark:text-white">Test complete</h2>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
          Estimated score — demo
        </p>

        <p className="mt-6 text-6xl font-extrabold text-slate-900 dark:text-white">{estimatedBand}</p>
        <p className="mt-2 text-sm text-slate-400">
          {correctCount} correct · {percent}% accuracy
        </p>

        <div className="mt-6 text-left">
          <h3 className="mb-2 text-sm font-bold text-slate-900 dark:text-white">Your answers</h3>
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
            variant="accent"
            className="flex-1"
            onClick={() => {
              setPhase('intro');
              setIndex(0);
              setCorrectCount(0);
              setAnswered({});
            }}
          >
            Retake
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
            Review answers
          </Button>
        </div>
      </div>
    );
  }

  const current = questions[index];

  return (
    <div className="mx-auto max-w-2xl">
      {/* Timer + nav */}
      <div className="mb-4 flex items-center justify-between">
        <span
          className={cn(
            'inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-sm font-bold',
            secondsLeft < 5 * 60 ? 'bg-red-500/10 text-red-600' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-white'
          )}
        >
          <Clock className="h-4 w-4" /> {mm}:{ss}
        </span>
        <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
          Question {index + 1}/{questions.length}
        </span>
        <Button variant="ghost" size="sm" onClick={() => setPhase('result')}>
          <Flag className="h-4 w-4" /> Submit
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
          <ChevronLeft className="h-4 w-4" /> Previous
        </Button>
        <Button
          onClick={() =>
            index >= questions.length - 1 ? setPhase('result') : setIndex((i) => i + 1)
          }
          disabled={questions.length === 0}
        >
          {index >= questions.length - 1 ? 'Submit test' : 'Next'}
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}