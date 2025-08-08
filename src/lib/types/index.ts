
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  description: string;
  originalPrice?: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
  favorites: number[];
  setFavorites: (favorites: number[]) => void;
  isCartOpen: boolean, 
setCartOpen: (isOpen: boolean) => void;
}

export type ViewMode = "grid" | "list";


export interface ProductGridProps {
  products: Product[];
  searchTerm: string;
  filterCategory: string;
  setFilterCategory: (category: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
}
