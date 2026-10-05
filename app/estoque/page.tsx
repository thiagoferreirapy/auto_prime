import { Container } from '@/components/ui';
import { StockClient } from '@/components/stock-client';

export default async function StockPage({ searchParams }: { searchParams: Promise<{ q?: string; tipo?: string }> }) {
  const params = await searchParams;
  return (
    <section className="py-8 lg:py-10">
      <Container>
        <h1 className="text-[28px] font-semibold leading-tight sm:text-[32px]">Estoque</h1>
        <p className="mt-2 text-sm text-muted">Compare os modelos e encontre o que combina com você.</p>
        <div className="mt-6"><StockClient key={`${params.tipo ?? 'TODOS'}-${params.q ?? ''}`} initialQuery={params.q ?? ''} initialType={params.tipo === 'CARRO' || params.tipo === 'MOTO' ? params.tipo : 'TODOS'} /></div>
      </Container>
    </section>
  );
}
