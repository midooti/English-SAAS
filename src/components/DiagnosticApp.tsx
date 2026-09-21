'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import QuestionCard from '@/components/QuestionCard';
import Button from '@/components/ui/button';
import ProgressBar from '@/components/ProgressBar';
import { Badge } from '@/components/ui/badge';
import { getMcQuestions, type Exam, type Question } from '@/lib/questions';
import { XP_PER_CORRECT } from '@/lib/config';
import { useUsageLimit } from '@/lib/usage';
import { trackEvent } from '@/lib/analytics';

type Step = 'config' | 'test' | 'result';

const levels = ['Débutant', 'Intermédiaire', 'Intermédiaire avancé', 'Avancé'];

export default function DiagnosticApp({ premium }: { premium: boolean }) {
  const [step, setStep] = useState<Step>('config');
  const [exam, setExam] = useState<Exam>('toefl');
  const [target, setTarget] = useState('5.5');
  const [date, setDate] = useState('');
  const [level, setLevel] = useState(levels[1]);

  const { premium: isPremium } = useUsageLimit(premium);

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
    trackEvent('diagnostic_started');
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
      trackEvent('diagnostic_completed');
    } else {
      setIndex((i) => i + 1);
    }
  }

  const percent = questions.length ? Math.round((correct / questions.length) * 100) : 0;
  // Estimation indicative : bande 3.0 → 6.0 selon le taux de bonnes réponses.
  const estimatedBand = (3 + (percent / 100) * 3).toFixed(1);

  if (step === 'config') {
    return (
      <form
        onSubmit={startDiagnostic}
        className="card-academic mx-auto max-w-xl p-8 shadow-soft"
      >
        <p className="micro-label-accent">Diagnostic gratuit — ~10 questions</p>
        <h2 className="mt-3 font-serif text-2xl leading-tight tracking-tight text-ink dark:text-white">
          Configurer mon diagnostic
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-slate-400">
          Environ 10 minutes pour situer votre niveau. Le résultat est un score
          estimé, à titre indicatif — jamais une note d&apos;examen officielle.
        </p>

        <div className="mt-7 space-y-5">
          <div>
            <label htmlFor="exam" className="mb-1.5 block text-sm font-semibold text-ink dark:text-slate-100">
              Examen
            </label>
            <select
              id="exam"
              value={exam}
              onChange={(e) => setExam(e.target.value as Exam)}
              className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            >
              <option value="toefl">TOEFL</option>
              <option value="toeic">TOEIC</option>
            </select>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="target" className="mb-1.5 block text-sm font-semibold text-ink dark:text-slate-100">
                Score visé
              </label>
              <input
                id="target"
                type="number"
                min="0"
                max="9"
                step="0.5"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="date" className="mb-1.5 block text-sm font-semibold text-ink dark:text-slate-100">
                Date de l&apos;examen
              </label>
              <input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              />
            </div>
          </div>

          <div>
            <p className="mb-1.5 text-sm font-semibold text-ink dark:text-slate-100">Niveau actuel</p>
            <div className="flex flex-wrap gap-2">
              {levels.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLevel(l)}
                  className={
                    level === l
                      ? 'rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white'
                      : 'rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-ink-soft hover:border-brand-300 dark:border-slate-700 dark:text-slate-300'
                  }
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>

        <Button type="submit" size="lg" className="mt-8 w-full">
          Lancer le diagnostic
        </Button>
        {!isPremium && (
          <p className="mt-3 text-center text-xs text-ink-faint dark:text-slate-500">
            Gratuit — le diagnostic ne consomme pas votre quota quotidien d&apos;exercices.
          </p>
        )}
      </form>
    );
  }

  if (step === 'test') {
    const current = questions[index];
    return (
      <div className="mx-auto max-w-2xl">
        <div className="mb-4 flex items-center justify-between text-sm font-semibold text-ink-soft dark:text-slate-400">
          <span>
            Question {index + 1} sur {questions.length}
          </span>
          <span>+{xp} XP</span>
        </div>
        <ProgressBar value={((index + 1) / questions.length) * 100} className="mb-6" />

        <QuestionCard key={current.id} question={current} onAnswered={handleAnswered} />

        <div className="mt-6 flex justify-end">
          <Button onClick={next} variant="primary" size="lg">
            {index >= questions.length - 1 ? 'Voir mon résultat' : 'Question suivante'}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="card-academic mx-auto max-w-xl p-8 text-center shadow-soft">
      <Badge variant="accent" className="mx-auto">Score estimé</Badge>
      <p className="micro-label mt-6">Votre niveau</p>
      <p className="mt-2 font-serif text-6xl leading-none tracking-tight text-ink dark:text-white">
        {estimatedBand}
      </p>
      <p className="mt-2 text-sm text-ink-faint dark:text-slate-500">
        objectif {target} · {level}
      </p>

      <div className="mx-auto mt-6 flex max-w-xs items-center justify-center gap-6 rounded-lg bg-slate-50 py-4 dark:bg-slate-800">
        <div>
          <p className="text-xs text-ink-faint dark:text-slate-400">Bonnes réponses</p>
          <p className="text-xl font-semibold text-emerald-600">{correct}/{questions.length}</p>
        </div>
        <div className="h-8 w-px bg-slate-200 dark:bg-slate-700" aria-hidden="true" />
        <div>
          <p className="text-xs text-ink-faint dark:text-slate-400">Précision</p>
          <p className="text-xl font-semibold text-ink dark:text-white">{percent}%</p>
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-ink-soft dark:text-slate-400">
        Un score estimé pour orienter votre préparation. Ce n&apos;est pas une note
        officielle TOEFL ou TOEIC.
      </p>

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link href="/signup" className="w-full sm:w-auto">
          <Button variant="primary" size="lg" className="w-full sm:w-auto">
            Créer un compte gratuit
          </Button>
        </Link>
        <Link href="/practice" className="w-full sm:w-auto">
          <Button variant="secondary" size="lg" className="w-full sm:w-auto">
            <ArrowLeft className="h-4 w-4" /> Continuer mes exercices
          </Button>
        </Link>
      </div>
    </div>
  );
}