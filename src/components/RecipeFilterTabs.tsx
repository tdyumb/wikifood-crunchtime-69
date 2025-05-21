
import { Coffee, Dessert, Soup, Utensils } from "lucide-react";
import { useRecipes } from "@/contexts/RecipeContext";
import { motion } from "framer-motion";

const RecipeFilterTabs = () => {
  const { filters, setFilters } = useRecipes();

  const mealTypeOptions = [
    { value: "all", label: "All Meals", icon: Utensils },
    { value: "breakfast", label: "Breakfast", icon: Coffee },
    { value: "lunch", label: "Lunch", icon: Soup },
    { value: "dinner", label: "Dinner", icon: Utensils },
    { value: "dessert", label: "Dessert", icon: Dessert }
  ];

  const handleMealTypeClick = (value: string) => {
    if (value === "all") {
      setFilters({ ...filters, mealType: [] });
    } else {
      setFilters({ ...filters, mealType: [value] });
    }
  };

  return (
    <div className="flex justify-center gap-2 mb-6">
      {mealTypeOptions.map((option) => {
        const IconComponent = option.icon;
        const isActive = 
          (option.value === "all" && filters.mealType.length === 0) || 
          filters.mealType.includes(option.value);
        
        return (
          <motion.button
            key={option.value}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleMealTypeClick(option.value)}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-full transition-colors ${
              isActive 
                ? "bg-orange-500 text-white" 
                : "bg-white text-gray-600 hover:bg-gray-100"
            } shadow-sm`}
          >
            <IconComponent className="h-5 w-5" />
            <span className="text-sm font-medium">{option.label}</span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default RecipeFilterTabs;
