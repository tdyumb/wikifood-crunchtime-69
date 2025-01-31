import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { useRecipes } from "@/contexts/RecipeContext";
import { useToast } from "./ui/use-toast";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { 
  Globe, 
  UtensilsCrossed, 
  Pizza, 
  Flag, 
  ChiliHot,
  Sunrise,
  Coffee,
  Soup,
  UtensilsCrossed as Dinner,
  Leaf,
  Wheat,
  Milk,
  Heart,
  Apple,
  Carrot
} from "lucide-react";

const RecipeFilter = () => {
  const { filters, setFilters } = useRecipes();
  const { toast } = useToast();

  const cuisineTypes = ["all", "italian", "chinese", "american", "mexican"];
  const mealTypes = ["all", "breakfast", "lunch", "dinner"];
  const dietaryTags = [
    "all", "vegetarian", "vegan", "gluten-free", "dairy-free", 
    "low-carb", "keto", "paleo", "whole30", "pescatarian"
  ];

  const getCuisineIcon = (cuisine: string) => {
    switch (cuisine.toLowerCase()) {
      case 'all':
        return <Globe className="h-4 w-4" />;
      case 'italian':
        return <Pizza className="h-4 w-4" />;
      case 'chinese':
        return <UtensilsCrossed className="h-4 w-4" />;
      case 'american':
        return <Flag className="h-4 w-4" />;
      case 'mexican':
        return <ChiliHot className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const getMealIcon = (meal: string) => {
    switch (meal.toLowerCase()) {
      case 'all':
        return <UtensilsCrossed className="h-4 w-4" />;
      case 'breakfast':
        return <Coffee className="h-4 w-4" />;
      case 'lunch':
        return <Soup className="h-4 w-4" />;
      case 'dinner':
        return <Dinner className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const getDietaryIcon = (tag: string) => {
    switch (tag.toLowerCase()) {
      case 'all':
        return <UtensilsCrossed className="h-4 w-4" />;
      case 'vegetarian':
        return <Leaf className="h-4 w-4" />;
      case 'vegan':
        return <Carrot className="h-4 w-4" />;
      case 'gluten-free':
        return <Wheat className="h-4 w-4" />;
      case 'dairy-free':
        return <Milk className="h-4 w-4" />;
      case 'low-carb':
        return <Heart className="h-4 w-4" />;
      case 'keto':
        return <Apple className="h-4 w-4" />;
      case 'paleo':
        return <Leaf className="h-4 w-4" />;
      case 'whole30':
        return <Heart className="h-4 w-4" />;
      case 'pescatarian':
        return <UtensilsCrossed className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const handleSearch = () => {
    toast({
      title: "Filters Applied",
      description: "Your recipe list has been updated based on your selections.",
    });
  };

  const handleTagClick = (tag: string) => {
    const lowerTag = tag.toLowerCase();
    let newRestrictions: string[];

    if (lowerTag === 'all') {
      newRestrictions = filters.dietaryRestrictions.includes('all') ? [] : ['all'];
    } else {
      if (filters.dietaryRestrictions.includes('all')) {
        newRestrictions = [lowerTag];
      } else {
        newRestrictions = filters.dietaryRestrictions.includes(lowerTag)
          ? filters.dietaryRestrictions.filter(t => t !== lowerTag)
          : [...filters.dietaryRestrictions, lowerTag];
      }
    }

    setFilters({
      ...filters,
      dietaryRestrictions: newRestrictions
    });
  };

  const handleCuisineChange = (cuisine: string) => {
    let newCuisines: string[];
    
    if (cuisine === 'all') {
      newCuisines = filters.cuisineType.includes('all') ? [] : ['all'];
    } else {
      if (filters.cuisineType.includes('all')) {
        newCuisines = [cuisine];
      } else {
        newCuisines = filters.cuisineType.includes(cuisine)
          ? filters.cuisineType.filter(t => t !== cuisine)
          : [...filters.cuisineType, cuisine];
      }
    }

    setFilters({
      ...filters,
      cuisineType: newCuisines
    });
  };

  const handleMealChange = (meal: string) => {
    let newMeals: string[];
    
    if (meal === 'all') {
      newMeals = filters.mealType.includes('all') ? [] : ['all'];
    } else {
      if (filters.mealType.includes('all')) {
        newMeals = [meal];
      } else {
        newMeals = filters.mealType.includes(meal)
          ? filters.mealType.filter(t => t !== meal)
          : [...filters.mealType, meal];
      }
    }

    setFilters({
      ...filters,
      mealType: newMeals
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-center mb-6">Find Your Perfect Recipe</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Cuisine Type</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                <div className="flex items-center gap-2">
                  Select Cuisine Types
                  <div className="flex gap-1">
                    {filters.cuisineType.map((cuisine, index) => (
                      <span key={index}>{getCuisineIcon(cuisine)}</span>
                    ))}
                  </div>
                </div>
                <span className="ml-2">({filters.cuisineType.length})</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-2 bg-white border border-gray-200 shadow-lg">
              <div className="space-y-2">
                {cuisineTypes.map((cuisine) => (
                  <div key={cuisine} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`cuisine-${cuisine}`}
                      checked={filters.cuisineType.includes(cuisine)}
                      onCheckedChange={() => handleCuisineChange(cuisine)}
                    />
                    <label htmlFor={`cuisine-${cuisine}`} className="text-sm capitalize flex items-center gap-2">
                      {cuisine}
                      {getCuisineIcon(cuisine)}
                    </label>
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Meal Type</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                <div className="flex items-center gap-2">
                  Select Meal Types
                  <div className="flex gap-1">
                    {filters.mealType.map((meal, index) => (
                      <span key={index}>{getMealIcon(meal)}</span>
                    ))}
                  </div>
                </div>
                <span className="ml-2">({filters.mealType.length})</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-2 bg-white border border-gray-200 shadow-lg">
              <div className="space-y-2">
                {mealTypes.map((meal) => (
                  <div key={meal} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`meal-${meal}`}
                      checked={filters.mealType.includes(meal)}
                      onCheckedChange={() => handleMealChange(meal)}
                    />
                    <label htmlFor={`meal-${meal}`} className="text-sm capitalize flex items-center gap-2">
                      {meal}
                      {getMealIcon(meal)}
                    </label>
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Dietary Restrictions</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                <div className="flex items-center gap-2">
                  Select Restrictions
                  <div className="flex gap-1">
                    {filters.dietaryRestrictions.map((tag, index) => (
                      <span key={index}>{getDietaryIcon(tag)}</span>
                    ))}
                  </div>
                </div>
                <span className="ml-2">({filters.dietaryRestrictions.length})</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-2 bg-white border border-gray-200 shadow-lg">
              <div className="space-y-2">
                {dietaryTags.map((tag) => (
                  <div key={tag} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`dietary-${tag}`}
                      checked={filters.dietaryRestrictions.includes(tag.toLowerCase())}
                      onCheckedChange={() => handleTagClick(tag)}
                    />
                    <label htmlFor={`dietary-${tag}`} className="text-sm capitalize flex items-center gap-2">
                      {tag}
                      {getDietaryIcon(tag)}
                    </label>
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <Button onClick={handleSearch} className="w-full md:w-auto mx-auto block">
        Find Recipes
      </Button>
    </div>
  );
};

export default RecipeFilter;