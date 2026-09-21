# Prep-Anglais

Plateforme académique de préparation aux examens d'anglais : **TOEFL, TOEIC, IELTS, Cambridge English et Duolingo English Test**. Diagnostic gratuit, exercices guidés, vocabulaire, examens blancs chronométrés et suivi de progression — avec des scores estimés, jamais officiels.

> **Avertissement** — Prep-Anglais n'est affilié à aucun organisme d'examen (ETS, IDP, Cambridge, Duolingo). Toutes les questions sont un contenu pédagogique original et tous les scores sont des estimations à titre indicatif.

---

## Stack technique

- Next.js 14 (App Router, RSC) + TypeScript strict
- Tailwind CSS v3 + composants shadcn-style (sans dépendance Radix)
- Icones lucide-react, class-variance-authority
- Supabase (authentification réelle + base de données, schéma inclus)
- Stripe (abonnements réels, endpoints protégés)
- Déploiement sur Vercel

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000.

Scripts utiles :

```bash
npm run lint      # ESLint (next/core-web-vitals)
npm run typecheck # tsc --noEmit
npm run build     # build production Next.js
```

## Authentification & abonnements

- **Auth réelle** : une fois `NEXT_PUBLIC_SUPABASE_URL` et `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` renseignées, les formulaires utilisent Supabase Auth (signup, login, reset de mot de passe, session via cookies). En développement sans clés, un cookie de session local (`prep_user`) permet de tester le parcours — il n'est jamais présenté comme une fonctionnalité « démo ».
- **Freemium** : 5 questions gratuites par jour (`FREE_DAILY_LIMIT`), comptées en `localStorage` ; au-delà, un écran d'information propose l'abonnement.
- **Premium** : vérifié **côté serveur** à chaque requête depuis `profiles.plan`, synchronisée par le webhook Stripe. Les valeurs client ne sont jamais fiables.
- **Stripe** : `/api/checkout` crée la session (Price ID résolu côté serveur depuis `STRIPE_PRICE_MONTHLY` / `STRIPE_PRICE_YEARLY`), `/api/portal` ouvre l'espace de facturation, `/api/stripe/webhook` vérifie la signature (`STRIPE_WEBHOOK_SECRET`) puis synchronise `subscriptions` et met à jour `profiles.plan`. Événements traités : `checkout.session.completed`, `customer.subscription.created`, `customer.subscription.updated`, `customer.subscription.deleted`, `invoice.payment_failed`. Aucun mode test/démo : les abonnements passent par Stripe Checkout réel.
- **Sécurité** : aucun secret Stripe/Supabase n'est importé dans un composant client ; le statut Premium n'est jamais déduit d'un cookie.
- **Pages protégées** : `/dashboard`, `/progress`, `/account`, `/coach` (redirection vers `/login` sans session).

## Variables d'environnement

Copier `.env.example` vers `.env.local` :

| Variable | Requise | Rôle |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | non | URL canonique (défaut `http://localhost:3000`) |
| `NEXT_PUBLIC_CURRENCY` | non | Devise affichée : `EUR` (défaut), `USD`, `GBP` |
| `NEXT_PUBLIC_SUPABASE_URL` | oui | URL du projet Supabase |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | oui | Clé publiable navigateur (`anon` accepté en fallback) |
| `SUPABASE_SECRET_KEY` | oui | Clé secrète — API serveur uniquement (`service_role` accepté en fallback) |
| `STRIPE_SECRET_KEY` | oui | Clé secrète Stripe (serveur uniquement) |
| `STRIPE_PRICE_MONTHLY` | oui | Price ID du plan 9,99 €/mois (serveur uniquement) |
| `STRIPE_PRICE_YEARLY` | oui | Price ID du plan 59,99 €/an (serveur uniquement) |
| `STRIPE_WEBHOOK_SECRET` | oui | Secret de signature du webhook (`whsec_...`) |
| `OPENAI_API_KEY` | non | Active l'Assistant de préparation réel |
| `NEXT_PUBLIC_GA_ID` / `NEXT_PUBLIC_GA_MEASUREMENT_ID` | non | Google Analytics 4 (événements anonymes, sans PII) |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` / `NEXT_PUBLIC_GSC_VERIFICATION` | non | Vérification Google Search Console |

## Architecture SEO

Prep-Anglais est construit « SEO-first » ; le contenu est centralisé pour alimenter automatiquement le sitemap et l'audit interne.

- **Guides d'examen programmatiques** — `/toefl/*`, `/toeic/*`, `/ielts/*` rendus depuis `src/content/exams.ts` : un hub par examen + une page par section et par thème, avec copy unique, exemples réels, FAQ et liens internes.
- **Outils gratuits indexables** — `/tools/*` et `/practice/*` : calculateurs de score, test de niveau, test de vocabulaire, générateur de plan d'étude et entraînement intégré (3 questions). Accessibles sans compte.
- **Blog** — `/blog` + `/blog/[slug]` avec Article JSON-LD, sommaire « Dans cet article », dates réelles (jamais falsifiées), articles liés.
- **Métadonnées** — `src/lib/seo.ts` fournit la fabrique `seoMetadata()` : titres absolus uniques, descriptions, canonical, Open Graph (images dynamiques via `/api/og`), Twitter Cards, robots index/noindex. Les pages protégées (dashboard, coach, progress, account, auth, `/internal`) sont `noindex`.
- **Données structurées** — Organization/WebSite, BreadcrumbList, FAQPage, Article, Course — uniquement là où elles décrivent fidèlement la page.
- **Sitemap & robots** — `src/app/sitemap.ts` généré depuis `src/lib/seo-registry.ts` (source unique de vérité) ; `robots.ts` exclut les sections privées.
- **Audit interne** — `/internal/seo` (noindex) liste les routes enregistrées avec leur statut canonical.
- **Analytics** — Google Analytics 4 : événements anonymes (`diagnostic_started`, `diagnostic_completed`, `signup_completed`, `login_completed`, `practice_started`, `practice_completed`, `vocabulary_started`, `mock_test_started`, `pricing_viewed`, `checkout_started`, `subscription_started`, `tool_used`, `share_created`), jamais de données personnelles.

## Configuration Supabase

1. Créer un projet, puis exécuter `supabase/schema.sql` dans l'éditeur SQL.
2. Le schéma crée : `profiles`, `tests`, `questions`, `answers`, `attempts`, `scores`, `study_sessions`, `vocabulary`, `flashcards`, `subscriptions`, `user_progress`, `streaks`, avec RLS et triggers (`handle_new_user`, `sync_premium`).
3. Renseigner les variables d'environnement. Le fallback local couvre le développement sans SQL.

## Configuration Stripe

1. Créer deux produits d'abonnement dans le dashboard Stripe :
   - **Premium Mensuel** — 9,99 €/mois
   - **Premium Annuel** — 59,99 €/an (meilleure valeur)
2. Copier les IDs de Price dans `STRIPE_PRICE_MONTHLY` / `STRIPE_PRICE_YEARLY` (variables serveur, jamais `NEXT_PUBLIC_`).
3. Ajouter l'endpoint webhook `https://votre-domaine.com/api/stripe/webhook` (événements : `checkout.session.completed`, `customer.subscription.created`, `customer.subscription.updated`, `customer.subscription.deleted`, `invoice.payment_failed`) et copier le secret de signature dans `STRIPE_WEBHOOK_SECRET`.
4. Routes : `/api/checkout` (session), `/api/stripe/webhook` (synchronisation signée — `/api/webhook` reste disponible comme alias), `/api/portal` (espace de facturation).

## Déploiement sur Vercel

1. Pousser le dossier vers un dépôt GitHub.
2. Sur Vercel : **New Project → Import** le dépôt. Le script `build` est `next build`.
3. Ajouter les variables d'environnement depuis `.env.example`.
4. Déployer. Ajouter le domaine personnalisé sous Settings → Domains.

## Structure du projet

```
src/
  app/
    api/               checkout, portal, webhook (Stripe), og (images OG)
    toefl|toeic|ielts/ hubs + pages programmatiques section/thème
    blog/              index + articles [slug] (Article JSON-LD)
    tools/             index d'outils gratuits + [slug]
    practice/          index + [slug] (entraînements intégrés)
    internal/seo/      audit noindex du registre des routes
    cambridge, duolingo-english-test/  landers SEO
    diagnostic/        test de niveau gratuit (app client)
    practice/          exercices freemium (app client)
    vocabulary/        cartes mémoire & quiz (app client)
    mock-tests/        liste + [slug] examens blancs chronométrés
    coach/             Assistant de préparation (app client)
    progress/          suivi de progression (serveur + SVG)
    account/           compte : abonnement + objectifs (protégé)
    pricing/           plans + tableau comparatif
    dashboard/         espace de préparation (protégé)
    login|signup|forgot-password/  auth (Supabase réel)
  components/
    ui/                button, card, badge, input, progress
    seo/               Breadcrumbs, BlogArticle, ExamSectionPage, ExamHub, BlocksRenderer, FaqSection, InternalLinks, CtaBanner, JsonLd
    tools/             ScoreCalculator, EnglishLevelTest, VocabularyTest, StudyPlanGenerator, EmbeddedPractice, ShareControls
    *App.tsx           applications clientes interactives
    Navbar, Footer, Paywall, PricingCard, QuestionCard, SectionHeading, AccountForm, TestCard…
  content/             exams.ts, blog.ts, tools.ts, practice.ts, types.ts (contenu en français)
  lib/
    config.ts          plans, limite quotidienne, constantes du site
    seo.ts             fabrique seoMetadata + builders JSON-LD + URL OG
    seo-registry.ts    source de vérité du sitemap/de l'audit
    analytics.ts       événements GA4 (anonymes)
    auth.ts            session serveur (Supabase réel)
    auth-client.ts     actions client (signIn/signUp/signOut/reset)
    supabase.ts        clients serveur typés (server + admin)
    supabase-client.ts client navigateur (client-safe)
    stripe.ts          client Stripe paresseux
    questions.ts       banque de questions originales
    vocabulary.ts      banque de vocabulaire
    mockTests.ts       4 examens blancs
    exams.ts           5 définitions d'examen
supabase/
  schema.sql           schéma SQL complet avec RLS + triggers
```

## Feuille de route

- Assistant de préparation réel (OpenAI/Anthropic)
- Plan de préparation personnalisé généré depuis les résultats du diagnostic
- Moteur de répétition espacée du vocabulaire persisté sur Supabase
- Examens supplémentaires disponibles (IELTS, Cambridge, Duolingo English Test)
- Suivi des erreurs récurrentes
- Séquences (streaks) et notifications par e-mail

## Licence

Produit de démonstration — ne pas redistribuer le contenu des questions.