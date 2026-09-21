import { cn } from '@/lib/utils';

/** Bars horizontales (topiques forts/faibles, leaderboard…). */
export default function BarChart({
  items,
  className,
}: {
  items: { label: string; value: number; suffix?: string }[];
  className?: string;
}) {
  return (
    <div className={cn('space-y-3', className)}>
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-3">
          <span className="w-36 shrink-0 truncate text-sm font-medium text-slate-600 dark:text-slate-300 sm:w-44">
            {item.label}
          </span>
          <div className="h-3 flex-1 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
              style={{ width: `${Math.min(100, item.value)}%` }}
            />
          </div>
          <span className="w-12 shrink-0 text-right text-sm font-semibold text-slate-500 dark:text-slate-400">
            {item.value}
            {item.suffix ?? '%'}
          </span>
        </div>
      ))}
    </div>
  );
}