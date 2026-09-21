import Link from 'next/link';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import BlocksRenderer from '@/components/seo/BlocksRenderer';
import FaqSection from '@/components/seo/FaqSection';
import CtaBanner from '@/components/seo/CtaBanner';
import JsonLd from '@/components/seo/JsonLd';
import BlogCard, { categoryLabel } from '@/components/BlogCard';
import { Badge } from '@/components/ui/badge';
import { articleJsonLd, ogImageUrl } from '@/lib/seo';
import type { BlogPost } from '@/content/types';

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
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
          imageUrl: ogImageUrl({ title: post.title, overline: `Prep-Anglais · ${categoryLabel(post.category)}` }),
          category: post.category,
        })}
      />

      <Breadcrumbs
        items={[{ label: 'Accueil', href: '/' }, { label: 'Blog', href: '/blog' }, { label: post.title }]}
      />

      <header className="mt-4">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <Link href={`/blog?category=${encodeURIComponent(post.category)}`}>
            <Badge variant="neutral">{categoryLabel(post.category)}</Badge>
          </Link>
          {hasUpdated && (
            <span className="inline-flex items-center gap-1 rounded-full bg-accent-600/10 px-2.5 py-1 text-xs font-semibold text-accent-700 dark:text-accent-300">
              Mis à jour le {formatDate(post.updatedAt!)}
            </span>
          )}
        </div>
        <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl dark:text-white">
          {post.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-faint dark:text-slate-400">
          <span className="flex items-center gap-1.5">{post.author.name}</span>
          <span className="flex items-center gap-1.5">{formatDate(post.publishedAt)}</span>
          <span className="flex items-center gap-1.5">{post.readingTimeMin} min de lecture</span>
        </div>
      </header>

      {headings.length >= 3 && (
        <nav className="mt-8 rounded-lg border border-slate-200 bg-slate-50/60 p-5 dark:border-slate-800 dark:bg-slate-900/40">
          <p className="micro-label">Dans cet article</p>
          <ol className="mt-3 space-y-2 text-sm">
            {headings.map((h) => (
              <li key={h.text}>
                <a
                  href={`#${slugify(h.text)}`}
                  className="text-ink-soft underline underline-offset-4 decoration-slate-300 transition hover:text-brand-700 hover:decoration-brand-400 dark:text-slate-300"
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
          <h2 className="font-serif text-2xl tracking-tight text-ink dark:text-white">Pour aller plus loin</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}

      <CtaBanner
        title="Apprendre en pratiquant, pas seulement en lisant"
        text="Transformez cet article en plan : obtenez gratuitement votre niveau estimé et commencez un entraînement ciblé en quelques minutes."
        href="/diagnostic"
        label="Obtenir mon estimation gratuite"
        className="mt-12"
      />
    </article>
  );
}