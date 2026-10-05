'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { vehicles } from '@/lib/data';

type VehicleType = 'TODOS' | 'CARRO' | 'MOTO';

export function HomeVehicleSearch() {
  const [query, setQuery] = useState('');
  const [type, setType] = useState<VehicleType>('TODOS');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const router = useRouter();
  const matches = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return [];
    return vehicles.filter(vehicle =>
      (type === 'TODOS' || vehicle.type === type) &&
      `${vehicle.brand} ${vehicle.model} ${vehicle.version} ${vehicle.category}`.toLowerCase().includes(term)
    ).slice(0, 5);
  }, [query, type]);

  return (
    <div className="relative" onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
      <div className="vehicle-tabs" aria-label="Filtrar por tipo">
        {(['TODOS', 'CARRO', 'MOTO'] as const).map(option => (
          <button key={option} type="button" onClick={() => { setType(option); setActive(-1); setOpen(true); }} aria-pressed={type === option} className="vehicle-tab">
            {option === 'TODOS' ? 'Todos' : option === 'CARRO' ? 'Carros' : 'Motos'}
          </button>
        ))}
      </div>
      <form onSubmit={event => { event.preventDefault(); router.push(`/estoque?tipo=${type}&q=${encodeURIComponent(query.trim())}`); }} className="mt-3 grid gap-3 sm:grid-cols-[1fr_auto]">
        <div className="flex h-11 min-w-0 items-center rounded-lg border border-line bg-white px-4 focus-within:border-brand">
          <Search className="mr-3 h-5 w-5 shrink-0 text-muted" />
          <input value={query} onFocus={() => setOpen(true)} onChange={event => { setQuery(event.target.value); setActive(-1); setOpen(true); }} onKeyDown={event => {
            if (event.key === 'Escape') { setOpen(false); setActive(-1); }
            if (matches.length && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) { event.preventDefault(); setOpen(true); setActive(index => event.key === 'ArrowDown' ? (index + 1) % matches.length : (index <= 0 ? matches.length - 1 : index - 1)); }
            if (event.key === 'Enter' && open && active >= 0 && matches[active]) { event.preventDefault(); router.push(`/veiculos/${matches[active].slug}`); }
          }} role="combobox" aria-expanded={open && matches.length > 0} aria-activedescendant={open && active >= 0 && matches[active] ? `suggestion-${matches[active].slug}` : undefined} aria-label="Buscar marca ou modelo" aria-autocomplete="list" aria-controls={open && matches.length > 0 ? 'home-vehicle-suggestions' : undefined} className="min-w-0 w-full bg-transparent text-base outline-none focus-visible:outline-none placeholder:text-muted" placeholder="Busque por marca ou modelo" autoComplete="off" />
        </div>
        <button className="h-11 rounded-lg bg-brand px-6 text-sm font-semibold text-white transition hover:bg-brand-dark">Buscar veículos</button>
      </form>
      {open && matches.length > 0 && (
        <div id="home-vehicle-suggestions" role="listbox" aria-label="Veículos encontrados" className="absolute inset-x-0 top-full z-30 mt-2 overflow-hidden rounded-xl border border-line bg-white shadow-float">
          {matches.map((vehicle, index) => (
            <button id={`suggestion-${vehicle.slug}`} key={vehicle.slug} type="button" role="option" aria-selected={active === index} onClick={() => router.push(`/veiculos/${vehicle.slug}`)} className={`flex w-full items-center justify-between gap-3 border-b border-line px-4 py-3 text-left last:border-0 hover:bg-surface ${active === index ? 'bg-surface' : ''}`}>
              <span><span className="block text-sm font-semibold">{vehicle.brand} {vehicle.model}</span><span className="mt-1 block text-sm text-muted">{vehicle.type === 'CARRO' ? 'Carro' : 'Moto'} · {vehicle.version}</span></span>
              <span className="text-sm font-semibold text-brand">Ver anúncio</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
