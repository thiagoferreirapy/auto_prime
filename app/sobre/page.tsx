import Image from 'next/image';
import { MapPin, MessageCircle, ShieldCheck, UsersRound } from 'lucide-react';
import { Button, Container } from '@/components/ui';

export default function AboutPage() {
  return (
    <section className="py-10 lg:py-14">
      <Container>
        <h1 className="text-[28px] font-bold leading-tight sm:text-[32px]">Sobre a AutoPrime</h1>
        <p className="mt-3 text-base text-muted">Uma experiência de compra que começa pela confiança.</p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="py-7 sm:py-10 lg:pr-12"><h2 className="text-2xl font-bold leading-snug">Seu próximo veículo começa pela informação.</h2><p className="mt-5 max-w-2xl text-base leading-7 text-muted">Reunimos carros e motos em um catálogo para você comparar modelos, versões e preços. Encontre uma opção, confira a ficha técnica e conheça as possibilidades de financiamento ou troca.</p></div>
          <div className="relative min-h-[320px] lg:m-8 lg:ml-0 lg:overflow-hidden lg:rounded-xl"><Image src="https://images.unsplash.com/photo-1562141961-b5d8e89aa4f5?auto=format&fit=crop&w=1400&q=85" alt="Fotografia ilustrativa de ambiente automotivo" fill className="object-cover" /></div>
        </div>

        <div className="mt-14 border-t border-line pt-10"><h2 className="text-2xl font-bold leading-snug">Encontre o serviço que você precisa</h2><div className="mt-7 divide-y divide-line">{[['/estoque','Comprar','Compare modelos, preços e características.'],['/venda-seu-veiculo','Vender ou trocar','Informe os dados do seu veículo para avaliação.'],['/financiamento','Financiar','Solicite uma análise com os dados da sua compra.']].map(([href,title,description]) => <a key={href} href={href} className="grid gap-2 py-6 sm:grid-cols-[200px_1fr]"><h3 className="text-lg font-semibold text-brand">{title}</h3><p className="text-base text-muted">{description}</p></a>)}</div></div>

      </Container>
    </section>
  );
}
