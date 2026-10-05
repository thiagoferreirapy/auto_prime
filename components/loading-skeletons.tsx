import { Container } from './ui';

function Bar({ className = '' }: { className?: string }) {
  return <div aria-hidden="true" className={`animate-pulse rounded bg-gray-200 ${className}`} />;
}

export function VehicleCardSkeleton() {
  return <article aria-hidden="true" className="overflow-hidden rounded-xl border border-line bg-white">
    <Bar className="aspect-[4/3] rounded-none" />
    <div className="space-y-3 p-4"><Bar className="h-5 w-3/4" /><Bar className="h-4 w-1/2" /><Bar className="mt-4 h-7 w-2/5" /><Bar className="h-4 w-4/5" /></div>
  </article>;
}

export function HomeLoading() {
  return <>
    <div className="min-h-[360px] animate-pulse bg-gray-300 sm:min-h-[460px] lg:min-h-[520px]" />
    <Container className="border-b border-line pb-6 pt-4"><Bar className="mb-4 h-10 w-40" /><div className="grid gap-3 sm:grid-cols-[1fr_auto]"><Bar className="h-11" /><Bar className="h-11 w-full sm:w-44" /></div></Container>
    <Container className="py-8"><Bar className="mb-6 h-7 w-52" /><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{Array.from({ length: 6 }, (_, i) => <VehicleCardSkeleton key={i} />)}</div></Container>
  </>;
}

export function StockLoading() {
  return <section className="py-8 lg:py-10"><Container>
    <Bar className="h-9 w-40" /><Bar className="mt-3 h-5 w-72" />
    <div className="mt-6 flex gap-3 border-b border-line pb-4"><Bar className="h-10 w-20" /><Bar className="h-10 w-20" /><Bar className="h-10 w-20" /></div>
    <div className="my-5 flex gap-2">{Array.from({ length: 5 }, (_, i) => <Bar key={i} className="h-9 w-24 shrink-0 rounded-full" />)}</div>
    <div className="grid gap-7 lg:grid-cols-[240px_minmax(0,1fr)]"><aside className="hidden space-y-5 border-r border-line pr-7 lg:block">{Array.from({ length: 5 }, (_, i) => <div key={i}><Bar className="mb-2 h-4 w-28" /><Bar className="h-11 w-full" /></div>)}</aside><div><Bar className="mb-5 h-5 w-44" /><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{Array.from({ length: 6 }, (_, i) => <VehicleCardSkeleton key={i} />)}</div></div></div>
  </Container></section>;
}

export function VehicleLoading() {
  return <section className="py-8 lg:py-10"><Container>
    <Bar className="h-5 w-36" /><div className="mt-6 grid gap-8 xl:grid-cols-[minmax(0,1.6fr)_minmax(320px,1fr)]"><div><Bar className="aspect-[4/3] w-full" /><Bar className="mt-3 h-4 w-48" /></div><aside className="space-y-4 border-t border-line pt-7 xl:border-0"><Bar className="h-4 w-36" /><Bar className="h-9 w-4/5" /><Bar className="h-5 w-3/5" /><Bar className="h-4 w-4/5" /><Bar className="mt-6 h-9 w-2/5" /><Bar className="h-11 w-full" /><Bar className="h-11 w-full" /></aside></div>
    <div className="mt-10 grid gap-8 xl:grid-cols-[1fr_448px]"><div><Bar className="h-7 w-36" /><div className="mt-6 grid gap-4 sm:grid-cols-2">{Array.from({ length: 6 }, (_, i) => <Bar key={i} className="h-12 border-b border-line" />)}</div></div><div><Bar className="h-6 w-40" /><Bar className="mt-4 h-24 w-full" /></div></div>
  </Container></section>;
}

export function FormPageLoading() {
  return <section className="py-10 lg:py-12"><Container>
    <div className="bg-gray-200 p-7 sm:p-10 lg:p-12"><Bar className="h-4 w-32" /><Bar className="mt-5 h-9 w-3/4" /><Bar className="mt-5 h-5 w-2/3" /></div>
    <Bar className="mt-8 h-14 w-full" />
    <div className="mx-auto mt-16 grid max-w-[1040px] gap-10 lg:grid-cols-[1fr_330px]"><div className="space-y-5"><Bar className="h-7 w-64" />{Array.from({ length: 6 }, (_, i) => <Bar key={i} className="h-11 w-full" />)}</div><div className="space-y-4"><Bar className="h-6 w-48" /><Bar className="h-28 w-full" /></div></div>
  </Container></section>;
}

export function AboutLoading() {
  return <section className="py-10 lg:py-14"><Container>
    <Bar className="h-9 w-64" /><Bar className="mt-3 h-5 w-80" />
    <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_.9fr]"><div className="space-y-5 py-7"><Bar className="h-8 w-4/5" /><Bar className="h-5 w-full" /><Bar className="h-5 w-11/12" /><Bar className="h-5 w-3/4" /></div><Bar className="min-h-[320px] w-full" /></div>
    <div className="mt-14 space-y-6 border-t border-line pt-10"><Bar className="h-8 w-72" />{Array.from({ length: 3 }, (_, i) => <Bar key={i} className="h-16 w-full" />)}</div>
  </Container></section>;
}

export function AdminLoading() {
  return <div className="min-h-screen bg-[#f7f8f7] md:pl-[248px]">
    <aside className="fixed inset-y-0 left-0 hidden w-[248px] border-r border-line bg-white p-6 md:block"><Bar className="h-7 w-40" /><Bar className="mt-10 h-4 w-24" />{Array.from({ length: 5 }, (_, i) => <Bar key={i} className="mt-5 h-11 w-full" />)}</aside>
    <main className="p-5 sm:p-8"><Bar className="h-8 w-48" /><Bar className="mt-2 h-5 w-72" /><div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{Array.from({ length: 4 }, (_, i) => <Bar key={i} className="h-32 rounded-xl border border-line bg-white" />)}</div><Bar className="mt-8 h-7 w-56" /><div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{Array.from({ length: 3 }, (_, i) => <VehicleCardSkeleton key={i} />)}</div></main>
  </div>;
}
