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
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <p className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
        <Calculator className="h-4 w-4 text-brand-500" />
        {mode === 'toefl' ? 'TOEFL' : 'TOEIC'} estimated score calculator
      </p>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Correct answers</span>
          <input
            type="number"
            min={0}
            value={correct}
            onChange={(e) => setCorrect(Math.max(0, Number(e.target.value)))}
            className="mt-1.5 h-11 w-full rounded-xl border border-slate-200 px-3 text-sm dark:border-slate-700 dark:bg-slate-950 dark:text-white"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Total questions</span>
          <input
            type="number"
            min={1}
            value={total}
            onChange={(e) => setTotal(Math.max(1, Number(e.target.value)))}
            className="mt-1.5 h-11 w-full rounded-xl border border-slate-200 px-3 text-sm dark:border-slate-700 dark:bg-slate-950 dark:text-white"
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
        aria-label="Accuracy"
      />

      {result && (
        <div className="mt-6 rounded-2xl bg-slate-50 p-5 text-center dark:bg-slate-800">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Estimated score</p>
          <p className="mt-1 text-5xl font-extrabold text-brand-600 dark:text-brand-400">{result.band}</p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">based on {accuracy}% accuracy</p>
          {mode === 'toeic' && (
            <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-slate-200">
              ≈ TOEIC equivalent: {result.toeicEstimate} / 990
            </p>
          )}
          <p className="mt-3 text-xs text-slate-400">Non-official estimate for planning only.</p>
        </div>
      )}

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <Link href="/diagnostic">
          <Button variant="accent" onClick={() => trackEvent('tool_used', { tool: `${mode}-score-calculator` })}>
            Measure it properly — free diagnostic
          </Button>
        </Link>
        {result && (
          <ShareControls
            text={`My estimated ${mode.toUpperCase()} score is ${result.band} (${accuracy}% accuracy demo calculator)`}
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
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <p className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
        <Calculator className="h-4 w-4 text-brand-500" />
        IELTS overall band calculator
      </p>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        Enter your four section bands (0–9 in half points). The overall band is the rounded average.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {rows.map(([key, label]) => (
          <label key={key} className="block">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{label}</span>
            <input
              type="number"
              min={0}
              max={9}
              step={0.5}
              value={sections[key]}
              onChange={(e) => set(key, Math.max(0, Math.min(9, Number(e.target.value))))}
              className="mt-1.5 h-11 w-full rounded-xl border border-slate-200 px-3 text-sm dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
          </label>
        ))}
      </div>

      <div className="mt-6 rounded-2xl bg-slate-50 p-5 text-center dark:bg-slate-800">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Overall band</p>
        <p className="mt-1 text-5xl font-extrabold text-brand-600 dark:text-brand-400">{overall}</p>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">
          average {average.toFixed(2)} (rounded to nearest 0.5)
        </p>
      </div>

      <div className={cn('mt-6 flex flex-wrap items-center justify-between gap-3')}>
        <Link href="/diagnostic">
          <Button variant="accent" onClick={() => trackEvent('tool_used', { tool: 'ielts-score-calculator' })}>
            Measure it properly — free diagnostic
          </Button>
        </Link>
        <ShareControls text={`My estimated IELTS overall band is ${overall} (calculator estimate)`} />
      </div>
    </div>
  );
}