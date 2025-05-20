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
import { motion, AnimatePresence } from "framer-motion";

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
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const isMobile = useIsMobile();
  const location = useLocation();
  const navigate = useNavigate();
  const { recipes, setFilters } = useRecipes();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const mobileSearchInputRef = useRef<HTMLInputElement>(null);

  // Initial appearance animation for the navigation
  const initialNavVariants = {
    hidden: {
      y: -100,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2
      }
    }
  };

  // Fixed smooth scroll effect for navigation bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 100; // After 100px of scrolling, apply full effect
      
      // Calculate scroll progress as a percentage (0 to 1)
      const progress = Math.min(scrollPosition / maxScroll, 1);
      setScrollProgress(progress);
      
      if (scrollPosition > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Simple toggle function
  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  
  // Toggle mobile search
  const handleMobileSearchToggle = () => {
    setShowMobileSearch(!showMobileSearch);
    if (!showMobileSearch) {
      // Clear the search query when opening the search bar
      setSearchQuery("");
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
      recipe.mealType.toLowerCase().includes(finalQuery.toLowerCase()) ||
      recipe.dietaryRestrictions.some(restriction => 
        restriction.toLowerCase().includes(finalQuery.toLowerCase())
      )
    );
    
    // Set filters based on search term
    const isMealType = ["breakfast", "lunch", "dinner", "dessert"].some(
      mealType => finalQuery.toLowerCase().includes(mealType.toLowerCase())
    );
    
    const mealTypesFilter = isMealType 
      ? ["breakfast", "lunch", "dinner", "dessert"].filter(
          mealType => finalQuery.toLowerCase().includes(mealType.toLowerCase())
        )
      : [];
    
    const dietaryRestrictionsList = [
      "vegetarian", "vegan", "gluten-free", "dairy-free"
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
      cuisineType: [],
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

  // Improved navigation animation variants with consistent transitions
  const navVariants = {
    normal: { 
      height: "4rem", // 64px in rem
      backgroundColor: "#ff9933",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      y: 0,
      scale: 1
    },
    scrolled: { 
      height: "3rem", // 48px in rem when scrolled
      backgroundColor: "rgba(255, 153, 51, 0.95)",
      backdropFilter: "blur(8px)",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      y: 0,
      scale: 0.98
    }
  };

  // Consistent animation transition
  const navTransition = {
    duration: 0.3,
    ease: "easeInOut"
  };

  // Search input animation variants to match nav bar
  const searchInputVariants = {
    normal: {
      width: "100%",
      height: "2.5rem"
    },
    scrolled: {
      width: "100%",
      height: "2rem"
    }
  };

  // Dialog animation variants
  const dialogEnterAnimation = {
    hidden: { 
      opacity: 0,
      scale: 0.95,
      y: -20
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 400
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <>
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
        initial="hidden"
        animate="visible"
        variants={initialNavVariants}
      >
        <motion.div
          className="w-full"
          initial="normal"
          animate={scrolled ? "scrolled" : "normal"}
          variants={navVariants}
          transition={navTransition}
        >
          <div className="container mx-auto flex justify-center px-4">
            <div className="flex items-center justify-between h-full w-full max-w-6xl">
              {/* Navigation content with improved centering */}
              <div className="flex items-center justify-between w-full">
                {/* Left side: Logo */}
                <Link to="/" className="text-2xl font-bold text-white hover:text-gray-200 transition-colors whitespace-nowrap">
                  <motion.div
                    animate={{ 
                      fontSize: scrolled ? "1.25rem" : "1.5rem",
                    }}
                    transition={navTransition}
                  >
                    WikiFoods
                  </motion.div>
                </Link>

                {/* Center: Search bar and/or navigation links */}
                {!isMobile ? (
                  <div className="flex items-center justify-center flex-1 mx-4">
                    {/* Desktop Search Bar */}
                    <form onSubmit={handleSearch} className="relative w-full max-w-md">
                      <div className="relative">
                        <motion.div
                          variants={searchInputVariants}
                          initial="normal"
                          animate={scrolled ? "scrolled" : "normal"}
                          transition={navTransition}
                          className="w-full"
                        >
                          <Input
                            ref={searchInputRef}
                            type="search"
                            placeholder="Search recipes, meal types, dietary..."
                            className="pl-10 pr-4 py-2 bg-white/90 border-transparent focus:border-transparent focus:ring-0 rounded-full text-sm w-full h-full"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                        </motion.div>
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
                  </div>
                ) : null}

                {/* Right side: Navigation Links or Mobile Controls */}
                <div className="flex items-center">
                  {/* Mobile buttons */}
                  {isMobile ? (
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
                  ) : (
                    <div className="flex items-center space-x-6">
                      {/* Desktop Navigation Links with consistent animations - Removed unnecessary links */}
                      {["Find Recipes", "About", "Contact"].map((item, index) => (
                        <motion.div
                          key={item}
                          animate={{ 
                            fontSize: scrolled ? "0.875rem" : "1rem"
                          }}
                          transition={navTransition}
                          className="whitespace-nowrap"
                        >
                          <Link 
                            to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-white hover:text-gray-200 transition-colors"
                          >
                            {item}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
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

          {/* Mobile menu */}
          {isMobile && menuOpen && !showMobileSearch && (
            <div className="bg-[#ff9933] py-4 animate-fade-in rounded-b-lg shadow-lg">
              <div className="flex flex-col space-y-4">
                <Link to="/find-recipe" className="text-white hover:text-gray-200 px-4 py-2 transition-colors">Find Recipes</Link>
                <Link to="/about" className="text-white hover:text-gray-200 px-4 py-2 transition-colors">About</Link>
                <Link to="/contact" className="text-white hover:text-gray-200 px-4 py-2 transition-colors">Contact</Link>
              </div>
            </div>
          )}
        </motion.div>
      </motion.nav>
      
      {/* Recipe Dialog */}
      <AnimatePresence>
        {recipeDialogOpen && (
          <Dialog open={recipeDialogOpen} onOpenChange={setRecipeDialogOpen}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" asChild>
              <motion.div
                variants={dialogEnterAnimation}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
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
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
