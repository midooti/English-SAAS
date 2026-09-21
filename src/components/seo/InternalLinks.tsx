import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

/** Grille de liens internes — #31.5 Internal linking réutilisable. */
export default function InternalLinks({
  items,
  title = 'Pour continuer à apprendre',
}: {
  items: { label: string; href: string }[];
  title?: string;
}) {
  if (!items.length) return null;
  return (
    <section className="mt-12">
      <h2 className="font-serif text-2xl leading-tight tracking-tight text-ink dark:text-white">
        {title}
      </h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-5 py-4 font-semibold text-ink transition hover:border-brand-300 hover:text-brand-700 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:text-brand-300"
          >
            {link.label}
            <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-faint transition group-hover:text-brand-500 dark:text-slate-600" />
          </Link>
        ))}
      </div>
    </section>
  );
}