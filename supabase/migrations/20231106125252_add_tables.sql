CREATE TYPE operation AS ENUM ('EDIT', 'CREATE');
CREATE TYPE currency AS ENUM('NOK', 'SEK', 'DKK', 'USD', 'EUR');

create table
  public.org (
    id uuid not null default gen_random_uuid (),
    company_id bigint not null,
    name text null,
    constraint org_pkey primary key (id),
    constraint org_company_id_key unique (company_id)
  ) tablespace pg_default;

create table
  public.group (
    id uuid not null default gen_random_uuid (),
    name text not null,
    org_id uuid null,
    balance double precision not null,
    currency public.currency not null,
    constraint group_pkey primary key (id),
    constraint group_org_id_fkey foreign key (org_id) references org (id) on delete cascade
  ) tablespace pg_default;

create table
  public.transaction (
    id uuid not null default gen_random_uuid (),
    created_at timestamp with time zone not null default now(),
    description text not null,
    amount double precision not null,
    group_id uuid not null,
    constraint transaction_pkey primary key (id),
    constraint transaction_group_id_fkey foreign key (group_id) references "group" (id) on delete cascade
  ) tablespace pg_default;

  create table
    public.log (
      id bigint generated by default as identity,
      time timestamp with time zone not null default now(),
      operation public.operation not null,
      transaction_id uuid not null,
      constraint log_pkey primary key (id),
      constraint log_transaction_id_fkey foreign key (transaction_id) references transaction (id)
    ) tablespace pg_default;

ALTER TABLE public.org ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.group ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transaction ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.log ENABLE ROW LEVEL SECURITY;