'use client';

import { useMemo, useState } from 'react';
import { Calculator } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { trackEvent } from '@/lib/analytics';
import ShareControls from '@/components/tools/ShareControls';

type Mode = 'toefl' | 'toeic' | 'ielts';

/** Convertisseur d'accuracies en bande estimée (0–9, non officielle). */
export default function ScoreCalculator({ mode }: { mode: Mode }) {
  return mode === 'ielts' ? <IeltsAverage /> : <AccuracyCalculator mode={mode} />;
}

function AccuracyCalculator({ mode }: { mode: 'toefl' | 'toeic' }) {
  const [correct, setCorrect] = useState(0);
  const [total, setTotal] = useState(10);

  const accuracy = total > 0 ? Math.min(100, Math.round((correct / total) * 100)) : 0;
  const band = 3 + (accuracy / 100) * 3;
  const toeicEstimate = mode === 'toeic' ? 200 + Math.round((accuracy / 100) * 790) : null;

  const result = useMemo(() => {
    if (total <= 0 || correct < 0 || correct > total) return null;
    return { accuracy, band: band.toFixed(1), toeicEstimate };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [correct, total]);

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <p className="text-sm font-semibold text-ink dark:text-white">
        <Calculator className="mr-1 inline h-4 w-4 text-brand-500" />
        Calculateur de score estimé {mode === 'toefl' ? 'TOEFL' : 'TOEIC'}
      </p>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-ink-soft dark:text-slate-300">Bonnes réponses</span>
          <input
            type="number"
            min={0}
            value={correct}
            onChange={(e) => setCorrect(Math.max(0, Number(e.target.value)))}
            className="mt-1.5 h-11 w-full rounded-lg border border-slate-200 px-3 text-sm dark:border-slate-700 dark:bg-slate-950 dark:text-white"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-ink-soft dark:text-slate-300">Total de questions</span>
          <input
            type="number"
            min={1}
            value={total}
            onChange={(e) => setTotal(Math.max(1, Number(e.target.value)))}
            className="mt-1.5 h-11 w-full rounded-lg border border-slate-200 px-3 text-sm dark:border-slate-700 dark:bg-slate-950 dark:text-white"
          />
        </label>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={accuracy}
        onChange={(e) => setCorrect(Math.round((Number(e.target.value) / 100) * total))}
        className="mt-6 w-full accent-brand-600"
        aria-label="Précision"
      />

      {result && (
        <div className="mt-6 rounded-lg bg-slate-50 p-5 text-center dark:bg-slate-800">
          <p className="micro-label">Score estimé</p>
          <p className="mt-2 font-serif text-5xl tracking-tight text-brand-700 dark:text-brand-300">{result.band}</p>
          <p className="mt-2 text-sm text-ink-soft dark:text-slate-300">
            sur la base de {accuracy} % de bonnes réponses
          </p>
          {mode === 'toeic' && (
            <p className="mt-2 text-sm font-semibold text-ink dark:text-slate-200">
              ≈ Équivalent TOEIC : {result.toeicEstimate} / 990
            </p>
          )}
          <p className="mt-3 text-xs text-ink-faint dark:text-slate-500">
            Estimation non officielle, uniquement pour la planification.
          </p>
        </div>
      )}

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <Link href="/diagnostic">
          <Button variant="accent" onClick={() => trackEvent('tool_used', { tool: `${mode}-score-calculator` })}>
            Mesurez-le précisément — diagnostic gratuit
          </Button>
        </Link>
        {result && (
          <ShareControls
            text={`${mode.toUpperCase()} : mon score estimé est de ${result.band} sur 9 (${accuracy} % de bonnes réponses, calculateur Prep-Anglais)`}
          />
        )}
      </div>
    </div>
  );
}

function IeltsAverage() {
  const [sections, setSections] = useState({ listening: 6, reading: 6, writing: 6, speaking: 6 });

  const set = (key: keyof typeof sections, value: number) =>
    setSections((s) => ({ ...s, [key]: value }));

  const average = (Object.values(sections) as number[]).reduce((a, b) => a + b, 0) / 4;
  const overall = (Math.round(average * 2) / 2).toFixed(1);

  const rows: [keyof typeof sections, string][] = [
    ['listening', 'Listening'],
    ['reading', 'Reading'],
    ['writing', 'Writing'],
    ['speaking', 'Speaking'],
  ];

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <p className="text-sm font-semibold text-ink dark:text-white">
        <Calculator className="mr-1 inline h-4 w-4 text-brand-500" />
        Calculateur de bande globale IELTS
      </p>
      <p className="mt-2 text-sm text-ink-soft dark:text-slate-400">
        Saisissez vos bandes par section (0–9, par demi-point). La bande globale est la moyenne arrondie.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {rows.map(([key, label]) => (
          <label key={key} className="block">
            <span className="text-sm font-semibold text-ink-soft dark:text-slate-300">{label}</span>
            <input
              type="number"
              min={0}
              max={9}
              step={0.5}
              value={sections[key]}
              onChange={(e) => set(key, Math.max(0, Math.min(9, Number(e.target.value))))}
              className="mt-1.5 h-11 w-full rounded-lg border border-slate-200 px-3 text-sm dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
          </label>
        ))}
      </div>

      <div className="mt-6 rounded-lg bg-slate-50 p-5 text-center dark:bg-slate-800">
        <p className="micro-label">Bande globale</p>
        <p className="mt-2 font-serif text-5xl tracking-tight text-brand-700 dark:text-brand-300">{overall}</p>
        <p className="mt-2 text-sm text-ink-soft dark:text-slate-300">
          moyenne {average.toFixed(2).replace('.', ',')} (arrondie à la 0,5 la plus proche)
        </p>
      </div>

      <div className={cn('mt-6 flex flex-wrap items-center justify-between gap-3')}>
        <Link href="/diagnostic">
          <Button variant="accent" onClick={() => trackEvent('tool_used', { tool: 'ielts-score-calculator' })}>
            Mesurez-le précisément — diagnostic gratuit
          </Button>
        </Link>
        <ShareControls text={`Mon score IELTS estimé est de ${overall} (bande globale, calculateur Prep-Anglais)`} />
      </div>
    </div>
  );
}