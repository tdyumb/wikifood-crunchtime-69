import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { useRecipes } from "@/contexts/RecipeContext";
import { useToast } from "./ui/use-toast";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuCheckboxItem } from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

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

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-center mb-6">Find Your Perfect Recipe</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Cuisine Type</label>
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full flex items-center justify-between px-4 py-2 bg-white border rounded-md">
              <span>Select Cuisine Types</span>
              <ChevronDown className="h-4 w-4 opacity-50" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white">
              {cuisineTypes.map((cuisine) => (
                <DropdownMenuCheckboxItem
                  key={cuisine}
                  checked={filters.cuisineType.includes(cuisine)}
                  onCheckedChange={() => {
                    const newCuisines = filters.cuisineType.includes(cuisine)
                      ? filters.cuisineType.filter(c => c !== cuisine)
                      : [...filters.cuisineType, cuisine];
                    setFilters({ ...filters, cuisineType: newCuisines });
                  }}
                >
                  {cuisine.charAt(0).toUpperCase() + cuisine.slice(1)}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Meal Type</label>
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full flex items-center justify-between px-4 py-2 bg-white border rounded-md">
              <span>Select Meal Types</span>
              <ChevronDown className="h-4 w-4 opacity-50" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white">
              {mealTypes.map((meal) => (
                <DropdownMenuCheckboxItem
                  key={meal}
                  checked={filters.mealType.includes(meal)}
                  onCheckedChange={() => {
                    const newMeals = filters.mealType.includes(meal)
                      ? filters.mealType.filter(m => m !== meal)
                      : [...filters.mealType, meal];
                    setFilters({ ...filters, mealType: newMeals });
                  }}
                >
                  {meal.charAt(0).toUpperCase() + meal.slice(1)}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Dietary Restrictions</label>
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full flex items-center justify-between px-4 py-2 bg-white border rounded-md">
              <span>Select Dietary Restrictions</span>
              <ChevronDown className="h-4 w-4 opacity-50" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white">
              {dietaryTags.map((tag) => (
                <DropdownMenuCheckboxItem
                  key={tag}
                  checked={filters.dietaryRestrictions.includes(tag.toLowerCase())}
                  onCheckedChange={() => handleTagClick(tag)}
                >
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Button onClick={handleSearch} className="w-full md:w-auto mx-auto block">
        Find Recipes
      </Button>
    </div>
  );
};

export default RecipeFilter;