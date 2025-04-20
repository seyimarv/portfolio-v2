import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/use-scroll-reveal';
import { ArrowRight } from 'lucide-react';
import ComputerSvg from '../illustrations/computer';

interface ContentBlockProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  imageOnRight?: boolean;
  onButtonClick?: () => void;
  SvgComponent?: React.ReactNode;
}

const ContentBlock: React.FC<ContentBlockProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  buttonText,
  buttonLink,
  imageOnRight = false,
  onButtonClick,
  SvgComponent = ComputerSvg
}) => {
  // Set up scroll reveal animations
  const titleReveal = useScrollReveal();
  const descriptionReveal = useScrollReveal({ threshold: 0.2 });
  const buttonReveal = useScrollReveal({ threshold: 0.3 });
  const imageReveal = useScrollReveal({ threshold: 0.2 });

  // Handle button click
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onButtonClick) {
      e.preventDefault();
      onButtonClick();
    } else if (buttonLink && buttonLink.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(buttonLink.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Content section with text and button
  const contentSection = (
    <div className="w-full lg:w-[60%] p-8 lg:pb-20 flex flex-col justify-center">
      <motion.div
        className={`reveal ${titleReveal.isVisible ? 'active' : ''}`}
        ref={titleReveal.ref as React.RefObject<HTMLDivElement>}
        style={{ transitionDelay: '0.2s' }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight font-heading mb-6">
          {title}
        </h2>
      </motion.div>

      <motion.div
        className={`reveal ${descriptionReveal.isVisible ? 'active' : ''}`}
        ref={descriptionReveal.ref as React.RefObject<HTMLDivElement>}
        style={{ transitionDelay: '0.4s' }}
      >
        <p className="text-base md:text-lg mb-8 text-gray-600 dark:text-grey">
          {description}
        </p>
      </motion.div>

      {buttonText && (
        <motion.div
          className={`reveal ${buttonReveal.isVisible ? 'active' : ''}`}
          ref={buttonReveal.ref as React.RefObject<HTMLDivElement>}
          style={{ transitionDelay: '0.6s' }}
        >
          <a
            href={buttonLink || '#'}
            onClick={handleClick}
            className="inline-flex items-center text-primary dark:text-secondary font-medium group"
          >
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      )}
    </div>
  );

  // Image section
  const imageSection = (
    <div className="w-full lg:w-[40%] p-8 lg:p-0">
      <motion.div
        className={`relative expand ${imageReveal.isVisible ? 'active' : ''}`}
        ref={imageReveal.ref as React.RefObject<HTMLDivElement>}
      >
        {SvgComponent}
      </motion.div>
    </div>
  );

  return (
    <div className="container mx-auto">
      <motion.div
        className={`border border-gray-200 dark:border-secondary/20 overflow-hidden flex flex-col lg:flex-row items-stretch rounded-2xl`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {imageOnRight ? (
          <>
            {contentSection}
            {imageSection}
          </>
        ) : (
          <>
            {imageSection}
            {contentSection}
          </>
        )}
      </motion.div>
    </div>
  );
};

export default ContentBlock;
