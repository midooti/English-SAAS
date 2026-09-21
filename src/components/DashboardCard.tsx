import { cn } from '@/lib/utils';

/** Carte générique de dashboard (conteneur cohérent). */
export default function DashboardCard({
  title,
  action,
  children,
  className,
}: {
  title?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        'rounded-2xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900',
        className
      )}
    >
      {title && (
        <div className="mb-5 flex items-center justify-between gap-3">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">{title}</h2>
          {action}
        </div>
      )}
      {children}
    </section>
  );
}