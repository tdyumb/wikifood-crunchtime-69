import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Clock, Users, Save, ToggleRight, Utensils } from "lucide-react";
import { Switch } from "./ui/switch";
import ReviewsDialog from "./ReviewsDialog";
import { reviewsData } from "@/data/reviews";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

interface RecipeCardProps {
  id: string;
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
  equipment?: string[];
}

interface NutritionalInfo {
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
  fiber: string;
}

const RecipeCard = ({ 
  id,
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
  sweetness = [],
  equipment = ["Bowl", "Whisk", "Baking Sheet"] // Default equipment if none provided
}: RecipeCardProps) => {
  const recipeReviews = reviewsData.filter(review => review.recipeId === id);
  const [keepScreenOn, setKeepScreenOn] = useState(false);
  const { toast } = useToast();
  
  // This would come from an API or database in a real app
  const getNutritionalInfo = (recipeId: string): NutritionalInfo => {
    // Default nutritional info
    const defaultInfo: NutritionalInfo = {
      calories: 320,
      protein: "12g",
      carbs: "45g",
      fat: "15g", 
      fiber: "6g"
    };
    
    // In a real app, we would have different values for each recipe
    const nutritionalData: Record<string, NutritionalInfo> = {
      "1": { calories: 650, protein: "25g", carbs: "70g", fat: "30g", fiber: "3g" },
      "2": { calories: 420, protein: "15g", carbs: "55g", fat: "18g", fiber: "12g" },
      "3": { calories: 380, protein: "28g", carbs: "12g", fat: "26g", fiber: "5g" },
      "4": { calories: 290, protein: "8g", carbs: "35g", fat: "12g", fiber: "9g" },
      "5": { calories: 520, protein: "18g", carbs: "75g", fat: "16g", fiber: "7g" }
    };
    
    return nutritionalData[recipeId] || defaultInfo;
  };
  
  const nutritionalInfo = getNutritionalInfo(id);
  
  const handleSaveRecipe = () => {
    toast({
      title: "Recipe Saved!",
      description: `${title} has been saved to your collection`,
    });
  };
  
  const handleToggleScreenOn = () => {
    setKeepScreenOn(!keepScreenOn);
    
    if (!keepScreenOn) {
      // This would prevent screen from turning off in a real mobile app
      // We would use Capacitor or a similar API to keep the screen on
      toast({
        title: "Screen will stay on",
        description: "Your screen will stay on while viewing this recipe",
      });
    } else {
      toast({
        title: "Normal screen behavior restored",
        description: "Your screen will turn off normally",
      });
    }
    
    // This is just a simulation as browser can't prevent screen from turning off
    document.documentElement.classList.toggle("keep-screen-on", !keepScreenOn);
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      className="w-full"
    >
      <Card className="w-full hover:shadow-lg transition-shadow overflow-hidden h-full flex flex-col">
        <CardHeader className="p-0">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
        </CardHeader>
        <CardContent className="p-4 flex flex-col flex-grow">
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

          <div className="space-y-2 mt-auto">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  className="w-full"
                  style={{ backgroundColor: "#e3dbd5", borderColor: "#e3dbd5" }}
                >
                  View Recipe
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg" />
                  
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

                  {/* Equipment Section */}
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-amber-900 mb-2 flex items-center">
                      <Utensils className="mr-2" size={20} />
                      Equipment Needed
                    </h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {equipment.map((item, index) => (
                        <li key={index} className="text-amber-800 flex items-center">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Nutritional Information */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Nutritional Information</h3>
                    <div className="grid grid-cols-5 gap-2">
                      <div className="text-center p-2">
                        <p className="text-sm text-blue-800">Calories</p>
                        <p className="font-bold text-blue-900">{nutritionalInfo.calories}</p>
                      </div>
                      <div className="text-center p-2">
                        <p className="text-sm text-blue-800">Protein</p>
                        <p className="font-bold text-blue-900">{nutritionalInfo.protein}</p>
                      </div>
                      <div className="text-center p-2">
                        <p className="text-sm text-blue-800">Carbs</p>
                        <p className="font-bold text-blue-900">{nutritionalInfo.carbs}</p>
                      </div>
                      <div className="text-center p-2">
                        <p className="text-sm text-blue-800">Fat</p>
                        <p className="font-bold text-blue-900">{nutritionalInfo.fat}</p>
                      </div>
                      <div className="text-center p-2">
                        <p className="text-sm text-blue-800">Fiber</p>
                        <p className="font-bold text-blue-900">{nutritionalInfo.fiber}</p>
                      </div>
                    </div>
                  </div>

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

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Ingredients</h3>
                    <ul className="list-disc list-inside space-y-2">
                      {ingredients.map((ingredient, index) => (
                        <li key={index} className="text-gray-700">{ingredient}</li>
                      ))}
                    </ul>
                  </div>

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

                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-pink-900 mb-2">Safety Tips</h3>
                    <ul className="space-y-2 text-pink-800">
                      <li>• Use oven mitts when handling hot dishes</li>
                      <li>• Keep children supervised in the kitchen</li>
                      <li>• Ensure all ingredients are fresh and properly stored</li>
                    </ul>
                  </div>
                  
                  {/* Keep Screen On Toggle */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <ToggleRight className={keepScreenOn ? "text-green-500" : "text-gray-400"} />
                      <span className="text-sm font-medium">Keep Screen On</span>
                    </div>
                    <Switch 
                      checked={keepScreenOn} 
                      onCheckedChange={handleToggleScreenOn} 
                    />
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <div className="flex gap-2">
              <div className="w-1/2">
                <ReviewsDialog reviews={recipeReviews} recipeName={title} />
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="w-1/2"
                onClick={handleSaveRecipe}
              >
                <Save className="mr-1" />
                Save Recipe
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RecipeCard;
