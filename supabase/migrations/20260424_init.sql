create table if not exists profiles (
  id uuid primary key,
  email text,
  display_name text,
  avatar_url text,
  plan text default 'free',
  credits_balance integer default 0,
  monthly_credits integer default 0,
  subscription_status text default 'free',
  stripe_customer_id text,
  stripe_subscription_id text,
  preferred_locale text default 'en',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists generations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  provider text,
  model text,
  mode text,
  prompt text,
  final_prompt text,
  genre text,
  persona text,
  voice text,
  mood text,
  language text,
  credit_cost integer,
  status text,
  task_id text,
  result_json jsonb,
  audio_url_1 text,
  audio_url_2 text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table profiles enable row level security;
alter table generations enable row level security;

create policy "read own profile" on profiles for select using (auth.uid() = id);
create policy "read own generations" on generations for select using (auth.uid() = user_id);
