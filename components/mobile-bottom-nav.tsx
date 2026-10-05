'use client';

import Link from 'next/link';
import { House, CarFront, ArrowLeftRight, Info } from 'lucide-react';
import { usePathname } from 'next/navigation';

const items = [
  { href: '/', label: 'Início', icon: House },
  { href: '/estoque', label: 'Estoque', icon: CarFront },
  { href: '/venda-seu-veiculo', label: 'Vender', icon: ArrowLeftRight },
  { href: '/sobre', label: 'Sobre', icon: Info }
];

export function MobileBottomNav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Navegação principal" className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-4">
        {items.map(({ href, label, icon: Icon }) => {
          const active = href === '/' ? pathname === '/' : pathname.startsWith(href) || (href === '/estoque' && pathname.startsWith('/veiculos/'));
          return <Link key={label} href={href} aria-current={active ? 'page' : undefined} className={`relative flex min-h-[60px] flex-col items-center justify-center gap-1.5 text-xs transition-colors ${active ? 'font-semibold text-brand' : 'font-medium text-muted hover:text-ink'}`}>
            {active && <span aria-hidden="true" className="absolute top-0 h-0.5 w-7 bg-brand" />}
            <Icon aria-hidden="true" className="h-[22px] w-[22px]" strokeWidth={active ? 2 : 1.75} />
            {label}
          </Link>;
        })}
      </div>
    </nav>
  );
}
