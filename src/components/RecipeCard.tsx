import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { Clock, Users } from "lucide-react";

interface RecipeCardProps {
  title: string;
  description: string;
  image: string;
  cookTime?: string;
  servings?: number;
}

const RecipeCard = ({ title, description, image, cookTime = "30 mins", servings = 4 }: RecipeCardProps) => {
  const { toast } = useToast();

  const handleSeeRecipe = () => {
    toast({
      title: "Recipe Selected",
      description: `You selected ${title}. Full recipe details coming soon!`,
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
        
        <Button onClick={handleSeeRecipe} variant="outline" className="w-full">
          See Recipe
        </Button>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;