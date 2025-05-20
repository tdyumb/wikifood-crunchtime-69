import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { PlayCircle } from "lucide-react";

const HeroSection = () => {
  const [activeText, setActiveText] = useState("Talk");
  const textOptions = ["Talk", "Cook", "Look"];
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const textRotationTimer = setInterval(() => {
      setActiveText(currentText => {
        const idx = textOptions.indexOf(currentText);
        return textOptions[(idx + 1) % textOptions.length];
      });
    }, 2000);

    return () => clearInterval(textRotationTimer);
  }, []);

  const handleFindRecipeClick = () => {
    navigate('/find-recipe');
  };

  const handleWatchTutorialClick = () => {
    toast({
      title: "Video Tutorial",
      description: "Video tutorial coming soon!",
    });
    console.log("Watch tutorial clicked");
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.6, -0.05, 0.01, 0.99]
      } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient overlay and background image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent z-10"></div>
        <img 
          src="/Wikifoods Images/0fddfe61-51f7-4f97-bba5-555b7789c0ff.png"
          alt="Chef cooking with flames"
          className="w-full h-full object-cover brightness-90"
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center" // Ensure text-center for child elements
        >
          {/* "Watch Video Tutorial" Button - Moved and Restyled */}
          <motion.div 
            className="flex justify-center mb-6" // Spacing below this button
            variants={fadeInUp}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="default"
                onClick={handleWatchTutorialClick}
                className="bg-[#1A1F2C] hover:bg-[#2a3040] text-white font-semibold text-base px-5 py-2.5 rounded-full shadow-md flex items-center gap-2"
              >
                <PlayCircle size={20} />
                Watch Video Tutorial
              </Button>
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={fadeInUp} 
            className="text-6xl md:text-7xl font-bold mb-6 text-white"
          >
            <motion.span
              key={activeText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-yellow-400 inline-block"
            >
              {activeText}
            </motion.span> Like A
            <br />
            <span className="relative">
              Chef
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
              ></motion.span>
            </span>
          </motion.h1>
          
          {/* Paragraph */}
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            Master the art of cooking. Learn techniques and recipes from expert chefs around the world!
          </motion.p>

          {/* "Find your perfect recipe" Button */}
          <motion.div
            className="flex justify-center mt-8" // Centering the single button
            variants={fadeInUp}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="default"
                onClick={handleFindRecipeClick}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Find your perfect recipe
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/70 to-transparent z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      />
    </section>
  );
};

export default HeroSection;
