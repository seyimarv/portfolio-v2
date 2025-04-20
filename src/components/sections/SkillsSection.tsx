import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";
import { useScrollReveal } from '../../hooks/use-scroll-reveal';
import BlurElement from '../BlurElement';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiReactquery,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiFramer,
  SiGit,
  SiDocker,
  SiJest
} from 'react-icons/si';
import { VscSymbolNamespace } from 'react-icons/vsc';

const technologies = [
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'React Query', icon: SiReactquery },
  { name: 'Redux', icon: SiRedux },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Material UI', icon: SiMui },
  { name: 'shadcn/ui', icon: VscSymbolNamespace },
  { name: 'Framer Motion', icon: SiFramer },
  { name: 'Git', icon: SiGit },
  { name: 'Docker', icon: SiDocker },
  { name: 'Jest', icon: SiJest },
];

const TechIcon = ({ IconComponent }: { IconComponent: React.ElementType }) => {
  return <IconComponent className="h-10 w-10 md:h-12 md:w-12 text-secondary/90" />;
};

const SkillsSection: React.FC = () => {
  const titleReveal = useScrollReveal();
  

  

  return (
    <section
      id="skills"
      className="py-20 md:py-32 relative overflow-hidden"
     
    >
      {/* Dynamic blur elements for the skills section */}
      <BlurElement
        position="top-right"
        size="md"
        color="primary"
        intensity="strong"
        parallaxFactor={0.1}
        className="z-0"
      />
      <BlurElement
        position="center"
        size="xl"
        color="gradient"
        intensity="medium"
        parallaxFactor={0.05}
        className="z-0 opacity-40 top-[40%] left-[30%]"
      />
      <BlurElement
        position="bottom-left"
        size="lg"
        color="secondary"
        intensity="light"
        parallaxFactor={0.15}
        className="z-0"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto mb-16 md:mb-24">
          <motion.h3
            ref={titleReveal.ref as React.RefObject<HTMLHeadingElement>}
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6 reveal ${titleReveal.isVisible ? 'active' : ''}`}
          >
            In the game with
          </motion.h3>
        </div>
        <div className="mt-20">
          <Marquee
            gradient={false}
            speed={50}
            pauseOnHover={true}
          >
            {technologies.concat(technologies).map((tech, index) => (
              <div key={index} className="mx-6 md:mx-10 flex items-center justify-center h-16 filter grayscale hover:grayscale-0 transition-all duration-300 dark:filter-none">
                <TechIcon IconComponent={tech.icon} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;