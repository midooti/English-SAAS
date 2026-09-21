import { cn } from '@/lib/utils';

/**
 * En-tête de section éditorial : numéro académique, surtitre, titre serif.
 */
export default function SectionHeading({
  num,
  overline,
  title,
  text,
  align = 'left',
  className,
}: {
  num?: string;
  overline?: string;
  title: string;
  text?: string;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <div className={cn(align === 'center' && 'text-center', className)}>
      <div className={cn('flex items-center gap-4', align === 'center' && 'justify-center')}>
        {num && <span className="section-number">{num}</span>}
        {overline && <p className="micro-label">{overline}</p>}
      </div>
      <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-ink sm:text-4xl dark:text-white">
        {title}
      </h2>
      {text && (
        <p className={cn('mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft dark:text-slate-400', align === 'center' && 'mx-auto')}>
          {text}
        </p>
      )}
    </div>
  );
}