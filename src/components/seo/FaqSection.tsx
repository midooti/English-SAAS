import { Plus } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';
import { faqJsonLd } from '@/lib/seo';
import { cn } from '@/lib/utils';
import type { SeoFaq } from '@/content/types';

/** Section FAQ avec structurée FAQPage (uniquement quand pertinente). */
export default function FaqSection({
  items,
  title = 'Frequently asked questions',
  className,
}: {
  items: SeoFaq[];
  title?: string;
  className?: string;
}) {
  if (!items.length) return null;
  return (
    <section className={cn('mt-12', className)}>
      <JsonLd data={faqJsonLd(items)} />
      <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
      <div className="mt-6 space-y-3">
        {items.map((f) => (
          <details
            key={f.q}
            className="group rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-soft dark:border-slate-800 dark:bg-slate-900"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-3 font-bold text-slate-900 dark:text-white">
              {f.q}
              <span className="shrink-0 text-brand-500 transition group-open:rotate-45">
                <Plus className="h-5 w-5" />
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}