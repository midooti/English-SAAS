import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import MockTestApp from '@/components/MockTestApp';
import { getMockTest, mockTests } from '@/lib/mockTests';
import { getCurrentUser } from '@/lib/auth';

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return mockTests.map((test) => ({ slug: test.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const test = getMockTest(params.slug);
  if (!test) return { title: 'Mock test not found' };
  return {
    title: test.title,
    description: test.description,
  };
}

export default async function MockTestPage({ params }: { params: Params }) {
  const test = getMockTest(params.slug);
  if (!test) notFound();

  const user = await getCurrentUser();
  const canAccessPremium = Boolean(user?.premium);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <MockTestApp test={test} canAccessPremium={canAccessPremium} />
    </div>
  );
}