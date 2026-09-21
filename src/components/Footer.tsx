import Link from 'next/link';
import { SITE_NAME, CONTACT_EMAIL } from '@/lib/config';

const columns = [
  {
    title: 'Préparation',
    links: [
      { href: '/tests', label: 'Choisir son examen' },
      { href: '/diagnostic', label: 'Évaluer son niveau' },
      { href: '/practice', label: 'Exercices' },
      { href: '/mock-tests', label: 'Examens blancs' },
      { href: '/pricing', label: 'Tarifs' },
    ],
  },
  {
    title: 'Examens',
    links: [
      { href: '/toefl', label: 'TOEFL' },
      { href: '/toeic', label: 'TOEIC' },
      { href: '/ielts', label: 'IELTS' },
      { href: '/cambridge', label: 'Cambridge English' },
      { href: '/duolingo-english-test', label: 'Duolingo English Test' },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { href: '/vocabulary', label: 'Vocabulaire' },
      { href: '/tools', label: 'Outils gratuits' },
      { href: '/tools/english-level-test', label: 'Test de niveau gratuit' },
      { href: '/blog', label: 'Méthodologie & conseils' },
    ],
  },
  {
    title: 'Compte',
    links: [
      { href: '/login', label: 'Se connecter' },
      { href: '/signup', label: 'Créer un compte' },
      { href: '/account', label: 'Mon compte' },
      { href: '/dashboard', label: 'Mon espace de préparation' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-6">
          <div className="md:col-span-2">
            <p className="font-serif text-xl tracking-tight text-ink dark:text-white">
              Prep<span className="font-semibold">-Anglais</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft dark:text-slate-400">
              Une plateforme académique de préparation aux examens d&apos;anglais : méthode,
              exercices, vocabulaire et examens blancs — du diagnostic au jour de l&apos;examen.
            </p>
            <p className="mt-5 text-xs leading-relaxed text-ink-faint dark:text-slate-500">
              {SITE_NAME} est une plateforme indépendante de préparation. Aucune affiliation avec
              ETS, IDP, Cambridge ou Duolingo. Les scores affichés sont des estimations de niveau à
              titre indicatif, jamais des notes officielles.
            </p>
          </div>
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="micro-label">{col.title}</h2>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-soft transition hover:text-brand-700 dark:text-slate-400 dark:hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-ink-faint sm:flex-row dark:border-slate-800 dark:text-slate-500">
          <p>© {new Date().getFullYear()} {SITE_NAME}. Tous droits réservés.</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="transition hover:text-brand-700 dark:hover:text-white">
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}