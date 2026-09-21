import type { Metadata } from 'next';
import MockTestCard from '@/components/MockTestCard';
import { mockTests } from '@/lib/mockTests';
import { seoMetadata } from '@/lib/seo';

export const metadata: Metadata = seoMetadata({
  title: 'Examens blancs TOEFL et TOEIC chronométrés | Prep-Anglais',
  description:
    'Simulez votre examen dans les conditions du jour J : examens blancs TOEFL et TOEIC chronométrés, scores estimés et corrigés.',
  path: '/mock-tests',
  overline: 'Examens blancs',
});

export default function MockTestsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <header className="mx-auto max-w-2xl text-center">
        <p className="micro-label">Examens blancs</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl dark:text-white">
          Simuler l&apos;examen dans les conditions du jour J
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft dark:text-slate-400">
          Des exercices chronométrés, corrigés à la fin. Les résultats sont des scores
          estimés — jamais des notes officielles.
        </p>
      </header>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {mockTests.map((test) => (
          <MockTestCard key={test.slug} test={test} />
        ))}
      </div>
    </div>
  );
}