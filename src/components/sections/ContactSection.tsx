import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/use-scroll-reveal';
import { ArrowRight } from 'lucide-react';
import BlurElement from '../BlurElement';

const ContactSection: React.FC = () => {
  const titleReveal = useScrollReveal();
  const buttonReveal = useScrollReveal();
  const subtitleReveal = useScrollReveal();

  return (
    <section id="contact" className="py-20 md:py-32 dark:text-white relative overflow-hidden">
      <BlurElement 
        position="top-left" 
        size="xl" 
        color="gradient" 
        intensity="strong" 
        parallaxFactor={0.2}
        className="z-0 opacity-60"
      />
      <BlurElement 
        position="bottom-right" 
        size="lg" 
        color="secondary" 
        intensity="medium" 
        parallaxFactor={0.15}
        className="z-0"
      />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2
          ref={titleReveal.ref as React.RefObject<HTMLHeadingElement>}
          className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-8 reveal ${titleReveal.isVisible ? 'active' : ''}`}
        >
          Are we working together?
        </motion.h2>
        
        <motion.p
          ref={subtitleReveal.ref as React.RefObject<HTMLParagraphElement>}
          className={`text-lg md:text-xl lg:text-2xl font-medium mb-8 reveal ${subtitleReveal.isVisible ? 'active' : ''}`}
        >
          Let's work together on your next project.
        </motion.p>
        
        <motion.div
          ref={buttonReveal.ref as React.RefObject<HTMLDivElement>}
          className={`inline-block reveal ${buttonReveal.isVisible ? 'active' : ''}`}
          style={{ transitionDelay: '0.2s' }}
        >
         <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-primary dark:bg-secondary text-white dark:text-primary font-medium rounded-md hover:bg-primary-light dark:hover:bg-secondary/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 group"
          >
            <span>Contact me</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
