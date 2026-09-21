import Link from 'next/link';
import { ArrowRight, Wrench } from 'lucide-react';
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
    <section className={cn('mt-14 rounded-3xl bg-gradient-to-br from-brand-600 to-accent-600 p-8 text-center text-white shadow-lift sm:p-10', className)}>
      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
        <Wrench className="h-6 w-6" />
      </span>
      <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">{title}</h2>
      <p className="mx-auto mt-2 max-w-xl text-white/80">{text}</p>
      <div className="mt-7">
        <Link href={href}>
          <Button variant="secondary" size="lg" className="bg-white text-brand-700 hover:bg-white">
            {label}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}