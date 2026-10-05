'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button, Container } from './ui';

const nav = [
  { href: '/estoque', label: 'Estoque' },
  { href: '/estoque?tipo=CARRO', label: 'Carros' },
  { href: '/estoque?tipo=MOTO', label: 'Motos' },
  { href: '/venda-seu-veiculo', label: 'Vender' },
  { href: '/financiamento', label: 'Financiar' },
  { href: '/sobre', label: 'Sobre' }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <Container className="flex h-[72px] items-center justify-between">
        <Link href="/" className="font-display text-xl font-bold leading-none tracking-tight text-ink">AUTO<span className="text-brand">PRIME</span></Link>
        <nav className="hidden items-center gap-5 lg:flex">
          {nav.map((item) => {
            const active = !item.href.includes('?') && pathname.startsWith(item.href);
            return <Link key={item.href} href={item.href} className={`flex min-h-11 items-center text-sm font-medium transition hover:text-brand ${active ? 'font-bold text-brand' : 'text-ink'}`}>{item.label}</Link>;
          })}
        </nav>
        <div className="hidden xl:block"><Button href="/venda-seu-veiculo">Anunciar veículo</Button></div>
        <button className="grid h-11 w-11 place-items-center rounded-lg border border-line lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="mobile-menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>
      <div id="mobile-menu" aria-hidden={!open} inert={!open} className={`absolute inset-x-0 top-full z-50 border-t border-line bg-white shadow-soft transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none lg:hidden ${open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'}`}>
          <div className="max-h-[calc(100dvh-72px)] overflow-y-auto">
            <Container className="space-y-1 py-4">
            {nav.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-sm font-medium hover:bg-surface">{item.label}</Link>)}
            <Button href="/venda-seu-veiculo" className="mt-2 w-full">Anunciar veículo</Button>
            </Container>
          </div>
      </div>
    </header>
  );
}
