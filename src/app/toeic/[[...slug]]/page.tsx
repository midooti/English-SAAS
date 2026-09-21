import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ExamSectionPage from '@/components/seo/ExamSectionPage';
import ExamHub from '@/components/seo/ExamHub';
import { findExamPage } from '@/lib/exam-seo-pages';
import { seoMetadata } from '@/lib/seo';
import { blogPosts } from '@/content/blog';
import { toeicSections, toeicTopics } from '@/content/exams';

type Props = { params: { slug?: string[] } };

const EXAM_SLUG = 'toeic';
const EXAM_NAME = 'TOEIC';
const HUB = {
  title: 'TOEIC Preparation & Practice — Free Guided Study | ScoreUp',
  description:
    'Prepare for the TOEIC with free guides for Listening and Reading, original practice questions, a score calculator and a study plan.',
  h1: 'TOEIC Preparation & Practice',
  intro:
    'Work through the TOEIC section by section: how the test is scored, the exact question types in Listening and Reading, free practice, and a plan that fits your timeline.',
};

export function generateStaticParams() {
  return [
    { slug: [] },
    ...[...toeicSections, ...toeicTopics].map((page) => ({ slug: page.slug.split('/') })),
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
        sections={toeicSections}
        topics={toeicTopics}
        blogLinks={blogPosts
          .filter((post) => post.category === 'TOEIC')
          .map((post) => ({ label: post.title, href: `/blog/${post.slug}` }))}
        otherExams={[
          { label: 'TOEFL', href: '/toefl' },
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