'use client';

import { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import QuestionCard from '@/components/QuestionCard';
import Button from '@/components/ui/button';
import ProgressBar from '@/components/ProgressBar';
import Paywall from '@/components/Paywall';
import { Badge } from '@/components/ui/badge';
import { getQuestions, type Exam, type Skill, type Difficulty, type Question } from '@/lib/questions';
import { XP_PER_CORRECT, FREE_DAILY_LIMIT } from '@/lib/config';
import { useUsageLimit } from '@/lib/usage';
import { trackEvent } from '@/lib/analytics';

const exams: Exam[] = ['toefl', 'toeic', 'ielts', 'cambridge', 'duolingo'];
const skills: Skill[] = ['reading', 'listening', 'speaking', 'writing', 'vocabulary'];
const difficulties: Difficulty[] = ['easy', 'medium', 'hard'];

const skillLabels: Record<Skill, string> = {
  reading: 'Compréhension écrite',
  listening: 'Compréhension orale',
  speaking: 'Expression orale',
  writing: 'Expression écrite',
  vocabulary: 'Vocabulaire',
};

const difficultyLabels: Record<Difficulty, string> = {
  easy: 'Facile',
  medium: 'Intermédiaire',
  hard: 'Difficile',
};

export default function PracticeApp({ premium }: { premium: boolean }) {
  const [exam, setExam] = useState<Exam>('toefl');
  const [skill, setSkill] = useState<Skill>('reading');
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [index, setIndex] = useState(0);
  const [xp, setXp] = useState(0);
  const [session, setSession] = useState(0);
  const { atLimit, consume, remaining } = useUsageLimit(premium);

  const questions = useMemo<Question[]>(
    () => getQuestions({ exam, skill, difficulty }),
    [exam, skill, difficulty]
  );

  const current = questions[index];

  function pick(fn: () => void) {
    fn();
    setIndex(0);
    setSession(0);
  }

  function handleAnswered(ok: boolean) {
    if (ok) setXp((x) => x + XP_PER_CORRECT);
    if (session === 0) trackEvent('practice_started');
    if (index >= questions.length - 1) trackEvent('practice_completed');
    setSession((s) => s + 1);
    consume();
  }

  if (atLimit) return <Paywall />;

  return (
    <div className="space-y-6">
      {/* Filtres */}
      <div className="card-academic p-5 shadow-soft">
        <div className="grid gap-4 sm:grid-cols-3">
          <label className="block">
            <span className="mb-1 block text-xs font-semibold text-ink-faint dark:text-slate-400">Examen</span>
            <select
              value={exam}
              onChange={(e) => pick(() => setExam(e.target.value as Exam))}
              className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            >
              {exams.map((e) => (
                <option key={e} value={e}>{e.toUpperCase()}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="mb-1 block text-xs font-semibold text-ink-faint dark:text-slate-400">Compétence</span>
            <select
              value={skill}
              onChange={(e) => pick(() => setSkill(e.target.value as Skill))}
              className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            >
              {skills.map((s) => (
                <option key={s} value={s}>{skillLabels[s]}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="mb-1 block text-xs font-semibold text-ink-faint dark:text-slate-400">Difficulté</span>
            <select
              value={difficulty}
              onChange={(e) => pick(() => setDifficulty(e.target.value as Difficulty))}
              className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            >
              {difficulties.map((d) => (
                <option key={d} value={d}>{difficultyLabels[d]}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-ink-faint dark:text-slate-500">
          {premium ? (
            <Badge variant="accent">Exercices illimités</Badge>
          ) : (
            <Badge variant="neutral">
              Exercices gratuits aujourd&apos;hui : {remaining}/{FREE_DAILY_LIMIT}
            </Badge>
          )}
          <Badge variant="success">{xp} XP</Badge>
          <span>{questions.length} questions disponibles</span>
        </div>
      </div>

      {current ? (
        <>
          <div className="flex items-center justify-between text-sm font-semibold text-ink-soft dark:text-slate-400">
            <span>Question {index + 1} sur {questions.length}</span>
            <span>{session} réponse{session > 1 ? 's' : ''} cette session</span>
          </div>
          <ProgressBar value={((index + 1) / questions.length) * 100} className="mb-4" />
          <QuestionCard key={current.id} question={current} onAnswered={handleAnswered} />
          <div className="flex justify-end">
            <Button
              onClick={() => setIndex((i) => Math.min(i + 1, questions.length - 1))}
              variant="primary"
            >
              Question suivante <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </>
      ) : (
        <p className="card-academic p-10 text-center text-ink-soft dark:text-slate-400">
          Aucune question pour cette combinaison — modifiez les filtres ci-dessus.
        </p>
      )}
    </div>
  );
}