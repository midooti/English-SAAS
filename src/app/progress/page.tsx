import type { Metadata } from 'next';
import Link from 'next/link';
import { requireUser } from '@/lib/auth';
import { createSupabaseServer } from '@/lib/supabase';
import { HAS_SUPABASE } from '@/lib/config';
import { seoMetadata } from '@/lib/seo';
import Progress from '@/components/ui/progress';

export const metadata: Metadata = seoMetadata({
  title: 'Progression | Prep-Anglais',
  description: 'Suivez vos scores estimés, vos compétences et votre régularité dans Prep-Anglais.',
  path: '/progress',
  noindex: true,
  overline: 'Progression',
});

const skills = [
  { skill: 'Compréhension écrite', label: 'À évaluer', pct: 0 },
  { skill: 'Compréhension orale', label: 'À évaluer', pct: 0 },
  { skill: 'Expression écrite', label: 'À évaluer', pct: 0 },
  { skill: 'Expression orale', label: 'À évaluer', pct: 0 },
  { skill: 'Vocabulaire', label: 'À évaluer', pct: 0 },
  { skill: 'Gestion du temps', label: 'À évaluer', pct: 0 },
];

type Stats = {
  overallBand: number | null;
  accuracy: number | null;
  questionsCompleted: number;
  streak: number;
};

async function loadStats(userId: string): Promise<Stats> {
  const empty: Stats = { overallBand: null, accuracy: null, questionsCompleted: 0, streak: 0 };
  if (!HAS_SUPABASE) return empty;
  try {
    const supabase = createSupabaseServer();
    const [progress, streak] = await Promise.all([
      supabase
        .from('user_progress')
        .select('overall_band, accuracy, questions_completed')
        .eq('user_id', userId)
        .maybeSingle(),
      supabase
        .from('streaks')
        .select('current_streak')
        .eq('user_id', userId)
        .maybeSingle(),
    ]);
    return {
      overallBand: progress.data?.overall_band ?? null,
      accuracy: progress.data?.accuracy ?? null,
      questionsCompleted: progress.data?.questions_completed ?? 0,
      streak: streak.data?.current_streak ?? 0,
    };
  } catch {
    return empty;
  }
}

export default async function ProgressPage() {
  const user = await requireUser();
  const stats = await loadStats(user.id);
  const hasData = stats.questionsCompleted > 0;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-6 dark:border-slate-800">
        <div>
          <p className="micro-label">Progression</p>
          <h1 className="mt-2 font-serif text-4xl tracking-tight text-ink dark:text-white">
            Votre progression
          </h1>
        </div>
        <Link
          href="/practice"
          className="inline-flex h-11 items-center justify-center rounded-lg bg-brand-700 px-5 text-sm font-semibold text-white transition hover:bg-brand-800"
        >
          S&apos;entraîner
        </Link>
      </header>

      <section className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          { label: 'NIVEAU ESTIMÉ', value: stats.overallBand !== null ? stats.overallBand.toFixed(1) : '—' },
          { label: 'PRÉCISION', value: stats.accuracy !== null ? `${Math.round(stats.accuracy)} %` : '—' },
          { label: 'QUESTIONS TRAITÉES', value: String(stats.questionsCompleted) },
          { label: 'SÉRIE EN COURS', value: `${stats.streak} jour${stats.streak > 1 ? 's' : ''}` },
        ].map((c) => (
          <div key={c.label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900">
            <p className="micro-label">{c.label}</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-ink dark:text-white">{c.value}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
          <h2 className="font-serif text-2xl tracking-tight text-ink dark:text-white">Compétences</h2>
          <ul className="mt-5 space-y-4">
            {skills.map((s) => (
              <li key={s.skill}>
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-sm font-semibold text-ink dark:text-slate-100">{s.skill}</p>
                  <p className="text-xs text-ink-faint dark:text-slate-500">{s.label}</p>
                </div>
                <Progress value={s.pct} className="mt-2" />
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
          <h2 className="font-serif text-2xl tracking-tight text-ink dark:text-white">
            Points à consolider
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft dark:text-slate-400">
            {hasData
              ? 'Vos prochains exercices cibleront automatiquement les compétences les plus fragiles.'
              : 'Aucune donnée pour le moment : passez le diagnostic gratuit pour obtenir vos premiers scores estimés.'}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ink-soft dark:text-slate-400">
            <li>→ Diagnostic : lecture, écoute, vocabulaire.</li>
            <li>→ Exercices quotidiens : 20 à 30 minutes recommandées.</li>
            <li>→ Examen blanc : une fois par semaine, chronométré.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}