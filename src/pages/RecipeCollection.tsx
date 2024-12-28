import Navigation from "@/components/Navigation";
import { useRecipes } from "@/contexts/RecipeContext";
import RecipeCard from "@/components/RecipeCard";

const RecipeCollection = () => {
  const { recipes } = useRecipes();

  return (
    <div className="min-h-screen bg-wiki-50">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Recipe Collection</h1>
          <p className="text-center text-gray-600 mb-12">Explore our complete collection of delicious recipes</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                title={recipe.title}
                description={recipe.description}
                image={recipe.image}
                cookTime={recipe.cookTime}
                servings={recipe.servings}
                ingredients={recipe.ingredients}
                instructions={recipe.instructions}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCollection;