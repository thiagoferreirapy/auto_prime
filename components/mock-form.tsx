'use client';

import { useState, type ReactNode } from 'react';
import { CheckCircle2 } from 'lucide-react';

export function MockForm({ children, buttonLabel, successTitle, successText }: { children: ReactNode; buttonLabel: string; successTitle: string; successText: string }) {
  const [sent, setSent] = useState(false);
  if (sent) return <div className="rounded-xl border border-line bg-brand-soft p-8 text-center"><CheckCircle2 className="mx-auto h-10 w-10 text-brand"/><h3 className="mt-4 text-xl font-bold text-brand-dark">{successTitle}</h3><p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted">{successText}</p><button onClick={() => setSent(false)} className="mt-6 text-sm font-semibold text-brand">Enviar outra solicitação</button></div>;
  return <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}><div className="grid gap-5">{children}</div><button className="mt-6 h-12 w-full rounded-xl bg-brand text-sm font-semibold text-white transition hover:bg-brand-dark">{buttonLabel}</button></form>;
}
