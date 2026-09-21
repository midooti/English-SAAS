'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Target } from 'lucide-react';
import QuestionCard from '@/components/QuestionCard';
import Button from '@/components/ui/button';
import ProgressBar from '@/components/ProgressBar';
import { Badge } from '@/components/ui/badge';
import { getMcQuestions, type Exam, type Question } from '@/lib/questions';
import { XP_PER_CORRECT } from '@/lib/config';

type Step = 'config' | 'test' | 'result';

const levels = ['Beginner', 'Intermediate', 'Upper Intermediate', 'Advanced'];

export default function DiagnosticApp() {
  const [step, setStep] = useState<Step>('config');
  const [exam, setExam] = useState<Exam>('toefl');
  const [target, setTarget] = useState('5.5');
  const [date, setDate] = useState('');
  const [level, setLevel] = useState(levels[1]);

  const questions = useMemo<Question[]>(() => {
    const pool = getMcQuestions(exam).slice(0, 10);
    return pool.length >= 6 ? pool : getMcQuestions(exam === 'toefl' ? 'toeic' : 'toefl').slice(0, 10);
  }, [exam]);

  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [xp, setXp] = useState(0);

  function startDiagnostic(e: React.FormEvent) {
    e.preventDefault();
    setIndex(0);
    setCorrect(0);
    setXp(0);
    setStep('test');
  }

  function handleAnswered(ok: boolean) {
    if (ok) {
      setCorrect((c) => c + 1);
      setXp((x) => x + XP_PER_CORRECT);
    }
  }

  function next() {
    if (index >= questions.length - 1) {
      setStep('result');
    } else {
      setIndex((i) => i + 1);
    }
  }

  const percent = questions.length ? Math.round((correct / questions.length) * 100) : 0;
  // Estimation de DÉMO : bande 3.0 → 6.0 selon le taux de bonnes réponses.
  const estimatedBand = (3 + (percent / 100) * 3).toFixed(1);

  if (step === 'config') {
    return (
      <form
        onSubmit={startDiagnostic}
        className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white">
          <Target className="h-6 w-6" />
        </span>
        <h2 className="mt-5 text-2xl font-extrabold text-slate-900 dark:text-white">
          Set up your diagnostic
        </h2>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          10 minutes, ~10 questions. You&apos;ll receive an <strong>estimated score</strong>{' '}
          (not an official exam score).
        </p>

        <div className="mt-7 space-y-5">
          <div>
            <label htmlFor="exam" className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200">
              Exam
            </label>
            <select
              id="exam"
              value={exam}
              onChange={(e) => setExam(e.target.value as Exam)}
              className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            >
              <option value="toefl">TOEFL</option>
              <option value="toeic">TOEIC</option>
            </select>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="target" className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                Target score
              </label>
              <input
                id="target"
                type="number"
                min="0"
                max="9"
                step="0.5"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="date" className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                Exam date
              </label>
              <input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              />
            </div>
          </div>

          <div>
            <p className="mb-1.5 text-sm font-semibold text-slate-700 dark:text-slate-200">Current level</p>
            <div className="flex flex-wrap gap-2">
              {levels.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLevel(l)}
                  className={
                    level === l
                      ? 'rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white'
                      : 'rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:border-brand-300 dark:border-slate-700 dark:text-slate-300'
                  }
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>

        <Button type="submit" size="lg" variant="accent" className="mt-8 w-full">
          Launch diagnostic test →
        </Button>
        <p className="mt-3 text-center text-xs text-slate-400">
          Demo questions — original content, no official exam material.
        </p>
      </form>
    );
  }

  if (step === 'test') {
    const current = questions[index];
    return (
      <div className="mx-auto max-w-2xl">
        <div className="mb-4 flex items-center justify-between text-sm font-semibold text-slate-500 dark:text-slate-400">
          <span>
            Question {index + 1} of {questions.length}
          </span>
          <span>+{xp} XP</span>
        </div>
        <ProgressBar value={((index + 1) / questions.length) * 100} className="mb-6" />

        <QuestionCard key={current.id} question={current} onAnswered={handleAnswered} />

        <div className="mt-6 flex justify-end">
          <Button onClick={next} variant="primary" size="lg">
            {index >= questions.length - 1 ? 'See my result' : 'Next question'}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <Badge variant="accent" className="mx-auto">Estimated score — demo</Badge>
      <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-slate-400">Your level</p>
      <p className="mt-1 text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        {estimatedBand}
      </p>
      <p className="mt-1 text-sm text-slate-400">target {target} · {level}</p>

      <div className="mx-auto mt-6 flex max-w-xs items-center justify-center gap-6 rounded-2xl bg-slate-50 py-4 dark:bg-slate-800">
        <div>
          <p className="text-xs text-slate-400">Correct</p>
          <p className="text-xl font-extrabold text-emerald-600">{correct}/{questions.length}</p>
        </div>
        <div className="h-8 w-px bg-slate-200 dark:bg-slate-700" aria-hidden="true" />
        <div>
          <p className="text-xs text-slate-400">Accuracy</p>
          <p className="text-xl font-extrabold text-slate-900 dark:text-white">{percent}%</p>
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-md text-sm text-slate-500 dark:text-slate-400">
        This is a practice estimate to guide your study plan. It is not an official TOEFL/TOEIC
        score.
      </p>

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link href="/signup" className="w-full sm:w-auto">
          <Button variant="accent" size="lg" className="w-full sm:w-auto">
            Save progress — create account
          </Button>
        </Link>
        <Link href="/practice" className="w-full sm:w-auto">
          <Button variant="secondary" size="lg" className="w-full sm:w-auto">
            <ArrowLeft className="h-4 w-4" /> Keep practicing
          </Button>
        </Link>
      </div>
    </div>
  );
}