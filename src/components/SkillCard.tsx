import { Card } from '@/components/ui/card';
import ProgressBar from '@/components/ProgressBar';
import { cn } from '@/lib/utils';

export default function SkillCard({
  skill,
  band,
  barClassName,
}: {
  skill: string;
  band: number;
  barClassName: string;
}) {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-slate-900 dark:text-white">{skill}</p>
        <p className="text-sm font-extrabold text-brand-600 dark:text-brand-400">{band.toFixed(1)}</p>
      </div>
      <ProgressBar value={(band / 6) * 100} label="" className={cn('mt-3', barClassName)} />
    </Card>
  );
}