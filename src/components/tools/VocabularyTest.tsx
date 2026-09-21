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
        prompt: `Que signifie « ${word.word} » ?`,
        options,
        correctIndex: options.indexOf(word.definition),
        explanation: `${word.definition}. « ${word.example} »`,
      };
    });
  }, []);

  if (done) {
    const percent = Math.round((correct / TOTAL) * 100);
    const verdict =
      correct >= 8 ? 'Un vocabulaire académique étendu.'
      : correct >= 6 ? 'Solide — construisez ensuite des familles de mots thématiques.'
      : 'Commencez par des familles de mots hebdomadaires, en contexte.';
    return (
      <div className="rounded-lg border border-slate-200 bg-white p-8 text-center shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <p className="micro-label">Résultat du vocabulaire</p>
        <p className="mt-2 font-serif text-6xl tracking-tight text-brand-700 dark:text-brand-300">{correct}/{TOTAL}</p>
        <p className="mt-3 max-w-sm text-sm text-ink-soft dark:text-slate-400">{verdict}</p>
        <div className="mt-4 flex justify-center">
          <ShareControls text={`J\u2019ai obtenu ${correct}/${TOTAL} au test de vocabulaire gratuit Prep-Anglais`} />
        </div>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <LinkButton>
            S&apos;entraîner au vocabulaire gratuitement <ArrowRight className="h-4 w-4" />
          </LinkButton>
          <Button
            variant="secondary"
            onClick={() => {
              setIndex(0);
              setCorrect(0);
              setDone(false);
            }}
          >
            <RotateCcw className="h-4 w-4" /> Recommencer
          </Button>
        </div>
      </div>
    );
  }

  const current = questions[index];

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-4 flex items-center justify-between text-sm font-semibold text-ink-soft dark:text-slate-400">
        <span>Question {index + 1} sur {TOTAL}</span>
        <button
          type="button"
          className="text-brand-700 hover:underline dark:text-brand-300"
          onClick={() => {
            setIndex(0);
            setCorrect(0);
          }}
        >
          Recommencer
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
          {index >= TOTAL - 1 ? 'Voir mon score' : 'Suivant'}
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