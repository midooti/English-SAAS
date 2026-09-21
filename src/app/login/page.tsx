import type { Metadata } from 'next';
import AuthCard from '@/components/AuthCard';

export const metadata: Metadata = {
  title: 'Log in',
  description: 'Log in to your ScoreUp account.',
  robots: { index: false } as const,
};

import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/auth';

export default async function LoginPage() {
  const user = await getCurrentUser();
  if (user) redirect('/dashboard');

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <AuthCard mode="login" />
    </div>
  );
}