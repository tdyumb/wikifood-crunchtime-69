
import Navigation from "@/components/Navigation";
import RecipeFilter from "@/components/RecipeFilter";
import RecipeCard from "@/components/RecipeCard";
import { useRecipes } from "@/contexts/RecipeContext";
import { motion } from "framer-motion";

const FindRecipe = () => {
  const { filteredRecipes } = useRecipes();

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
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <div className="min-h-screen bg-wiki-50">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Find Your Perfect Recipe</h1>
          <RecipeFilter />
          
          <motion.div 
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
            key={filteredRecipes.length} // Re-animate when recipes change
          >
            {filteredRecipes.map((recipe, index) => (
              <motion.div key={recipe.id} variants={item} custom={index}>
                <RecipeCard
                  title={recipe.title}
                  description={recipe.description}
                  image={recipe.image}
                  cookTime={recipe.cookTime}
                  servings={recipe.servings}
                  ingredients={recipe.ingredients}
                  instructions={recipe.instructions}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FindRecipe;
