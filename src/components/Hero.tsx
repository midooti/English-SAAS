import Link from 'next/link';
import { ArrowRight, BookOpen, Headphones, Play } from 'lucide-react';
import Button from '@/components/ui/button';
import { demoTarget, demoTodayPlan } from '@/lib/demo';
import ProgressBar from '@/components/ProgressBar';
import { cn } from '@/lib/utils';

/** Aperçu du dashboard côté hero (statique, données de démo). */
export function DashboardPreview() {
  const planIcons = {
    Reading: BookOpen,
    Vocabulary: Headphones,
    Listening: Play,
  } as const;

  return (
    <div
      className="animate-fade-up relative mx-auto mt-16 w-full max-w-md rounded-3xl border border-white/10 bg-white/95 p-6 shadow-2xl backdrop-blur dark:bg-slate-900/95 dark:border-slate-800"
      style={{ animationDelay: '150ms' }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Target</p>
          <p className="text-lg font-extrabold text-slate-900 dark:text-white">{demoTarget.exam}</p>
        </div>
        <div className="flex gap-6">
          <div>
            <p className="text-xs text-slate-400">Current</p>
            <p className="text-xl font-extrabold text-brand-600 dark:text-brand-400">
              {demoTarget.currentBand}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Target</p>
            <p className="text-xl font-extrabold text-accent-600">{demoTarget.targetBand}</p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Progress</span>
        <span className="rounded-full bg-brand-600/10 px-2 py-0.5 text-xs font-bold text-brand-700 dark:text-brand-300">
          {demoTarget.progressPercent}%
        </span>
      </div>
      <ProgressBar value={demoTarget.progressPercent} label="" className="mt-2" />

      <p className="mt-6 text-sm font-bold text-slate-900 dark:text-white">Today&apos;s study</p>
      <ul className="mt-3 space-y-2">
        {demoTodayPlan.slice(0, 3).map((task) => {
          const Icon = planIcons[task.skill as keyof typeof planIcons] ?? Play;
          return (
            <li
              key={task.skill}
              className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2.5 dark:bg-slate-800"
            >
              <span className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                <Icon className="h-4 w-4 text-brand-500" />
                {task.skill}
              </span>
              <span className="text-xs font-semibold text-slate-400">{task.minutes} min</span>
            </li>
          );
        })}
      </ul>

      <div
        className={cn(
          'pointer-events-none absolute -right-4 -top-4 hidden h-24 w-24 rounded-2xl bg-gradient-to-br from-accent-500 to-brand-600 opacity-20 blur-xl sm:block'
        )}
        aria-hidden="true"
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-50 via-white to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-500/15 to-accent-500/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-20 text-center sm:px-6 sm:pt-28 lg:px-8">
        <div
          className="animate-fade-up flex justify-center"
          style={{ animationDelay: '0ms' }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold text-brand-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-brand-300">
            Free diagnostic — get an estimated score in 10 minutes
          </span>
        </div>

        <h1
          className="animate-fade-up mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-6xl dark:text-white"
          style={{ animationDelay: '60ms' }}
        >
          Get the English score{' '}
          <span className="bg-gradient-to-r from-brand-600 to-accent-600 bg-clip-text text-transparent">
            you need.
          </span>
        </h1>

        <p
          className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl dark:text-slate-300"
          style={{ animationDelay: '120ms' }}
        >
          Personalized preparation for TOEFL, TOEIC, IELTS and more. Practice smarter, track your
          progress, and reach your target score.
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ animationDelay: '180ms' }}
        >
          <Link href="/diagnostic" className="w-full sm:w-auto">
            <Button size="lg" variant="accent" className="w-full text-base sm:w-auto">
              Start for free
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="#how-it-works" className="w-full sm:w-auto">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              See how it works
            </Button>
          </Link>
        </div>

        <DashboardPreview />
      </div>
    </section>
  );
}