import type { Metadata } from 'next';
import AuthCard from '@/components/AuthCard';

export const metadata: Metadata = {
  title: 'Reset password',
  description: 'Reset your ScoreUp password.',
  robots: { index: false } as const,
};

export default function ForgotPasswordPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <AuthCard mode="forgot" />
    </div>
  );
}