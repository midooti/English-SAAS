-- ============================================================
-- Prep-Anglais — Schéma Supabase (exécuter : Supabase > SQL Editor)
-- Architecture de données complète (profils, tests, résultats,
-- suivi, vocabulaire, abonnements Stripe + Row Level Security).
-- ============================================================

create extension if not exists "pgcrypto";

-- ------------------------------------------------------------
-- 1. Profils utilisateurs
-- ------------------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text,
  email text,
  plan text not null default 'free' check (plan in ('free','premium')),
  stripe_customer_id text,
  target_exam text,
  target_score text,
  exam_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Profil auto-créé à la première connexion
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, name)
  values (new.id, new.email, coalesce(new.raw_user_meta_data->>'name', new.email))
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ------------------------------------------------------------
-- 2. Tests & questions
-- ------------------------------------------------------------
create table if not exists public.tests (
  id uuid primary key default gen_random_uuid(),
  exam text not null check (exam in ('toefl','toeic','ielts','cambridge','duolingo')),
  kind text not null check (kind in ('diagnostic','mock','section')),
  slug text unique,
  title text not null,
  duration_min integer default 30,
  total_questions integer default 10,
  is_premium boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.questions (
  id uuid primary key default gen_random_uuid(),
  test_id uuid references public.tests(id) on delete set null,
  exam text not null check (exam in ('toefl','toeic','ielts','cambridge','duolingo')),
  skill text not null check (skill in ('reading','listening','speaking','writing','vocabulary')),
  difficulty text not null default 'medium' check (difficulty in ('easy','medium','hard')),
  passage text,
  prompt text not null,
  audio_url text,
  options jsonb not null default '[]'::jsonb,
  correct_index integer not null,
  explanation text,
  created_at timestamptz not null default now()
);

-- ------------------------------------------------------------
-- 3. Tentatives & réponses
-- ------------------------------------------------------------
create table if not exists public.attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  test_id uuid references public.tests(id) on delete set null,
  exam text,
  skill text,
  mode text not null default 'practice' check (mode in ('practice','diagnostic','mock')),
  score integer check (score between 0 and 100),
  band numeric(3,1),
  details jsonb,
  completed_at timestamptz not null default now()
);

create table if not exists public.answers (
  id uuid primary key default gen_random_uuid(),
  attempt_id uuid not null references public.attempts(id) on delete cascade,
  question_id uuid not null references public.questions(id) on delete cascade,
  selected_index integer,
  correct boolean not null default false,
  created_at timestamptz not null default now()
);

-- ------------------------------------------------------------
-- 4. Scores & progrès
-- ------------------------------------------------------------
create table if not exists public.scores (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  exam text,
  band numeric(3,1),
  raw_score integer,
  created_at timestamptz not null default now()
);

create table if not exists public.study_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  skill text not null,
  duration_min integer not null default 0,
  xp integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.user_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade unique,
  overall_band numeric(3,1) not null default 4.5,
  questions_completed integer not null default 0,
  accuracy numeric(3,1) not null default 0,
  study_minutes integer not null default 0,
  updated_at timestamptz not null default now()
);

create table if not exists public.streaks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade unique,
  current_streak integer not null default 0,
  longest_streak integer not null default 0,
  last_active_at date
);

-- ------------------------------------------------------------
-- 5. Vocabulaire & flashcards (répétition espacée prête)
-- ------------------------------------------------------------
create table if not exists public.vocabulary (
  id uuid primary key default gen_random_uuid(),
  word text not null,
  definition text not null,
  example text,
  synonyms jsonb not null default '[]'::jsonb,
  category text not null default 'Daily English',
  difficulty text not null default 'medium' check (difficulty in ('easy','medium','hard')),
  created_at timestamptz not null default now()
);

create table if not exists public.flashcards (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  vocab_id uuid not null references public.vocabulary(id) on delete cascade,
  box integer not null default 0,
  next_review_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  unique (user_id, vocab_id)
);

-- ------------------------------------------------------------
-- 6. Abonnements (alimenté par le webhook Stripe)
-- ------------------------------------------------------------
create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  plan text not null check (plan in ('premium_monthly','premium_yearly')),
  status text not null default 'incomplete' check (
    status in ('incomplete','incomplete_expired','trialing','active','past_due','canceled','unpaid')
  ),
  stripe_subscription_id text unique,
  current_period_end timestamptz,
  cancel_at_period_end boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Passe le profil en premium / free selon l'abonnement actif
create or replace function public.sync_premium()
returns trigger language plpgsql security definer set search_path = public
as $$
begin
  update public.profiles
  set plan = case
    when exists (
      select 1 from public.subscriptions s
      where s.user_id = profiles.id and s.status in ('active','trialing')
    ) then 'premium'
    else 'free'
  end
  where id in (new.user_id);
  return new;
end;
$$;

drop trigger if exists subscriptions_sync_premium on public.subscriptions;
create trigger subscriptions_sync_premium
  after insert or update of status on public.subscriptions
  for each row execute procedure public.sync_premium();

-- ------------------------------------------------------------
-- 7. Row Level Security
-- ------------------------------------------------------------
alter table public.profiles enable row level security;
alter table public.attempts enable row level security;
alter table public.answers enable row level security;
alter table public.scores enable row level security;
alter table public.study_sessions enable row level security;
alter table public.user_progress enable row level security;
alter table public.streaks enable row level security;
alter table public.flashcards enable row level security;
alter table public.subscriptions enable row level security;
-- tests / questions / vocabulary : lecture publique (catalogue)

create policy "profiles lecture proprietaire"
  on public.profiles for select to authenticated using (auth.uid() = id);
create policy "profiles maj proprietaire"
  on public.profiles for update to authenticated using (auth.uid() = id);

create policy "scores lecture proprietaire"
  on public.scores for select to authenticated using (auth.uid() = user_id);
create policy "scores insertion proprietaire"
  on public.scores for insert to authenticated with check (auth.uid() = user_id);

create policy "attempts lecture proprietaire"
  on public.attempts for select to authenticated using (auth.uid() = user_id);
create policy "attempts insertion proprietaire"
  on public.attempts for insert to authenticated with check (auth.uid() = user_id);

create policy "reponses lecture proprietaire"
  on public.answers for select to authenticated using (
    auth.uid() = (select user_id from public.attempts where id = attempt_id)
  );
create policy "reponses insertion proprietaire"
  on public.answers for insert to authenticated with check (
    auth.uid() = (select user_id from public.attempts where id = attempt_id)
  );

create policy "sessions lecture proprietaire"
  on public.study_sessions for select to authenticated using (auth.uid() = user_id);
create policy "sessions insertion proprietaire"
  on public.study_sessions for insert to authenticated with check (auth.uid() = user_id);

create policy "progress lecture proprietaire"
  on public.user_progress for select to authenticated using (auth.uid() = user_id);
create policy "progress insertion proprietaire"
  on public.user_progress for insert to authenticated with check (auth.uid() = user_id);
create policy "progress maj proprietaire"
  on public.user_progress for update to authenticated using (auth.uid() = user_id);

create policy "streaks lecture proprietaire"
  on public.streaks for select to authenticated using (auth.uid() = user_id);

create policy "flashcards proprietaire"
  on public.flashcards for all to authenticated using (auth.uid() = user_id);

create policy "abonnements lecture proprietaire"
  on public.subscriptions for select to authenticated using (auth.uid() = user_id);

create policy "questions lecture publique"
  on public.questions for select to anon using (true);
create policy "tests lecture publique"
  on public.tests for select to anon using (true);
create policy "vocabulaire lecture publique"
  on public.vocabulary for select to anon using (true);

-- ------------------------------------------------------------
-- 8. Index utiles
-- ------------------------------------------------------------
create index if not exists idx_questions_exam_skill on public.questions(exam, skill);
create index if not exists idx_attempts_user on public.attempts(user_id, completed_at desc);
create index if not exists idx_scores_user on public.scores(user_id, created_at desc);
create index if not exists idx_flashcards_review on public.flashcards(user_id, next_review_at);