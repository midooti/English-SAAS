import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CalendarCheck, Check } from 'lucide-react';
import ScoreCard from '@/components/ScoreCard';
import SkillCard from '@/components/SkillCard';
import DashboardCard from '@/components/DashboardCard';
import LineChart from '@/components/LineChart';
import Button from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  demoTarget,
  demoSkills,
  demoScoreHistory,
  demoTodayPlan,
  demoStats,
} from '@/lib/demo';
import { getCurrentUser } from '@/lib/auth';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Your ScoreUp study dashboard with today’s plan and progress.',
  robots: { index: false } as const,
};

export default async function DashboardPage() {
  const user = await getCurrentUser();
  const name = user?.name ?? 'Student';

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-brand-600 dark:text-brand-400">
            Your study dashboard
          </p>
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Welcome back, {name}
          </h1>
          {user?.premium && (
            <Badge variant="accent" className="mt-2">
              Premium member
            </Badge>
          )}
        </div>
        <Link href="/diagnostic">
          <Button variant="accent" size="lg">
            New diagnostic test <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      {/* Target progress */}
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        <ScoreCard
          label={`Your ${demoTarget.exam} target`}
          value={demoTarget.targetBand.toFixed(1)}
          hint={`current ${demoTarget.currentBand.toFixed(1)} estimated`}
          accent
        />
        <ScoreCard label="Progress" value={`${demoTarget.progressPercent}%`} hint="of the way there" />
        <ScoreCard label="Accuracy" value={`${demoStats.accuracy}%`} hint="last 30 days" />
        <ScoreCard label="Study time" value={`${demoStats.studyMinutes} min`} hint="total minutes" />
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-5">
        {/* Score history */}
        <div className="lg:col-span-3">
          <DashboardCard
            title="Estimated score"
            action={
              <Link
                href="/progress"
                className="text-sm font-semibold text-brand-600 hover:underline dark:text-brand-400"
              >
                View details →
              </Link>
            }
          >
            <LineChart
              values={demoScoreHistory}
              labels={['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5']}
            />
          </DashboardCard>
        </div>

        {/* Today's plan */}
        <div className="lg:col-span-2">
          <DashboardCard
            title="Today’s plan"
            action={
              <CalendarCheck className="h-5 w-5 text-brand-500" />
            }
          >
            <ul className="space-y-3">
              {demoTodayPlan.map((item) => (
                <li
                  key={item.skill}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 px-3 py-2.5 dark:border-slate-800"
                >
                  <span
                    className={
                      item.done
                        ? 'flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white'
                        : 'flex h-6 w-6 items-center justify-center rounded-full border-2 border-slate-300 dark:border-slate-600'
                    }
                  >
                    {item.done && <Check className="h-3.5 w-3.5" />}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-slate-800 dark:text-white">
                      {item.skill}
                    </p>
                    <p className="text-xs capitalize text-slate-400">
                      {item.difficulty} · {item.minutes} min
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/practice" className="mt-5 block">
              <Button variant="primary" className="w-full">
                Continue studying
              </Button>
            </Link>
          </DashboardCard>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-10">
        <DashboardCard title="Skill levels (estimated)">
          <div className="grid gap-4 sm:grid-cols-2">
            {demoSkills.map((s) => (
              <SkillCard key={s.skill} skill={s.skill} band={s.band} barClassName={s.color} />
            ))}
          </div>
        </DashboardCard>
      </div>
    </div>
  );
}