
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "./ui/use-toast";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

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

  function openTrailer() {
    window.open('https://www.youtube.com/watch?v=_DbRKvi5_OI', '_blank');
    toast({
      title: "Trailer",
      description: "Opening video trailer...",
    });
  };

  const handleFindRecipeClick = () => {
    navigate('/find-recipe');
  };

  const scrollToRecipeFilter = () => {
    const recipeFilterSection = document.querySelector('#recipe-filter-section');
    if (recipeFilterSection) {
      recipeFilterSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/Wikifoods Images/0fddfe61-51f7-4f97-bba5-555b7789c0ff.png"
          alt="Chef cooking with flames"
          className="w-full h-full object-cover brightness-75"
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <button 
            className="mb-8 px-6 py-2 bg-black/50 text-white rounded-full flex items-center gap-2 mx-auto hover:bg-black/70 transition-colors"
            onClick={openTrailer}
          >
            <Play size={16} />
            Watch Trailer
          </button>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
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
            Chef
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Master the art of cooking. Learn techniques and recipes from expert chefs around the world!
          </p>

          <Button 
            variant="default"
            onClick={handleFindRecipeClick}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg px-8 py-6"
          >
            Find your perfect recipe
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
