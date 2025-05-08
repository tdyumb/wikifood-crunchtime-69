
import Navigation from "@/components/Navigation";
import { useRecipes } from "@/contexts/RecipeContext";
import RecipeCard from "@/components/RecipeCard";
import { motion } from "framer-motion";

const RecipeCollection = () => {
  const { recipes } = useRecipes();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  // Sample equipment data for each recipe
  const equipmentOptions = [
    ["Bowl", "Whisk", "Baking Sheet", "Measuring Cups"],
    ["Pot", "Cutting Board", "Chef's Knife", "Wooden Spoon"],
    ["Skillet", "Spatula", "Mixing Bowls", "Measuring Spoons"],
    ["Baking Dish", "Grater", "Peeler", "Food Processor"],
    ["Dutch Oven", "Tongs", "Colander", "Timer"]
  ];

  // Function to get equipment for a recipe based on its ID
  const getEquipmentForRecipe = (id: string) => {
    const numId = parseInt(id, 10);
    const index = (numId % 5); // Use modulo to cycle through equipment options
    return equipmentOptions[index] || equipmentOptions[0];
  };

  return (
    <div className="min-h-screen bg-wiki-50">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-8"
          >
            Recipe Collection
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center text-gray-600 mb-12"
          >
            Explore our complete collection of delicious recipes
          </motion.p>
          
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {recipes.map((recipe, index) => (
              <motion.div key={recipe.id} variants={item} custom={index} className="h-full flex">
                <div className="w-full">
                  <RecipeCard
                    id={recipe.id}
                    title={recipe.title}
                    description={recipe.description}
                    image={recipe.image}
                    cookTime={recipe.cookTime}
                    servings={recipe.servings}
                    ingredients={recipe.ingredients}
                    instructions={recipe.instructions}
                    equipment={getEquipmentForRecipe(recipe.id)}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCollection;
