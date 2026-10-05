'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { vehicles } from '@/lib/data';
import { Container } from './ui';

const slides = [vehicles[0], vehicles[2], vehicles[4]];

export function HomeHero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => setActive(current => (current + 1) % slides.length), 6000);
    return () => window.clearInterval(timer);
  }, []);

  const show = (direction: number) => setActive(current => (current + direction + slides.length) % slides.length);

  return (
    <section aria-label="Destaques" aria-roledescription="carrossel" className="relative isolate flex min-h-[360px] items-center overflow-hidden bg-ink text-white sm:min-h-[460px] lg:min-h-[520px]">
      {slides.map((vehicle, index) => (
        <div key={vehicle.slug} aria-hidden={index !== active} className={`absolute inset-0 -z-20 transition-opacity duration-500 ${index === active ? 'opacity-100' : 'opacity-0'}`}>
          <Image src={vehicle.image} alt="" fill priority={index === 0} className="object-cover object-center" sizes="100vw" />
        </div>
      ))}
      <div className="absolute inset-0 -z-10 bg-ink/65" />
      <Container className="px-14 py-16 sm:px-20 sm:py-20 lg:px-24">
        <h1 className="max-w-2xl text-[38px] font-semibold leading-[1.12] sm:text-[48px] lg:text-[56px]">Encontre seu próximo<br />carro ou moto.</h1>
        <p className="mt-5 max-w-lg text-base leading-7 text-white/90 sm:text-lg">Escolha o modelo. Confira o preço. Veja cada detalhe.</p>
      </Container>
      <button type="button" onClick={() => show(-1)} aria-label="Slide anterior" className="absolute left-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/35 transition hover:bg-black/60 sm:left-5 sm:h-12 sm:w-12"><ChevronLeft className="h-6 w-6" /></button>
      <button type="button" onClick={() => show(1)} aria-label="Próximo slide" className="absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/35 transition hover:bg-black/60 sm:right-5 sm:h-12 sm:w-12"><ChevronRight className="h-6 w-6" /></button>
      <div className="absolute inset-x-0 bottom-5 flex justify-center gap-2" aria-label="Selecionar slide">
        {slides.map((vehicle, index) => <button key={vehicle.slug} type="button" onClick={() => setActive(index)} aria-label={`Ir para slide ${index + 1}`} aria-current={active === index ? 'true' : undefined} className={`h-2.5 w-2.5 rounded-full ${active === index ? 'bg-white' : 'bg-white/50 hover:bg-white/80'}`} />)}
      </div>
    </section>
  );
}
