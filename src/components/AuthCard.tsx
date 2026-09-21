'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { signIn, signUp, sendPasswordReset } from '@/lib/auth-client';

type Mode = 'login' | 'signup' | 'forgot';

const copy: Record<Mode, { title: string; subtitle: string; submit: string }> = {
  login: {
    title: 'Se connecter',
    subtitle: 'Reprenez votre préparation là où vous l\u2019aviez laissée.',
    submit: 'Se connecter',
  },
  signup: {
    title: 'Créer un compte',
    subtitle: 'Sauvegardez votre progression et passez le diagnostic gratuit.',
    submit: 'Créer mon compte',
  },
  forgot: {
    title: 'Réinitialiser le mot de passe',
    subtitle: 'Un lien de réinitialisation vous sera envoyé par e-mail.',
    submit: 'Envoyer le lien',
  },
};

/** Cible de redirection après connexion : chemin interne uniquement. */
function safeRedirect(): string {
  if (typeof window === 'undefined') return '/dashboard';
  const target = new URLSearchParams(window.location.search).get('redirect');
  if (target && target.startsWith('/') && !target.startsWith('//')) return target;
  return '/dashboard';
}

export default function AuthCard({ mode }: { mode: Mode }) {
  const router = useRouter();
  const [resetDone, setResetDone] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get('reset') === '1') {
      setResetDone(true);
    }
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);

    if (mode === 'forgot') {
      const res = await sendPasswordReset(email);
      if (res.error) {
        setError(res.error);
        setBusy(false);
        return;
      }
      setSent(true);
      setBusy(false);
      return;
    }

    const res =
      mode === 'signup' ? await signUp(email, password, name) : await signIn(email, password);
    if (res.error) {
      setError(res.error);
      setBusy(false);
      return;
    }

    if (mode === 'signup' && !res.user) {
      // Confirmation e-mail demandée par Supabase.
      setSent(true);
      setBusy(false);
      return;
    }

    router.push(safeRedirect());
    router.refresh();
  }

  return (
    <div className="mx-auto w-full max-w-md rounded-lg border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <div className="text-center">
        <Link
          href="/"
          className="inline-block font-serif text-2xl tracking-tight text-ink dark:text-white"
        >
          Prep<span className="font-semibold">-Anglais</span>
        </Link>
        <h1 className="mt-5 text-2xl font-semibold tracking-tight text-ink dark:text-white">
          {copy[mode].title}
        </h1>
        <p className="mt-1.5 text-sm text-ink-soft dark:text-slate-400">{copy[mode].subtitle}</p>
      </div>

      {resetDone && !error && (
        <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-200">
          Mot de passe réinitialisé. Connectez-vous avec votre nouveau mot de passe.
        </div>
      )}

      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        {mode === 'signup' && (
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink dark:text-slate-200">
              Prénom
            </label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />
          </div>
        )}

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink dark:text-slate-200">
            Adresse e-mail
          </label>
          <Input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </div>

        {mode !== 'forgot' && (
          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm font-semibold text-ink dark:text-slate-200">
              Mot de passe
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
            />
          </div>
        )}

        {error && (
          <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300">
            {error}
          </p>
        )}

        {mode === 'signup' && sent && (
          <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-200">
            Compte créé. Un e-mail de confirmation vous a été envoyé : confirmez-le, puis retrouvez
            votre session depuis la page de connexion.
          </p>
        )}

        {sent && mode === 'forgot' && (
          <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-200">
            Si un compte existe pour {email}, un lien de réinitialisation vient de vous être envoyé.
          </p>
        )}

        <Button type="submit" size="lg" className="w-full" disabled={busy || sent}>
          {busy ? 'Patientez…' : copy[mode].submit}
        </Button>
      </form>

      {mode === 'login' && (
        <p className="mt-4 text-center text-sm">
          <Link
            href="/forgot-password"
            className="font-semibold text-brand-700 hover:underline dark:text-brand-300"
          >
            Mot de passe oublié ?
          </Link>
        </p>
      )}

      <div className="mt-5 text-center text-sm text-ink-soft dark:text-slate-400">
        {mode === 'login' ? (
          <>
            Pas encore de compte ?{' '}
            <Link href="/signup" className="font-semibold text-brand-700 hover:underline dark:text-brand-300">
              Créer un compte gratuit
            </Link>
          </>
        ) : mode === 'signup' ? (
          <>
            Déjà un compte ?{' '}
            <Link href="/login" className="font-semibold text-brand-700 hover:underline dark:text-brand-300">
              Se connecter
            </Link>
          </>
        ) : (
          <>
            Mot de passe retrouvé ?{' '}
            <Link href="/login" className="font-semibold text-brand-700 hover:underline dark:text-brand-300">
              Se connecter
            </Link>
          </>
        )}
      </div>
    </div>
  );
}