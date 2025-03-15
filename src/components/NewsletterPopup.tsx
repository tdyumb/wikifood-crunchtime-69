
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

// Less structured component with some inconsistencies in style
function NewsletterPopup() {
  // State
  const [open, setOpen] = useState(true);
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  // Submit handler - using function declaration instead of const
  function handleSubmit(e) {
    e.preventDefault();
    // Simple validation
    if (!email) {
      return; // Early return without validation message - something a human might do
    }
    
    // Show success message
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter!",
    });
    
    // Close popup
    setOpen(false);
  };

  // Random variable naming - a human touch
  const inputChangeHandler = (e) => setEmail(e.target.value);

  // Return with inconsistent JSX formatting
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Join Our Newsletter</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-center text-gray-600">
            Stay updated with our latest recipes, cooking tips, and exclusive offers!
          </div>
          
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={inputChangeHandler}
            required
            className="w-full"
          />
          
          <Button type="submit" className="w-full">
            Subscribe
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterPopup;
