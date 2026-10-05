import { VehiclePhotos } from './vehicle-photos';
import Link from 'next/link';
import { brl, type Vehicle } from '@/lib/data';

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <article className="group min-w-0 overflow-hidden rounded-xl border border-line bg-white transition-[border-color,box-shadow] duration-200 hover:border-gray-300 hover:shadow-soft">
      <VehiclePhotos images={[vehicle.image, ...vehicle.gallery]} name={`${vehicle.brand} ${vehicle.model}`} href={`/veiculos/${vehicle.slug}`} />
      <Link href={`/veiculos/${vehicle.slug}`} className="block p-4">
        <h3 className="text-base font-semibold leading-snug text-ink group-hover:text-brand">{vehicle.brand} {vehicle.model}</h3>
        <p className="mt-1 truncate text-sm leading-5 text-muted">{vehicle.version}</p>
        <p className="mt-3 text-[22px] font-bold leading-tight tabular-nums text-ink">{brl(vehicle.price)}</p>
        <div className="mt-3 flex flex-wrap gap-x-2 gap-y-1 text-[13px] text-muted"><span>{vehicle.year}</span><span aria-hidden="true">·</span><span>{vehicle.km.toLocaleString('pt-BR')} km</span><span aria-hidden="true">·</span><span>{vehicle.transmission}</span></div>
      </Link>
    </article>
  );
}
