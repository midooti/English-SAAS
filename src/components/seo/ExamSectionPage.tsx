import Link from 'next/link';
import { Layers, Wand2 } from 'lucide-react';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import BlocksRenderer from '@/components/seo/BlocksRenderer';
import FaqSection from '@/components/seo/FaqSection';
import InternalLinks from '@/components/seo/InternalLinks';
import CtaBanner from '@/components/seo/CtaBanner';
import Button from '@/components/ui/button';
import type { SeoPageData } from '@/content/types';
import type { Crumb } from '@/lib/seo';

function labelForPart(part: string): string {
  return part.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * Template de page SEO pour les sections d'examen (TOEFL/TOEIC/IELTS).
 * Applique le gabarit 31.4 : H1, hiérarchie de titres, contenu original,
 * exemples, exercice interactif, FAQ, liens internes, CTA, structurée.
 */
export default function ExamSectionPage({
  data,
  examLabel,
  examSlug,
}: {
  data: SeoPageData;
  examLabel: string;
  examSlug: string;
}) {
  const parts = data.slug.split('/');
  const crumbs: Crumb[] = [{ label: 'Home', href: '/' }, { label: examLabel, href: `/${examSlug}` }];
  let acc = `/${examSlug}`;
  parts.slice(0, -1).forEach((part) => {
    acc = `${acc}/${part}`;
    crumbs.push({ label: labelForPart(part), href: acc });
  });
  crumbs.push({ label: labelForPart(parts[parts.length - 1]) });

  const cta = data.cta ?? {
    title: 'Start with a free diagnostic',
    text: 'Estimate your current English level in 10 minutes, then practise with a plan.',
    href: '/diagnostic',
    label: 'Free diagnostic',
  };

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={crumbs} />

      <header>
        <p className="text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          {examLabel} preparation
        </p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
          {data.h1}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-500 dark:text-slate-400">
          {data.intro}
        </p>
      </header>

      <div className="mt-8">
        <BlocksRenderer blocks={data.blocks} />
      </div>

      {data.tools && data.tools.length > 0 && (
        <section className="mt-12 rounded-3xl border border-slate-200 bg-slate-50/60 p-6 dark:border-slate-800 dark:bg-slate-900/40">
          <h2 className="flex items-center gap-2 text-xl font-extrabold text-slate-900 dark:text-white">
            <Wand2 className="h-5 w-5 text-brand-500" />
            Try it free
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {data.tools.map((tool) => (
              <Link key={tool.href} href={tool.href}>
                <Button variant="secondary">
                  <Layers className="h-4 w-4 text-brand-500" />
                  {tool.label}
                </Button>
              </Link>
            ))}
          </div>
        </section>
      )}

      <FaqSection items={data.faq} />

      <InternalLinks items={data.internalLinks} />

      <CtaBanner title={cta.title} text={cta.text} href={cta.href} label={cta.label} />
    </article>
  );
}