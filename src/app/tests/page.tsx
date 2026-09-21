import type { Metadata } from 'next';
import TestCard from '@/components/TestCard';
import { exams } from '@/lib/exams';
import { seoMetadata } from '@/lib/seo';

export const metadata: Metadata = seoMetadata({
  title: 'English Tests — Compare TOEFL, TOEIC, IELTS & More | ScoreUp',
  description:
    'Compare TOEFL, TOEIC, IELTS, Cambridge and Duolingo English Test preparation with ScoreUp.',
  path: '/tests',
  overline: 'Choose your test',
});

export default function TestsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          Choose your test
        </h1>
        <p className="mt-3 text-slate-500 dark:text-slate-400">
          TOEFL and TOEIC are fully available today. The other exams are being prepared and will
          unlock soon.
        </p>
      </header>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {exams.map((exam) => (
          <TestCard key={exam.key} exam={exam} />
        ))}
      </div>
    </div>
  );
}