import Progress from '@/components/ui/progress';
import { cn } from '@/lib/utils';

/** Barre de progression avec libellé, pour dashboards et fiches. */
export default function ProgressBar({
  label,
  value,
  suffix,
  className,
  barClassName,
}: {
  label?: string;
  value: number;
  suffix?: string;
  className?: string;
  barClassName?: string;
}) {
  return (
    <div className={cn('w-full', className)}>
      {label !== undefined && (
        <div className="mb-1.5 flex items-center justify-between text-sm">
          <span className="font-medium text-slate-700 dark:text-slate-300">{label}</span>
          <span className="font-semibold text-slate-500 dark:text-slate-400">
            {value}
            {suffix ?? '%'}
          </span>
        </div>
      )}
      <Progress value={value} className={barClassName} />
    </div>
  );
}