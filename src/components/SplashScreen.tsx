
import { motion } from "framer-motion";
import { useEffect } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [onComplete]);
  
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <img 
          src="/lovable-uploads/wikifoods-images/139e78dd-f344-4f8a-b32c-a0d926fbb889.png" 
          alt="WikiFoods Logo" 
          className="w-64 h-auto mb-8"
        />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "240px" }}
          transition={{ delay: 0.5, duration: 2 }}
          className="h-1 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default SplashScreen;
