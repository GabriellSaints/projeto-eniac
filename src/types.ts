export type UserRole = 'admin' | 'comprador' | 'vendedor';

export interface User {
  id: string;
  name: string;
  email: string;
  ra: string;
  password: string;
  role: UserRole;
  storeName?: string;
  storeDescription?: string;
  storeImage?: string;
}

export interface Product {
  id: string;
  title: string;
  category: string;
  subCategory: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  description: string;
  longDescription?: string;
  imageUrl: string;
  thumbnails: string[];
  badge?: 'Novo' | 'Mais Vendido' | 'Oferta' | 'Destaque';
  stockStatus: 'EM ESTOQUE' | 'POUCAS UNIDADES' | 'DISPONÍVEL';
  stockDescription: string;
  sku: string;
  specifications: Record<string, string>;
  brand: string;
  sellerId?: string;
  sellerStoreName?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Coupon {
  code: string;
  discountPercentage: number;
}
