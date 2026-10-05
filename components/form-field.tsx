import type { InputHTMLAttributes, SelectHTMLAttributes } from 'react';

export function Field({ label, ...props }: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  return <label className="block"><span className="mb-2 block text-sm font-semibold text-ink">{label}</span><input {...props} className="h-[52px] w-full rounded-lg border border-line bg-white px-4 text-base outline-none transition placeholder:text-[#929a92] focus:border-brand focus:ring-2 focus:ring-brand/10" /></label>;
}

export function SelectField({ label, children, ...props }: { label: string; children: React.ReactNode } & SelectHTMLAttributes<HTMLSelectElement>) {
  return <label className="block"><span className="mb-2 block text-sm font-semibold text-ink">{label}</span><select {...props} className="h-[52px] w-full rounded-lg border border-line bg-white px-4 text-base outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/10">{children}</select></label>;
}
