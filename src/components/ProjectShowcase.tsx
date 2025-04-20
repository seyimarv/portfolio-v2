import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/use-scroll-reveal';

interface ProjectShowcaseProps {
  mainImageSrc: string;
  smallImage1Src: string;
  smallImage2Src: string;
  skills: string[];
  description: string;
  mainImageOnRight?: boolean;
  isLast?: boolean;
  className?: string;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  mainImageSrc,
  smallImage1Src,
  smallImage2Src,
  skills,
  description,
  mainImageOnRight = false,
  isLast = false,
  className = ''
}) => {
  const mainImageReveal = useScrollReveal({ threshold: 0.3 });
  const smallImage1Reveal = useScrollReveal({ threshold: 0.3 }); 
  const smallImage2Reveal = useScrollReveal({ threshold: 0.3 }); 
  const textReveal = useScrollReveal({ threshold: 0.3 });

  const mainImageSection = (
    <div className="w-full lg:w-1/2 p-2 md:p-3 ">
      <motion.div
        className={`relative expand ${mainImageReveal.isVisible ? 'active' : ''}`}
        ref={mainImageReveal.ref as React.RefObject<HTMLDivElement>}
        style={{ transitionDelay: '0.2s' }}
      >
        <div className="rounded-xl overflow-hidden aspect-[16/9] md:aspect-[4/3]">
          <img 
            src={mainImageSrc} 
            alt={`${description.substring(0, 30)}... main screenshot`} 
            className="w-full h-full object-cover" 
            loading="lazy"
          />
        </div>
      </motion.div>
    </div>
  );

  const smallImagesSection = (
    <div className="w-full lg:w-1/2 p-2 md:p-3 flex flex-col gap-4 md:gap-6">
      <div className="flex md:flex-row gap-4 items-start">
        <motion.div
          className={`w-full md:w-1/2 expand ${smallImage1Reveal.isVisible ? 'active' : ''}`}
          ref={smallImage1Reveal.ref as React.RefObject<HTMLDivElement>}
          style={{ transitionDelay: '0.4s' }}
        >
          <div className="rounded-xl overflow-hidden aspect-[16/9] md:aspect-[4/3]">
            <img 
              src={smallImage1Src} 
              alt={`${description.substring(0, 30)}... small screenshot 1`} 
              className="w-full h-full object-cover" 
              loading="lazy"
            />
          </div>
        </motion.div>
        <motion.div
          className={`w-full md:w-1/2 expand ${smallImage2Reveal.isVisible ? 'active' : ''}`}
          ref={smallImage2Reveal.ref as React.RefObject<HTMLDivElement>}
          style={{ transitionDelay: '0.6s' }}
        >
          <div className="rounded-xl overflow-hidden aspect-[16/9] md:aspect-[4/3]">
            <img 
              src={smallImage2Src} 
              alt={`${description.substring(0, 30)}... small screenshot 2`} 
              className="w-full h-full object-cover" 
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
      <motion.div
        className={`w-full reveal ${textReveal.isVisible ? 'active' : ''}`}
        ref={textReveal.ref as React.RefObject<HTMLDivElement>}
        style={{ transitionDelay: '0.8s' }}
      >
        <p className="text-xl md:text-2xl lg:text-3xl">{description}</p>
        <h3 className="text-secondary dark:text-secondary font-bold text-sm md:text-base mt-4 md:mt-6 lg:mt-8">
          {skills.map((skill, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span className="mx-2 md:mx-3">·</span>}
              {skill}
            </React.Fragment>
          ))}
        </h3>
      </motion.div>
    </div>
  );

  return (
    <div 
      id={isLast ? "last-project-showcase" : undefined}
      className={`container mx-auto ${className}`}
    >
      <motion.div
        className="border border-secondary/20 bg-gray-50 dark:bg-primary overflow-hidden flex flex-col lg:flex-row items-stretch rounded-2xl p-4 md:p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {mainImageOnRight ? (
          <>
            {smallImagesSection}
            {mainImageSection}
          </>
        ) : (
          <>
            {mainImageSection}
            {smallImagesSection}
          </>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectShowcase;
