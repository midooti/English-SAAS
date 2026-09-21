import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbJsonLd, type Crumb } from '@/lib/seo';

/**
 * Breadcrumbs + BreadcrumbList JSON-LD.
 * Éléments : label + href optionnel (généralement dernier = page courante).
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(items)} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="transition hover:text-brand-600 hover:underline dark:hover:text-brand-400"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={
                      isLast
                        ? 'font-semibold text-slate-800 dark:text-white'
                        : 'text-slate-500 dark:text-slate-400'
                    }
                  >
                    {item.label}
                  </span>
                )}
                {!isLast && <ChevronRight className="h-3.5 w-3.5 text-slate-300 dark:text-slate-600" />}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}