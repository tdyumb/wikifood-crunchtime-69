
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

  // Shimmer effect
  const shimmerVariants = {
    initial: { x: '-100%', opacity: 0.3 },
    animate: {
      x: '100%',
      opacity: 0.7,
      transition: { 
        repeat: 2,
        repeatType: 'mirror' as const,
        duration: 1.8,
        ease: 'easeInOut',
        delay: 0.5
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
          className="relative w-64 h-64 overflow-hidden"
          variants={logoVariants}
          initial="initial"
          animate="animate"
        >
          <img 
            src="/lovable-uploads/139e78dd-f344-4f8a-b32c-a0d926fbb889.png" 
            alt="WikiFoods Logo"
            className="w-full h-full object-contain"
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
            variants={shimmerVariants}
            initial="initial"
            animate="animate"
            style={{ mixBlendMode: 'overlay' }}
          />
        </motion.div>
        
        <motion.div
          className="mt-3 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 h-1 rounded-full"
          initial={{ width: 0, opacity: 0 }}
          animate={{ 
            width: '160px', 
            opacity: 1,
            transition: { 
              delay: 1.2, 
              duration: 0.8, 
              ease: 'easeOut' 
            } 
          }}
        />
      </div>
    </motion.div>
  );
};

export default SplashScreen;
