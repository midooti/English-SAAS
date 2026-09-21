import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Wrench } from 'lucide-react';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import CtaBanner from '@/components/seo/CtaBanner';
import Button from '@/components/ui/button';
import { seoMetadata } from '@/lib/seo';
import { tools } from '@/content/tools';

export const metadata: Metadata = seoMetadata({
  title: 'Free English Test Tools — Calculators, Tests & Study Plans | ScoreUp',
  description:
    'Free tools for TOEFL, TOEIC and IELTS: estimated score calculators, a quick English level test, study plan generators and a vocabulary test. No sign-up needed.',
  path: '/tools',
  overline: 'Free tools',
});

export default function ToolsIndex() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Free tools' }]} />

      <header className="max-w-3xl">
        <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          <Wrench className="h-4 w-4" /> Free tools
        </p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
          Tools that turn guesses into a plan
        </h1>
        <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">
          Quick, honest, free: estimate your score, test your vocabulary, or generate a study plan
          in a minute. No account, no spam.
        </p>
      </header>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-lift dark:border-slate-800 dark:bg-slate-900"
          >
            <h2 className="text-lg font-extrabold text-slate-900 group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-300">
              {tool.h1}
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {tool.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-600 dark:text-brand-400">
              Open the tool <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link href="/diagnostic">
          <Button variant="accent" size="lg">
            Or start with the full free diagnostic
          </Button>
        </Link>
      </div>

      <CtaBanner
        title="Tools estimate. Practice improves."
        text="Turn a single estimate into a real plan: daily focused practice, mock tests and progress tracking."
        href="/pricing"
        label="See the plans"
      />
    </div>
  );
}