# AutoPrime

Implementação em **Next.js + TypeScript + Tailwind CSS** do redesign criado no Figma para uma plataforma premium de compra e venda de carros e motos.

## Stack
- Next.js App Router
- React + TypeScript
- Tailwind CSS
- Lucide React
- Imagens remotas do Unsplash
- Dados 100% mockados em `lib/data.ts`

## Rotas
- `/` Home
- `/estoque` Estoque com filtros mockados funcionais
- `/veiculos/[slug]` Detalhe do veículo
- `/financiamento` Fluxo de financiamento mockado
- `/venda-seu-veiculo` Fluxo de avaliação/venda mockado
- `/sobre` Sobre / confiança / localização

## Rodar
```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Observações
Os formulários são demonstrações locais e não enviam dados para backend. As imagens vêm do Unsplash via `next/image`.
