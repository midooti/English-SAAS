import { cn } from '@/lib/utils';

/** Mini graphique en courbes (SVG, sans lib). Points normalisés. */
export default function LineChart({
  values,
  height = 160,
  className,
  labels,
}: {
  values: number[];
  height?: number;
  className?: string;
  labels?: string[];
}) {
  if (values.length < 2) values = [...values, values[0] ?? 0];
  const width = 320;
  const pad = 12;
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;

  const points = values.map((v, i) => {
    const x = pad + (i / (values.length - 1)) * (width - pad * 2);
    const y = height - pad - ((v - min) / range) * (height - pad * 2);
    return [x, y] as const;
  });

  const line = points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');

  return (
    <div className={cn('w-full', className)}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label="Score progression chart"
        className="h-auto w-full"
      >
        <defs>
          <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon
          points={`${points.map(([x, y]) => `${x},${y}`).join(' ')} ${width - pad},${height} ${pad},${height}`}
          fill="url(#lineFill)"
        />
        <path d={line} fill="none" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" />
        {points.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="4" fill="#fff" stroke="#6366f1" strokeWidth="2.5" />
        ))}
      </svg>
      {labels && (
        <div className="mt-1 flex justify-between text-xs text-slate-400">
          {labels.map((l, i) => (
            <span key={i}>{l}</span>
          ))}
        </div>
      )}
    </div>
  );
}