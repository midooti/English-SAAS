'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CalendarDays } from 'lucide-react';
import Button from '@/components/ui/button';
import { trackEvent } from '@/lib/analytics';

const focusCycle = ['Compréhension écrite', 'Compréhension orale', 'Vocabulaire + révision', 'Expression orale', 'Expression écrite', 'Révision tous types'] as const;

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
        ? ['Expression orale + lecture', 'Rédaction + écoute', 'Session vocabulaire'][week % 3]
        : ['Partie 2 Question-réponse', 'Partie 5 Grammaire', 'Partie 7 Documents'][week % 3];
    return {
      week,
      focal,
      mock: mockWeeks.includes(week),
    };
  });

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <p className="text-sm font-semibold text-ink dark:text-white">
        <CalendarDays className="mr-1 inline h-4 w-4 text-brand-500" />
        Votre plan d&apos;étude {exam.toUpperCase()}
      </p>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-ink-soft dark:text-slate-300">
            Semaines avant l&apos;examen : {weeks}
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
          <span className="text-sm font-semibold text-ink-soft dark:text-slate-300">
            Temps de pratique quotidien : {minutes} min
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

      <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
        <table className="w-full min-w-[480px] bg-white text-left text-sm dark:bg-slate-900">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400">
              <th className="px-4 py-3">Semaine</th>
              <th className="px-4 py-3">Focus hebdomadaire</th>
              <th className="px-4 py-3">Rotation quotidienne</th>
              <th className="px-4 py-3">Jalon</th>
            </tr>
          </thead>
          <tbody>
            {plan.map((w) => (
              <tr
                key={w.week}
                className={w.week % 2 ? 'border-t border-slate-100 dark:border-slate-800' : 'border-t border-slate-100 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-800/40'}
              >
                <td className="px-4 py-3 font-semibold text-ink dark:text-white">{w.week}</td>
                <td className="px-4 py-3 text-ink-soft dark:text-slate-300">{w.focal}</td>
                <td className="px-4 py-3 text-ink-soft dark:text-slate-300">
                  {minutes} min/jour, repos le dimanche
                </td>
                <td className="px-4 py-3">
                  {w.mock ? (
                    <span className="inline-flex items-center rounded-full bg-brand-600/10 px-2.5 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300">
                      Test blanc
                    </span>
                  ) : (
                    <span className="text-xs text-ink-faint dark:text-slate-500">{dayFocus(w.week)}</span>
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
            Commencer par le diagnostic gratuit
          </Button>
        </Link>
        <p className="text-xs text-ink-faint dark:text-slate-500">
          Les plans sont des repères, pas des garanties — ajustez-les avec vos résultats de tests blancs.
        </p>
      </div>
    </div>
  );
}