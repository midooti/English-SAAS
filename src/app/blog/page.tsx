import type { Metadata } from 'next';
import BlogCard from '@/components/BlogCard';
import CtaBanner from '@/components/seo/CtaBanner';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { seoMetadata } from '@/lib/seo';
import { blogCategories, blogPosts } from '@/content/blog';
import { cn } from '@/lib/utils';

export function generateMetadata({ searchParams }: { searchParams: { category?: string } }): Metadata {
  const category = searchParams.category;
  const base =
    category && blogCategories.includes(category as (typeof blogCategories)[number])
      ? `${category}`
      : 'English test preparation';
  return seoMetadata({
    title: category
      ? `${category} Articles — Learn English Test Strategies | ScoreUp`
      : 'Blog — English Test Preparation Strategies | ScoreUp',
    description: `Practical ${base.toLowerCase()} guides: TOEFL, TOEIC, IELTS, vocabulary, grammar and study plans. Written by teachers, free to read.`,
    path: '/blog',
    overline: 'Test prep strategies',
  });
}

export default function BlogIndex({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const active = blogCategories.includes(searchParams.category as (typeof blogCategories)[number])
    ? (searchParams.category as (typeof blogCategories)[number])
    : null;

  const posts = active ? blogPosts.filter((p) => p.category === active) : blogPosts;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />

      <header className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          ScoreUp blog
        </p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
          English test preparation, without the fluff
        </h1>
        <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">
          Strategy guides for TOEFL, TOEIC, IELTS, vocabulary and grammar — written by teachers,
          kept practical, and free to read.
        </p>
      </header>

      <div className="mt-8 flex flex-wrap gap-2">
        <a
          href="/blog"
          className={cn(
            'rounded-full px-4 py-1.5 text-sm font-semibold transition',
            !active
              ? 'bg-brand-600 text-white'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
          )}
        >
          All
        </a>
        {blogCategories.map((category) => (
          <a
            key={category}
            href={`/blog?category=${encodeURIComponent(category)}`}
            className={cn(
              'rounded-full px-4 py-1.5 text-sm font-semibold transition',
              active === category
                ? 'bg-brand-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
            )}
          >
            {category}
          </a>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {posts.length === 0 && (
        <p className="mt-10 text-slate-500 dark:text-slate-400">
          No articles in this category yet — check back soon.
        </p>
      )}

      <CtaBanner
        title="Reading helps. Practice changes the score."
        text="Get your estimated level free and start on a plan built around your weakest skill."
        href="/diagnostic"
        label="Get your free estimate"
      />
    </div>
  );
}