import { useState } from "react";
import { useAppContext } from "../../lib/context/AppContext";
import { Menu, ShoppingCart, User, X } from "lucide-react";
import { AuthModal } from "../modal/AuthModal";

export const Header: React.FC = () => {
  const { user, cart, isCartOpen, setCartOpen } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAuth, setShowAuth] = useState<"signin" | "signup" | null>(null);

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Categories", href: "#" },
    { name: "Deals", href: "#" },
    { name: "About", href: "#" },
  ];
  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="lg:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                HorizonHub
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              {/* <button className="text-gray-700 hover:text-purple-600 transition-colors">
                <Search className="h-5 w-5" />
              </button> */}

              <button
                className="relative text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setCartOpen(!isCartOpen)}
              >
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>

              {user ? (
                <div className="flex items-center space-x-2 text-gray-700">
                  <User className="h-5 w-5" />
                  <span className="hidden sm:inline">{user.name}</span>
                </div>
              ) : (
                <div className="flex space-x-2">
                  <button
                    onClick={() => setShowAuth("signin")}
                    className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => setShowAuth("signup")}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Sign Up
                  </button>
                </div>
              )}

              <button
                className="md:hidden text-gray-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-gray-700 hover:text-purple-600"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {showAuth && (
        <AuthModal type={showAuth} onClose={() => setShowAuth(null)} />
      )}
    </>
  );
};
