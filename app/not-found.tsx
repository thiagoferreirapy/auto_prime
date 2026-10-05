import { Button, Container } from '@/components/ui';

export default function NotFound() {
  return <Container className="py-28 text-center"><p className="text-sm font-bold text-brand">404</p><h1 className="mt-3 text-[28px] font-bold leading-tight sm:text-[32px]">Veículo não encontrado</h1><p className="mt-3 text-sm text-muted">Esse anúncio pode ter sido removido ou vendido.</p><Button href="/estoque" className="mt-7">Voltar ao estoque</Button></Container>;
}
