import Link from 'next/link';
import { ArrowRight, BookOpen, Compass } from 'lucide-react';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import CtaBanner from '@/components/seo/CtaBanner';
import Button from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { SeoPageData } from '@/content/types';

function labelForPart(part: string): string {
  return part.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * Hub d'examen (TOEFL /TOEIC /IELTS) : H1 + intro + grille de toutes les
 * sections + topics "deep dive" + liens croisés blogs/examens + CTA.
 */
export default function ExamHub({
  examLabel,
  examSlug,
  h1,
  intro,
  sections,
  topics,
  blogLinks,
  otherExams,
}: {
  examLabel: string;
  examSlug: string;
  h1: string;
  intro: string;
  sections: SeoPageData[];
  topics: SeoPageData[];
  blogLinks: { label: string; href: string }[];
  otherExams: { label: string; href: string }[];
}) {
  const cta = {
    title: 'Start with a free diagnostic',
    text: `Get your estimated ${examLabel} level in 10 minutes, then practise with a plan.`,
    href: '/diagnostic',
    label: 'Free diagnostic',
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: examLabel }]} />

      <header className="max-w-3xl">
        <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          <Compass className="h-4 w-4" /> English test preparation
        </p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
          {h1}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-500 dark:text-slate-400">{intro}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/diagnostic">
            <Button variant="accent" size="lg">
              Start free diagnostic <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href={`/${examSlug}/practice-test`}>
            <Button variant="secondary" size="lg">Practice test</Button>
          </Link>
        </div>
      </header>

      <section className="mt-12">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {examLabel} guides
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.slug}
              href={`/${examSlug}/${section.slug}`}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-lift dark:border-slate-800 dark:bg-slate-900"
            >
              <Badge variant="neutral" className="w-fit capitalize">
                {section.intent}
              </Badge>
              <h3 className="mt-4 text-lg font-extrabold text-slate-900 group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-300">
                {labelForPart(section.slug.split('/').pop() ?? section.slug)}
              </h3>
              <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {section.intro}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-600 dark:text-brand-400">
                Read the guide <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {topics.length > 0 && (
        <section className="mt-14">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Deep dives
          </h2>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Focused pages for specific question types and vocabulary themes.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/${examSlug}/${topic.slug}`}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-brand-300"
              >
                <span className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 shrink-0 text-brand-500" />
                  {labelForPart(topic.slug.split('/').pop() ?? topic.slug)}
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 group-hover:text-brand-500" />
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mt-14 rounded-3xl border border-slate-200 bg-slate-50/60 p-6 dark:border-slate-800 dark:bg-slate-900/40 sm:p-8">
        <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">From the blog</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {blogLinks.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="font-semibold text-slate-700 underline decoration-brand-300 underline-offset-4 transition hover:text-brand-700 dark:text-slate-200 dark:hover:text-brand-300"
            >
              {post.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">Other exams</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {otherExams.map((exam) => (
            <Link key={exam.href} href={exam.href}>
              <Button variant="secondary">{exam.label}</Button>
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner title={cta.title} text={cta.text} href={cta.href} label={cta.label} />
    </div>
  );
}