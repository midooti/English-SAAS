import type { Metadata } from 'next';
import AuthCard from '@/components/AuthCard';

export const metadata: Metadata = {
  title: 'Se connecter | Prep-Anglais',
  description: 'Connectez-vous à votre compte Prep-Anglais pour reprendre votre préparation.',
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