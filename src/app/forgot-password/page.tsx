import type { Metadata } from 'next';
import AuthCard from '@/components/AuthCard';

export const metadata: Metadata = {
  title: 'Réinitialiser le mot de passe | Prep-Anglais',
  description: 'Réinitialisez le mot de passe de votre compte Prep-Anglais.',
  robots: { index: false } as const,
};

export default function ForgotPasswordPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <AuthCard mode="forgot" />
    </div>
  );
}