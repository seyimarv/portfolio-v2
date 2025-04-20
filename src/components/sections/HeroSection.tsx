import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useAnimation, Variants, useScroll, useTransform } from 'framer-motion';
import HeroImage from '../HeroImage';
import { useIsMobile } from '../../hooks/use-mobile';
import BlurElement from '../BlurElement';

function throttle(callback: Function, delay: number) {
  let lastCall = 0;
  return function(...args: any[]) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      callback(...args);
    }
  };
}

const HeroSection: React.FC = () => {
  const controls = useAnimation();
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [textAnimationComplete, setTextAnimationComplete] = useState(false);
  const isMobile = useIsMobile(); 
  
  const { scrollY } = useScroll({
    target: typeof window !== 'undefined' ? window : undefined,
  });
  
  const backgroundY = useTransform(scrollY, [0, 500], isMobile ? [0, 0] : [0, 150]);
  const contentY = useTransform(scrollY, [0, 500], isMobile ? [0, 0] : [0, -75]);
  const blurElementsY = useTransform(scrollY, [0, 500], isMobile ? [0, 0] : [0, 50]);
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0,
      }
    }
  };
  
  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  const tiltEffect = useCallback(
    throttle((e: MouseEvent) => {
      const element = heroTitleRef.current;
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const tiltX = (y - centerY) / 30;
      const tiltY = (centerX - x) / 30;
      
      element.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    }, 16),
    []
  );
  
  const resetTilt = useCallback(() => {
    if (heroTitleRef.current) {
      heroTitleRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    }
  }, []);
  
  useEffect(() => {
    controls.start("visible").then(() => {
      setTextAnimationComplete(true);
    });
    
    const titleElement = heroTitleRef.current;
    if (titleElement) {
      titleElement.style.willChange = 'transform';
      
      titleElement.addEventListener('mousemove', tiltEffect);
      titleElement.addEventListener('mouseleave', resetTilt);
      
      return () => {
        titleElement.removeEventListener('mousemove', tiltEffect);
        titleElement.removeEventListener('mouseleave', resetTilt);
        titleElement.style.willChange = 'auto';
      };
    }
  }, [controls, tiltEffect, resetTilt]);

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative pt-0 overflow-hidden" ref={sectionRef}>
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none will-change-transform"
        style={{ y: backgroundY }}
        transformTemplate={(_, transform) => `${transform} translateZ(0)`}
        initial={false}
      >
        <BlurElement 
          position="top-left" 
          size="lg" 
          color="secondary" 
          intensity="strong" 
          parallaxFactor={0.15}
          className="absolute top-[15%] left-[8%]"
        />
        <BlurElement 
          position="bottom-right" 
          size="xl" 
          color="primary" 
          intensity="strong" 
          parallaxFactor={0.2}
          className="absolute bottom-[15%] right-[8%]"
        />
        <BlurElement 
          position="center" 
          size="md" 
          color="gradient" 
          intensity="medium" 
          parallaxFactor={0.1}
          className="absolute top-[40%] left-[50%]"
        />
      </motion.div>
      
      <motion.div 
        className={`container mx-auto px-6 relative z-10 ${!isMobile ? 'will-change-transform' : ''}`}
        style={{ y: contentY }}
        transformTemplate={(_, transform) => `${transform} translateZ(0)`}
        initial={false}
      >
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="relative"
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              <motion.div 
                variants={itemVariants}
                className="mb-4"
              >
                <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 dark:bg-secondary/20 text-primary dark:text-secondary border border-secondary/20 text-sm font-medium">
                  Fullstack Developer
                </span>
              </motion.div>
              
              <motion.h1 
                ref={heroTitleRef}
                className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6"
                variants={itemVariants}
              >
                Crafting <span className="text-primary-light dark:text-secondary relative inline-block">
                  digital
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 0 5 C 50 0, 150 0, 200 5" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </span> experiences
              </motion.h1>
              
              <motion.p 
                className="text-gray-600 dark:text-grey text-lg md:text-xl mb-8 max-w-lg"
                variants={itemVariants}
              >
                I build exceptional and accessible digital experiences for the web, focusing on both aesthetics and functionality.
              </motion.p>
              
              <motion.div 
                className="flex space-x-4"
                variants={itemVariants}
                onAnimationComplete={() => setTextAnimationComplete(true)}
              >
                <button 
                  onClick={scrollToWork}
                  className="px-6 py-3 bg-primary dark:bg-secondary text-white dark:text-primary font-medium rounded-md hover:bg-primary-light dark:hover:bg-secondary/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  View My Work
                </button>
                <button 
                  onClick={scrollToContact}
                  className="px-6 py-3 border border-gray-300 dark:border-grey text-gray-800 dark:text-text-primary font-medium rounded-md transition-all duration-300"
                >
                  Get In Touch
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
          <div className="lg:w-1/2 relative">
            <HeroImage startAnimation={textAnimationComplete} />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
