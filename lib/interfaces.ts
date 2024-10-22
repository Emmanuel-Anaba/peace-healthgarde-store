export interface NavLink {
  name: string;
  path: string;
}

export interface Product {
  name: string;
  description: string;
  benefits: string[];
}

export interface SwiperItem {
  name: string;
}

export interface MySwiperProps {
  items: SwiperItem[];
  type?: string;
  delay: number;
  breakpoints: {
    [key: number]: { slidesPerView: number; spaceBetween?: number };
  };
}
