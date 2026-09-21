import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/button';
import { cn } from '@/lib/utils';

/** Bandeau CTA naturel en fin de page — conversion organic → produit. */
export default function CtaBanner({
  title,
  text,
  href,
  label,
  className,
}: {
  title: string;
  text: string;
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <section
      className={cn(
        'mt-14 rounded-lg border border-brand-200 bg-brand-50/40 p-8 text-center shadow-soft dark:border-brand-800 dark:bg-slate-900 sm:p-10',
        className
      )}
    >
      <h2 className="font-serif text-2xl leading-tight tracking-tight text-ink sm:text-3xl dark:text-white">
        {title}
      </h2>
      <p className="mx-auto mt-2 max-w-xl text-ink-soft dark:text-slate-400">{text}</p>
      <div className="mt-7">
        <Link href={href}>
          <Button variant="primary" size="lg">
            {label}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}