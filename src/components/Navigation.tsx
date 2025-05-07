
import { Menu, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLocation } from "react-router-dom";
import { Input } from "./ui/input";
import { useRecipes } from "@/contexts/RecipeContext";
import { useNavigate } from "react-router-dom";

// Less structured component with some inconsistencies
const Navigation = () => {
  // State for menu toggle
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const isMobile = useIsMobile();
  const location = useLocation();
  const navigate = useNavigate();
  const { recipes, setFilters } = useRecipes();

  // Simple toggle function a human would write
  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  // Scroll to recipe filter section if on home page
  const scrollToRecipeFilter = (e: React.MouseEvent) => {
    if (location.pathname === "/" || location.pathname === "/home") {
      e.preventDefault();
      const recipeFilterSection = document.querySelector('#recipe-filter-section');
      if (recipeFilterSection) {
        recipeFilterSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Filter recipes by search query
    const filteredRecipes = recipes.filter(recipe => 
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    // Navigate to find recipe page with search results
    if (searchQuery.trim()) {
      // Use the context to set filters based on search results
      const uniqueRecipeTypes = Array.from(
        new Set(filteredRecipes.map(recipe => recipe.cuisineType))
      );
      
      setFilters({
        cuisineType: uniqueRecipeTypes,
        mealType: [],
        dietaryRestrictions: []
      });
      
      // Navigate to find recipe page
      if (location.pathname !== "/find-recipe") {
        navigate("/find-recipe");
      }
    }
  };

  // Adding some random whitespace and formatting
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#ff9933] shadow-md backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand/logo */}
          <Link to="/" className="text-2xl font-bold text-white hover:text-gray-200 transition-colors">
            WikiFoods
          </Link>

          {/* Search bar - visible on desktop, hidden on mobile */}
          {!isMobile && (
            <form onSubmit={handleSearch} className="relative mx-4 flex-1 max-w-md">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search recipes..."
                  className="pl-10 pr-4 py-2 bg-white/90 border-transparent focus:border-transparent focus:ring-0 rounded-full text-sm w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
              </div>
            </form>
          )}

          {/* Mobile menu button with inconsistent formatting */}
          {isMobile && (
            <button
              onClick={handleMenuToggle}
              className="text-white p-2 hover:bg-[#ff9933]/80 rounded-lg transition-colors"
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
                <Link 
                  to={location.pathname === "/" || location.pathname === "/home" ? "#recipe-filter-section" : "/find-recipe"} 
                  className="text-white hover:text-gray-200 transition-colors"
                  onClick={scrollToRecipeFilter}
                >
                  Find A Recipe
                </Link>
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
          <div className="bg-[#ff9933] py-4 animate-fade-in rounded-b-lg shadow-lg">
            {/* Mobile search bar */}
            <form onSubmit={handleSearch} className="px-4 mb-4">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search recipes..."
                  className="pl-10 pr-4 py-2 bg-white/90 border-transparent focus:border-transparent focus:ring-0 rounded-full text-sm w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
              </div>
            </form>
            
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-gray-200 px-4 py-2 transition-colors">Home</Link>
              <Link 
                to={location.pathname === "/" || location.pathname === "/home" ? "#recipe-filter-section" : "/find-recipe"} 
                className="text-white hover:text-gray-200 px-4 py-2 transition-colors"
                onClick={scrollToRecipeFilter}
              >
                Find A Recipe
              </Link>
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
