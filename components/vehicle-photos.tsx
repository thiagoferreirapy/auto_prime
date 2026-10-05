'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { AnimatedDialog } from './animated-dialog';

export function VehiclePhotos({ images, name, href }: { images: string[]; name: string; href?: string }) {
  const photos = [...new Set(images)];
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const startX = useRef<number | null>(null);
  const swiped = useRef(false);
  const thumbnails = useRef<HTMLDivElement>(null);
  const multiple = photos.length > 1;
  const move = (step: number) => setIndex(current => (current + step + photos.length) % photos.length);
  const scrollThumbnails = (direction: -1 | 1) => {
    const element = thumbnails.current;
    if (!element) return;
    const maxScroll = element.scrollWidth - element.clientWidth;
    const nextScroll = Math.min(maxScroll, Math.max(0, element.scrollLeft + direction * element.clientWidth * 0.8));
    element.scrollTo({ left: nextScroll, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };
  const controls = (large = false) => multiple && <>
    <button type="button" aria-label={`Foto anterior de ${name}`} onClick={() => move(-1)} className={`absolute left-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full ${large ? 'bg-white/15 text-white' : 'bg-white/60 text-ink shadow-sm backdrop-blur-sm'}`}><ChevronLeft aria-hidden="true" /></button>
    <button type="button" aria-label={`Próxima foto de ${name}`} onClick={() => move(1)} className={`absolute right-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full ${large ? 'bg-white/15 text-white' : 'bg-white/60 text-ink shadow-sm backdrop-blur-sm'}`}><ChevronRight aria-hidden="true" /></button>
  </>;
  const touch = {
    onTouchStart: (event: React.TouchEvent) => { startX.current = event.touches[0].clientX; swiped.current = false; },
    onTouchEnd: (event: React.TouchEvent) => {
      if (startX.current !== null && multiple) {
        const delta = event.changedTouches[0].clientX - startX.current;
        if (Math.abs(delta) > 45) { swiped.current = true; move(delta < 0 ? 1 : -1); }
      }
      startX.current = null;
    }
  };
  const image = <Image key={photos[index]} src={photos[index]} alt={`${name}, foto ${index + 1}`} fill className="object-cover" sizes={href ? '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw' : '(max-width: 1280px) 100vw, 60vw'} />;

  return (
    <div className="min-w-0" role="region" aria-label={`Fotos de ${name}`}>
      <div className={`relative aspect-[4/3] overflow-hidden bg-surface ${href ? '' : 'rounded-xl'}`} {...touch}>
        {href ? <Link href={href} aria-label={`Ver ${name}`} onClick={event => { if (swiped.current) { event.preventDefault(); swiped.current = false; } }} className="absolute inset-0">{image}</Link> :
          <button type="button" onClick={() => { if (!swiped.current) setExpanded(true); swiped.current = false; }} aria-label={`Ampliar foto ${index + 1} de ${name}`} className="absolute inset-0">{image}<span className="absolute bottom-3 left-3 rounded-lg bg-black/60 p-2 text-white"><Maximize2 className="h-5 w-5" /></span></button>}
        {controls()}
        {href && multiple && <div aria-label={`Selecionar foto de ${name}`} className="absolute inset-x-0 bottom-3 z-20 flex justify-center gap-1.5">
          {photos.map((photo, number) => <button key={photo} type="button" onClick={() => setIndex(number)} aria-label={`Foto ${number + 1} de ${name}`} aria-pressed={index === number} className={`h-2 w-2 rounded-full transition-colors ${index === number ? 'bg-brand' : 'bg-black/55 hover:bg-black/75'}`} />)}
        </div>}
        {!href && multiple && <span aria-live="polite" className="pointer-events-none absolute bottom-3 right-3 rounded bg-black/60 px-2 py-1 text-xs text-white">{index + 1} / {photos.length}</span>}
      </div>

      {!href && multiple && <div className="mt-3 flex items-center gap-2">
        <button type="button" aria-label="Rolar miniaturas para trás" className="grid h-11 w-9 shrink-0 place-items-center rounded-lg border border-line" onClick={() => scrollThumbnails(-1)}><ChevronLeft /></button>
        <div ref={thumbnails} className="flex min-w-0 flex-1 snap-x snap-mandatory gap-3 overflow-x-auto py-1">
          {photos.map((photo, number) => <button type="button" key={photo} onClick={() => setIndex(number)} aria-label={`Selecionar foto ${number + 1} de ${name}`} aria-pressed={index === number} className={`relative aspect-[4/3] w-[40%] shrink-0 snap-start overflow-hidden rounded-lg border-2 sm:w-[28%] ${index === number ? 'border-brand' : 'border-transparent'}`}><Image src={photo} alt="" fill sizes="200px" className="object-cover" /></button>)}
        </div>
        <button type="button" aria-label="Rolar miniaturas para frente" className="grid h-11 w-9 shrink-0 place-items-center rounded-lg border border-line" onClick={() => scrollThumbnails(1)}><ChevronRight /></button>
      </div>}

      {!href && <AnimatedDialog open={expanded} onClose={() => setExpanded(false)} label={`Galeria de ${name}`}>
        <div className="flex h-full flex-col p-3 sm:p-6" onKeyDown={event => {
          if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
          if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
        }}>
          <div className="flex shrink-0 items-center justify-between gap-4"><div><p className="font-semibold">{name}</p><p className="text-sm text-white/70" aria-live="polite">Foto {index + 1} de {photos.length}</p></div><button type="button" autoFocus onClick={() => setExpanded(false)} aria-label="Fechar galeria" className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-white/10"><X /></button></div>
          <div className="relative my-3 min-h-0 flex-1" {...touch}><Image src={photos[index]} alt={`${name}, foto ampliada ${index + 1}`} fill sizes="100vw" className="object-contain" />{controls(true)}</div>
          {multiple && <div className="flex shrink-0 gap-2 overflow-x-auto py-2">{photos.map((photo, number) => <button type="button" key={photo} onClick={() => setIndex(number)} aria-label={`Ver foto ${number + 1}`} aria-pressed={index === number} className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 ${index === number ? 'border-white' : 'border-transparent opacity-60'}`}><Image src={photo} alt="" fill sizes="96px" className="object-cover" /></button>)}</div>}
        </div>
      </AnimatedDialog>}
    </div>
  );
}
