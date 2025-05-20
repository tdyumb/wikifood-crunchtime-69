
import { Dialog, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Star } from "lucide-react";

// This component has been simplified to just show a placeholder for recipe ratings
// since reviews have been removed as requested
const ReviewsDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full"
          disabled
        >
          <Star className="mr-1" />
          No reviews available
        </Button>
      </DialogTrigger>
    </Dialog>
  );
};

export default ReviewsDialog;
