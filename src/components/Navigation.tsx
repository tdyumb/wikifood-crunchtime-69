import { Menu, Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLocation } from "react-router-dom";
import { Input } from "./ui/input";
import { useRecipes } from "@/contexts/RecipeContext";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import RecipeCard from "./RecipeCard";

// Less structured component with some inconsistencies
const Navigation = () => {
  // State for menu toggle
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchCommand, setShowSearchCommand] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState<{
    recipes: { id: string; title: string }[];
    mealTypes: string[];
    dietaryRestrictions: string[];
  }>({
    recipes: [],
    mealTypes: [],
    dietaryRestrictions: []
  });
  
  const [selectedRecipe, setSelectedRecipe] = useState<any>(null);
  const [recipeDialogOpen, setRecipeDialogOpen] = useState(false);
  
  const isMobile = useIsMobile();
  const location = useLocation();
  const navigate = useNavigate();
  const { recipes, setFilters } = useRecipes();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const mobileSearchInputRef = useRef<HTMLInputElement>(null);

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

  // Focus the mobile search input when it's shown
  useEffect(() => {
    if (showMobileSearch && mobileSearchInputRef.current) {
      mobileSearchInputRef.current.focus();
    }
  }, [showMobileSearch]);

  // Simple toggle function a human would write
  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  
  // Toggle mobile search
  const handleMobileSearchToggle = () => {
    setShowMobileSearch(!showMobileSearch);
    if (!showMobileSearch) {
      // Clear the search query when opening the search bar
      setSearchQuery("");
    }
  };

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
    
    // Close mobile search if it's open
    if (showMobileSearch) {
      setShowMobileSearch(false);
    }
  };

  const handleSearchItemSelect = (value: string, type: 'recipe' | 'mealType' | 'dietary') => {
    if (type === 'recipe') {
      const recipe = recipes.find(r => r.id === value);
      if (recipe) {
        setSelectedRecipe(recipe);
        setRecipeDialogOpen(true);
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
    
    // Reset search state
    setSearchQuery("");
    if (showMobileSearch) {
      setShowMobileSearch(false);
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
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={18} className="text-gray-400" />
                  </div>
                  
                  {/* Search Suggestions Dropdown */}
                  {searchQuery.trim() !== "" && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg overflow-hidden z-50">
                      {searchSuggestions.recipes.length === 0 && 
                       searchSuggestions.mealTypes.length === 0 && 
                       searchSuggestions.dietaryRestrictions.length === 0 ? (
                        <div className="p-4 text-center text-gray-500">No results found</div>
                      ) : (
                        <div className="max-h-60 overflow-y-auto">
                          {searchSuggestions.recipes.length > 0 && (
                            <div className="p-2">
                              <h3 className="text-xs font-semibold text-gray-500 uppercase px-2 py-1">Recipes</h3>
                              <ul>
                                {searchSuggestions.recipes.map(recipe => (
                                  <li key={recipe.id}>
                                    <button
                                      type="button"
                                      className="flex items-center w-full px-2 py-1 text-left hover:bg-gray-100 rounded"
                                      onClick={() => handleSearchItemSelect(recipe.id, 'recipe')}
                                    >
                                      <Search className="mr-2 h-4 w-4 text-gray-400" />
                                      <span>{recipe.title}</span>
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          {searchSuggestions.mealTypes.length > 0 && (
                            <div className="p-2">
                              <h3 className="text-xs font-semibold text-gray-500 uppercase px-2 py-1">Meal Types</h3>
                              <ul>
                                {searchSuggestions.mealTypes.map(mealType => (
                                  <li key={mealType}>
                                    <button
                                      type="button"
                                      className="flex items-center w-full px-2 py-1 text-left hover:bg-gray-100 rounded"
                                      onClick={() => handleSearchItemSelect(mealType, 'mealType')}
                                    >
                                      <Search className="mr-2 h-4 w-4 text-gray-400" />
                                      <span>{mealType}</span>
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          {searchSuggestions.dietaryRestrictions.length > 0 && (
                            <div className="p-2">
                              <h3 className="text-xs font-semibold text-gray-500 uppercase px-2 py-1">Dietary Restrictions</h3>
                              <ul>
                                {searchSuggestions.dietaryRestrictions.map(restriction => (
                                  <li key={restriction}>
                                    <button
                                      type="button"
                                      className="flex items-center w-full px-2 py-1 text-left hover:bg-gray-100 rounded"
                                      onClick={() => handleSearchItemSelect(restriction, 'dietary')}
                                    >
                                      <Search className="mr-2 h-4 w-4 text-gray-400" />
                                      <span>{restriction}</span>
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          <div className="p-2 border-t">
                            <button
                              type="submit"
                              className="flex items-center w-full px-2 py-1 text-left text-blue-600 hover:bg-gray-100 rounded font-medium"
                            >
                              <Search className="mr-2 h-4 w-4" />
                              <span>Search for "{searchQuery}"</span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </form>
            )}

            {/* Mobile buttons */}
            {isMobile && (
              <div className="flex items-center space-x-2">
                {!showMobileSearch ? (
                  <button
                    onClick={handleMobileSearchToggle}
                    className="text-white p-2 hover:bg-[#ff9933]/80 rounded-lg transition-colors"
                    aria-label="Search"
                  >
                    <Search size={24} />
                  </button>
                ) : (
                  <button
                    onClick={handleMobileSearchToggle}
                    className="text-white p-2 hover:bg-[#ff9933]/80 rounded-lg transition-colors"
                    aria-label="Close search"
                  >
                    <X size={24} />
                  </button>
                )}
                
                <button
                  onClick={handleMenuToggle}
                  className="text-white p-2 hover:bg-[#ff9933]/80 rounded-lg transition-colors"
                  aria-label="Toggle menu"
                >
                  <Menu size={24} />
                </button>
              </div>
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

          {/* Mobile search input - only shown when search icon is clicked */}
          {isMobile && showMobileSearch && (
            <div className="py-2 animate-fadeIn">
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <Input
                    ref={mobileSearchInputRef}
                    type="search"
                    placeholder="Search recipes, meal types, dietary..."
                    className="pl-10 pr-4 py-2 bg-white/90 border-transparent focus:border-transparent focus:ring-0 rounded-full text-sm w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={18} className="text-gray-400" />
                  </div>
                  
                  {/* Mobile Search Suggestions Dropdown */}
                  {searchQuery.trim() !== "" && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg overflow-hidden z-50">
                      {searchSuggestions.recipes.length === 0 && 
                       searchSuggestions.mealTypes.length === 0 && 
                       searchSuggestions.dietaryRestrictions.length === 0 ? (
                        <div className="p-4 text-center text-gray-500">No results found</div>
                      ) : (
                        <div className="max-h-60 overflow-y-auto">
                          {searchSuggestions.recipes.length > 0 && (
                            <div className="p-2">
                              <h3 className="text-xs font-semibold text-gray-500 uppercase px-2 py-1">Recipes</h3>
                              <ul>
                                {searchSuggestions.recipes.map(recipe => (
                                  <li key={recipe.id}>
                                    <button
                                      type="button"
                                      className="flex items-center w-full px-2 py-1 text-left hover:bg-gray-100 rounded"
                                      onClick={() => handleSearchItemSelect(recipe.id, 'recipe')}
                                    >
                                      <Search className="mr-2 h-4 w-4 text-gray-400" />
                                      <span>{recipe.title}</span>
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          {searchSuggestions.mealTypes.length > 0 && (
                            <div className="p-2">
                              <h3 className="text-xs font-semibold text-gray-500 uppercase px-2 py-1">Meal Types</h3>
                              <ul>
                                {searchSuggestions.mealTypes.map(mealType => (
                                  <li key={mealType}>
                                    <button
                                      type="button"
                                      className="flex items-center w-full px-2 py-1 text-left hover:bg-gray-100 rounded"
                                      onClick={() => handleSearchItemSelect(mealType, 'mealType')}
                                    >
                                      <Search className="mr-2 h-4 w-4 text-gray-400" />
                                      <span>{mealType}</span>
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          {searchSuggestions.dietaryRestrictions.length > 0 && (
                            <div className="p-2">
                              <h3 className="text-xs font-semibold text-gray-500 uppercase px-2 py-1">Dietary Restrictions</h3>
                              <ul>
                                {searchSuggestions.dietaryRestrictions.map(restriction => (
                                  <li key={restriction}>
                                    <button
                                      type="button"
                                      className="flex items-center w-full px-2 py-1 text-left hover:bg-gray-100 rounded"
                                      onClick={() => handleSearchItemSelect(restriction, 'dietary')}
                                    >
                                      <Search className="mr-2 h-4 w-4 text-gray-400" />
                                      <span>{restriction}</span>
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          <div className="p-2 border-t">
                            <button
                              type="submit"
                              className="flex items-center w-full px-2 py-1 text-left text-blue-600 hover:bg-gray-100 rounded font-medium"
                            >
                              <Search className="mr-2 h-4 w-4" />
                              <span>Search for "{searchQuery}"</span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </form>
            </div>
          )}

          {/* Mobile menu - inconsistent naming with menuOpen instead of isMenuOpen */}
          {isMobile && menuOpen && !showMobileSearch && (
            <div className="bg-[#ff9933] py-4 animate-fade-in rounded-b-lg shadow-lg">
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
      
      {/* Recipe Dialog */}
      <Dialog open={recipeDialogOpen} onOpenChange={setRecipeDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedRecipe && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedRecipe.title}</DialogTitle>
              </DialogHeader>
              <div className="pt-2">
                <RecipeCard
                  id={selectedRecipe.id}
                  title={selectedRecipe.title}
                  description={selectedRecipe.description}
                  image={selectedRecipe.image}
                  cookTime={selectedRecipe.cookTime}
                  servings={selectedRecipe.servings}
                  ingredients={selectedRecipe.ingredients}
                  instructions={selectedRecipe.instructions}
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navigation;
