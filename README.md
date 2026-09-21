# ScoreUp

Prepare for the English score you need. Personalized preparation for **TOEFL, TOEIC, IELTS and more** — free diagnostic, daily practice, vocabulary, mock tests, an AI Coach and progress tracking.

This is a production-quality **MVP**: Stripe-ready, Supabase-ready, deployable to Vercel in one click. It runs fully in `demo mode` without any external credentials.

> **Important disclaimer** — This project is not affiliated with or endorsed by ETS, IDP, Cambridge, or Duolingo. All questions are **original demo content** and all scores are **estimated practice scores**, never official exam scores.

---

## Tech stack

- Next.js 14 (App Router, RSC) + TypeScript strict
- Tailwind CSS v3 with shadcn-style UI (custom, no Radix dependency)
- lucide-react icons, class-variance-authority
- Supabase (auth + database, optional — schema included)
- Stripe (subscriptions, optional — guarded endpoints)
- Deployed on Vercel (drag & drop)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Useful scripts:

```bash
npm run lint      # ESLint (next/core-web-vitals)
npm run typecheck # tsc --noEmit
npm run build     # Next.js production build
```

## Demo mode (default)

Without any environment variables, ScoreUp works out of the box:

- **Mock auth** — sign up/log in any email on `/signup`; the session is stored in a browser cookie (`scoreup_user`).
- **Freemium** — the free plan allows 5 questions/day (`FREE_DAILY_LIMIT`), stored in `localStorage`. After that, a non-aggressive paywall is shown.
- **Demo premium** — on `/pricing`, if Stripe is not configured the button shows a clear message and offers an "Enable demo premium" toggle (cookie). It is **never** a fake billing success.
- **AI Coach** — keyword-based demo answers until an `OPENAI_API_KEY` is added.
- All mock tests, charts and dashboard data are demo data.

## Environment variables

Copy `.env.example` to `.env.local`:

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_APP_NAME` | no | Site name (default `ScoreUp`) |
| `NEXT_PUBLIC_SITE_URL` | no | Canonical URL (default `http://localhost:3000`) |
| `NEXT_PUBLIC_SUPABASE_URL` | no | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | no | Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | no | Admin client (API routes only) |
| `STRIPE_SECRET_KEY` | no | Stripe secret key (sk_test...) |
| `NEXT_PUBLIC_STRIPE_PREMIUM_MONTHLY_PRICE_ID` | no | Price ID for monthly plan |
| `NEXT_PUBLIC_STRIPE_PREMIUM_YEARLY_PRICE_ID` | no | Price ID for yearly plan |
| `STRIPE_WEBHOOK_SECRET` | no | Webhook signing secret (whsec_...) |
| `OPENAI_API_KEY` | no | Enables the real AI Coach |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | no | Google Analytics 4 (anonymous events, no-op if empty) |
| `NEXT_PUBLIC_GSC_VERIFICATION` | no | Google Search Console verification tag |

> Supabase: as soon as `NEXT_PUBLIC_SUPABASE_URL` is set, the mock session is automatically replaced by real Supabase Auth. Stripe routes return `503` with a clear message until configured.

## SEO architecture

ScoreUp is built "SEO-first" for organic acquisition. Everything below is centralized, so new content is automatically added to the sitemap and the internal audit.

- **Programmatic exam guides** — `/toefl/*`, `/toeic/*`, `/ielts/*` render from structured content (`src/content/exams.ts`): one hub per exam + a page per section and per topic (main idea, vocabulary themes, etc.), each with unique copy, real examples, FAQ and internal links.
- **Free indexable tools** — `/tools/*` and `/practice/*`: score calculators, English level test, vocabulary test, study plan generator, and embedded 3-question practice landings. No sign-up, no daily limit on public tools.
- **Blog** — `/blog` + `/blog/[slug]` with Article JSON-LD, "in this article" TOC, real published/updated dates (never faked), related posts.
- **Metadata** — `src/lib/seo.ts` provides a single `seoMetadata()` factory: unique absolute titles, descriptions, canonical, Open Graph (dynamic images via `/api/og`), Twitter cards, robots index/noindex. Private/demo pages (dashboard, coach, progress, auth, `/internal`) are `noindex`.
- **Structured data** — Organization/WebSite, BreadcrumbList, FAQPage, Article, Course JSON-LD — used only where they describe the page truthfully.
- **Sitemap & robots** — `src/app/sitemap.ts` is generated from `src/lib/seo-registry.ts` (single source of truth); `robots.ts` disallows private sections.
- **Internal audit** — `/internal/seo` (noindex) lists every registered route with canonical status; add new public pages to `buildRegistry()` first.
- **i18n & analytics** — locale architecture ready (`src/i18n/config.ts`, not yet activated); Google Analytics + Search Console plug in via env vars above (anonymous events only, never PII).

## Supabase setup

1. Create a project, then run `supabase/schema.sql` in the SQL editor.
2. It creates the full schema: `profiles`, `tests`, `questions`, `answers`, `attempts`, `scores`, `study_sessions`, `vocabulary`, `flashcards`, `subscriptions`, `user_progress`, `streaks`, with RLS and triggers (`handle_new_user`, `sync_premium`).
3. Fill the env vars. No SQL is required to run the demo.

## Stripe setup

1. Create two subscription products in the Stripe dashboard:
   - **Premium Monthly** — €9.99/month
   - **Premium Yearly** — €59.99/year (Best value)
2. Copy the Price IDs into the two `NEXT_PUBLIC_STRIPE_*_PRICE_ID` vars.
3. Add the webhook endpoint `https://your-domain.com/api/webhook` (events: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`, `invoice.payment_failed`) and copy the signing secret.
4. Routes: `/api/checkout` (session), `/api/webhook` (sync premium status), `/api/portal` (billing portal).

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. On Vercel: **New Project → Import** the repo. The `build` script is `next build`.
3. Add the environment variables from `.env.example`.
4. Deploy. You can add a custom domain under Settings → Domains.

## Project structure

```
src/
  app/
    api/               checkout, webhook, portal (Stripe), og (OG images)
    toefl|toeic|ielts/ hubs + programmatic section/topic pages ([[...slug]])
    blog/              blog index + [slug] articles (Article JSON-LD)
    tools/             free tools index + [slug] (calculators, tests, plans)
    practice/          index + [slug] embedded practice landings
    internal/seo/      noindex SEO route registry audit
    [exam landers]/    cambridge, duolingo-english-test (SEO)
    diagnostic/        free diagnostic test (client app)
    practice/          freemium practice (client app)
    vocabulary/        flashcards & quizzes (client app)
    mock-tests/        list + [slug] timed mock test (client app)
    coach/             AI Coach chat (client app)
    progress/          charts demo (server + SVG components)
    pricing/           plans + comparison table
    dashboard/         protected overview
    login|signup|forgot-password/  mock auth (Supabase-ready)
  components/
    ui/                button, card, badge, input, progress (shadcn-style)
    seo/               Breadcrumbs, BlogArticle, ExamSectionPage, ExamHub, BlocksRenderer, FaqSection, InternalLinks, CtaBanner, JsonLd
    tools/             ScoreCalculator, EnglishLevelTest, VocabularyTest, StudyPlanGenerator, EmbeddedPractice, ShareControls
    *App.tsx           interactive client apps
    Hero, Navbar, Footer, Paywall, PricingCard, QuestionCard, ...
  content/
    types.ts           content model (blocks, pages, blog, tools, practice)
    exams.ts           TOEFL/TOEIC/IELTS sections + topics copy
    blog.ts            blog posts (author, dates, related)
    tools.ts, practice.ts  free-tool and practice landing content
  lib/
    config.ts          plans, daily limit, site constants
    seo.ts             seoMetadata factory + JSON-LD builders + OG URL
    seo-registry.ts    single source of truth for sitemap/audit
    analytics.ts       GA event stubs (no PII, no-op without config)
    i18n/config.ts     locale architecture (not yet activated)
    auth.ts            server session (Supabase + demo)
    auth-client.ts     client demo session helpers
    stripe.ts          lazy Stripe client
    questions.ts       30+ original demo questions
    vocabulary.ts      vocab bank (23 words)
    mockTests.ts       4 mock tests
    exams.ts           5 exam definitions
    demo.ts            dashboard/progress demo data
supabase/
  schema.sql           full SQL schema with RLS + triggers
```

## Roadmap (V2)

- Real OpenAI/Anthropic integration for the AI Coach
- Personalized study plan generated from diagnostic results
- Vocabulary spaced-repetition engine + review queue persisted to Supabase
- More exams fully available (IELTS, Cambridge, Duolingo English Test)
- Error-history tracking (drill on your recurring mistakes)
- Leaderboards & streaks
- Email notifications / digest
- Real Supabase Auth flows (delegated in `auth-client.ts`)

## License

Demo product — do not redistribute the demo question content.