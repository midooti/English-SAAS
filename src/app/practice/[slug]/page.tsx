import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import BlocksRenderer from '@/components/seo/BlocksRenderer';
import FaqSection from '@/components/seo/FaqSection';
import CtaBanner from '@/components/seo/CtaBanner';
import EmbeddedPractice from '@/components/tools/EmbeddedPractice';
import { getPracticePage, practicePages } from '@/content/practice';
import { seoMetadata } from '@/lib/seo';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return practicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = getPracticePage(params.slug);
  if (!page) return {};
  return seoMetadata({
    title: page.title,
    description: page.description,
    path: `/practice/${page.slug}`,
    overline: `Free ${page.exam} practice`,
  });
}

export default function PracticePage({ params }: Props) {
  const page = getPracticePage(params.slug);
  if (!page) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Practice', href: '/practice' },
          { label: `${page.exam.toUpperCase()} ${page.skill}` },
        ]}
      />

      <header>
        <p className="text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          Free {page.exam.toUpperCase()} practice — no account
        </p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
          {page.h1}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-500 dark:text-slate-400">{page.intro}</p>
      </header>

      <div className="mt-8">
        <BlocksRenderer blocks={page.blocks} />
      </div>

      <div className="my-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900 sm:p-8">
        <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">Try it now</h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Three live questions, instant explanations, free and unlimited.
        </p>
        <div className="mt-6">
          <EmbeddedPractice exam={page.exam} skill={page.skill} />
        </div>
      </div>

      <FaqSection items={page.faq} />

      <CtaBanner
        title="Want this every day — with limits you can level up?"
        text="The full practice library trains every question type, tracks progress and keeps daily practice honest."
        href="/practice"
        label="Open the practice app"
      />
    </div>
  );
}