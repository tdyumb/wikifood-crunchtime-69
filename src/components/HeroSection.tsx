
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "./ui/use-toast";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

// More human-like variable naming and structure
const HeroSection = () => {
  // Using more descriptive name
  const [activeText, setActiveText] = useState("Talk");
  // More random ordering and naming
  const textOptions = ["Talk", "Cook", "Look"];
  const { toast } = useToast();
  
  // Added some comments that a human might add
  useEffect(() => {
    // Set up text rotation
    const textRotationTimer = setInterval(() => {
      setActiveText(currentText => {
        const idx = textOptions.indexOf(currentText);
        // Return the next text or go back to beginning
        return textOptions[(idx + 1) % textOptions.length];
      });
    }, 2000); // every 2 seconds

    // Clean up interval on unmount
    return () => clearInterval(textRotationTimer);
  }, []); // empty dependency array since we don't need to re-run

  // Moved function definition location to be less structured
  function openTrailer() {
    // Hardcoded URL - something a human might do
    window.open('https://www.youtube.com/watch?v=_DbRKvi5_OI', '_blank');
    toast({
      title: "Trailer",
      description: "Opening video trailer...",
    });
  };

  // Less consistent JSX formatting
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with hardcoded path */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/0fddfe61-51f7-4f97-bba5-555b7789c0ff.png"
          alt="Chef cooking with flames"
          className="w-full h-full object-cover brightness-75"
        />
      </div>

      {/* Decorative lights with some inconsistent formatting */}
      <div className="absolute top-0 w-full overflow-hidden">
        <div className="flex justify-between px-4 py-2">
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${
                i % 5 === 0 ? 'bg-red-500' : 
                i % 5 === 1 ? 'bg-blue-500' : 
                i % 5 === 2 ? 'bg-green-500' : 
                i % 5 === 3 ? 'bg-yellow-500' : 'bg-purple-500'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content with less structured comment style */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* trailer btn */}
          <button 
            className="mb-8 px-6 py-2 bg-black/50 text-white rounded-full flex items-center gap-2 mx-auto hover:bg-black/70 transition-colors"
            onClick={openTrailer}
          >
            <Play size={16} />
            Watch Trailer
          </button>

          {/* Text with non-consistent naming convention */}
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

          {/* Find Recipe Button - note inconsistent placement */}
          <Link to="/find-recipe">
            <Button 
              variant="default"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg px-8 py-6"
            >
              Find your perfect recipe
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
