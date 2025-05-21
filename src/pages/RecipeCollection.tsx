
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

  // Function to get equipment for a recipe based on its ID and meal type
  const getEquipmentForRecipe = (id: string, mealType: string) => {
    // Different equipment based on meal type
    const breakfastEquipment = ["Whisk", "Mixing Bowl", "Spatula", "Frying Pan"];
    const lunchEquipment = ["Knife", "Cutting Board", "Skillet", "Measuring Cups"];
    const dinnerEquipment = ["Pot", "Pan", "Colander", "Wooden Spoon"];
    const dessertEquipment = ["Mixer", "Baking Sheet", "Measuring Spoons", "Oven"];
    
    switch(mealType) {
      case "breakfast":
        return breakfastEquipment;
      case "lunch":
        return lunchEquipment;
      case "dinner":
        return dinnerEquipment;
      case "dessert":
        return dessertEquipment;
      default:
        return ["Bowl", "Whisk", "Baking Sheet", "Measuring Cups"];
    }
  };

  // Function to get an appropriate image for each recipe based on its meal type or id
  const getAppropriateImage = (recipe: any) => {
    const imageMap: Record<string, string> = {
      // Breakfast recipes
      '1': '/lovable-uploads/0fddfe61-51f7-4f97-bba5-555b7789c0ff.png', // Ham and Cheese Omelet
      '2': '/lovable-uploads/6fc1a0bc-894d-428f-a2f4-ccfe73af9d08.png', // Rise and Shine Parfait
      '3': '/lovable-uploads/a33e8ecc-7b76-4198-91d4-81c9e1a4d73a.png', // Banana Oatmeal Pancakes
      '4': '/lovable-uploads/c6082ec9-e744-4532-880f-d0e61bc37083.png', // Marmalade French Toast

      // Lunch recipes
      '5': '/lovable-uploads/139e78dd-f344-4f8a-b32c-a0d926fbb889.png', // Pizza Lava Toast
      '6': '/lovable-uploads/0fddfe61-51f7-4f97-bba5-555b7789c0ff.png', // Chorizo Street Tacos
      '7': '/lovable-uploads/6fc1a0bc-894d-428f-a2f4-ccfe73af9d08.png', // Grilled Turkey and Swiss
      '8': '/lovable-uploads/a33e8ecc-7b76-4198-91d4-81c9e1a4d73a.png', // Simple Egg Salad

      // Dinner recipes
      '9': '/lovable-uploads/c6082ec9-e744-4532-880f-d0e61bc37083.png', // Fettuccine Alfredo
      '10': '/lovable-uploads/139e78dd-f344-4f8a-b32c-a0d926fbb889.png', // Easy Egg Fried Rice
      '11': '/lovable-uploads/0fddfe61-51f7-4f97-bba5-555b7789c0ff.png', // BBQ Chicken Chopped Salad
      '12': '/lovable-uploads/6fc1a0bc-894d-428f-a2f4-ccfe73af9d08.png', // Stuffed Peppers

      // Dessert recipes
      '13': '/lovable-uploads/a33e8ecc-7b76-4198-91d4-81c9e1a4d73a.png', // Vegan Chocolate Cupcakes
      '14': '/lovable-uploads/c6082ec9-e744-4532-880f-d0e61bc37083.png', // Chocolate Chip Cookies
      '15': '/lovable-uploads/139e78dd-f344-4f8a-b32c-a0d926fbb889.png', // Mini Lemon Blueberry Tarts
      '16': '/lovable-uploads/0fddfe61-51f7-4f97-bba5-555b7789c0ff.png', // Brownies
    };

    return imageMap[recipe.id] || recipe.image;
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
                    image={getAppropriateImage(recipe)}
                    cookTime={recipe.cookTime}
                    prepTime={recipe.prepTime}
                    servings={recipe.servings}
                    ingredients={recipe.ingredients}
                    instructions={recipe.instructions}
                    equipment={getEquipmentForRecipe(recipe.id, recipe.mealType)}
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
