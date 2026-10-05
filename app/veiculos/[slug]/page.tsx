import { VehiclePhotos } from '@/components/vehicle-photos';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Button, Container, SectionTitle, TrustList } from '@/components/ui';
import { VehicleCard } from '@/components/vehicle-card';
import { brl, vehicles } from '@/lib/data';

export function generateStaticParams() { return vehicles.map(v => ({ slug: v.slug })); }

export default async function VehiclePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vehicle = vehicles.find(v => v.slug === slug);
  if (!vehicle) notFound();
  const gallery = [vehicle.image, ...vehicle.gallery];
  const similar = vehicles.filter(v => v.slug !== vehicle.slug && (v.type === vehicle.type || v.category === vehicle.category)).slice(0,3);

  return (
    <section className="py-8 lg:py-10">
      <Container>
        <Link href="/estoque" className="inline-flex items-center gap-2 text-sm font-semibold text-brand"><ArrowLeft className="h-4 w-4"/>Voltar ao estoque</Link>
        <div className="mt-6 grid gap-8 xl:grid-cols-[minmax(0,1.6fr)_minmax(320px,1fr)]">
          <div className="min-w-0">
            <VehiclePhotos images={gallery} name={`${vehicle.brand} ${vehicle.model}`} />
            <p className="mt-3 text-sm text-muted">Fotografias ilustrativas · Unsplash</p>
          </div>
          <aside className="border-t border-line pt-7 xl:sticky xl:top-28 xl:self-start xl:border-t-0 xl:pt-0">
            <p className="text-sm text-muted">{vehicle.category} · {vehicle.year}</p>
            <h1 className="mt-3 text-[26px] font-semibold leading-tight sm:text-[30px]">{vehicle.brand} {vehicle.model}</h1>
            <p className="mt-2 text-base text-muted">{vehicle.version}</p>
            <p className="mt-4 text-sm text-muted">{vehicle.km.toLocaleString('pt-BR')} km • {vehicle.transmission} • {vehicle.fuel}</p>
            <p className="mt-5 text-[26px] font-bold leading-tight tabular-nums">{brl(vehicle.price)}</p>
            <div className="mt-6 space-y-3"><Button href="/financiamento" className="w-full">Solicitar financiamento</Button><Button href="/venda-seu-veiculo" variant="secondary" className="w-full">Avaliar meu veículo na troca</Button></div>
            <p className="mt-5 border-t border-line pt-5 text-sm leading-6 text-muted">Consulte a disponibilidade e as condições do veículo antes de concluir a compra.</p>
          </aside>
        </div>

        <div className="mt-10 grid gap-8 xl:grid-cols-[1fr_448px]">
          <div>
            <h2 className="text-2xl font-bold leading-snug">Ficha técnica</h2>
            <dl className="mt-6 grid gap-x-8 sm:grid-cols-2">
              {[['Ano',vehicle.year],['Quilometragem',`${vehicle.km.toLocaleString('pt-BR')} km`],['Câmbio',vehicle.transmission],['Combustível',vehicle.fuel],['Cor',vehicle.color],['Categoria',vehicle.category]].map(([label,value]) => <div key={label} className="flex justify-between gap-4 border-b border-line py-4 text-sm"><dt className="text-muted">{label}</dt><dd className="text-right font-semibold">{value}</dd></div>)}
            </dl>
          </div>
          <div className="border-l-2 border-brand pl-6"><h3 className="text-lg font-semibold">Antes de comprar</h3><p className="mt-3 text-base leading-7 text-muted">Peça o histórico de manutenção, consulte a documentação e confirme as condições de garantia. Agende uma visita para conhecer o veículo.</p></div>
        </div>

        <div className="mt-12"><SectionTitle title="Você também pode gostar" /><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{similar.map(v => <VehicleCard key={v.slug} vehicle={v}/>)}</div></div>
      </Container>
    </section>
  );
}
