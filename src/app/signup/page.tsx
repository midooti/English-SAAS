import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import AuthCard from '@/components/AuthCard';
import { getCurrentUser } from '@/lib/auth';

export const metadata: Metadata = {
  title: 'Create account',
  description: 'Create your free ScoreUp account and get an estimated English level.',
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