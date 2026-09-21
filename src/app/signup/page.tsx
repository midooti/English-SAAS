import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import AuthCard from '@/components/AuthCard';
import { getCurrentUser } from '@/lib/auth';

export const metadata: Metadata = {
  title: 'Créer un compte | Prep-Anglais',
  description:
    'Créez votre compte gratuit Prep-Anglais et obtenez une estimation de votre niveau d\u2019anglais.',
  robots: { index: false } as const,
};

export default async function SignupPage() {
  const user = await getCurrentUser();
  if (user) redirect('/dashboard');

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <AuthCard mode="signup" />
    </div>
  );
}