
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  // State to control the visibility of the splash screen
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    // Set a timeout to trigger the exit animation after 2.5 seconds
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
      
      // Additional time for exit animation to complete before calling onComplete
      setTimeout(onComplete, 800);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // Animation variants
  const containerVariants = {
    initial: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }
  };
  
  const logoVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] 
      }
    }
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99] 
      }
    }
  };

  // Glowing dot effect
  const dotVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0, 1, 0],
      scale: [0.8, 1.2, 0.8],
      transition: {
        repeat: Infinity,
        duration: 1.5
      }
    }
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      initial="initial"
      animate={isSplashVisible ? "animate" : "exit"}
      variants={containerVariants}
      onAnimationComplete={() => !isSplashVisible && onComplete()}
    >
      <div className="relative flex flex-col items-center">
        <motion.div 
          className="absolute -top-16 -right-24"
          variants={dotVariants}
          initial="initial"
          animate="animate"
        >
          <div className="h-2 w-2 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50"></div>
        </motion.div>

        <motion.div 
          className="text-white text-6xl font-bold tracking-tight text-center px-4"
          variants={logoVariants}
          initial="initial"
          animate="animate"
        >
          WikiFoods
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
