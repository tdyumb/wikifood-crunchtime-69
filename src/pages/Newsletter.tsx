
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter!",
    });

    setEmail("");
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
            Newsletter
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center text-gray-600 mb-12"
          >
            Subscribe to our newsletter for weekly recipe updates and cooking tips.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8"
          >
            <div className="flex justify-center mb-6">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.7 }}
                className="w-16 h-16 bg-[#ff9933] rounded-full flex items-center justify-center text-white"
              >
                <Mail size={32} />
              </motion.div>
            </div>
            
            <h2 className="text-2xl font-bold text-center mb-6">Stay Updated!</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input 
                  type="email" 
                  placeholder="Enter your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button type="submit" className="w-full">Subscribe</Button>
              </motion.div>
            </form>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-6 text-sm text-gray-500 text-center"
            >
              <p>We respect your privacy. Unsubscribe at any time.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
