import Link from 'next/link';
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
  const crumbs: Crumb[] = [{ label: 'Accueil', href: '/' }, { label: examLabel, href: `/${examSlug}` }];
  let acc = `/${examSlug}`;
  parts.slice(0, -1).forEach((part) => {
    acc = `${acc}/${part}`;
    crumbs.push({ label: labelForPart(part), href: acc });
  });
  crumbs.push({ label: labelForPart(parts[parts.length - 1]) });

  const cta = data.cta ?? {
    title: 'Commencez par un diagnostic gratuit',
    text: 'Estimez votre niveau d\u2019anglais actuel en 10 minutes, puis entraînez-vous avec un plan.',
    href: '/diagnostic',
    label: 'Diagnostic gratuit',
  };

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={crumbs} />

      <header>
        <p className="micro-label">Préparation {examLabel}</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl dark:text-white">
          {data.h1}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft dark:text-slate-400">
          {data.intro}
        </p>
      </header>

      <div className="mt-8">
        <BlocksRenderer blocks={data.blocks} />
      </div>

      {data.tools && data.tools.length > 0 && (
        <section className="mt-12 rounded-lg border border-slate-200 bg-slate-50/60 p-6 dark:border-slate-800 dark:bg-slate-900/40">
          <h2 className="font-serif text-2xl tracking-tight text-ink dark:text-white">
            À essayer gratuitement
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {data.tools.map((tool) => (
              <Link key={tool.href} href={tool.href}>
                <Button variant="secondary">{tool.label}</Button>
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