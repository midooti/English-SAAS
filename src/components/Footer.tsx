import Link from 'next/link';
import { GraduationCap } from 'lucide-react';
import { SITE_NAME } from '@/lib/config';

const columns = [
  {
    title: 'Product',
    links: [
      { href: '/diagnostic', label: 'Free diagnostic' },
      { href: '/practice', label: 'Practice' },
      { href: '/vocabulary', label: 'Vocabulary' },
      { href: '/mock-tests', label: 'Mock tests' },
      { href: '/pricing', label: 'Pricing' },
    ],
  },
  {
    title: 'Exams',
    links: [
      { href: '/toefl', label: 'TOEFL' },
      { href: '/toeic', label: 'TOEIC' },
      { href: '/ielts', label: 'IELTS' },
      { href: '/cambridge', label: 'Cambridge' },
      { href: '/duolingo-english-test', label: 'Duolingo English Test' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/dashboard', label: 'Dashboard' },
      { href: '/progress', label: 'Progress' },
      { href: '/coach', label: 'AI Coach' },
      { href: '/login', label: 'Log in' },
      { href: '/signup', label: 'Start free' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-600 text-white">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="text-lg font-extrabold text-slate-900 dark:text-white">{SITE_NAME}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-slate-500 dark:text-slate-400">
              Get the English score you need. Personalized preparation for TOEFL, TOEIC, IELTS and
              more.
            </p>
            <p className="mt-6 text-xs text-slate-400 dark:text-slate-500">
              Demo product. Not affiliated with ETS, IDP, Cambridge or Duolingo. All estimated
              scores are demonstrative.
            </p>
          </div>
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="text-sm font-bold text-slate-900 dark:text-white">{col.title}</p>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 transition hover:text-brand-600 dark:text-slate-400 dark:hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-12 border-t border-slate-200 pt-6 text-center text-xs text-slate-400 dark:border-slate-800 dark:text-slate-500">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}