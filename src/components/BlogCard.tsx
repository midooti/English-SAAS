import Link from 'next/link';
import { Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { BlogPost } from '@/content/types';

/** Carte d'article de blog (index + articles liés). */
export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-lift dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="flex items-center justify-between gap-2">
        <Badge variant="neutral">{post.category}</Badge>
        <span className="flex items-center gap-1 text-xs text-slate-400">
          <Clock className="h-3 w-3" /> {post.readingTimeMin} min
        </span>
      </div>
      <h3 className="mt-4 text-lg font-extrabold leading-snug text-slate-900 group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-300">
        {post.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        {post.excerpt}
      </p>
      <p className="mt-4 text-xs font-semibold text-slate-400">
        {post.author.name} · {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
      </p>
    </Link>
  );
}