import Link from 'next/link';
import { Container } from './ui';

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-ink text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_.8fr_.8fr_1fr]">
        <div>
          <Link href="/" className="text-2xl font-extrabold leading-none tracking-tight text-white">AUTOPRIME</Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-[#b7c0b7]">Compra e venda de carros e motos com transparência, procedência e atendimento humano.</p>
        </div>
        <div>
          <p className="text-sm font-semibold">Comprar</p>
          <div className="mt-4 space-y-3 text-sm text-[#b7c0b7]"><Link className="block" href="/estoque">Estoque</Link><Link className="block" href="/financiamento">Financiamento</Link></div>
        </div>
        <div>
          <p className="text-sm font-semibold">Vender</p>
          <div className="mt-4 space-y-3 text-sm text-[#b7c0b7]"><Link className="block" href="/venda-seu-veiculo">Venda seu veículo</Link><Link className="block" href="/sobre">Sobre nós</Link></div>
        </div>
        <div>
          <p className="text-sm font-semibold">Atendimento</p>
          <p className="mt-4 text-sm leading-6 text-[#b7c0b7]">Brasília, DF<br/>Atendimento online e presencial</p>
        </div>
      </Container>
      <div className="border-t border-white/10"><Container className="flex flex-col gap-3 py-5 text-xs text-[#8d978d] sm:flex-row sm:items-center sm:justify-between"><span>© 2026 AutoPrime</span><span>Termos · Privacidade</span></Container></div>
    </footer>
  );
}
