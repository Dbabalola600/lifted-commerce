import { useMemo, useState } from "react";
import { Header } from "../navigations/Header";
import { Hero } from "../misc/Hero";
import { SearchBar } from "../input/SearchBar";
import { ProductGrid } from "../misc/ProductGrid";
import { Cart } from "../misc/Cart";
import { Footer } from "../navigations/Footer";
import { AppContext } from "../../lib/context/AppContext";
import type {
  AppContextType,
  CartItem,
  Product,
  User,
  ViewMode,
} from "../../lib/types";
import CartModal from "../modal/CartModal";
import { sampleProducts } from "../../lib/mock/mockProducts";

export const LandingPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isCartOpen, setCartOpen] = useState(false);

  const [products] = useState<Product[]>(sampleProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  const contextValue: AppContextType = {
    user,
    setUser,
    cart,
    setCart,
    favorites,
    setFavorites,
    isCartOpen,
    setCartOpen,
  };

  const filteredProducts = useMemo(() => {
    return products
      .filter(
        (p) =>
          filterCategory === "all" ||
          p.category.toLowerCase() === filterCategory
      )
      .filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        switch (sortBy) {
          case "price_low":
            return a.price - b.price;
          case "price_high":
            return b.price - a.price;
          case "rating":
            return b.rating - a.rating;
          default:
            return a.name.localeCompare(b.name);
        }
      });
  }, [products, searchTerm, filterCategory, sortBy]);

  return (
    <AppContext.Provider value={contextValue}>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProductGrid
      searchTerm={searchTerm}
        products={filteredProducts}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />
        <Cart />

        <CartModal />
        <Footer />
      </div>
    </AppContext.Provider>
  );
};
