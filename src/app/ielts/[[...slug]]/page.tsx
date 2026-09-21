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
  title: 'IELTS Preparation & Practice — Free Guided Study | ScoreUp',
  description:
    'Prepare for IELTS Academic or General Training: format guides, band targets, free practice and a study plan for every timeline.',
  h1: 'IELTS Preparation & Practice',
  intro:
    'Work through IELTS section by section: how the 0–9 band works, the exact question types, free practice, and a plan that fits your exam date.',
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