import type { Metadata } from 'next';
import Link from 'next/link';
import { requireUser, getSubscription, getProfile, getSubscriptionStatus } from '@/lib/auth';
import { seoMetadata } from '@/lib/seo';
import { stripeConfigured } from '@/lib/stripe';
import AccountForm from '@/components/AccountForm';

export const metadata: Metadata = seoMetadata({
  title: 'Mon compte | Prep-Anglais',
  description: 'Gérez votre compte Prep-Anglais : informations personnelles et abonnement.',
  path: '/account',
  noindex: true,
  overline: 'Compte',
});

const statusLabels: Record<string, string> = {
  free: 'Formule gratuite',
  active: 'Abonnement actif',
  trialing: 'Période d\u2019essai',
  past_due: 'Paiement en retard',
  canceled: 'Résilié',
  incomplete: 'Paiement incomplet',
  unpaid: 'Impayé',
};

function formatDate(iso: string | null | undefined) {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default async function AccountPage() {
  const user = await requireUser();
  const [profile, subscription, status] = await Promise.all([
    getProfile(user),
    getSubscription(user),
    getSubscriptionStatus(user),
  ]);

  const label =
    statusLabels[status] ??
    statusLabels[user.plan === 'premium' ? 'active' : 'free'];

  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="micro-label">Compte</p>
      <h1 className="mt-3 font-serif text-4xl tracking-tight text-ink sm:text-5xl dark:text-white">
        Mon compte
      </h1>

      <section className="mt-10 rounded-lg border border-slate-200 bg-white p-7 shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <h2 className="font-serif text-2xl tracking-tight text-ink dark:text-white">Abonnement</h2>
        <dl className="mt-5 grid gap-4 sm:grid-cols-3">
          <div>
            <dt className="micro-label">Formule</dt>
            <dd className="mt-1 text-sm font-semibold text-ink dark:text-slate-200">{label}</dd>
          </div>
          <div>
            <dt className="micro-label">Statut</dt>
            <dd className="mt-1 text-sm font-semibold text-ink dark:text-slate-200">{status}</dd>
          </div>
          <div>
            <dt className="micro-label">Prochaine échéance</dt>
            <dd className="mt-1 text-sm font-semibold text-ink dark:text-slate-200">
              {formatDate(subscription?.current_period_end)}
            </dd>
          </div>
        </dl>

        <div className="mt-7 border-t border-slate-100 pt-6 dark:border-slate-800">
          {user.premium ? (
            <>
              <p className="text-sm text-ink-soft dark:text-slate-400">
                Vous profitez de la formule Premium. Gérez le paiement, l&apos;annulation ou la
                résiliation de façon autonome dans votre espace sécurisé.
              </p>
              <ManagePortal />
            </>
          ) : stripeConfigured ? (
            <>
              <p className="text-sm text-ink-soft dark:text-slate-400">
                Vous utilisez la formule gratuite. Passez à Premium pour des exercices illimités et
                des examens blancs complets.
              </p>
              <Link
                href="/pricing"
                className="mt-4 inline-flex h-11 items-center justify-center rounded-lg bg-brand-700 px-5 text-sm font-semibold text-white transition hover:bg-brand-800"
              >
                Passer à Premium
              </Link>
            </>
          ) : (
            <p className="text-sm text-ink-faint dark:text-slate-500">
              Les paiements en ligne seront bientôt disponibles sur cette plateforme.
            </p>
          )}
        </div>
      </section>

      <section className="mt-8 rounded-lg border border-slate-200 bg-white p-7 shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <h2 className="font-serif text-2xl tracking-tight text-ink dark:text-white">
          Objectif de préparation
        </h2>
        <p className="mt-2 text-sm text-ink-soft dark:text-slate-400">
          Ces informations personnalisent vos recommandations. Elles restent privées.
        </p>
        <AccountForm
          initial={{
            targetExam: profile?.target_exam ?? '',
            targetScore: profile?.target_score ?? '',
            examDate: profile?.exam_date ?? '',
          }}
        />
      </section>
    </div>
  );
}

function ManagePortal() {
  return (
    <button
      type="button"
      className="mt-4 inline-flex h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 text-sm font-semibold text-ink transition hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
      onClick={async () => {
        const res = await fetch('/api/portal', { method: 'POST' });
        const data = (await res.json().catch(() => ({}))) as { url?: string; error?: string };
        if (res.ok && data.url) window.location.href = data.url;
      }}
    >
      Gérer mon abonnement
    </button>
  );
}