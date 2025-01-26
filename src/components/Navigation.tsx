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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-600/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white">WikiFoods</Link>

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={toggleMenu}
              className="text-black p-2"
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
                <Link to="/" className="text-black hover:text-gray-600">Home</Link>
                <Link to="/find-recipe" className="text-black hover:text-gray-600">Find A Recipe</Link>
                <Link to="/recipe-collection" className="text-black hover:text-gray-600">Recipe Collection</Link>
              </div>

              {/* Right Navigation */}
              <div className="flex items-center space-x-8">
                <Link to="/about" className="text-black hover:text-gray-600">About</Link>
                <Link to="/contact" className="text-black hover:text-gray-600">Contact</Link>
              </div>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="bg-blue-600/95 backdrop-blur-sm py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-gray-200 px-4">Home</Link>
              <Link to="/find-recipe" className="text-white hover:text-gray-200 px-4">Find A Recipe</Link>
              <Link to="/recipe-collection" className="text-white hover:text-gray-200 px-4">Recipe Collection</Link>
              <Link to="/about" className="text-white hover:text-gray-200 px-4">About</Link>
              <Link to="/contact" className="text-white hover:text-gray-200 px-4">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;