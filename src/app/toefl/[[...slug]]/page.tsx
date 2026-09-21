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
  title: 'TOEFL Preparation & Practice — Free Guided Study | ScoreUp',
  description:
    'Prepare for the TOEFL with free guides for every section, original practice questions, a score calculator and a study plan.',
  h1: 'TOEFL Preparation & Practice',
  intro:
    'Work through the TOEFL section by section: how each part is scored, the exact question types, free practice, and a plan that fits your timeline.',
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
      overline: `${EXAM_NAME} preparation`,
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