import { Button } from "./ui/button";
import { useRecipes } from "@/contexts/RecipeContext";
import { useToast } from "./ui/use-toast";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { 
  Clock, 
  UtensilsCrossed, 
  Coffee,
  Soup,
  Utensils,
  Leaf,
  Wheat,
  Milk,
  Cake
} from "lucide-react";

const RecipeFilter = () => {
  const { filters, setFilters } = useRecipes();
  const { toast } = useToast();

  const timeOptions = [
    { id: "time-quick", label: "Quick (20 mins or less)" },
    { id: "time-moderate", label: "Moderate (20-30 mins)" },
    { id: "time-longer", label: "Longer (30+ mins)" }
  ];
  
  const mealTypes = ["all", "breakfast", "lunch", "dinner", "dessert"];
  const dietaryTags = [
    "all", "vegetarian", "vegan", "gluten-free", "dairy-free"
  ];

  const getTimeIcon = () => <Clock className="h-4 w-4" />;

  const getMealIcon = (meal: string) => {
    switch (meal.toLowerCase()) {
      case 'all':
        return <UtensilsCrossed className="h-4 w-4" />;
      case 'breakfast':
        return <Coffee className="h-4 w-4" />;
      case 'lunch':
        return <Soup className="h-4 w-4" />;
      case 'dinner':
        return <Utensils className="h-4 w-4" />;
      case 'dessert':
        return <Cake className="h-4 w-4" />;
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
        return <Leaf className="h-4 w-4" />;
      case 'gluten-free':
        return <Wheat className="h-4 w-4" />;
      case 'dairy-free':
        return <Milk className="h-4 w-4" />;
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

  const handleTimeChange = (time: string) => {
    // We'll handle time filtering in a future implementation
    console.log("Selected time:", time);
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
          <label className="text-sm font-medium">Total Time</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                <div className="flex items-center gap-2">
                  Select Time
                  <div className="flex gap-1">
                    {getTimeIcon()}
                  </div>
                </div>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-2 bg-white border border-gray-200 shadow-lg">
              <div className="space-y-2">
                {timeOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={option.id}
                      onCheckedChange={() => handleTimeChange(option.label)}
                    />
                    <label htmlFor={option.id} className="text-sm flex items-center gap-2">
                      {option.label}
                      {getTimeIcon()}
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
