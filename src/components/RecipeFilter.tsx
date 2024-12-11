import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { useRecipes } from "@/contexts/RecipeContext";
import { useToast } from "./ui/use-toast";
import { Badge } from "./ui/badge";

const RecipeFilter = () => {
  const { filters, setFilters } = useRecipes();
  const { toast } = useToast();

  const dietaryTags = [
    "Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free", 
    "Low-Carb", "Keto", "Paleo", "Whole30", "Pescatarian"
  ];

  const handleSearch = () => {
    toast({
      title: "Filters Applied",
      description: "Your recipe list has been updated based on your selections.",
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-center mb-6">Find Your Perfect Recipe</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select onValueChange={(value) => setFilters({ ...filters, cuisineType: value })}>
          <SelectTrigger>
            <SelectValue placeholder="What kind of food are you looking for?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="italian">Italian</SelectItem>
            <SelectItem value="chinese">Chinese</SelectItem>
            <SelectItem value="american">American</SelectItem>
            <SelectItem value="mexican">Mexican</SelectItem>
          </SelectContent>
        </Select>
        
        <Select onValueChange={(value) => setFilters({ ...filters, mealType: value })}>
          <SelectTrigger>
            <SelectValue placeholder="What kind of meal are you making?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="breakfast">Breakfast</SelectItem>
            <SelectItem value="lunch">Lunch</SelectItem>
            <SelectItem value="dinner">Dinner</SelectItem>
          </SelectContent>
        </Select>
        
        <Select onValueChange={(value) => setFilters({ ...filters, dietaryRestrictions: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Any dietary restrictions?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="vegetarian">Vegetarian</SelectItem>
            <SelectItem value="vegan">Vegan</SelectItem>
            <SelectItem value="gluten-free">Gluten Free</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-wrap gap-2 justify-center my-4">
        {dietaryTags.map((tag) => (
          <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-primary hover:text-white">
            {tag}
          </Badge>
        ))}
      </div>

      <Button onClick={handleSearch} className="w-full md:w-auto mx-auto block">
        Find Recipe
      </Button>
    </div>
  );
};

export default RecipeFilter;