-- Ejecutar en Supabase > SQL Editor.
-- La clave service_role nunca debe aparecer en el frontend.

create extension if not exists pgcrypto;

create table if not exists public.player_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  language text not null default 'es',
  consent_global_learning boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.games (
  id uuid primary key default gen_random_uuid(),
  player_id uuid not null references auth.users(id) on delete cascade,
  status text not null default 'active' check (status in ('active', 'ended', 'archived')),
  player_data jsonb not null default '{}'::jsonb,
  world_data jsonb not null default '{}'::jsonb,
  memory_data jsonb not null default '{}'::jsonb,
  settings_data jsonb not null default '{}'::jsonb,
  started_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  ended_at timestamptz
);

create table if not exists public.game_events (
  id bigint generated always as identity primary key,
  game_id uuid not null references public.games(id) on delete cascade,
  player_id uuid not null references auth.users(id) on delete cascade,
  event_type text not null default 'decision',
  event_text text,
  intent text,
  effects jsonb not null default '[]'::jsonb,
  analysis jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.learning_signals (
  id bigint generated always as identity primary key,
  player_id uuid not null references auth.users(id) on delete cascade,
  game_id uuid not null references public.games(id) on delete cascade,
  signal_type text not null,
  language text,
  intent text,
  signal_data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.active_players (
  player_id uuid primary key references auth.users(id) on delete cascade,
  game_id uuid not null references public.games(id) on delete cascade,
  last_seen timestamptz not null default now()
);

create table if not exists public.player_memories (
  id bigint generated always as identity primary key,
  player_id uuid not null references auth.users(id) on delete cascade,
  game_id uuid not null references public.games(id) on delete cascade,
  memory_type text not null,
  memory_data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (game_id, memory_type)
);

create table if not exists public.player_diseases (
  id bigint generated always as identity primary key,
  player_id uuid not null references auth.users(id) on delete cascade,
  game_id uuid not null references public.games(id) on delete cascade,
  disease_id text not null,
  active boolean not null default true,
  controlled boolean not null default false,
  congenital boolean not null default false,
  diagnosed_age integer,
  created_at timestamptz not null default now(),
  resolved_at timestamptz,
  unique (game_id, disease_id)
);

create table if not exists public.global_learning_events (
  id bigint generated always as identity primary key,
  event_type text not null,
  language text,
  intent text,
  anonymized_text text,
  effects jsonb not null default '[]'::jsonb,
  aggregate_data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists games_player_updated_idx on public.games (player_id, updated_at desc);
create index if not exists game_events_player_created_idx on public.game_events (player_id, created_at desc);
create index if not exists player_memories_player_idx on public.player_memories (player_id);
create index if not exists player_diseases_player_idx on public.player_diseases (player_id);
create index if not exists global_learning_events_created_idx on public.global_learning_events (created_at desc);
create index if not exists learning_signals_created_idx on public.learning_signals (created_at desc);
create index if not exists active_players_seen_idx on public.active_players (last_seen desc);

alter table public.player_profiles enable row level security;
alter table public.games enable row level security;
alter table public.game_events enable row level security;
alter table public.player_memories enable row level security;
alter table public.player_diseases enable row level security;
alter table public.global_learning_events enable row level security;
alter table public.learning_signals enable row level security;
alter table public.active_players enable row level security;

drop policy if exists learning_signals_insert_own on public.learning_signals;
create policy learning_signals_insert_own on public.learning_signals
for insert to authenticated with check (player_id = auth.uid());

drop policy if exists active_players_insert_own on public.active_players;
drop policy if exists active_players_update_own on public.active_players;
drop policy if exists active_players_delete_own on public.active_players;
create policy active_players_insert_own on public.active_players
for insert to authenticated with check (player_id = auth.uid());
create policy active_players_update_own on public.active_players
for update to authenticated using (player_id = auth.uid()) with check (player_id = auth.uid());
create policy active_players_delete_own on public.active_players
for delete to authenticated using (player_id = auth.uid());

revoke all on public.learning_signals from anon;
grant insert on public.learning_signals to authenticated;
revoke all on public.active_players from anon;
grant insert, update, delete on public.active_players to authenticated;
grant select on public.active_players to authenticated;

drop policy if exists player_profiles_select_own on public.player_profiles;
drop policy if exists player_profiles_insert_own on public.player_profiles;
drop policy if exists player_profiles_update_own on public.player_profiles;
create policy player_profiles_select_own on public.player_profiles for select to authenticated using (id = auth.uid());
create policy player_profiles_insert_own on public.player_profiles for insert to authenticated with check (id = auth.uid());
create policy player_profiles_update_own on public.player_profiles for update to authenticated using (id = auth.uid()) with check (id = auth.uid());

drop policy if exists games_select_own on public.games;
drop policy if exists games_insert_own on public.games;
drop policy if exists games_update_own on public.games;
drop policy if exists games_delete_own on public.games;
create policy games_select_own on public.games for select to authenticated using (player_id = auth.uid());
create policy games_insert_own on public.games for insert to authenticated with check (player_id = auth.uid());
create policy games_update_own on public.games for update to authenticated using (player_id = auth.uid()) with check (player_id = auth.uid());
create policy games_delete_own on public.games for delete to authenticated using (player_id = auth.uid());

drop policy if exists game_events_select_own on public.game_events;
drop policy if exists game_events_insert_own on public.game_events;
create policy game_events_select_own on public.game_events for select to authenticated using (player_id = auth.uid());
create policy game_events_insert_own on public.game_events for insert to authenticated with check (player_id = auth.uid());

drop policy if exists player_memories_select_own on public.player_memories;
drop policy if exists player_memories_insert_own on public.player_memories;
drop policy if exists player_memories_update_own on public.player_memories;
create policy player_memories_select_own on public.player_memories for select to authenticated using (player_id = auth.uid());
create policy player_memories_insert_own on public.player_memories for insert to authenticated with check (player_id = auth.uid());
create policy player_memories_update_own on public.player_memories for update to authenticated using (player_id = auth.uid()) with check (player_id = auth.uid());

drop policy if exists player_diseases_select_own on public.player_diseases;
drop policy if exists player_diseases_insert_own on public.player_diseases;
drop policy if exists player_diseases_update_own on public.player_diseases;
create policy player_diseases_select_own on public.player_diseases for select to authenticated using (player_id = auth.uid());
create policy player_diseases_insert_own on public.player_diseases for insert to authenticated with check (player_id = auth.uid());
create policy player_diseases_update_own on public.player_diseases for update to authenticated using (player_id = auth.uid()) with check (player_id = auth.uid());

-- El frontend puede insertar aprendizaje solo si el usuario acepta.
-- La lectura global y la agregación deberán hacerse en una Edge Function con service_role.
drop policy if exists global_learning_insert_consented on public.global_learning_events;
create policy global_learning_insert_consented on public.global_learning_events
for insert to authenticated
with check (
  exists (
	select 1 from public.player_profiles profile
	where profile.id = auth.uid()
	  and profile.consent_global_learning = true
  )
);

revoke all on public.global_learning_events from anon;
revoke select, update, delete on public.global_learning_events from authenticated;

-- Devuelve únicamente patrones agregados. Nunca expone textos, jugadores ni decisiones individuales.
create or replace function public.get_global_learning_patterns()
returns table (
  language text,
  intent text,
  event_count bigint,
  last_seen timestamptz
)
language sql
stable
security definer
set search_path = public
as $$
  select
	coalesce(language, 'unknown') as language,
	coalesce(intent, 'unknown') as intent,
	count(*)::bigint as event_count,
	max(created_at) as last_seen
  from public.global_learning_events
  group by coalesce(language, 'unknown'), coalesce(intent, 'unknown')
  order by event_count desc;
$$;

revoke all on function public.get_global_learning_patterns() from public;
grant execute on function public.get_global_learning_patterns() to authenticated;

create or replace function public.get_active_player_count()
returns bigint
language sql
stable
security definer
set search_path = public
as $$
  select count(*)::bigint
  from public.active_players
	where last_seen > now() - interval '20 seconds'
	and exists (
	  select 1 from public.games
	  where games.id = active_players.game_id
		and games.status = 'active'
	);
$$;

revoke all on function public.get_active_player_count() from public;
grant execute on function public.get_active_player_count() to authenticated;
