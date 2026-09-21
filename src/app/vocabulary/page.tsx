import type { Metadata } from 'next';
import VocabApp from '@/components/VocabApp';
import { seoMetadata } from '@/lib/seo';

export const metadata: Metadata = seoMetadata({
  title: 'Vocabulary — Flashcards & Quizzes for TOEFL, TOEIC, IELTS | ScoreUp',
  description:
    'Build exam-ready vocabulary with flashcards and daily quizzes for TOEFL, TOEIC and IELTS.',
  path: '/vocabulary',
  overline: 'Word by word',
});

export default function VocabularyPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          Vocabulary
        </h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Learn words daily, review them, and test yourself with short quizzes.
        </p>
      </header>
      <VocabApp />
    </div>
  );
}