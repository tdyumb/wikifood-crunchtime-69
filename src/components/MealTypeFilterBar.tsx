
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useRecipes } from "@/contexts/RecipeContext";
import { Filter, Dessert, Soup, Utensils } from "lucide-react"; // Corrected icon imports

const mealTypeOptions = [
  { value: "all", label: "All", icon: Filter },
  { value: "dessert", label: "Dessert", icon: Dessert },
  { value: "lunch", label: "Lunch", icon: Soup }, // Changed to Soup
  { value: "dinner", label: "Dinner", icon: Utensils }, // Changed to Utensils
];

const MealTypeFilterBar = () => {
  const { filters, setFilters } = useRecipes();

  const handleValueChange = (value: string) => {
    if (value) {
      if (value === "all") {
        setFilters({ ...filters, mealType: [] });
      } else {
        setFilters({ ...filters, mealType: [value] });
      }
    } else {
      setFilters({ ...filters, mealType: [] });
    }
  };

  let currentSelectedValue = "all";
  if (filters.mealType.length === 1 && filters.mealType[0] !== "all") {
    currentSelectedValue = filters.mealType[0];
  } else if (filters.mealType.length > 1 || (filters.mealType.length === 1 && filters.mealType[0] === "all") ) {
    currentSelectedValue = "all"; 
  }

  return (
    <div className="mb-8 flex justify-center">
      <ToggleGroup
        type="single"
        value={currentSelectedValue}
        onValueChange={handleValueChange}
        className="bg-white p-1 rounded-full shadow-md"
        aria-label="Filter by meal type"
      >
        {mealTypeOptions.map((option) => {
          const IconComponent = option.icon;
          return (
            <ToggleGroupItem
              key={option.value}
              value={option.value}
              className="px-4 py-2 rounded-full data-[state=on]:bg-orange-500 data-[state=on]:text-white hover:bg-orange-100 transition-colors"
              aria-label={option.label}
            >
              <IconComponent className="h-5 w-5 mr-2" />
              {option.label}
            </ToggleGroupItem>
          );
        })}
      </ToggleGroup>
    </div>
  );
};

export default MealTypeFilterBar;
