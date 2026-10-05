export type Vehicle = {
  slug: string;
  type: 'CARRO' | 'MOTO';
  category: string;
  brand: string;
  model: string;
  version: string;
  year: string;
  km: number;
  transmission: string;
  fuel: string;
  color: string;
  price: number;
  monthly: number;
  image: string;
  gallery: string[];
  featured?: boolean;
};

export const vehicles: Vehicle[] = [
  {
    slug: 'volkswagen-t-cross-highline-2025', type: 'CARRO', category: 'SUV', brand: 'Volkswagen', model: 'T-Cross', version: 'Highline 250 TSI', year: '2025/2025', km: 18400, transmission: 'Automático', fuel: 'Flex', color: 'Cinza', price: 129900, monthly: 2480, featured: true,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1000&q=85'
    ]
  },
  {
    slug: 'kawasaki-versys-x-300', type: 'MOTO', category: 'TRAIL', brand: 'Kawasaki', model: 'Versys X 300', version: 'Tourer', year: '2023/2023', km: 8059, transmission: 'Manual', fuel: 'Gasolina', color: 'Verde', price: 30000, monthly: 690, featured: true,
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1558980664-10ea292b24d3?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1524591652733-73fa1ae7b5ee?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1000&q=85'
    ]
  },
  {
    slug: 'toyota-corolla-altis', type: 'CARRO', category: 'SEDAN', brand: 'Toyota', model: 'Corolla', version: 'Altis Premium', year: '2024/2025', km: 12400, transmission: 'Automático', fuel: 'Flex', color: 'Prata', price: 148900, monthly: 2870, featured: true,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1400&q=85', gallery: []
  },
  {
    slug: 'jeep-compass-longitude', type: 'CARRO', category: 'SUV', brand: 'Jeep', model: 'Compass', version: 'Longitude T270', year: '2024/2024', km: 22100, transmission: 'Automático', fuel: 'Flex', color: 'Preto', price: 146900, monthly: 2790,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1400&q=85', gallery: []
  },
  {
    slug: 'bmw-f-750-gs', type: 'MOTO', category: 'TRAIL', brand: 'BMW', model: 'F 750 GS', version: 'Premium', year: '2022/2023', km: 13100, transmission: 'Manual', fuel: 'Gasolina', color: 'Preto', price: 62900, monthly: 1390,
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1400&q=85', gallery: []
  },
  {
    slug: 'honda-city-hatch', type: 'CARRO', category: 'HATCH', brand: 'Honda', model: 'City Hatch', version: 'Touring', year: '2024/2025', km: 9800, transmission: 'Automático', fuel: 'Flex', color: 'Branco', price: 118900, monthly: 2290,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1400&q=85', gallery: []
  },
  {
    slug: 'fiat-toro-volcano', type: 'CARRO', category: 'PICAPE', brand: 'Fiat', model: 'Toro', version: 'Volcano Turbo', year: '2024/2024', km: 20500, transmission: 'Automático', fuel: 'Flex', color: 'Vermelho', price: 159900, monthly: 3090,
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1400&q=85', gallery: []
  },
  {
    slug: 'triumph-tiger-900', type: 'MOTO', category: 'TRAIL', brand: 'Triumph', model: 'Tiger 900', version: 'GT Pro', year: '2023/2024', km: 7200, transmission: 'Manual', fuel: 'Gasolina', color: 'Branco', price: 74900, monthly: 1590,
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1400&q=85', gallery: []
  },
  {
    slug: 'volkswagen-taos-highline', type: 'CARRO', category: 'SUV', brand: 'Volkswagen', model: 'Taos', version: 'Highline 250 TSI', year: '2024/2024', km: 16800, transmission: 'Automático', fuel: 'Flex', color: 'Cinza', price: 176900, monthly: 3390,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1400&q=85', gallery: []
  }
];

export const brl = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(value);
