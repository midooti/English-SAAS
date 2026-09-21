'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import QuestionCard from '@/components/QuestionCard';
import Button from '@/components/ui/button';
import ProgressBar from '@/components/ProgressBar';
import Paywall from '@/components/Paywall';
import { Badge } from '@/components/ui/badge';
import { getQuestions, type Exam, type Skill, type Difficulty, type Question } from '@/lib/questions';
import { XP_PER_CORRECT, FREE_DAILY_LIMIT } from '@/lib/config';
import { useUsageLimit } from '@/lib/usage';

const exams: Exam[] = ['toefl', 'toeic', 'ielts', 'cambridge', 'duolingo'];
const skills: Skill[] = ['reading', 'listening', 'speaking', 'writing', 'vocabulary'];
const difficulties: Difficulty[] = ['easy', 'medium', 'hard'];

export default function PracticeApp() {
  const [exam, setExam] = useState<Exam>('toefl');
  const [skill, setSkill] = useState<Skill>('reading');
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [index, setIndex] = useState(0);
  const [xp, setXp] = useState(0);
  const [session, setSession] = useState(0);
  const { atLimit, consume, remaining, premium } = useUsageLimit();

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
    setSession((s) => s + 1);
    consume();
  }

  if (atLimit) return <Paywall />;

  return (
    <div className="space-y-6">
      {/* Filtres */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <div className="grid gap-4 sm:grid-cols-3">
          <label className="block">
            <span className="mb-1 block text-xs font-semibold text-slate-500">Exam</span>
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
            <span className="mb-1 block text-xs font-semibold text-slate-500">Skill</span>
            <select
              value={skill}
              onChange={(e) => pick(() => setSkill(e.target.value as Skill))}
              className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            >
              {skills.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="mb-1 block text-xs font-semibold text-slate-500">Difficulty</span>
            <select
              value={difficulty}
              onChange={(e) => pick(() => setDifficulty(e.target.value as Difficulty))}
              className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            >
              {difficulties.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          {premium ? (
            <Badge variant="accent">
              <Sparkles className="h-3 w-3" /> Premium unlimited
            </Badge>
          ) : (
            <Badge variant="neutral">
              Free: {remaining}/{FREE_DAILY_LIMIT} today
            </Badge>
          )}
          <Badge variant="success">
            <Zap className="h-3 w-3" /> {xp} XP
          </Badge>
          <span>{questions.length} questions available</span>
        </div>
      </div>

      {current ? (
        <>
          <div className="flex items-center justify-between text-sm font-semibold text-slate-500 dark:text-slate-400">
            <span>Question {index + 1} of {questions.length}</span>
            <span>{session} answered this session</span>
          </div>
          <ProgressBar value={((index + 1) / questions.length) * 100} className="mb-4" />
          <QuestionCard key={current.id} question={current} onAnswered={handleAnswered} />
          <div className="flex justify-end">
            <Button
              onClick={() => setIndex((i) => Math.min(i + 1, questions.length - 1))}
              variant="primary"
            >
              Next question <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </>
      ) : (
        <p className="rounded-2xl border border-slate-200 bg-white p-10 text-center text-slate-500 dark:border-slate-800 dark:bg-slate-900">
          No questions for this combination — choose another filter.
        </p>
      )}
    </div>
  );
}