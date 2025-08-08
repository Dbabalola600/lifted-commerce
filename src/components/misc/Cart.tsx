import { useAppContext } from "../../lib/context/AppContext";
import { ShoppingCart,  } from "lucide-react";


export const Cart: React.FC = () => {
  const { cart, isCartOpen, setCartOpen } = useAppContext();
  // const [isOpen, setIsOpen] = useState(false);

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (!isCartOpen) {
    return (
      <button
        onClick={() => setCartOpen(!isCartOpen)}
        className="fixed bottom-6 right-6 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors z-40"
      >
        <div className="relative">
          <ShoppingCart className="h-6 w-6" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </div>
      </button>
    );
  }
};
