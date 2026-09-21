'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CalendarDays, Sparkles } from 'lucide-react';
import Button from '@/components/ui/button';
import { trackEvent } from '@/lib/analytics';

const focusCycle = ['Reading practice', 'Listening practice', 'Vocabulary + review', 'Speaking practice', 'Writing practice', 'Mixed skills review'] as const;

/**
 * Générateur de plan d'étude — crée un calendrier hebdo réaliste.
 * Estimateur simple, transparent, adapté au nombre de semaines.
 */
export default function StudyPlanGenerator({ exam }: { exam: 'toefl' | 'toeic' }) {
  const [weeks, setWeeks] = useState(8);
  const [minutes, setMinutes] = useState(30);

  const mockWeeks = [Math.max(2, Math.floor(weeks / 2)), weeks];
  const restDay = 6; // Sunday index (0-based Mon-Sun)

  function dayFocus(slot: number) {
    // Cycle 6 jours ouvrables (Lun-Sam), le dimanche est un jour de repos.
    return focusCycle[slot % focusCycle.length];
  }

  const plan = Array.from({ length: weeks }, (_, w) => {
    const week = w + 1;
    const focal =
      exam === 'toefl'
        ? ['Speaking + Reading', 'Writing + Listening', 'Vocabulary sprint'][week % 3]
        : ['Part 2 Question-Response', 'Part 5 Grammar', 'Part 7 Documents'][week % 3];
    return {
      week,
      focal,
      mock: mockWeeks.includes(week),
    };
  });

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <p className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
        <CalendarDays className="h-4 w-4 text-brand-500" />
        Your {exam.toUpperCase()} study plan
      </p>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
            Weeks before the exam: {weeks}
          </span>
          <input
            type="range"
            min={2}
            max={16}
            value={weeks}
            onChange={(e) => setWeeks(Number(e.target.value))}
            className="mt-2 w-full accent-brand-600"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
            Daily practice time: {minutes} min
          </span>
          <input
            type="range"
            min={10}
            max={60}
            step={5}
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
            className="mt-2 w-full accent-brand-600"
          />
        </label>
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
        <table className="w-full min-w-[480px] bg-white text-left text-sm dark:bg-slate-900">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold text-slate-500 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300">
              <th className="px-4 py-3">Week</th>
              <th className="px-4 py-3">Weekly focus</th>
              <th className="px-4 py-3">Daily rotation</th>
              <th className="px-4 py-3">Milestone</th>
            </tr>
          </thead>
          <tbody>
            {plan.map((w) => (
              <tr
                key={w.week}
                className={w.week % 2 ? 'border-t border-slate-100 dark:border-slate-800' : 'border-t border-slate-100 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-800/40'}
              >
                <td className="px-4 py-3 font-bold text-slate-900 dark:text-white">{w.week}</td>
                <td className="px-4 py-3 text-slate-700 dark:text-slate-200">{w.focal}</td>
                <td className="px-4 py-3 text-slate-500 dark:text-slate-300">
                  {minutes} min/day, rest on Sunday
                </td>
                <td className="px-4 py-3">
                  {w.mock ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-brand-600/10 px-2.5 py-1 text-xs font-bold text-brand-700 dark:text-brand-300">
                      <Sparkles className="h-3 w-3" /> Mock test
                    </span>
                  ) : (
                    <span className="text-xs text-slate-400">{dayFocus(w.week)}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <Link href="/diagnostic">
          <Button variant="accent" onClick={() => trackEvent('tool_used', { tool: `${exam}-study-plan` })}>
            Start with the free diagnostic
          </Button>
        </Link>
        <p className="text-xs text-slate-400">
          Plans are guidance, not guarantees — adjust with your mock results.
        </p>
      </div>
    </div>
  );
}