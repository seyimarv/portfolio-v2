import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef, useState, useMemo } from 'react';
import { useIsMobile } from '../hooks/use-mobile';

interface HeroImageProps {
  onAnimationComplete?: () => void;
  startAnimation?: boolean;
}

const HeroImage = ({ onAnimationComplete, startAnimation = false }: HeroImageProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: typeof window !== 'undefined' ? window : undefined,
  });
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  
  const shouldReduceMotion = prefersReducedMotion || isMobile;
  
  const heroY = useTransform(scrollY, [0, 500], isMobile ? [0, 0] : [0, -150]);
  
  const heroImageVariants = {
    hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
    visible: { 
      clipPath: "inset(0% 0% 0% 0%)", 
      opacity: 1, 
      transition: { 
        duration: 1.2, 
        ease: [0.645, 0.045, 0.355, 1.000],
        delay: 0.1 
      } 
    }
  };

  const floatingElementVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 0.3, 
      scale: 1, 
      transition: { 
        duration: 1, 
        ease: [0.34, 1.56, 0.64, 1] // Elastic out equivalent
      } 
    }
  };

  const codeElementVariants = {
    initial: (i: number) => ({
      opacity: 0,
      y: 20,
      x: 0,
      scale: 1
    }),
    animate: (i: number) => {
      // Simplified animations for mobile
      if (shouldReduceMotion) {
        return {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut"
          }
        };
      }
      
      // Full animations for desktop
      return {
        opacity: 1,
        y: [0, -5 - (i * 2)],  // Reduced movement
        x: i % 2 === 0 ? [0, 3] : [0, -3], // Reduced movement
        rotate: i % 2 === 0 ? [0, 1] : [0, -1], // Reduced rotation
        transition: {
          y: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 4,  // Consistent duration
            ease: "easeInOut"
          },
          x: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 4,  // Consistent duration
            ease: "easeInOut"
          },
          rotate: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 4,  // Consistent duration
            ease: "easeInOut"
          },
          opacity: { duration: 0.6 }
        }
      };
    },
    
    hover: {
      scale: 1.1,
      boxShadow: "0 0 20px rgba(255,215,157,0.5)",
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.95
    }
  };
  
  const Particle = ({ delay = 0 }: { delay?: number }) => {
    if (isMobile) return null;
    
    const size = Math.random() * 4 + 2; 
    const isGold = Math.random() > 0.6;
    const xPos = `${Math.random() * 100}%`;
    const yPos = `${Math.random() * 100}%`;
    const duration = Math.random() * 8 + 5;
    
    return (
      <motion.div
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          backgroundColor: isGold ? 'var(--color-secondary-1)' : 'var(--color-primary-text)',
          left: xPos,
          top: yPos,
          opacity: Math.random() * 0.4 + 0.1
        }}
        animate={{
          y: [0, Math.random() > 0.5 ? -50 : 50], 
          x: [0, Math.random() > 0.5 ? -25 : 25], 
          opacity: [null, 0]
        }}
        transition={{
          duration,
          ease: "easeInOut",
          delay
        }}
      />
    );
  };
  const particles = useMemo(() => {
    const count = shouldReduceMotion ? 0 : 10; 
    return Array.from({ length: count }, (_, i) => (
      <Particle key={i} delay={i * 0.2} />
    ));
  }, [shouldReduceMotion]);
  const ScrollIndicator = () => {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
    
    return (
      <motion.div 
        className="scroll-indicator" 
        style={{ opacity }}
      >
        <span>Scroll Down</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ 
            repeat: Infinity, 
            duration: 1.5 
          }}
        >
          ↓
        </motion.div>
      </motion.div>
    );
  };
  
  return (
    <motion.div 
      ref={heroRef}
      className="relative hero-image"
      style={{ y: heroY }}
      initial={false}
      transformTemplate={(_, transform) => isMobile ? "none" : `${transform} translateZ(0)`}
    >
      <motion.div 
        className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-[var(--shadow-dark)]"
        variants={heroImageVariants}
        initial="hidden"
        animate={startAnimation ? "visible" : "hidden"}
        onAnimationComplete={() => onAnimationComplete && onAnimationComplete()}
      >
        <motion.img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
          alt="Creative development workspace" 
          className="w-full h-full object-cover rounded-2xl shadow-2xl"
        />
        <motion.div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/60 via-transparent to-transparent rounded-2xl mix-blend-overlay"></motion.div>
        {!isMobile && (
          <>
            <motion.div 
              variants={floatingElementVariants}
              initial="hidden"
              className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--color-secondary-1)]/30 rounded-full blur-3xl"
              animate={shouldReduceMotion ? { opacity: 0.3 } : {
                x: [0, 10, 0],
                y: [0, -10, 0],
                transition: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 10,
                  ease: "easeInOut"
                }
              }}
            />
            <motion.div 
              variants={floatingElementVariants}
              initial="hidden"
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--color-primary-light)]/30 rounded-full blur-3xl"
              animate={shouldReduceMotion ? { opacity: 0.3 } : {
                x: [0, -10, 0],
                y: [0, 10, 0],
                transition: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 12,
                  ease: "easeInOut"
                }
              }}
            />
          </>
        )}
        <div className="absolute inset-0 overflow-hidden">
          {particles}
        </div>
        <motion.div 
          className="code-element absolute top-10 left-10 px-4 py-3 bg-[var(--color-primary)]/60 backdrop-blur-md rounded-lg shadow-lg cursor-pointer"
          custom={0}
          variants={codeElementVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          whileTap="tap"
          onHoverStart={() => !isMobile && setIsHovered(0)}
          onHoverEnd={() => !isMobile && setIsHovered(null)}
          style={{ willChange: isHovered === 0 ? 'transform' : 'auto' }}
        >
          <pre className="text-xs text-[var(--color-primary-text)] font-code">
            <span className="text-blue-400">const</span> <span className="text-green-400">experience</span> = <span className="text-[var(--color-secondary-1)]">true</span>;
          </pre>
        </motion.div>
          <>
            <motion.div 
              className="code-element absolute bottom-10 right-10 px-4 py-3 bg-[var(--color-primary)]/60 backdrop-blur-md rounded-lg shadow-lg cursor-pointer"
              custom={1}
              variants={codeElementVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
              onHoverStart={() => setIsHovered(1)}
              onHoverEnd={() => setIsHovered(null)}
              style={{ willChange: isHovered === 1 ? 'transform' : 'auto' }}
            >
              <pre className="text-xs text-[var(--color-primary-text)] font-code">
                <span className="text-blue-400">function</span> <span className="text-green-400">createMagic</span>() {"{ ... }"}
              </pre>
            </motion.div>
            
            <motion.div 
              className="code-element absolute top-1/3 right-12 px-4 py-3 bg-[var(--color-primary)]/60 backdrop-blur-md rounded-lg shadow-lg cursor-pointer"
              custom={2}
              variants={codeElementVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
              onHoverStart={() => setIsHovered(2)}
              onHoverEnd={() => setIsHovered(null)}
              style={{ willChange: isHovered === 2 ? 'transform' : 'auto' }}
            >
              <pre className="text-xs text-[var(--color-primary-text)] font-code">
                <span className="text-pink-400">await</span> <span className="text-green-400">animate</span>(<span className="text-[var(--color-secondary-1)]">{"{#element}"}</span>);
              </pre>
            </motion.div>
          </>
      </motion.div>
    </motion.div>
  );
};

export default HeroImage;