import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ExamSectionPage from '@/components/seo/ExamSectionPage';
import ExamHub from '@/components/seo/ExamHub';
import { findExamPage } from '@/lib/exam-seo-pages';
import { seoMetadata } from '@/lib/seo';
import { blogPosts } from '@/content/blog';
import { toeflSections, toeflTopics } from '@/content/exams';

type Props = { params: { slug?: string[] } };

const EXAM_SLUG = 'toefl';
const EXAM_NAME = 'TOEFL';
const HUB = {
  title: 'Préparation au TOEFL — Guides, entraînement et plan d\u2019étude | Prep-Anglais',
  description:
    'Préparez le TOEFL avec des guides gratuits pour chaque section, des questions d\u2019entraînement originales, un calculateur de score et un plan d\u2019étude.',
  h1: 'Préparation au TOEFL : méthode et pratique guidée',
  intro:
    'Travaillez le TOEFL section par section : mode de notation de chaque épreuve, types de questions exacts, entraînement gratuit et un plan adapté à votre échéance.',
};

export function generateStaticParams() {
  return [
    { slug: [] },
    ...[...toeflSections, ...toeflTopics].map((page) => ({ slug: page.slug.split('/') })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const parts = params.slug ?? [];
  if (parts.length === 0) {
    return seoMetadata({
      title: HUB.title,
      description: HUB.description,
      path: `/${EXAM_SLUG}`,
      overline: `Préparation ${EXAM_NAME}`,
    });
  }
  const data = findExamPage(EXAM_SLUG, parts.join('/'));
  if (!data) return {};
  return seoMetadata({
    title: data.title,
    description: data.description,
    path: `/${EXAM_SLUG}/${data.slug}`,
    overline: EXAM_NAME,
  });
}

export default function Page({ params }: Props) {
  const parts = params.slug ?? [];

  if (parts.length === 0) {
    return (
      <ExamHub
        examLabel={EXAM_NAME}
        examSlug={EXAM_SLUG}
        h1={HUB.h1}
        intro={HUB.intro}
        sections={toeflSections}
        topics={toeflTopics}
        blogLinks={blogPosts
          .filter((post) => post.category === 'TOEFL')
          .map((post) => ({ label: post.title, href: `/blog/${post.slug}` }))}
        otherExams={[
          { label: 'TOEIC', href: '/toeic' },
          { label: 'IELTS', href: '/ielts' },
          { label: 'Cambridge', href: '/cambridge' },
          { label: 'Duolingo English Test', href: '/duolingo-english-test' },
        ]}
      />
    );
  }

  const data = findExamPage(EXAM_SLUG, parts.join('/'));
  if (!data) notFound();
  return <ExamSectionPage data={data} examLabel={EXAM_NAME} examSlug={EXAM_SLUG} />;
}