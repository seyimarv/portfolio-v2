import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onLoadingComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  // Letter animation variants
  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    })
  };

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 10;
        
        if (newProgress >= 100) {
          clearInterval(interval);
          
          // Fade out preloader after completed
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onLoadingComplete, 500);
          }, 500);
          
          return 100;
        }
        
        return newProgress;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  const portfolioLetters = "SEYITAN".split("");
  
  return (
    <AnimatePresence>
      
      {isVisible && (
        <div className="container mx-auto">
        <motion.div
          className="preloader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary dark:text-text-primary">
              {portfolioLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
          </div>
          
          <div className="progress-container">
            <motion.div 
              className="progress-bar"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
          
          <p className="mt-4 text-gray-600 dark:text-grey text-sm md:text-base">
            Loading assets... {Math.floor(progress)}%
          </p>
        </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
