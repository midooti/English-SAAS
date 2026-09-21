import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ExamSectionPage from '@/components/seo/ExamSectionPage';
import ExamHub from '@/components/seo/ExamHub';
import { findExamPage } from '@/lib/exam-seo-pages';
import { seoMetadata } from '@/lib/seo';
import { blogPosts } from '@/content/blog';
import { ieltsSections } from '@/content/exams';

type Props = { params: { slug?: string[] } };

const EXAM_SLUG = 'ielts';
const EXAM_NAME = 'IELTS';
const HUB = {
  title: 'Préparation à l\u2019IELTS — Guides, entraînement et plan d\u2019étude | Prep-Anglais',
  description:
    'Préparez l\u2019IELTS académique ou général : guides de format, objectifs de bande, entraînement gratuit et un plan d\u2019étude pour chaque échéance.',
  h1: 'Préparation à l\u2019IELTS : méthode et pratique guidée',
  intro:
    'Travaillez l\u2019IELTS section par section : le fonctionnement de la bande de 0 à 9, les types de questions exacts, l\u2019entraînement gratuit et un plan adapté à votre date d\u2019examen.',
};

export function generateStaticParams() {
  return [
    { slug: [] },
    ...ieltsSections.map((page) => ({ slug: page.slug.split('/') })),
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
        sections={ieltsSections}
        topics={[]}
        blogLinks={blogPosts
          .filter((post) => post.category === 'IELTS')
          .map((post) => ({ label: post.title, href: `/blog/${post.slug}` }))}
        otherExams={[
          { label: 'TOEFL', href: '/toefl' },
          { label: 'TOEIC', href: '/toeic' },
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