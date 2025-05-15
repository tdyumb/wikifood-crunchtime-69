
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useRecipes } from "@/contexts/RecipeContext";
import { Filter, Dessert, Lunch, Dinner } from "lucide-react"; // Corrected Dinner import

const mealTypeOptions = [
  { value: "all", label: "All", icon: Filter },
  { value: "dessert", label: "Dessert", icon: Dessert },
  { value: "lunch", label: "Lunch", icon: Lunch },
  { value: "dinner", label: "Dinner", icon: Dinner },
];

const MealTypeFilterBar = () => {
  const { filters, setFilters } = useRecipes();

  const handleValueChange = (value: string) => {
    if (value) { // value can be empty string if nothing is selected, handle this if ToggleGroup allows deselection
      if (value === "all") {
        setFilters({ ...filters, mealType: [] });
      } else {
        setFilters({ ...filters, mealType: [value] });
      }
    } else {
      // If deselecting is possible and leads to empty value, treat as "all"
      setFilters({ ...filters, mealType: [] });
    }
  };

  // Determine current value for ToggleGroup. It expects a string.
  // If filters.mealType is empty or has 'all', select 'all'. Otherwise, select the first specific meal type.
  let currentSelectedValue = "all";
  if (filters.mealType.length === 1 && filters.mealType[0] !== "all") {
    currentSelectedValue = filters.mealType[0];
  } else if (filters.mealType.length > 1 || (filters.mealType.length === 1 && filters.mealType[0] === "all") ) {
    // If multiple are somehow selected (e.g. from other filter components) or 'all' is explicitly there, default to 'all' visual.
    // Or handle this case based on desired UX. For single select toggle, this should ideally not happen if only this component controls it.
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
