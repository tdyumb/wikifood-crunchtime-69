import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { useRecipes } from "@/contexts/RecipeContext";
import { useToast } from "./ui/use-toast";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";

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
          <div className="space-y-2 border rounded-md p-2">
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
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Meal Type</label>
          <div className="space-y-2 border rounded-md p-2">
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
        </div>
      </div>

      <div className="flex flex-wrap gap-2 justify-center my-4">
        {dietaryTags.map((tag) => (
          <Badge 
            key={tag} 
            variant={filters.dietaryRestrictions.includes(tag.toLowerCase()) ? "default" : "outline"}
            className={`cursor-pointer transition-colors ${
              filters.dietaryRestrictions.includes(tag.toLowerCase()) 
                ? 'bg-[#F97316] hover:bg-[#F97316]/90 border-[#F97316]' 
                : 'hover:bg-[#F97316] hover:text-white'
            }`}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </Badge>
        ))}
      </div>

      <Button onClick={handleSearch} className="w-full md:w-auto mx-auto block">
        Find Recipes
      </Button>
    </div>
  );
};

export default RecipeFilter;