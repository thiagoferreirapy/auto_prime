import { BadgeDollarSign, CarFront, ClipboardCheck, RefreshCcw } from 'lucide-react';
import { Container, Eyebrow, TrustList } from '@/components/ui';
import { Field, SelectField } from '@/components/form-field';
import { MockForm } from '@/components/mock-form';

export default function SellPage() {
  return (
    <section className="py-10 lg:py-12">
      <Container>
        <div className="rounded-2xl bg-brand-dark p-7 text-white sm:p-10 lg:p-12">
          <p className="text-sm font-semibold text-[#d7e8cf]">Venda seu veículo</p>
          <h1 className="mt-5 max-w-3xl text-[28px] font-bold leading-tight sm:text-[32px]">Seu usado pode ser o começo da próxima compra.</h1>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-[#d7e8cf] sm:text-base">Avaliação transparente, contato rápido e três formas de negociação.</p>
        </div>

        <div className="mt-14"><h2 className="text-2xl font-bold leading-snug">Como funciona</h2><ol className="mt-7 grid gap-8 md:grid-cols-3">{[['Conte sobre o veículo','Informe modelo, ano, quilometragem e condição.'],['Solicite uma avaliação','Os dados ajudam a iniciar a análise do seu veículo.'],['Converse sobre a negociação','Venda direta, troca ou consignação.']].map(([title,text],index) => <li key={title} className="border-t border-line pt-5"><p className="text-sm text-brand">0{index + 1}</p><h3 className="mt-3 text-lg font-semibold">{title}</h3><p className="mt-2 text-base leading-7 text-muted">{text}</p></li>)}</ol></div>

        <div className="mx-auto mt-16 grid max-w-[1040px] gap-10 lg:grid-cols-[1fr_330px]">
          <div><h2 className="text-2xl font-bold leading-snug">Solicite sua avaliação</h2><div className="mt-7 border-t border-line pt-8"><MockForm buttonLabel="Solicitar avaliação" successTitle="Avaliação solicitada" successText="Tudo certo. Neste protótipo a solicitação fica somente no navegador; depois é só conectar ao seu backend."><div className="grid gap-5 sm:grid-cols-2"><SelectField label="Tipo"><option>Carro</option><option>Moto</option></SelectField><Field label="Marca e modelo" placeholder="Ex.: Honda Civic"/></div><div className="grid gap-5 sm:grid-cols-2"><Field label="Ano" placeholder="2022"/><Field label="Quilometragem" placeholder="35.000 km"/></div><Field label="Nome" placeholder="Seu nome"/><div className="grid gap-5 sm:grid-cols-2"><Field label="Celular" placeholder="(61) 99999-9999"/><Field label="E-mail" type="email" placeholder="voce@email.com"/></div></MockForm><p className="mt-5 text-sm text-muted">Você não assume nenhum compromisso ao enviar a solicitação.</p></div></div>
          <aside className="lg:pt-[64px]"><div className="border-l-2 border-brand pl-6"><h3 className="text-lg font-semibold">Formas de negociação</h3><div className="mt-6 space-y-6">{[['Venda direta','Receba uma proposta pelo veículo.'],['Troca','Use o veículo como parte do pagamento.'],['Consignação','Nós anunciamos e conduzimos a venda.']].map(([t,d])=><div key={t}><p className="font-semibold">{t}</p><p className="mt-1 text-sm leading-6 text-muted">{d}</p></div>)}</div></div></aside>
        </div>
      </Container>
    </section>
  );
}
