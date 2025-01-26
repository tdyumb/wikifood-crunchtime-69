import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-500 to-blue-600 shadow-md backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white hover:text-blue-100 transition-colors">WikiFoods</Link>

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={toggleMenu}
              className="text-white p-2 hover:bg-blue-600/50 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          )}

          {/* Desktop Navigation */}
          {!isMobile && (
            <>
              {/* Left Navigation */}
              <div className="flex items-center space-x-8">
                <Link to="/" className="text-white hover:text-blue-100 transition-colors">Home</Link>
                <Link to="/find-recipe" className="text-white hover:text-blue-100 transition-colors">Find A Recipe</Link>
                <Link to="/recipe-collection" className="text-white hover:text-blue-100 transition-colors">Recipe Collection</Link>
              </div>

              {/* Right Navigation */}
              <div className="flex items-center space-x-8">
                <Link to="/about" className="text-white hover:text-blue-100 transition-colors">About</Link>
                <Link to="/contact" className="text-white hover:text-blue-100 transition-colors">Contact</Link>
              </div>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="bg-gradient-to-b from-blue-500 to-blue-600 py-4 animate-fade-in rounded-b-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-blue-100 px-4 py-2 transition-colors">Home</Link>
              <Link to="/find-recipe" className="text-white hover:text-blue-100 px-4 py-2 transition-colors">Find A Recipe</Link>
              <Link to="/recipe-collection" className="text-white hover:text-blue-100 px-4 py-2 transition-colors">Recipe Collection</Link>
              <Link to="/about" className="text-white hover:text-blue-100 px-4 py-2 transition-colors">About</Link>
              <Link to="/contact" className="text-white hover:text-blue-100 px-4 py-2 transition-colors">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;