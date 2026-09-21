import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import BlocksRenderer from '@/components/seo/BlocksRenderer';
import FaqSection from '@/components/seo/FaqSection';
import CtaBanner from '@/components/seo/CtaBanner';
import ScoreCalculator from '@/components/tools/ScoreCalculator';
import EnglishLevelTest from '@/components/tools/EnglishLevelTest';
import StudyPlanGenerator from '@/components/tools/StudyPlanGenerator';
import VocabularyTest from '@/components/tools/VocabularyTest';
import { seoMetadata } from '@/lib/seo';
import { getTool, tools } from '@/content/tools';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tool = getTool(params.slug);
  if (!tool) return {};
  return seoMetadata({
    title: tool.title,
    description: tool.description,
    path: `/tools/${tool.slug}`,
    overline: 'Outil gratuit',
  });
}

function ToolApp({ slug }: { slug: string }) {
  switch (slug) {
    case 'toefl-score-calculator':
    case 'toeic-score-calculator':
    case 'ielts-score-calculator':
      return <ScoreCalculator mode={slug.startsWith('toeic') ? 'toeic' : slug.startsWith('ielts') ? 'ielts' : 'toefl'} />;
    case 'toefl-study-plan-generator':
    case 'toeic-study-plan-generator':
      return <StudyPlanGenerator exam={slug.startsWith('toeic') ? 'toeic' : 'toefl'} />;
    case 'english-level-test':
      return <EnglishLevelTest />;
    case 'english-vocabulary-test':
      return <VocabularyTest />;
    default:
      return null;
  }
}

export default function ToolPage({ params }: Props) {
  const tool = getTool(params.slug);
  if (!tool) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={[{ label: 'Accueil', href: '/' }, { label: 'Outils gratuits', href: '/tools' }, { label: tool.h1 }]} />

      <header>
        <p className="micro-label">Outil gratuit — sans inscription</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl dark:text-white">
          {tool.h1}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft dark:text-slate-400">{tool.intro}</p>
      </header>

      <div className="mt-8">
        <ToolApp slug={tool.slug} />
      </div>

      <div className="mt-12">
        <BlocksRenderer blocks={tool.blocks} />
      </div>

      <FaqSection items={tool.faq} />

      <CtaBanner title={tool.cta.title} text={tool.cta.text} href={tool.cta.href} label={tool.cta.label} />
    </div>
  );
}