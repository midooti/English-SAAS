'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { GraduationCap } from 'lucide-react';
import Button from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { demoSignIn } from '@/lib/auth-client';

type Mode = 'login' | 'signup' | 'forgot';

const copy: Record<Mode, { title: string; subtitle: string; submit: string }> = {
  login: {
    title: 'Welcome back',
    subtitle: 'Log in to continue your study plan.',
    submit: 'Log in',
  },
  signup: {
    title: 'Create your account',
    subtitle: 'Save your progress. Start with the free diagnostic.',
    submit: 'Create account',
  },
  forgot: {
    title: 'Reset your password',
    subtitle: "We'll send you a reset link.",
    submit: 'Send reset link',
  },
};

export default function AuthCard({ mode }: { mode: Mode }) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);

    if (mode === 'forgot') {
      setSent(true);
      setBusy(false);
      return;
    }

    const res = await demoSignIn(email, mode === 'signup' ? name || undefined : undefined, password);
    if (res.error) {
      setError(res.error);
      setBusy(false);
      return;
    }
    router.push('/dashboard');
    router.refresh();
  }

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <div className="text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-600 text-white">
          <GraduationCap className="h-6 w-6" />
        </span>
        <h1 className="mt-4 text-2xl font-extrabold text-slate-900 dark:text-white">
          {copy[mode].title}
        </h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{copy[mode].subtitle}</p>
        <Badge variant="neutral" className="mt-3">demo mode</Badge>
      </div>

      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        {mode === 'signup' && (
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
          </div>
        )}

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
          />
        </div>

        {mode !== 'forgot' && (
          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
              className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
          </div>
        )}

        {error && (
          <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300">
            {error}
          </p>
        )}

        {sent && (
          <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300">
            Reset link sent to {email}. In this demo build, no email is actually sent.
          </p>
        )}

        <Button type="submit" size="lg" variant="accent" className="w-full" disabled={busy || sent}>
          {busy ? 'Please wait…' : copy[mode].submit}
        </Button>
      </form>

      <div className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
        {mode === 'login' ? (
          <>
            New to ScoreUp?{' '}
            <Link href="/signup" className="font-semibold text-brand-600 hover:underline dark:text-brand-400">
              Create an account
            </Link>
          </>
        ) : mode === 'signup' ? (
          <>
            Already have an account?{' '}
            <Link href="/login" className="font-semibold text-brand-600 hover:underline dark:text-brand-400">
              Log in
            </Link>
          </>
        ) : (
          <>
            Remembered it?{' '}
            <Link href="/login" className="font-semibold text-brand-600 hover:underline dark:text-brand-400">
              Log in
            </Link>
          </>
        )}
      </div>

      <p className="mt-4 text-center text-xs text-slate-400">
        Demo build — passwords are not stored. The mock session lives in a browser cookie.
      </p>
    </div>
  );
}