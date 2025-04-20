import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useIsMobile } from '../hooks/use-mobile';

interface BlurElementProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'accent' | 'gradient';
  intensity?: 'light' | 'medium' | 'strong';
  parallaxFactor?: number;
  animate?: boolean;
  className?: string;
}

const BlurElement: React.FC<BlurElementProps> = ({
  position = 'center',
  size = 'md',
  color = 'primary',
  intensity = 'medium',
  parallaxFactor = 0.1,
  animate = true,
  className = '',
}) => {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  
  // Scroll-based parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax movement based on scroll
  const y = useTransform(
    scrollYProgress, 
    [0, 1], 
    [0, 100 * parallaxFactor]
  );
  
  // Size classes
  const sizeClasses = {
    sm: 'w-32 h-32 md:w-48 md:h-48',
    md: 'w-48 h-48 md:w-64 md:h-64',
    lg: 'w-64 h-64 md:w-80 md:h-80',
    xl: 'w-80 h-80 md:w-96 md:h-96',
  };
  

  const positionClasses = {
    'top-left': 'top-0 left-0 -translate-x-1/4 -translate-y-1/4',
    'top-right': 'top-0 right-0 translate-x-1/4 -translate-y-1/4',
    'bottom-left': 'bottom-0 left-0 -translate-x-1/4 translate-y-1/4',
    'bottom-right': 'bottom-0 right-0 translate-x-1/4 translate-y-1/4',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  };
  
  const colorClasses = {
    primary: 'bg-gradient from-primary/25 to-transparent dark:from-primary-light/20 dark:to-transparent',
    secondary: 'bg-gradient from-secondary/30 to-transparent dark:from-secondary/20 dark:to-transparent',
    accent: 'bg-gradient from-accent/20 to-transparent dark:from-accent/20 dark:to-transparent',
    gradient: 'bg-gradient from-primary/20 via-secondary/15 to-transparent dark:from-primary-light/15 dark:via-secondary/10 dark:to-transparent', 
  };
  
  const blurClasses = {
    light: 'blur-xl',
    medium: 'blur-2xl',
    strong: 'blur-3xl',
  };
  
  // Animation
  useEffect(() => {
    if (animate) {
      // Initial animation
      controls.start({
        scale: [0.8, 1.1, 1],
        opacity: [0, 0.8, 0.6],
        transition: { 
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: Math.random() * 2
        }
      });
      
      // Random movement animation
      const interval = setInterval(() => {
        controls.start({
          x: Math.random() * 20 - 10,
          y: Math.random() * 20 - 10,
          transition: { duration: 8, ease: "easeInOut" }
        });
      }, 8000);
      
      return () => clearInterval(interval);
    }
  }, [animate, controls]);
  
  return (
    <motion.div
      ref={ref}
      className={`absolute rounded-full pointer-events-none will-change-transform ${sizeClasses[size]} ${positionClasses[position]} ${colorClasses[color]} ${blurClasses[intensity]} ${className}`}
      style={{ 
        y: isMobile ? 0 : y,
      }}
      animate={controls}
      initial={{ opacity: 0.6, scale: 1 }}
    />
  );
};

export default BlurElement;
