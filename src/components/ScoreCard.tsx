import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function ScoreCard({
  label,
  value,
  hint,
  className,
  accent,
}: {
  label: string;
  value: string;
  hint?: string;
  className?: string;
  accent?: boolean;
}) {
  return (
    <Card
      className={cn(
        'p-5',
        accent && 'border-transparent bg-gradient-to-br from-brand-600 to-accent-600 text-white shadow-lift'
      )}
    >
      <p className={cn('text-xs font-semibold uppercase tracking-wide', accent ? 'text-white/70' : 'text-slate-400')}>
        {label}
      </p>
      <p
        className={cn(
          'mt-1 text-3xl font-extrabold tracking-tight',
          accent ? 'text-white' : 'text-slate-900 dark:text-white'
        )}
      >
        {value}
      </p>
      {hint && (
        <p className={cn('mt-1 text-xs', accent ? 'text-white/70' : 'text-slate-400')}>{hint}</p>
      )}
    </Card>
  );
}