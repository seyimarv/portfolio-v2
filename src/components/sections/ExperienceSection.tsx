import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useScroll, useTransform, MotionValue } from 'framer-motion';
import BlurElement from '../BlurElement';

interface ExperienceItemProps {
  company: string;
  role: string;
  years: string;
  description: string;
  index: number;
  isLast: boolean;
  sectionScrollYProgress: MotionValue<number>;
  totalItems: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  role,
  years,
  description,
  index,
  isLast,
  sectionScrollYProgress,
  totalItems
}) => {
  const staggerStart = index * (0.3 / totalItems);
  const staggerEnd = staggerStart + 0.4;

  const companyYearsOpacity = useTransform(sectionScrollYProgress, [staggerStart, staggerEnd], [0, 1]);
  const companyYearsY = useTransform(sectionScrollYProgress, [staggerStart, staggerEnd], [20, 0]);
  const roleDescOpacity = useTransform(sectionScrollYProgress, [staggerStart + 0.1, staggerEnd + 0.1], [0, 1]);
  const roleDescY = useTransform(sectionScrollYProgress, [staggerStart + 0.1, staggerEnd + 0.1], [20, 0]);

  const baseClasses = "relative pl-8 md:pl-0";
  const timelineClasses = `
    absolute left-0 md:hidden top-1 h-full 
    border-l-2 border-secondary/30 dark:border-secondary/50 
    ${isLast ? 'h-[calc(100%-1.5rem)]' : ''}
  `;
  const dotClasses = "absolute left-[-0.3rem] md:hidden top-1 w-3 h-3 bg-secondary rounded-full";

  return (
    <div
      className={`${baseClasses} ${!isLast ? 'pb-16' : 'pb-4'} md:pb-0 md:flex-1 md:border md:border-secondary/20 md:p-6 lg:p-8 md:rounded-lg`}
    >
      <div className={timelineClasses}></div>
      <div className={dotClasses}></div>

      <div className="relative">
        <motion.div
          style={{ opacity: companyYearsOpacity, y: companyYearsY }}
          className="mb-3 md:mb-4"
        >
          <h3 className="text-xl md:text-2xl font-bold text-primary-light dark:text-secondary mb-1">{company}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 tracking-wide font-medium">{years}</p>
        </motion.div>

        <motion.div style={{ opacity: roleDescOpacity, y: roleDescY }}>
          <h4 className="text-lg md:text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">{role}</h4>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">{description}</p>
        </motion.div>
      </div>
    </div>
  );
};

const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: sectionScrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const [lastProjectHeight, setLastProjectHeight] = useState<number>(0);

  useEffect(() => {
    const calculateHeight = () => {
      const lastProjectShowcase = document.getElementById('last-project-showcase');
      if (lastProjectShowcase) {
        const height = lastProjectShowcase.offsetHeight;
        console.log("Last Project Showcase Height for Exp Section Margin:", height);
        setLastProjectHeight(height);
      } else {
        console.log("Last project showcase ('last-project-showcase') not found yet for Exp Section.");
      }
    };

    const timeoutId = setTimeout(calculateHeight, 100);
    window.addEventListener('resize', calculateHeight);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', calculateHeight);
    };
  }, []);

  const experiences = [
    {
      company: "5irechain",
      role: "Frontend Developer",
      years: "2022 - 2024",
      description: "Spearheaded the development of high-performance, cross-platform frontend applications, translating complex UI/UX designs into seamless, responsive user interfaces. Played a key role in building core platforms including 5ireScan, the Validator App, and the Nominator App."
    },
    {
      company: "Livrite Healthcare Services",
      role: "Frontend Software Engineer",
      years: "2021-2023",
      description: "Designed and delivered robust, high-performance applications optimized for cross-platform compatibility. Expertly translated UI/UX mockups into interactive web pages, integrated RESTful APIs, implemented comprehensive software testing, and contributed to strategic technical architecture decisions."
    },
    {
      company: "Freelancing",
      role: "Fullstack Developer",
      years: "2020 - present",
      description: "Collaborated with product and design teams to deliver compelling web applications. Developed and maintained fullstack solutions using React, Next.js, and Express, converting UI/UX mockups into responsive designs and integrating REST API endpoints."
    }
  ];

  return (
    <section
      id="experience"
      className="py-20 md:py-32 bg-gray-50 dark:bg-primary/40 relative overflow-hidden"
      style={{ marginTop: `calc(${lastProjectHeight}px - 100vh)` }}
    >
      <BlurElement
        position="top-right"
        size="md"
        color="primary"
        intensity="light"
        parallaxFactor={0.1}
        className="z-0 opacity-50"
      />
      <BlurElement
        position="bottom-left"
        size="lg"
        color="secondary"
        intensity="medium"
        parallaxFactor={0.15}
        className="z-0"
      />
      <BlurElement
        position="center"
        size="sm"
        color="gradient"
        intensity="light"
        parallaxFactor={0.05}
        className="z-0 top-[30%] left-[70%]"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-primary dark:text-secondary text-lg font-medium mb-2"
        >
          Professional Journey
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-16"
        >
          My Experience
        </motion.h3>

        <div
          ref={sectionRef}
          className="relative mt-20 md:mt-24 max-w-3xl mx-auto md:max-w-none md:flex md:flex-row md:space-x-6 lg:space-x-8"
        >
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              company={exp.company}
              role={exp.role}
              years={exp.years}
              description={exp.description}
              index={index}
              isLast={index === experiences.length - 1}
              sectionScrollYProgress={sectionScrollYProgress}
              totalItems={experiences.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
