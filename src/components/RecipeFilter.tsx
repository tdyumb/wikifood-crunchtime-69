import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { useRecipes } from "@/contexts/RecipeContext";
import { useToast } from "./ui/use-toast";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const RecipeFilter = () => {
  const { filters, setFilters } = useRecipes();
  const { toast } = useToast();

  const cuisineTypes = ["all", "italian", "chinese", "american", "mexican"];
  const mealTypes = ["all", "breakfast", "lunch", "dinner"];
  const dietaryTags = [
    "all", "vegetarian", "vegan", "gluten-free", "dairy-free", 
    "low-carb", "keto", "paleo", "whole30", "pescatarian"
  ];

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
                Select Cuisine Types
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
                    <label htmlFor={`cuisine-${cuisine}`} className="text-sm capitalize">
                      {cuisine}
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
                Select Meal Types
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
                    <label htmlFor={`meal-${meal}`} className="text-sm capitalize">
                      {meal}
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
                Select Restrictions
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
                    <label htmlFor={`dietary-${tag}`} className="text-sm capitalize">
                      {tag}
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