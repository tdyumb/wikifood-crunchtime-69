
import { Review } from "@/types/Review";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface ReviewsDialogProps {
  reviews?: Review[];
  recipeName: string;
}

const ReviewsDialog = ({ reviews = [], recipeName }: ReviewsDialogProps) => {
  const averageRating = reviews.length > 0
    ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
    : 0;

  // Animation variants for elements inside dialog
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full"
        >
          <Star className="mr-1" />
          See Recipe Details
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Details for {recipeName}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <span>Recipe Information</span>
          </motion.div>

          <div className="text-center text-gray-500 py-4">
            <p>This recipe is beginner-friendly and designed to be easy to follow.</p>
            <p className="mt-2">Follow the step-by-step instructions for best results!</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewsDialog;
