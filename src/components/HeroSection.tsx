import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "./ui/use-toast";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const HeroSection = () => {
  const [currentText, setCurrentText] = useState("Talk");
  const phrases = ["Talk", "Cook", "Look"];
  const { toast } = useToast();
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(current => {
        const currentIndex = phrases.indexOf(current);
        return phrases[(currentIndex + 1) % phrases.length];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleTrailerClick = () => {
    window.open('https://www.youtube.com/watch?v=_DbRKvi5_OI', '_blank');
    toast({
      title: "Trailer",
      description: "Opening video trailer...",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/6fc1a0bc-894d-428f-a2f4-ccfe73af9d08.png"
          alt="Chef cooking in kitchen"
          className="w-full h-full object-cover brightness-50"
        />
      </div>

      {/* Decorative Lights */}
      <div className="absolute top-0 w-full overflow-hidden">
        <div className="flex justify-between px-4 py-2">
          {Array.from({ length: 20 }).map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${
                ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'][
                  i % 5
                ]
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Watch Trailer Button */}
          <button 
            className="mb-8 px-6 py-2 bg-black/50 text-white rounded-full flex items-center gap-2 mx-auto hover:bg-black/70 transition-colors"
            onClick={handleTrailerClick}
          >
            <Play size={16} />
            Watch Trailer
          </button>

          {/* Hero Text */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
            <motion.span
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-yellow-400 inline-block"
            >
              {currentText}
            </motion.span> Like A
            <br />
            Chef
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Master the art of cooking. Learn techniques and recipes from expert chefs around the world!
          </p>

          {/* Find Recipe Button */}
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