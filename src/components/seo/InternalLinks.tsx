import Link from 'next/link';
import { ArrowUpRight, Compass } from 'lucide-react';

/** Grille de liens internes — #31.5 Internal linking réutilisable. */
export default function InternalLinks({
  items,
  title = 'Keep learning',
}: {
  items: { label: string; href: string }[];
  title?: string;
}) {
  if (!items.length) return null;
  return (
    <section className="mt-12">
      <h2 className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        <Compass className="h-6 w-6 text-brand-500" />
        {title}
      </h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex items-center justify-between gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-4 font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-brand-300"
          >
            {link.label}
            <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-300 transition group-hover:text-brand-500" />
          </Link>
        ))}
      </div>
    </section>
  );
}