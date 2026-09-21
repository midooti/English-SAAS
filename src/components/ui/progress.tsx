import { cn } from '@/lib/utils';

/** Barre de progression accessible (sans dépendance Radix). */
export default function Progress({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn(
        'h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800',
        className
      )}
    >
      <div
        className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500 transition-all duration-500"
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}