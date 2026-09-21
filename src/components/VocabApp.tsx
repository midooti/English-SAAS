'use client';

import { useMemo, useState } from 'react';
import { BookMarked, RotateCcw } from 'lucide-react';
import VocabularyCard from '@/components/VocabularyCard';
import QuestionCard from '@/components/QuestionCard';
import Paywall from '@/components/Paywall';
import { Badge } from '@/components/ui/badge';
import Button from '@/components/ui/button';
import {
  vocabulary,
  vocabCategories,
  type VocabWord,
  type VocabCategory,
} from '@/lib/vocabulary';
import { FREE_DAILY_LIMIT } from '@/lib/config';
import type { Question } from '@/lib/questions';
import { useUsageLimit } from '@/lib/usage';

const DEFAULT_CATEGORY: VocabCategory | 'daily' = 'daily';

export default function VocabApp() {
  const [category, setCategory] = useState<VocabCategory | 'daily'>(DEFAULT_CATEGORY);
  const [mode, setMode] = useState<'browse' | 'quiz'>('browse');
  const [quiz, setQuiz] = useState<Question[]>([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const { atLimit, consume, remaining, premium } = useUsageLimit();

  const words = useMemo<VocabWord[]>(() => {
    if (category === 'daily') return vocabulary.slice(0, 8);
    return vocabulary.filter((w) => w.category === category);
  }, [category]);

  function startQuiz() {
    // Quiz de DÉMO généré depuis la banque (mots -> QCM original).
    const shuffled = [...vocabulary].sort(() => Math.random() - 0.5).slice(0, 6);
    const build = shuffled.map<Question>((word, i) => {
      const distractors = vocabulary
        .filter((w) => w.id !== word.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((w) => w.definition);
      const options = [...distractors, word.definition].sort(() => Math.random() - 0.5);
      return {
        id: `vq-${i}-${word.id}`,
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
    setQuiz(build);
    setQuizIndex(0);
    setCorrectCount(0);
    setMode('quiz');
  }

  if (atLimit && mode === 'quiz') return <Paywall />;

  if (mode === 'quiz') {
    const current = quiz[quizIndex];
    const finished = quizIndex >= quiz.length - 1;
    return (
      <div className="mx-auto max-w-2xl">
        <div className="mb-4 flex items-center justify-between text-sm font-semibold text-slate-500 dark:text-slate-400">
          <span>Quiz {quizIndex + 1} of {quiz.length}</span>
          <div className="flex items-center gap-2">
            <Badge variant="success">{correctCount} correct</Badge>
            <Button variant="ghost" size="sm" onClick={() => setMode('browse')}>
              <RotateCcw className="h-4 w-4" /> Quit
            </Button>
          </div>
        </div>
        <QuestionCard
          key={current.id}
          question={current}
          onAnswered={(ok) => {
            if (ok) setCorrectCount((c) => c + 1);
            consume();
          }}
        />
        <div className="mt-6 flex justify-end">
          <Button onClick={() => (finished ? setMode('browse') : setQuizIndex((i) => i + 1))}>
            {finished ? 'Back to words' : 'Next'}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategory(DEFAULT_CATEGORY)}
            className={
              category === DEFAULT_CATEGORY
                ? 'rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white'
                : 'rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 dark:border-slate-700 dark:text-slate-300'
            }
          >
            Daily words
          </button>
          {vocabCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={
                category === c
                  ? 'rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white'
                  : 'rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:border-brand-300 dark:border-slate-700 dark:text-slate-300'
              }
            >
              {c}
            </button>
          ))}
        </div>
        <Button variant="accent" onClick={startQuiz}>
          <BookMarked className="h-4 w-4" /> Start quiz
        </Button>
      </div>

      {!premium && (
        <Badge variant="neutral">Free: {remaining}/{FREE_DAILY_LIMIT} quiz answers today</Badge>
      )}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {words.map((word) => (
          <VocabularyCard key={word.id} word={word} />
        ))}
      </div>
    </div>
  );
}