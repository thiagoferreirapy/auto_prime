import type { Metadata } from 'next';
import './globals.css';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'AutoPrime | Carros e motos com confiança',
  description: 'Marketplace de carros e motos com estoque selecionado, financiamento e avaliação do seu veículo.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><SiteShell>{children}</SiteShell></body></html>;
}
