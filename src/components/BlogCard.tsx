import Link from 'next/link';
import { Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { BlogPost } from '@/content/types';

/** Libellés français des catégories (le slug/valeur sous-jacent reste inchangé). */
export function categoryLabel(category: string): string {
  const map: Record<string, string> = {
    TOEFL: 'TOEFL',
    TOEIC: 'TOEIC',
    IELTS: 'IELTS',
    'English Vocabulary': 'Vocabulaire anglais',
    'English Grammar': 'Grammaire anglaise',
    'Study Tips': 'Conseils d\u2019étude',
    'University English': 'Anglais universitaire',
  };
  return map[category] ?? category;
}

/** Carte d'article de blog (index + articles liés). */
export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="flex items-center justify-between gap-2">
        <Badge variant="neutral">{categoryLabel(post.category)}</Badge>
        <span className="flex items-center gap-1 text-xs text-ink-faint">
          <Clock className="h-3 w-3" /> {post.readingTimeMin} min de lecture
        </span>
      </div>
      <h3 className="mt-4 font-serif text-xl leading-snug tracking-tight text-ink group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-300">
        {post.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft dark:text-slate-400">
        {post.excerpt}
      </p>
      <p className="mt-4 text-xs font-semibold text-ink-faint dark:text-slate-500">
        {post.author.name} ·{' '}
        {new Date(post.publishedAt).toLocaleDateString('fr-FR', { year: 'numeric', month: 'short', day: 'numeric' })}
      </p>
    </Link>
  );
}