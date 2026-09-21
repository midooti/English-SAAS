import type { Metadata } from 'next';
import BlogCard, { categoryLabel } from '@/components/BlogCard';
import CtaBanner from '@/components/seo/CtaBanner';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { seoMetadata } from '@/lib/seo';
import { blogCategories, blogPosts } from '@/content/blog';
import { cn } from '@/lib/utils';

export function generateMetadata({ searchParams }: { searchParams: { category?: string } }): Metadata {
  const category = searchParams.category;
  const valid = category && blogCategories.includes(category as (typeof blogCategories)[number]);
  const base = valid ? (category as string) : 'Préparation aux examens d\u2019anglais';
  return seoMetadata({
    title: valid
      ? `${categoryLabel(base)} — Guides et stratégies d\u2019examen | Prep-Anglais`
      : 'Blog — Stratégies de préparation aux examens d\u2019anglais | Prep-Anglais',
    description: `Des guides pratiques de préparation aux examens d\u2019anglais : TOEFL, TOEIC, IELTS, vocabulaire, grammaire et plans d\u2019étude. Rédigés par des enseignants, gratuits à lire.`,
    path: '/blog',
    overline: 'Stratégies de préparation',
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
      <Breadcrumbs items={[{ label: 'Accueil', href: '/' }, { label: 'Blog' }]} />

      <header className="max-w-3xl">
        <p className="micro-label">Le blog Prep-Anglais</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl dark:text-white">
          La préparation aux examens d&apos;anglais, sans fioritures
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft dark:text-slate-400">
          Des guides de stratégie pour TOEFL, TOEIC, IELTS, le vocabulaire et la grammaire —
          rédigés par des enseignants, restés pratiques et gratuits.
        </p>
      </header>

      <div className="mt-8 flex flex-wrap gap-2">
        <a
          href="/blog"
          className={cn(
            'rounded-full px-4 py-1.5 text-sm font-semibold transition',
            !active
              ? 'bg-brand-700 text-white'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
          )}
        >
          Tous
        </a>
        {blogCategories.map((category) => (
          <a
            key={category}
            href={`/blog?category=${encodeURIComponent(category)}`}
            className={cn(
              'rounded-full px-4 py-1.5 text-sm font-semibold transition',
              active === category
                ? 'bg-brand-700 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
            )}
          >
            {categoryLabel(category)}
          </a>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {posts.length === 0 && (
        <p className="mt-10 text-ink-soft dark:text-slate-400">
          Aucun article dans cette catégorie pour le moment — revenez bientôt.
        </p>
      )}

      <CtaBanner
        title="Lire aide. Pratiquer fait progresser."
        text="Obtenez gratuitement votre niveau estimé et démarrez un plan construit autour de votre compétence la plus fragile."
        href="/diagnostic"
        label="Obtenir mon estimation gratuite"
      />
    </div>
  );
}