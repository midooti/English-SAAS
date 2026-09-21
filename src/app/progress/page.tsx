import type { Metadata } from 'next';
import Link from 'next/link';
import { Flame, TrendingUp, Sparkles } from 'lucide-react';
import ScoreCard from '@/components/ScoreCard';
import SkillCard from '@/components/SkillCard';
import DashboardCard from '@/components/DashboardCard';
import LineChart from '@/components/LineChart';
import BarChart from '@/components/BarChart';
import Button from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  demoTarget,
  demoSkills,
  demoScoreHistory,
  demoStats,
  demoWeakTopics,
  demoStrongTopics,
} from '@/lib/demo';

export const metadata: Metadata = {
  title: 'Progress',
  description: 'Track your estimated score progression, skills and accuracy over time.',
};

export default function ProgressPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Your progress
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Demo data — connect your account to see real results.
          </p>
        </div>
        <Link href="/practice">
          <Button variant="primary">Practice now</Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        <ScoreCard label="Overall band" value={demoStats.overallBand.toFixed(1)} hint="estimated" accent />
        <ScoreCard label="Accuracy" value={`${demoStats.accuracy}%`} hint="last 30 days" />
        <ScoreCard label="Questions" value={`${demoStats.questionsCompleted}`} hint="completed" />
        <ScoreCard label="Streak" value={`${demoStats.currentStreak} days`} hint="keep going!" />
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {/* Score history */}
        <DashboardCard
          title="Estimated score over time"
          action={
            <Badge variant="accent">
              <Sparkles className="h-3 w-3" /> target {demoTarget.targetBand.toFixed(1)}
            </Badge>
          }
        >
          <LineChart
            values={demoScoreHistory}
            labels={['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5']}
          />
          <p className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-emerald-600">
            <TrendingUp className="h-4 w-4" /> Growing steadily — keep the habit.
          </p>
        </DashboardCard>

        {/* Skills */}
        <DashboardCard title="Skills">
          <div className="space-y-4">
            {demoSkills.map((s) => (
              <SkillCard key={s.skill} skill={s.skill} band={s.band} barClassName={s.color} />
            ))}
          </div>
          <p className="mt-5 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
            <Flame className="h-4 w-4 text-brand-500" /> Speaking needs the most attention this week.
          </p>
        </DashboardCard>
      </div>

      {/* Topics */}
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <DashboardCard title="Weak topics">
          <BarChart
            items={demoWeakTopics.map((t) => ({ label: t.topic, value: t.accuracy }))}
          />
        </DashboardCard>
        <DashboardCard title="Strong topics">
          <BarChart
            items={demoStrongTopics.map((t) => ({ label: t.topic, value: t.accuracy }))}
          />
        </DashboardCard>
      </div>
    </div>
  );
}