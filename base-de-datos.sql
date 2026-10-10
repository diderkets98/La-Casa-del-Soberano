-- =====================================================================
--  BASE DE DATOS DE LA TIENDA (Supabase)
--  Cómo usarlo: en Supabase abre «SQL Editor» → «New query», pega TODO
--  este archivo y pulsa «Run». Se puede ejecutar más de una vez sin problema.
-- =====================================================================

-- 1) Tabla general: configuración (empleados, clientes, precios, proveedores,
--    Discord…) y registros (ventas, encargos, fichajes, gastos, pedidos…).
create table if not exists public.datos (
  clave       text primary key,
  valor       jsonb,
  actualizado timestamptz not null default now()
);
create index if not exists datos_actualizado_idx on public.datos (actualizado);

-- 2) Stock de productos y almacén de materiales (los materiales llevan delante «mat:»).
create table if not exists public.stock (
  producto text primary key,
  cantidad integer not null default 0
);

-- 3) Contador de los números de venta (nunca se repiten aunque vendan dos móviles a la vez).
create table if not exists public.contador (
  id    integer primary key,
  valor integer not null default 0
);
insert into public.contador (id, valor) values (1, 0) on conflict (id) do nothing;

-- 4) Siguiente número de venta.
create or replace function public.siguiente_numero()
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare n integer;
begin
  insert into contador (id, valor) values (1, 1)
  on conflict (id) do update set valor = contador.valor + 1
  returning valor into n;
  return n;
end $$;

-- 5) Mover stock de forma segura: suma o resta varias cosas a la vez y,
--    si algo se quedaría en negativo, no cambia nada y avisa (STOCK_INSUFICIENTE).
--    Recibe: [{"producto":"Nombre","delta":-2}, ...]   Devuelve: {"Nombre": cantidad, ...}
create or replace function public.mover_stock(p_items jsonb)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  it  jsonb;
  v   integer;
  d   integer;
  p   text;
begin
  for it in select * from jsonb_array_elements(coalesce(p_items, '[]'::jsonb)) loop
    p := it->>'producto';
    d := coalesce((it->>'delta')::integer, 0);
    select cantidad into v from stock where producto = p for update;
    if v is null then
      if d < 0 then raise exception 'STOCK_INSUFICIENTE'; end if;
      insert into stock (producto, cantidad) values (p, d);
    else
      if v + d < 0 then raise exception 'STOCK_INSUFICIENTE'; end if;
      update stock set cantidad = v + d where producto = p;
    end if;
  end loop;
  return (select coalesce(jsonb_object_agg(producto, cantidad), '{}'::jsonb) from stock);
end $$;

-- 6) Permisos: la web entra con la clave pública. Solo la usan los empleados de la tienda.
alter table public.datos    enable row level security;
alter table public.stock    enable row level security;
alter table public.contador enable row level security;

drop policy if exists "web datos"    on public.datos;
drop policy if exists "web stock"    on public.stock;
drop policy if exists "web contador" on public.contador;
create policy "web datos"    on public.datos    for all to anon, authenticated using (true) with check (true);
create policy "web stock"    on public.stock    for all to anon, authenticated using (true) with check (true);
create policy "web contador" on public.contador for all to anon, authenticated using (true) with check (true);

grant select, insert, update, delete on public.datos, public.stock, public.contador to anon, authenticated;
grant execute on function public.siguiente_numero()     to anon, authenticated;
grant execute on function public.mover_stock(jsonb)     to anon, authenticated;

-- 7) Avisos al instante entre móviles (Realtime).
do $$
begin
  begin alter publication supabase_realtime add table public.datos; exception when duplicate_object then null; end;
  begin alter publication supabase_realtime add table public.stock; exception when duplicate_object then null; end;
end $$;

-- Listo. Comprueba en «Table Editor» que aparecen las tablas datos, stock y contador.
