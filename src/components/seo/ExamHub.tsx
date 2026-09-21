import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import CtaBanner from '@/components/seo/CtaBanner';
import Button from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { SeoPageData } from '@/content/types';

function labelForPart(part: string): string {
  return part.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

const intentLabel: Record<string, string> = {
  informational: 'Information',
  practice: 'Entraînement',
  'problem-solving': 'Résolution guidée',
  score: 'Score',
  planning: 'Planification',
  vocabulary: 'Vocabulaire',
};

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
    title: 'Commencez par un diagnostic gratuit',
    text: `Obtenez votre niveau ${examLabel} estimé en 10 minutes, puis entraînez-vous avec un plan.`,
    href: '/diagnostic',
    label: 'Diagnostic gratuit',
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={[{ label: 'Accueil', href: '/' }, { label: examLabel }]} />

      <header className="max-w-3xl">
        <p className="micro-label">Préparation {examLabel}</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl dark:text-white">
          {h1}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft dark:text-slate-400">{intro}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/diagnostic">
            <Button variant="primary" size="lg">
              Démarrer un diagnostic gratuit <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href={`/${examSlug}/practice-test`}>
            <Button variant="secondary" size="lg">Test blanc</Button>
          </Link>
        </div>
      </header>

      <section className="mt-12">
        <h2 className="font-serif text-2xl tracking-tight text-ink dark:text-white">
          Guides {examLabel}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.slug}
              href={`/${examSlug}/${section.slug}`}
              className="group flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900"
            >
              <Badge variant="neutral" className="w-fit">
                {intentLabel[section.intent] ?? section.intent}
              </Badge>
              <h3 className="mt-4 font-serif text-xl tracking-tight text-ink group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-300">
                {labelForPart(section.slug.split('/').pop() ?? section.slug)}
              </h3>
              <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-soft dark:text-slate-400">
                {section.intro}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 dark:text-brand-300">
                Lire le guide <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {topics.length > 0 && (
        <section className="mt-14">
          <h2 className="font-serif text-2xl tracking-tight text-ink dark:text-white">
            Fiches approfondies
          </h2>
          <p className="mt-2 text-ink-soft dark:text-slate-400">
            Des pages ciblées sur les types de questions et les thèmes de vocabulaire.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/${examSlug}/${topic.slug}`}
                className="group flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-5 py-4 font-semibold text-ink transition hover:border-brand-300 hover:text-brand-700 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:text-brand-300"
              >
                <span>{labelForPart(topic.slug.split('/').pop() ?? topic.slug)}</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-ink-faint group-hover:text-brand-500 dark:text-slate-600" />
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mt-14 rounded-lg border border-slate-200 bg-slate-50/60 p-6 dark:border-slate-800 dark:bg-slate-900/40 sm:p-8">
        <h2 className="font-serif text-xl tracking-tight text-ink dark:text-white">Sur le blog</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {blogLinks.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="font-semibold text-ink underline decoration-brand-300 underline-offset-4 transition hover:text-brand-700 dark:text-slate-200 dark:hover:text-brand-300"
            >
              {post.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl tracking-tight text-ink dark:text-white">Autres examens</h2>
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