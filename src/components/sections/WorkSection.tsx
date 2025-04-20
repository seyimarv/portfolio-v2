import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/use-scroll-reveal';
import { portfolioData } from '../../lib/data';
import ProjectShowcase from '../ProjectShowcase';

const WorkSection: React.FC = () => {
  const title = useScrollReveal();
  return (
    <section id="work" className="py-20 md:py-32 ">
      
      <div className="container mx-auto px-6 z-10">
        <motion.div
          className={`mb-20 md:mb-32 px-2 md:px-0 reveal ${title.isVisible ? 'active' : ''}`}
          ref={title.ref as React.RefObject<HTMLDivElement>}
          style={{ transitionDelay: '0.2s' }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight font-heading">
            <span>A </span>
            <span className="text-primary-light dark:text-secondary">builder</span>
            <span className=" block sm:inline"> — crafting digital</span>
            <span className=" block sm:inline"> experiences with passion.</span>
            <div className="mt-6 md:mt-10">
              <span>done with creativity, care, and a personal touch.</span>
            </div>
          </h1>
        </motion.div>
        <div className="">
          {portfolioData.projects.map((project, index) => (
            <div
              key={project.id}
              className={`sticky ${index === portfolioData.projects.length - 1 ? 'h-[96vh]' : 'h-[100vh]'}`}
              style={{ top: `${(index + 1) * 2}rem` }}
            >
              <ProjectShowcase
                mainImageSrc={project.image}
                smallImage1Src={project.smallImage1}
                smallImage2Src={project.smallImage2}
                skills={project.technologies}
                description={project.description}
                className="mb-16 md:mb-24 last:mb-0"
                isLast={index === portfolioData.projects.length - 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkSection
