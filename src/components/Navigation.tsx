
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

// Less structured component with some inconsistencies
const Navigation = () => {
  // State for menu toggle
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  // Simple toggle function a human would write
  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  // Adding some random whitespace and formatting
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A1F2C] shadow-md backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand/logo */}
          <Link to="/" className="text-2xl font-bold text-white hover:text-gray-200 transition-colors">
            WikiFoods
          </Link>

          {/* Mobile menu button with inconsistent formatting */}
          {isMobile && (
            <button
              onClick={handleMenuToggle}
              className="text-white p-2 hover:bg-[#2A2F3C] rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          )}

          {/* Desktop Navigation with less structured comments and formatting */}
          {!isMobile && (
            <>
              {/* Left links */}
              <div className="flex items-center space-x-8">
                <Link to="/" className="text-white hover:text-gray-200 transition-colors">Home</Link>
                <Link to="/find-recipe" className="text-white hover:text-gray-200 transition-colors">Find A Recipe</Link>
                <Link to="/recipe-collection" className="text-white hover:text-gray-200 transition-colors">Recipe Collection</Link>
              </div>

              {/* Right links */}
              <div className="flex items-center space-x-8">
                <Link to="/about" className="text-white hover:text-gray-200 transition-colors">About</Link>
                <Link to="/contact" className="text-white hover:text-gray-200 transition-colors">Contact</Link>
              </div>
            </>
          )}
        </div>

        {/* Mobile menu - inconsistent naming with menuOpen instead of isMenuOpen */}
        {isMobile && menuOpen && (
          <div className="bg-[#1A1F2C] py-4 animate-fade-in rounded-b-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-gray-200 px-4 py-2 transition-colors">Home</Link>
              <Link to="/find-recipe" className="text-white hover:text-gray-200 px-4 py-2 transition-colors">Find A Recipe</Link>
              <Link to="/recipe-collection" className="text-white hover:text-gray-200 px-4 py-2 transition-colors">Recipe Collection</Link>
              <Link to="/about" className="text-white hover:text-gray-200 px-4 py-2 transition-colors">About</Link>
              <Link to="/contact" className="text-white hover:text-gray-200 px-4 py-2 transition-colors">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
