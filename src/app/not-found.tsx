import Link from 'next/link';
import { GraduationCap } from 'lucide-react';
import Button from '@/components/ui/button';

export const metadata = {
  title: 'Page not found',
  robots: { index: false } as const,
};

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-600 text-white">
        <GraduationCap className="h-8 w-8" />
      </span>
      <p className="mt-6 text-6xl font-extrabold text-slate-200 dark:text-slate-700">404</p>
      <h1 className="mt-2 text-2xl font-extrabold text-slate-900 dark:text-white">
        This page doesn&apos;t exist
      </h1>
      <p className="mt-2 text-slate-500 dark:text-slate-400">
        Let&apos;s get you back on track toward your English goal.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/">
          <Button variant="primary">Back to home</Button>
        </Link>
        <Link href="/diagnostic">
          <Button variant="secondary">Take the diagnostic</Button>
        </Link>
      </div>
    </section>
  );
}