import type { Metadata } from 'next';
import PracticeApp from '@/components/PracticeApp';
import { seoMetadata } from '@/lib/seo';

export const metadata: Metadata = seoMetadata({
  title: 'Practice — Daily TOEFL, TOEIC & IELTS Exercises | ScoreUp',
  description:
    'Practice TOEFL, TOEIC, IELTS and more with original exercises, instant explanations and XP.',
  path: '/practice',
  overline: 'Daily practice',
});

export default function PracticePage() {
  return (
    <div className="mx-auto max-w-3xl">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          Practice
        </h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Pick your exam, skill and difficulty. Free plan includes a limited number of questions a
          day.
        </p>
      </header>
      <PracticeApp />
    </div>
  );
}