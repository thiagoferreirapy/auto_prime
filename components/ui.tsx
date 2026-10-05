import Link from 'next/link';
import { ArrowRight, Check, ChevronRight, MessageCircle } from 'lucide-react';
import type { ReactNode } from 'react';

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Button({ href, children, variant = 'primary', className = '' }: { href?: string; children: ReactNode; variant?: 'primary' | 'secondary' | 'soft'; className?: string }) {
  const styles = variant === 'primary'
    ? 'bg-brand text-white hover:bg-brand-dark'
    : variant === 'soft'
      ? 'bg-brand-soft text-brand hover:bg-[#e5f1df]'
      : 'border border-line bg-white text-ink hover:bg-surface';
  const cn = `inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition ${styles} ${className}`;
  if (href) return <Link href={href} className={cn}>{children}</Link>;
  return <button className={cn}>{children}</button>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-sm font-semibold text-brand">{children}</p>;
}

export function SectionTitle({ title, subtitle, action }: { title: string; subtitle?: string; action?: ReactNode }) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="text-2xl font-semibold leading-snug text-ink">{title}</h2>
        {subtitle && <p className="mt-2 text-sm text-muted">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

export function TrustList({ items }: { items: string[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item} className="flex items-center gap-3 text-sm font-semibold text-brand-dark">
          <Check className="h-4 w-4 shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

export function ContactCard() {
  return (
    <div className="rounded-lg border border-line bg-white p-5">
      <p className="text-lg font-bold text-brand-dark">Quer falar com alguém?</p>
      <p className="mt-2 text-sm leading-6 text-muted">Nosso atendimento é consultivo. Você pode tirar dúvidas antes de preencher qualquer formulário.</p>
      <Button href="#" variant="primary" className="mt-5 w-full"><MessageCircle className="h-4 w-4" /> Falar no WhatsApp</Button>
    </div>
  );
}

export function MiniLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-dark">{children}<ChevronRight className="h-4 w-4" /></Link>;
}

export function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-brand">{children}<ArrowRight className="h-4 w-4" /></Link>;
}
