import { CalendarDays, Clock, ListOrdered, UserRound } from 'lucide-react';
import Link from 'next/link';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import BlocksRenderer from '@/components/seo/BlocksRenderer';
import FaqSection from '@/components/seo/FaqSection';
import CtaBanner from '@/components/seo/CtaBanner';
import JsonLd from '@/components/seo/JsonLd';
import BlogCard from '@/components/BlogCard';
import { Badge } from '@/components/ui/badge';
import { articleJsonLd, ogImageUrl } from '@/lib/seo';
import type { BlogPost } from '@/content/types';

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function BlogArticle({ post, related }: { post: BlogPost; related: BlogPost[] }) {
  const path = `/blog/${post.slug}`;
  const headings = post.blocks.filter((b) => b.kind === 'h2') as { text: string }[];
  const hasUpdated = Boolean(post.updatedAt) && post.updatedAt !== post.publishedAt;

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <JsonLd
        data={articleJsonLd({
          headline: post.title,
          title: post.title,
          description: post.description,
          path,
          publishedAt: post.publishedAt,
          updatedAt: post.updatedAt,
          author: post.author,
          imageUrl: ogImageUrl({ title: post.title, overline: `ScoreUp · ${post.category}` }),
          category: post.category,
        })}
      />

      <Breadcrumbs
        items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: post.title }]}
      />

      <header className="mt-4">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <Link href={`/blog?category=${encodeURIComponent(post.category)}`}>
            <Badge variant="neutral">{post.category}</Badge>
          </Link>
          {hasUpdated && (
            <span className="inline-flex items-center gap-1 rounded-full bg-accent-600/10 px-2.5 py-1 text-xs font-bold text-accent-700 dark:text-accent-300">
              Updated {formatDate(post.updatedAt!)}
            </span>
          )}
        </div>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
          {post.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <UserRound className="h-4 w-4 text-brand-500" /> {post.author.name}
          </span>
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4 text-brand-500" /> {formatDate(post.publishedAt)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-brand-500" /> {post.readingTimeMin} min read
          </span>
        </div>
      </header>

      {headings.length >= 3 && (
        <nav className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/60 p-5 dark:border-slate-800 dark:bg-slate-900/40">
          <p className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
            <ListOrdered className="h-4 w-4 text-brand-500" /> In this article
          </p>
          <ol className="mt-3 space-y-2 text-sm">
            {headings.map((h) => (
              <li key={h.text}>
                <a
                  href={`#${slugify(h.text)}`}
                  className="text-slate-600 underline underline-offset-4 decoration-slate-300 transition hover:text-brand-700 hover:decoration-brand-400 dark:text-slate-300"
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      <div className="mt-8">
        <BlocksRenderer blocks={post.blocks} />
      </div>

      {post.faq && post.faq.length > 0 && <FaqSection items={post.faq} className="mt-12" />}

      {related.length > 0 && (
        <section className="mt-14 border-t border-slate-200 pt-10 dark:border-slate-800">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Keep reading</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}

      <CtaBanner
        title="Learn by doing, not just reading"
        text="Turn this article into a plan: get your estimated level free and start focused practice in minutes."
        href="/diagnostic"
        label="Get your free estimate"
        className="mt-12"
      />
    </article>
  );
}