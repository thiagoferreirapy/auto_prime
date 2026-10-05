import { Building2, Check, FileCheck2, Handshake, SearchCheck } from 'lucide-react';
import { Container, Eyebrow, TrustList } from '@/components/ui';
import { Field } from '@/components/form-field';
import { MockForm } from '@/components/mock-form';

export default function FinancePage() {
  return (
    <section className="py-10 lg:py-12">
      <Container>
        <div className="rounded-2xl bg-brand-soft p-7 sm:p-10 lg:p-12">
          <Eyebrow>Financiamento</Eyebrow>
          <h1 className="mt-5 max-w-4xl text-[28px] font-bold leading-tight sm:text-[32px]">Planeje a compra do seu veículo.</h1>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-muted sm:text-base">Informe seus dados e nossa equipe busca as condições disponíveis para o seu perfil.</p>
        </div>

        <p className="mt-8 border-b border-line pb-8 text-base leading-7 text-muted">Informe o veículo e o valor de entrada. Seus dados de contato serão usados para o retorno sobre a solicitação.</p>

        <div className="mx-auto mt-16 grid max-w-[1040px] gap-10 lg:grid-cols-[1fr_330px]">
          <div><h2 className="text-2xl font-bold leading-snug">Simule seu financiamento</h2><div className="mt-7 border-t border-line pt-8"><MockForm buttonLabel="Solicitar simulação" successTitle="Solicitação recebida" successText="Este é um fluxo demonstrativo. Em produção, os dados seriam enviados para a API de análise e atendimento."><Field label="Veículo" placeholder="Ex.: T-Cross Highline"/><div className="grid gap-5 sm:grid-cols-2"><Field label="Valor do veículo" placeholder="R$ 129.900"/><Field label="Entrada" placeholder="R$ 30.000"/></div><Field label="Nome completo" placeholder="Seu nome"/><div className="grid gap-5 sm:grid-cols-2"><Field label="Celular" placeholder="(61) 99999-9999"/><Field label="E-mail" type="email" placeholder="voce@email.com"/></div><div className="grid gap-5 sm:grid-cols-2"><Field label="CPF" placeholder="000.000.000-00"/><Field label="Data de nascimento" placeholder="DD/MM/AAAA"/></div></MockForm><p className="mt-5 text-sm leading-5 text-muted">Seus dados são usados somente para atendimento e análise da solicitação.</p></div></div>
          <aside className="lg:pt-[64px]"><div className="border-l-2 border-brand pl-6"><h3 className="text-lg font-semibold">Por que simular conosco?</h3><div className="mt-6"><TrustList items={['Comparamos opções disponíveis','Sem compromisso de contratação','Atendimento por consultor','Você acompanha o processo']} /></div></div></aside>
        </div>
      </Container>
    </section>
  );
}
