import Link from 'next/link';
import { Clock, FileText, Lock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { MockTest } from '@/lib/mockTests';

export default function MockTestCard({ test }: { test: MockTest }) {
  return (
    <Card className="group flex flex-col p-6 transition hover:-translate-y-1 hover:shadow-lift">
      <div className="flex items-center justify-between">
        <Badge variant={test.premium ? 'accent' : 'success'}>
          {test.premium ? 'Premium' : 'Free'}
        </Badge>
        <Badge variant="neutral">{test.difficulty}</Badge>
      </div>

      <h3 className="mt-5 text-xl font-extrabold text-slate-900 dark:text-white">{test.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        {test.description}
      </p>

      <dl className="mt-5 flex items-center gap-5 text-sm text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-1.5">
          <Clock className="h-4 w-4" />
          {test.durationMin} min
        </div>
        <div className="flex items-center gap-1.5">
          <FileText className="h-4 w-4" />
          {test.totalQuestions} questions
        </div>
      </dl>

      <Link
        href={`/mock-tests/${test.slug}`}
        className={cn(
          'mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition',
          test.premium
            ? 'bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-slate-800 dark:text-white'
            : 'bg-brand-600 text-white shadow-sm hover:bg-brand-700'
        )}
      >
        {test.premium && <Lock className="h-4 w-4" />}
        {test.premium ? 'Unlock with Premium' : 'Start mock test'}
      </Link>
    </Card>
  );
}