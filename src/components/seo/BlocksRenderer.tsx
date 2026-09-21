import type { ContentBlock } from '@/content/types';

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/** Rendu d'un tableau de contenu simple desktop + scroll mobile. */
function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="my-5 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
      <table className="w-full min-w-[480px] bg-white text-left text-sm dark:bg-slate-900">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400">
            {headers.map((h) => (
              <th key={h} className="px-4 py-3">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={
                i % 2
                  ? 'border-t border-slate-100 dark:border-slate-800'
                  : 'border-t border-slate-100 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-800/40'
              }
            >
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-ink-soft dark:text-slate-300">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Render un bloc de contenu pédagogique à la fois (unique source de rendu). */
export default function BlocksRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((block, i) => {
        switch (block.kind) {
          case 'h2':
            return (
              <h2
                key={i}
                id={slugify(block.text)}
                className="pt-2 font-serif text-2xl leading-tight tracking-tight text-ink dark:text-white"
              >
                {block.text}
              </h2>
            );
          case 'h3':
            return (
              <h3 key={i} className="pt-1 font-serif text-lg tracking-tight text-ink dark:text-white">
                {block.text}
              </h3>
            );
          case 'p':
            return (
              <p key={i} className="leading-relaxed text-ink-soft dark:text-slate-400">
                {block.text}
              </p>
            );
          case 'ul':
            return (
              <ul key={i} className="list-disc space-y-1.5 pl-6 text-ink-soft dark:text-slate-400">
                {block.items.map((item, j) => (
                  <li key={j} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol key={i} className="list-decimal space-y-1.5 pl-6 text-ink-soft dark:text-slate-400">
                {block.items.map((item, j) => (
                  <li key={j} className="leading-relaxed">{item}</li>
                ))}
              </ol>
            );
          case 'tip':
            return (
              <aside
                key={i}
                className="rounded-lg border border-brand-100 bg-brand-50/60 p-4 dark:border-slate-800 dark:bg-slate-800/60"
              >
                <p className="micro-label-accent">À retenir</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-slate-300">{block.text}</p>
              </aside>
            );
          case 'example':
            return (
              <aside
                key={i}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/60"
              >
                <p className="micro-label">{block.label ?? 'Exemple'}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-slate-300">{block.text}</p>
              </aside>
            );
          case 'table':
            return <Table key={i} headers={block.headers} rows={block.rows} />;
          default:
            return null;
        }
      })}
    </div>
  );
}