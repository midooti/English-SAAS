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
    overline: 'Entraînement gratuit',
  });
}

export default function PracticePage({ params }: Props) {
  const page = getPracticePage(params.slug);
  if (!page) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <Breadcrumbs
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Exercices', href: '/practice' },
          { label: `${page.exam.toUpperCase()} ${page.skill}` },
        ]}
      />

      <header>
        <p className="micro-label">Exercices {page.exam.toUpperCase()} — sans compte</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl dark:text-white">
          {page.h1}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft dark:text-slate-400">{page.intro}</p>
      </header>

      <div className="mt-8">
        <BlocksRenderer blocks={page.blocks} />
      </div>

      <div className="card-academic my-12 p-6 sm:p-8">
        <h2 className="font-serif text-2xl tracking-tight text-ink dark:text-white">
          Essayer maintenant
        </h2>
        <p className="mt-1 text-sm text-ink-soft dark:text-slate-400">
          Trois questions en conditions réelles, explications immédiates, gratuit et sans limite.
        </p>
        <div className="mt-6">
          <EmbeddedPractice exam={page.exam} skill={page.skill} />
        </div>
      </div>

      <FaqSection items={page.faq} />

      <CtaBanner
        title="Retrouvez cet entraînement chaque jour ?"
        text="La bibliothèque complète d\u2019exercices couvre tous les types de questions, suit votre progression et ancre la régularité."
        href="/practice"
        label="Ouvrir les exercices"
      />
    </div>
  );
}