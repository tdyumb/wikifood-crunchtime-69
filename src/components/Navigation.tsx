import { ShoppingCart, User } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left Navigation */}
          <div className="flex items-center space-x-8">
            <a href="#" className="text-white hover:text-gray-300">Recipes</a>
            <a href="#" className="text-white hover:text-gray-300">Shop</a>
            <a href="#" className="text-white hover:text-gray-300">Our Company</a>
          </div>

          {/* Logo */}
          <div className="text-2xl font-bold text-white">WikiFoods</div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-8">
            <a href="#" className="text-white hover:text-gray-300">Community</a>
            <div className="flex items-center space-x-4">
              <button className="text-white hover:text-gray-300">
                <User size={20} />
              </button>
              <button className="text-white hover:text-gray-300 relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;