import type { Metadata } from 'next';
import { buildRegistry, type RegistryEntry } from '@/lib/seo-registry';
import { seoMetadata } from '@/lib/seo';

export const metadata: Metadata = seoMetadata({
  title: 'SEO Dashboard — Internal',
  description: 'Internal audit of all indexable ScoreUp routes. Not for public use.',
  path: '/internal/seo',
  noindex: true,
});

const categoryLabels: Record<RegistryEntry['category'], string> = {
  home: 'Home',
  test: 'Tests',
  practice: 'Practice',
  vocabulary: 'Vocabulary',
  'study-plan': 'Study plans',
  score: 'Score',
  blog: 'Blog',
  tool: 'Tools',
  'exam-section': 'Exam guides',
};

export default function SeoDashboard() {
  const entries = buildRegistry();
  const byCategory = entries.reduce<Record<string, RegistryEntry[]>>((acc, entry) => {
    acc[entry.category] = acc[entry.category] ?? [];
    acc[entry.category].push(entry);
    return acc;
  }, {});

  const total = entries.length;
  const canonicals = entries.filter((e) => e.canonical).length;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <p className="rounded-2xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-800 dark:border-slate-800 dark:bg-slate-900 dark:text-amber-200">
        Internal dashboard — this page is noindex and disallowed in robots.txt. Keep it out of
        public navigation.
      </p>

      <h1 className="mt-6 text-3xl font-extrabold text-slate-900 dark:text-white">SEO route registry</h1>
      <p className="mt-2 text-slate-500 dark:text-slate-400">
        {total} indexed/shared routes · {canonicals} with canonical · {total - canonicals} without.
        Add new pages here first — the sitemap and this dashboard share this list.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {Object.entries(categoryLabels).map(([key, label]) => (
          <div
            key={key}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900"
          >
            <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{label}</p>
            <p className="mt-1 text-3xl font-extrabold text-slate-900 dark:text-white">
              {(byCategory[key] ?? []).length}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
        <table className="w-full min-w-[640px] bg-white text-left text-sm dark:bg-slate-900">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold text-slate-500 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300">
              <th className="px-4 py-3">Path</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Canonical</th>
              <th className="px-4 py-3">Title</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr
                key={entry.path}
                className="border-t border-slate-100 dark:border-slate-800"
              >
                <td className="px-4 py-3 font-mono text-xs text-brand-600 dark:text-brand-400">{entry.path}</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {categoryLabels[entry.category]}
                  </span>
                </td>
                <td className="px-4 py-3">
                  {entry.canonical ? (
                    <span className="text-emerald-600 dark:text-emerald-400">yes</span>
                  ) : (
                    <span className="text-red-500">missing</span>
                  )}
                </td>
                <td className="max-w-sm truncate px-4 py-3 text-slate-700 dark:text-slate-200">
                  {entry.title}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}