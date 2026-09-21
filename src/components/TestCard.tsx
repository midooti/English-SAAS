import Link from 'next/link';
import {
  BookOpen,
  GraduationCap,
  Headphones,
  Languages,
  Mic,
  type LucideIcon,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { type ExamInfo } from '@/lib/exams';

const iconFor: Record<string, LucideIcon> = {
  toefl: Languages,
  toeic: BriefcaseIcon,
  ielts: BookOpen,
  cambridge: GraduationCap,
  duolingo: Mic,
};

function BriefcaseIcon(props: React.ComponentProps<typeof Languages>) {
  return <Languages {...props} />;
}

export default function TestCard({ exam }: { exam: ExamInfo }) {
  const Icon = iconFor[exam.key] ?? Languages;

  return (
    <Card className="group flex flex-col p-6 transition hover:-translate-y-1 hover:shadow-lift">
      <div className="flex items-start justify-between">
        <span
          className={cn(
            'flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-600 text-white shadow-sm'
          )}
        >
          <Icon className="h-6 w-6" />
        </span>
        {!exam.developed && <Badge variant="neutral">Coming soon</Badge>}
      </div>

      <h3 className="mt-5 text-xl font-extrabold text-slate-900 dark:text-white">{exam.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        {exam.tagline}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {exam.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-300"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-5">
        {exam.developed ? (
          <Link
            href="/diagnostic"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
          >
            <Headphones className="h-4 w-4" />
            Try {exam.name}
          </Link>
        ) : (
          <button
            type="button"
            disabled
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-400 dark:border-slate-700"
          >
            Coming soon
          </button>
        )}
      </div>
    </Card>
  );
}