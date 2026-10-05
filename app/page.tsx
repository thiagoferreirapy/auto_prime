import { ArrowRight } from 'lucide-react';
import { Container, Eyebrow, SectionTitle } from '@/components/ui';
import { HomeHero } from '@/components/home-hero';
import { VehicleCard } from '@/components/vehicle-card';
import { HomeVehicleSearch } from '@/components/home-vehicle-search';
import { vehicles } from '@/lib/data';

export default function HomePage() {
  const featured = vehicles.slice(0, 6);
  return (
    <>
      <HomeHero />
      <section aria-label="Encontre seu veículo" className="relative z-20 border-b border-line bg-white">
        <Container className="pb-5 pt-2 sm:pb-6"><HomeVehicleSearch /></Container>
      </section>

      <section className="bg-surface py-8 sm:py-10">
        <Container>
          <SectionTitle title="Veículos à venda" action={<a href="/estoque" className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-brand">Ver estoque completo ({vehicles.length}) <ArrowRight className="h-4 w-4" /></a>} />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{featured.map(v => <VehicleCard key={v.slug} vehicle={v} />)}</div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <Eyebrow>Vai trocar de veículo?</Eyebrow>
              <h2 className="mt-3 text-2xl font-bold leading-snug">Seu usado pode entrar no negócio.</h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-muted">Solicite uma avaliação ou consulte as opções para financiar a próxima compra.</p>
            </div>
            <div className="divide-y divide-line">
              {[['/venda-seu-veiculo', 'Venda ou troca', 'Informe o modelo, o ano e a quilometragem do seu veículo.'], ['/financiamento', 'Financiamento', 'Preencha os dados para solicitar uma análise de condições.']].map(([href, title, description]) => (
                <a key={href} href={href} className="group flex items-center justify-between gap-6 py-6 first:pt-0"><div><h3 className="text-xl font-semibold group-hover:text-brand">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{description}</p></div><ArrowRight className="h-5 w-5 shrink-0 text-brand" /></a>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
