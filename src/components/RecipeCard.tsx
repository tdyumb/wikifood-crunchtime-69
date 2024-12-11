import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { Clock, Users, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface RecipeCardProps {
  title: string;
  description: string;
  image: string;
  cookTime?: string;
  servings?: number;
  ingredients?: string[];
  instructions?: string[];
}

const RecipeCard = ({ 
  title, 
  description, 
  image, 
  cookTime = "30 mins", 
  servings = 4,
  ingredients = [],
  instructions = []
}: RecipeCardProps) => {
  const { toast } = useToast();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSeeRecipe = () => {
    setIsExpanded(!isExpanded);
    toast({
      title: isExpanded ? "Recipe collapsed" : "Recipe expanded",
      description: `You can now ${isExpanded ? 'preview' : 'see full details of'} ${title}.`,
    });
  };

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

        {isExpanded && (
          <div className="mt-4 space-y-4 border-t pt-4">
            <div>
              <h4 className="font-semibold mb-2">Ingredients:</h4>
              <ul className="list-disc list-inside space-y-1">
                {ingredients.map((ingredient, index) => (
                  <li key={index} className="text-sm">{ingredient}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Instructions:</h4>
              <ol className="list-decimal list-inside space-y-1">
                {instructions.map((instruction, index) => (
                  <li key={index} className="text-sm">{instruction}</li>
                ))}
              </ol>
            </div>
          </div>
        )}
        
        <Button 
          onClick={handleSeeRecipe} 
          variant="outline" 
          className="w-full mt-4 flex items-center justify-center gap-2"
        >
          {isExpanded ? (
            <>Hide Recipe <ChevronUp size={16} /></>
          ) : (
            <>See Recipe <ChevronDown size={16} /></>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;