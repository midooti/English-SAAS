import type { Metadata } from 'next';
import MockTestCard from '@/components/MockTestCard';
import { mockTests } from '@/lib/mockTests';

export const metadata: Metadata = {
  title: 'Mock Tests',
  description:
    'Timed mock tests for TOEFL and TOEIC with estimated practice scores. Free and Premium simulations.',
};

export default function MockTestsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          Mock tests
        </h1>
        <p className="mt-3 text-slate-500 dark:text-slate-400">
          Simulate your exam under real timing. Results are estimated practice scores, not official.
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