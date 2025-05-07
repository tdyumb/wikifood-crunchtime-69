
import { Menu, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLocation } from "react-router-dom";
import { Input } from "./ui/input";
import { useRecipes } from "@/contexts/RecipeContext";
import { useNavigate } from "react-router-dom";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";

// Less structured component with some inconsistencies
const Navigation = () => {
  // State for menu toggle
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchCommand, setShowSearchCommand] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState<{
    recipes: { id: string; title: string }[];
    mealTypes: string[];
    dietaryRestrictions: string[];
  }>({
    recipes: [],
    mealTypes: [],
    dietaryRestrictions: []
  });
  
  const isMobile = useIsMobile();
  const location = useLocation();
  const navigate = useNavigate();
  const { recipes, setFilters } = useRecipes();
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Generate search suggestions based on current query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchSuggestions({
        recipes: [],
        mealTypes: [],
        dietaryRestrictions: []
      });
      return;
    }

    const query = searchQuery.toLowerCase();
    
    // Find matching recipes
    const matchingRecipes = recipes
      .filter(recipe => 
        recipe.title.toLowerCase().includes(query) || 
        recipe.description.toLowerCase().includes(query) ||
        recipe.cuisineType.toLowerCase().includes(query) ||
        recipe.mealType.toLowerCase().includes(query) ||
        recipe.dietaryRestrictions.some(restriction => restriction.toLowerCase().includes(query))
      )
      .map(recipe => ({ id: recipe.id, title: recipe.title }))
      .slice(0, 5); // Limit to 5 suggestions
      
    // Find matching meal types
    const mealTypes = Array.from(
      new Set(
        recipes
          .filter(recipe => recipe.mealType.toLowerCase().includes(query))
          .map(recipe => recipe.mealType)
      )
    ).slice(0, 3);
    
    // Find matching dietary restrictions
    const dietaryRestrictions = Array.from(
      new Set(
        recipes
          .flatMap(recipe => recipe.dietaryRestrictions)
          .filter(restriction => restriction.toLowerCase().includes(query))
      )
    ).slice(0, 3);
    
    setSearchSuggestions({
      recipes: matchingRecipes,
      mealTypes,
      dietaryRestrictions
    });
    
  }, [searchQuery, recipes]);

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

  // Handle click on search input - now just focuses the input for direct typing
  const handleSearchFocus = () => {
    // Only open command dialog if there's a search query
    if (searchQuery.trim() !== "") {
      setShowSearchCommand(true);
    }
  };

  // Handle changes to search input
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    // Open command dialog when user starts typing
    if (value.trim() !== "") {
      setShowSearchCommand(true);
    } else {
      setShowSearchCommand(false);
    }
  };

  // Handle search submission
  const handleSearch = (e?: React.FormEvent, searchTerm?: string) => {
    if (e) e.preventDefault();
    
    const finalQuery = searchTerm || searchQuery;
    
    if (finalQuery.trim() === "") return;
    
    // Filter recipes by search query
    const filteredRecipes = recipes.filter(recipe => 
      recipe.title.toLowerCase().includes(finalQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(finalQuery.toLowerCase()) ||
      recipe.cuisineType.toLowerCase().includes(finalQuery.toLowerCase()) ||
      recipe.mealType.toLowerCase().includes(finalQuery.toLowerCase()) ||
      recipe.dietaryRestrictions.some(restriction => 
        restriction.toLowerCase().includes(finalQuery.toLowerCase())
      )
    );
    
    // Set filters based on search term
    const uniqueCuisineTypes = Array.from(
      new Set(filteredRecipes.map(recipe => recipe.cuisineType))
    );
    
    const isMealType = ["breakfast", "lunch", "dinner", "dessert"].some(
      mealType => finalQuery.toLowerCase().includes(mealType.toLowerCase())
    );
    
    const mealTypesFilter = isMealType 
      ? ["breakfast", "lunch", "dinner", "dessert"].filter(
          mealType => finalQuery.toLowerCase().includes(mealType.toLowerCase())
        )
      : [];
    
    const dietaryRestrictionsList = [
      "vegetarian", "vegan", "gluten-free", "dairy-free", 
      "low-carb", "keto", "paleo", "whole30", "pescatarian"
    ];
    
    const isDietaryRestriction = dietaryRestrictionsList.some(
      restriction => finalQuery.toLowerCase().includes(restriction.toLowerCase())
    );
    
    const dietaryRestrictionsFilter = isDietaryRestriction 
      ? dietaryRestrictionsList.filter(
          restriction => finalQuery.toLowerCase().includes(restriction.toLowerCase())
        )
      : [];
    
    setFilters({
      cuisineType: uniqueCuisineTypes.length > 0 ? uniqueCuisineTypes : [],
      mealType: mealTypesFilter,
      dietaryRestrictions: dietaryRestrictionsFilter
    });
    
    // Navigate to find recipe page
    if (location.pathname !== "/find-recipe") {
      navigate("/find-recipe");
    }
    
    setShowSearchCommand(false);
  };

  const handleSearchItemSelect = (value: string, type: 'recipe' | 'mealType' | 'dietary') => {
    setShowSearchCommand(false);
    
    if (type === 'recipe') {
      const recipe = recipes.find(r => r.id === value);
      if (recipe) {
        navigate(`/recipe/${recipe.id}`);
      }
    } else if (type === 'mealType') {
      setFilters({
        cuisineType: [],
        mealType: [value.toLowerCase()],
        dietaryRestrictions: []
      });
      navigate("/find-recipe");
    } else if (type === 'dietary') {
      setFilters({
        cuisineType: [],
        mealType: [],
        dietaryRestrictions: [value.toLowerCase()]
      });
      navigate("/find-recipe");
    }
  };

  // Adding some random whitespace and formatting
  return (
    <>
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
                    ref={searchInputRef}
                    type="search"
                    placeholder="Search recipes, meal types, dietary..."
                    className="pl-10 pr-4 py-2 bg-white/90 border-transparent focus:border-transparent focus:ring-0 rounded-full text-sm w-full"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    onFocus={handleSearchFocus}
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
                    placeholder="Search recipes, meal types, dietary..."
                    className="pl-10 pr-4 py-2 bg-white/90 border-transparent focus:border-transparent focus:ring-0 rounded-full text-sm w-full"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    onFocus={handleSearchFocus}
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

      {/* Search Command Dialog */}
      <CommandDialog open={showSearchCommand} onOpenChange={setShowSearchCommand}>
        <CommandInput 
          placeholder="Search recipes, meal types or dietary restrictions..." 
          value={searchQuery}
          onValueChange={setSearchQuery}
        />
        <CommandList>
          <CommandEmpty>No results found</CommandEmpty>
          
          {searchSuggestions.recipes.length > 0 && (
            <CommandGroup heading="Recipes">
              {searchSuggestions.recipes.map((recipe) => (
                <CommandItem 
                  key={recipe.id}
                  onSelect={() => handleSearchItemSelect(recipe.id, 'recipe')}
                >
                  <Search className="mr-2 h-4 w-4" />
                  {recipe.title}
                </CommandItem>
              ))}
              {searchQuery.trim() !== "" && (
                <CommandItem 
                  onSelect={() => handleSearch(undefined, searchQuery)}
                >
                  <Search className="mr-2 h-4 w-4" />
                  Search all recipes for "{searchQuery}"
                </CommandItem>
              )}
            </CommandGroup>
          )}
          
          {searchSuggestions.mealTypes.length > 0 && (
            <CommandGroup heading="Meal Types">
              {searchSuggestions.mealTypes.map((mealType) => (
                <CommandItem 
                  key={mealType}
                  onSelect={() => handleSearchItemSelect(mealType, 'mealType')}
                >
                  <Search className="mr-2 h-4 w-4" />
                  {mealType}
                </CommandItem>
              ))}
            </CommandGroup>
          )}
          
          {searchSuggestions.dietaryRestrictions.length > 0 && (
            <CommandGroup heading="Dietary Restrictions">
              {searchSuggestions.dietaryRestrictions.map((restriction) => (
                <CommandItem 
                  key={restriction}
                  onSelect={() => handleSearchItemSelect(restriction, 'dietary')}
                >
                  <Search className="mr-2 h-4 w-4" />
                  {restriction}
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default Navigation;
