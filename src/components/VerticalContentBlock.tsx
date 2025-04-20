import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/use-scroll-reveal';

interface VerticalContentBlockProps {
  title: string;
  description: string;
  IllustrationComponent: React.ReactNode;
  id?: string;
  className?: string;
}

const VerticalContentBlock: React.FC<VerticalContentBlockProps> = ({
  title,
  description,
  IllustrationComponent,
  id,
  className
}) => {
  const titleReveal = useScrollReveal();
  const descriptionReveal = useScrollReveal({ threshold: 0.2 });
  const imageReveal = useScrollReveal({ threshold: 0.3 });

  return (
    <div id={id} className={className}>
      <motion.div
        className="border border-gray-200 dark:border-secondary/20 overflow-hidden rounded-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col p-8 md:p-8 !pb-0">
          {/* Title Section */}
          <motion.div
            className={`reveal ${titleReveal.isVisible ? 'active' : ''}`}
            ref={titleReveal.ref as React.RefObject<HTMLDivElement>}
            style={{ transitionDelay: '0.2s' }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight font-heading mb-6">
              {title}
            </h2>
          </motion.div>

          {/* Description Section */}
          <motion.div
            className={`reveal ${descriptionReveal.isVisible ? 'active' : ''}`}
            ref={descriptionReveal.ref as React.RefObject<HTMLDivElement>}
            style={{ transitionDelay: '0.4s' }}
          >
            <p className="text-base md:text-lg mb-8 text-gray-600 dark:text-grey max-w-3xl">
              {description}
            </p>
          </motion.div>

          {/* Image Section - At the bottom */}
          <motion.div
            className={`reveal mt-8 ${imageReveal.isVisible ? 'active' : ''}`}
            ref={imageReveal.ref as React.RefObject<HTMLDivElement>}
            style={{ transitionDelay: '0.6s' }}
          >
            <div className="w-full h-80">
              {IllustrationComponent}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default VerticalContentBlock;
