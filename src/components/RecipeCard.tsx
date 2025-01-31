import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Clock, Users, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface RecipeCardProps {
  title: string;
  description: string;
  image: string;
  cookTime?: string;
  servings?: number;
  ingredients?: string[];
  instructions?: string[];
  difficulty?: string;
  prepTime?: string;
  yield?: string;
  sweetness?: string[];
}

const RecipeCard = ({ 
  title, 
  description, 
  image, 
  cookTime = "30 mins", 
  servings = 4,
  ingredients = [],
  instructions = [],
  difficulty = "Beginner",
  prepTime = "15 min",
  yield: recipeYield = "4 servings",
  sweetness = []
}: RecipeCardProps) => {
  return (
    <Card className="w-full max-w-sm hover:shadow-lg transition-shadow overflow-hidden">
      <CardHeader className="p-0">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <CardDescription className="mb-4">{description}</CardDescription>
        
        <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{cookTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span>{servings} servings</span>
          </div>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="outline" 
              className="w-full"
            >
              View Recipe
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6">
              {/* Recipe Image */}
              <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg" />
              
              {/* Recipe Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Prep Time</p>
                  <p className="font-semibold">{prepTime}</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Cook Time</p>
                  <p className="font-semibold">{cookTime}</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Difficulty</p>
                  <p className="font-semibold">{difficulty}</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Yield</p>
                  <p className="font-semibold">{recipeYield}</p>
                </div>
              </div>

              {/* Sweetness Tags */}
              {sweetness.length > 0 && (
                <div className="flex gap-2">
                  {sweetness.map((level, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm"
                    >
                      {level}
                    </span>
                  ))}
                </div>
              )}

              {/* Ingredients */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Ingredients</h3>
                <ul className="list-disc list-inside space-y-2">
                  {ingredients.map((ingredient, index) => (
                    <li key={index} className="text-gray-700">{ingredient}</li>
                  ))}
                </ul>
              </div>

              {/* Steps */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Steps</h3>
                <ol className="space-y-4">
                  {instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full font-semibold">
                        {index + 1}
                      </span>
                      <p className="text-gray-700">{instruction}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Safety Tips */}
              <div className="bg-pink-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-pink-900 mb-2">Safety Tips</h3>
                <ul className="space-y-2 text-pink-800">
                  <li>• Use oven mitts when handling hot dishes</li>
                  <li>• Keep children supervised in the kitchen</li>
                  <li>• Ensure all ingredients are fresh and properly stored</li>
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;