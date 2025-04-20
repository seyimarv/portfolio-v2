import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    // Add hovering effect for interactive elements
    const addHoverEvents = () => {
      const interactiveElements = document.querySelectorAll('a, button, .hover-trigger');
      
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };

    // We need a short delay to make sure all DOM elements are rendered
    const timer = setTimeout(addHoverEvents, 1000);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      clearTimeout(timer);
      
      // Clean up hover events
      const interactiveElements = document.querySelectorAll('a, button, .hover-trigger');
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', () => setIsHovering(true));
        el.removeEventListener('mouseleave', () => setIsHovering(false));
      });
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      animate={{
        x: position.x,
        y: position.y,
        scale: isHovering ? 2.5 : 1
      }}
      transition={{
        type: 'spring',
        damping: 25,
        stiffness: 300,
        mass: 0.5
      }}
    />
  );
};

export default CustomCursor;
