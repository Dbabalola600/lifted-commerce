import { useState } from "react";
import { Header } from "../navigations/Header";
import { Hero } from "../misc/Hero";
import { SearchBar } from "../input/SearchBar";
import { ProductGrid } from "../misc/ProductGrid";
import { Cart } from "../misc/Cart";
import { Footer } from "../navigations/Footer";
import { AppContext } from "../../lib/context/AppContext";
import type { AppContextType, CartItem, User } from "../../lib/types";

export const LandingPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const contextValue: AppContextType = {
    user,
    setUser,
    cart,
    setCart,
    favorites,
    setFavorites
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <SearchBar />
        <ProductGrid />
        <Cart />
        <Footer />
      </div>
    </AppContext.Provider>
  );
};

