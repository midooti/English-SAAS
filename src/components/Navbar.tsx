'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import { useUser } from '@/components/providers';
import { signOut } from '@/lib/auth-client';
import { cn } from '@/lib/utils';

const links = [
  { href: '/tests', label: 'Tests' },
  { href: '/toefl', label: 'Préparation' },
  { href: '/practice', label: 'Exercices' },
  { href: '/vocabulary', label: 'Vocabulaire' },
  { href: '/mock-tests', label: 'Examens blancs' },
  { href: '/pricing', label: 'Tarifs' },
];

function Wordmark({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="shrink-0 font-serif text-xl tracking-tight text-ink dark:text-white"
      aria-label="Prep-Anglais, accueil"
    >
      Prep<span className="font-semibold">-Anglais</span>
    </Link>
  );
}

export default function Navbar() {
  const router = useRouter();
  const { user, loading } = useUser();
  const [open, setOpen] = useState(false);

  async function handleSignOut() {
    await signOut();
    setOpen(false);
    router.refresh();
    router.push('/');
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-paper/95 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/95">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8"
        aria-label="Navigation principale"
      >
        <Wordmark />

        <ul className="hidden items-center gap-0.5 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-ink-soft transition hover:bg-slate-100 hover:text-ink dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="hidden h-9 items-center gap-2 rounded-lg px-3 text-sm font-semibold text-ink-soft transition hover:text-brand-700 sm:flex dark:text-slate-300"
              >
                {user.name}
              </Link>
              <button
                type="button"
                onClick={handleSignOut}
                className="hidden h-9 items-center rounded-lg px-3 text-sm font-semibold text-ink-soft transition hover:bg-slate-100 hover:text-ink sm:inline-flex dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Se déconnecter
              </button>
            </>
          ) : (
            <div className="hidden items-center gap-2 sm:flex">
              <Link
                href="/login"
                className="rounded-lg px-3 py-2 text-sm font-semibold text-ink-soft transition hover:text-ink dark:text-slate-300 dark:hover:text-white"
              >
                Se connecter
              </Link>
              <Link
                href="/signup"
                className="rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-800"
              >
                Commencer gratuitement
              </Link>
            </div>
          )}

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-ink-soft lg:hidden dark:border-slate-700 dark:text-slate-300"
            aria-expanded={open}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-paper px-4 py-4 lg:hidden dark:border-slate-800 dark:bg-slate-950">
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-ink hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col gap-2 border-t border-slate-200 pt-3 dark:border-slate-800">
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={() => setOpen(false)}
                  className="rounded-lg bg-brand-700 px-4 py-2.5 text-center text-sm font-semibold text-white"
                >
                  Mon espace
                </Link>
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="rounded-lg border border-slate-200 px-4 py-2.5 text-center text-sm font-semibold text-ink-soft dark:border-slate-700 dark:text-slate-300"
                >
                  Se déconnecter
                </button>
              </>
            ) : (
              <Link
                href="/signup"
                onClick={() => setOpen(false)}
                className="rounded-lg bg-brand-700 px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                Commencer gratuitement
              </Link>
            )}
            {loading && user === null && (
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="rounded-lg border border-slate-200 px-4 py-2.5 text-center text-sm font-semibold text-ink-soft dark:border-slate-700 dark:text-slate-300"
              >
                Se connecter
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}