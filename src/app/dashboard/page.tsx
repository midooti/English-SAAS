import type { Metadata } from 'next';
import Link from 'next/link';
import { requireUser, getProfile } from '@/lib/auth';
import { createSupabaseServer } from '@/lib/supabase';
import { HAS_SUPABASE } from '@/lib/config';
import { seoMetadata } from '@/lib/seo';
import Progress from '@/components/ui/progress';

export const metadata: Metadata = seoMetadata({
  title: 'Mon espace de préparation | Prep-Anglais',
  description: 'Votre espace de préparation Prep-Anglais : objectifs, programme du jour et progression.',
  path: '/dashboard',
  noindex: true,
  overline: 'Espace de préparation',
});

const planToday = [
  { skill: 'Compréhension écrite', activity: '2 textes + 8 questions', minutes: 12, href: '/practice' },
  { skill: 'Vocabulaire', activity: '10 cartes mémoire', minutes: 8, href: '/vocabulary' },
  { skill: 'Compréhension orale', activity: '1 enregistrement + 5 questions', minutes: 10, href: '/practice' },
];

const skillRows = [
  { skill: 'Compréhension écrite', level: 'Intermédiaire (B1)', pct: 0 },
  { skill: 'Compréhension orale', level: 'Intermédiaire (B1)', pct: 0 },
  { skill: 'Expression écrite', level: 'À évaluer', pct: 0 },
  { skill: 'Expression orale', level: 'À évaluer', pct: 0 },
  { skill: 'Vocabulaire', level: 'Acquis régulier', pct: 0 },
  { skill: 'Gestion du temps', level: 'À développer', pct: 0 },
];

type DashData = {
  overallBand: number | null;
  questionsCompleted: number;
  accuracy: number | null;
};

async function loadProgress(userId: string): Promise<DashData> {
  if (!HAS_SUPABASE) return { overallBand: null, questionsCompleted: 0, accuracy: null };
  try {
    const supabase = createSupabaseServer();
    const { data } = await supabase
      .from('user_progress')
      .select('overall_band, questions_completed, accuracy')
      .eq('user_id', userId)
      .maybeSingle();
    if (!data) return { overallBand: null, questionsCompleted: 0, accuracy: null };
    return {
      overallBand: data.overall_band,
      questionsCompleted: data.questions_completed ?? 0,
      accuracy: data.accuracy,
    };
  } catch {
    return { overallBand: null, questionsCompleted: 0, accuracy: null };
  }
}

export default async function DashboardPage() {
  const user = await requireUser();
  const profile = await getProfile(user);
  const progress = await loadProgress(user.id);

  const targetExamLabel: Record<string, string> = {
    toefl: 'TOEFL',
    toeic: 'TOEIC',
    ielts: 'IELTS',
    cambridge: 'Cambridge English',
    duolingo: 'Duolingo English Test',
  };

  const examCible = profile?.target_exam ? targetExamLabel[profile.target_exam] ?? profile.target_exam : 'À définir';
  const scoreCible = profile?.target_score || 'À définir';
  const scoreEstime = progress.overallBand !== null ? `≈ ${progress.overallBand.toFixed(1)}` : 'À évaluer';
  const progression = progress.accuracy !== null ? `${Math.round(progress.accuracy)} %` : 'À évaluer';

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-6 dark:border-slate-800">
        <div>
          <p className="micro-label">Espace de préparation</p>
          <h1 className="mt-2 font-serif text-4xl tracking-tight text-ink dark:text-white">
            Bonjour, {user.name}
          </h1>
        </div>
        <div className="flex gap-3">
          <Link
            href="/diagnostic"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-brand-700 px-5 text-sm font-semibold text-white transition hover:bg-brand-800"
          >
            Lancer le diagnostic
          </Link>
          <Link
            href="/practice"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 text-sm font-semibold text-ink transition hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          >
            S&apos;entraîner
          </Link>
        </div>
      </header>

      <section className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          { label: 'EXAMEN CIBLE', value: examCible, hint: 'modifiable dans Mon compte' },
          { label: 'SCORE CIBLE', value: scoreCible, hint: 'votre objectif' },
          { label: 'SCORE ESTIMÉ', value: scoreEstime, hint: 'après vos exercices' },
          { label: 'PROGRESSION', value: progression, hint: 'précision moyenne' },
        ].map((c) => (
          <div key={c.label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900">
            <p className="micro-label">{c.label}</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-ink dark:text-white">{c.value}</p>
            <p className="mt-1 text-xs text-ink-faint dark:text-slate-500">{c.hint}</p>
          </div>
        ))}
      </section>

      <div className="mt-8 grid gap-8 lg:grid-cols-5">
        <section className="lg:col-span-3">
          <h2 className="font-serif text-2xl tracking-tight text-ink dark:text-white">
            Programme du jour
          </h2>
          <p className="mt-1 text-sm text-ink-soft dark:text-slate-400">
            Environ 30 minutes, structuré par compétence.
          </p>
          <div className="mt-5 overflow-x-auto rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
            <table className="w-full min-w-[420px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-ink-soft dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-400">
                  <th scope="col" className="px-5 py-3 font-semibold">Compétence</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Activité</th>
                  <th scope="col" className="px-5 py-3 text-right font-semibold">Durée</th>
                </tr>
              </thead>
              <tbody>
                {planToday.map((row) => (
                  <tr key={row.skill} className="border-t border-slate-100 dark:border-slate-800">
                    <th scope="row" className="px-5 py-3.5 font-semibold text-ink dark:text-slate-100">
                      {row.skill}
                    </th>
                    <td className="px-5 py-3.5 text-ink-soft dark:text-slate-400">{row.activity}</td>
                    <td className="px-5 py-3.5 text-right">
                      <Link
                        href={row.href}
                        className="font-semibold text-brand-700 hover:underline dark:text-brand-300"
                      >
                        {row.minutes} min →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="lg:col-span-2">
          <h2 className="font-serif text-2xl tracking-tight text-ink dark:text-white">
            Évolution des compétences
          </h2>
          <p className="mt-1 text-sm text-ink-soft dark:text-slate-400">
            Niveaux estimés, mis à jour après chaque exercice.
          </p>
          <ul className="mt-5 space-y-4">
            {skillRows.map((row) => (
              <li key={row.skill}>
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-sm font-semibold text-ink dark:text-slate-100">{row.skill}</p>
                  <p className="text-xs text-ink-faint dark:text-slate-500">{row.level}</p>
                </div>
                <Progress value={row.pct} className="mt-2" />
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-ink-faint dark:text-slate-500">
            {progress.questionsCompleted > 0
              ? `${progress.questionsCompleted} questions traitées.`
              : 'Passez le diagnostic pour obtenir vos premiers scores estimés.'}
          </p>
        </section>
      </div>

      {user.premium && (
        <p className="mt-10 border-t border-slate-200 pt-5 text-sm text-ink-soft dark:border-slate-800 dark:text-slate-400">
          Vous êtes en formule Premium. Gérez votre abonnement depuis{' '}
          <Link href="/account" className="font-semibold text-brand-700 hover:underline dark:text-brand-300">
            Mon compte
          </Link>
          .
        </p>
      )}
    </div>
  );
}