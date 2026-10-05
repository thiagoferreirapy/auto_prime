'use client';

import { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Filter, SlidersHorizontal, X } from 'lucide-react';
import { VehicleCard } from './vehicle-card';
import { AnimatedDialog } from './animated-dialog';
import { vehicles } from '@/lib/data';

export function StockClient({ initialQuery = '', initialType = 'TODOS' }: { initialQuery?: string; initialType?: 'TODOS' | 'CARRO' | 'MOTO' }) {
  const [query, setQuery] = useState(initialQuery);
  const [type, setType] = useState<'TODOS' | 'CARRO' | 'MOTO'>(initialType);
  const [maxPrice, setMaxPrice] = useState(200000);
  const [sort, setSort] = useState('relevancia');
  const [mobileFilters, setMobileFilters] = useState(false);
  const [brand, setBrand] = useState('');
  const [minYear, setMinYear] = useState(2020);
  const [maxKm, setMaxKm] = useState(50000);
  const [transmission, setTransmission] = useState('');

  const brands = [...new Set(vehicles.filter(v => type === 'TODOS' || v.type === type).map(v => v.brand))];

  const selectBrand = (brand: string) => {
    setBrand(current => current === brand ? '' : brand);
    document.getElementById('veiculos')?.scrollIntoView({ behavior: 'smooth' });
  };

  const result = useMemo(() => {
    const q = query.toLowerCase().trim();
    let list = vehicles.filter(v => (type === 'TODOS' || v.type === type) && (!brand || v.brand === brand) && Number(v.year.split('/')[0]) >= minYear && v.km <= maxKm && (!transmission || v.transmission === transmission) && v.price <= maxPrice && (!q || `${v.brand} ${v.model} ${v.version} ${v.category}`.toLowerCase().includes(q)));
    if (sort === 'menor') list = [...list].sort((a,b) => a.price - b.price);
    if (sort === 'maior') list = [...list].sort((a,b) => b.price - a.price);
    return list;
  }, [query, type, maxPrice, sort, brand, minYear, maxKm, transmission]);

  const clearFilters = () => { setQuery(''); setBrand(''); setMinYear(2020); setMaxKm(50000); setMaxPrice(200000); setTransmission(''); };

  const filters = (prefix: string) => (
    <div className="space-y-5">
      <div><label htmlFor={`${prefix}-query`} className="mb-2 block text-sm font-medium">Busca</label><input id={`${prefix}-query`} value={query} onChange={e => setQuery(e.target.value)} className="h-11 w-full rounded-lg border border-line bg-white px-3 text-sm outline-none focus:border-brand" placeholder="Marca ou modelo" /></div>
      <div><label htmlFor={`${prefix}-price`} className="mb-2 block text-sm font-semibold">Preço máximo</label><input id={`${prefix}-price`} type="range" min="30000" max="200000" step="5000" value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))} className="w-full accent-brand" /><p className="mt-2 text-sm text-muted">Até R$ {maxPrice.toLocaleString('pt-BR')}</p></div>
      <label className="block text-sm font-medium">Ano mínimo<select value={minYear} onChange={e => setMinYear(Number(e.target.value))} className="mt-2 h-11 w-full rounded-lg border border-line bg-white px-3">{[2020,2021,2022,2023,2024,2025].map(year => <option key={year}>{year}</option>)}</select></label>
      <label className="block text-sm font-medium">Quilometragem<select value={maxKm} onChange={e => setMaxKm(Number(e.target.value))} className="mt-2 h-11 w-full rounded-lg border border-line bg-white px-3">{[50000,30000,10000].map(km => <option key={km} value={km}>Até {km.toLocaleString('pt-BR')} km</option>)}</select></label>
      <label className="block text-sm font-medium">Câmbio<select value={transmission} onChange={e => setTransmission(e.target.value)} className="mt-2 h-11 w-full rounded-lg border border-line bg-white px-3"><option value="">Todos</option><option>Automático</option><option>Manual</option></select></label>
      <button onClick={clearFilters} className="min-h-11 text-sm font-semibold text-brand underline underline-offset-4">Limpar filtros</button>
    </div>
  );

  return (
    <>
      <div className="mb-6 flex items-center gap-3 lg:hidden"><button onClick={() => setMobileFilters(true)} className="inline-flex h-11 items-center gap-2 rounded-lg border border-line px-4 text-sm font-semibold"><Filter className="h-4 w-4"/>Filtros</button><select value={sort} onChange={e => setSort(e.target.value)} className="h-11 rounded-lg border border-line px-3 text-sm"><option value="relevancia">Relevância</option><option value="menor">Menor preço</option><option value="maior">Maior preço</option></select></div>
      <div className="vehicle-tabs mb-6" aria-label="Escolher categoria de veículo">
        {(['TODOS', 'CARRO', 'MOTO'] as const).map(value => <button key={value} onClick={() => { setType(value); setBrand(''); }} aria-pressed={type === value} className="vehicle-tab">{value === 'TODOS' ? 'Todos' : value === 'CARRO' ? 'Carros' : 'Motos'}</button>)}
      </div>
      <section className="mb-6 border-b border-line pb-4" aria-label="Filtrar por marca">
        <div className="mb-5 flex items-center justify-between gap-4">
          <h2 className="text-sm font-semibold text-muted">Marcas no estoque</h2>
          <div className="flex gap-2"><button aria-label="Ver marcas anteriores" onClick={() => document.getElementById('marcas-slider')?.scrollBy({ left: -240, behavior: 'smooth' })} className="rounded-full border border-line bg-white p-2"><ChevronLeft className="h-5 w-5" /></button><button aria-label="Ver próximas marcas" onClick={() => document.getElementById('marcas-slider')?.scrollBy({ left: 240, behavior: 'smooth' })} className="rounded-full border border-line bg-white p-2"><ChevronRight className="h-5 w-5" /></button></div>
        </div>
        <div id="marcas-slider" className="flex snap-x gap-2 overflow-x-auto scroll-smooth pb-2">
          {brands.map(name => <button key={name} onClick={() => selectBrand(name)} aria-pressed={brand === name} className={`flex min-h-9 shrink-0 snap-start items-center gap-2 rounded-full border px-3 text-sm font-medium ${brand === name ? 'border-brand bg-brand-soft text-brand' : 'border-line text-ink hover:border-gray-300'}`}>{name}<span className="text-xs font-normal text-muted">{vehicles.filter(v => v.brand === name && (type === 'TODOS' || v.type === type)).length}</span></button>)}
        </div>
      </section>
      <div className="grid gap-7 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="hidden border-r border-line pr-7 lg:block"><div className="mb-6 flex items-center gap-2"><SlidersHorizontal className="h-5 w-5"/><h2 className="text-lg font-semibold">Filtros</h2></div>{filters('desktop')}</aside>
        <div id="veiculos" className="min-w-0 scroll-mt-28">
          <div className="mb-6 hidden items-center justify-between lg:flex"><p className="text-sm font-semibold">{result.length} veículos encontrados</p><select value={sort} onChange={e => setSort(e.target.value)} className="h-11 rounded-lg border border-line px-3 text-sm"><option value="relevancia">Ordenar: relevância</option><option value="menor">Menor preço</option><option value="maior">Maior preço</option></select></div>
          {result.length ? <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{result.map(v => <VehicleCard key={v.slug} vehicle={v}/>)}</div> : <div className="rounded-lg border border-line bg-surface p-8 text-center"><p className="text-lg font-semibold">Nenhum veículo encontrado</p><p className="mt-2 text-sm text-muted">Tente remover alguns filtros.</p></div>}
        </div>
      </div>
      <AnimatedDialog open={mobileFilters} onClose={() => setMobileFilters(false)} label="Filtros do estoque" variant="drawer">
        <div className="mb-6 flex items-center justify-between"><h2 className="text-xl font-bold">Filtros</h2><button autoFocus aria-label="Fechar filtros" onClick={() => setMobileFilters(false)} className="p-2"><X/></button></div>
        {filters('mobile')}
        <button onClick={() => setMobileFilters(false)} className="mt-8 h-12 w-full rounded-lg bg-brand text-sm font-semibold text-white">Ver {result.length} veículos</button>
      </AnimatedDialog>
    </>
  );
}
