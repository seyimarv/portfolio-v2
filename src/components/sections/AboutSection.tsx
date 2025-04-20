import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/use-scroll-reveal';
import ContentBlock from '../ContentBlock';
import VerticalContentBlock from '../VerticalContentBlock';
import PerformanceCard from '../PerformanceCard';
import Illustration5 from '../../illustrations/illustration5.svg?react';
import Illustration6 from '../../illustrations/illustration6.svg?react';
import Illustration7 from '../../illustrations/illustration7.svg?react';
import BlurElement from '../BlurElement';

const AboutSection: React.FC = () => {
  const title = useScrollReveal();

  return (
    <section id="about" className="py-20 md:py-0 px-6 relative overflow-hidden">
      <BlurElement
        position="top-right"
        size="lg"
        color="secondary"
        intensity="medium"
        parallaxFactor={0.1}
        className="z-0"
      />
      <BlurElement
        position="bottom-left"
        size="xl"
        color="gradient"
        intensity="light"
        parallaxFactor={0.15}
        className="z-0"
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          className={`mb-20 md:mb-32 px-2 md:px-0 reveal ${title.isVisible ? 'active' : ''}`}
          ref={title.ref as React.RefObject<HTMLDivElement>}
          style={{ transitionDelay: '0.2s' }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight font-heading">
            <span>A Full-Stack </span>
            <span className="text-primary-light dark:text-secondary">Developer</span>
            <span className=" block sm:inline"> — crafting seamless digital experiences</span>
            <span className=" block sm:inline"> from frontend to backend.</span>
            <div className="mt-6 md:mt-10">
              <span>Bringing designs to life with modern UI frameworks while building robust backend systems that power them.</span>
            </div>
          </h1>
        </motion.div>

        <ContentBlock
          imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          imageAlt="Laptop displaying code, representing software development"
          title="End-to-End Development"
          description="As a full-stack developer with a passion for frontend innovation, I create end-to-end web solutions. From responsive user interfaces powered by React to building efficient server-side architectures, I ensure seamless integration throughout the stack."
          buttonText="View My Work"
          buttonLink="#projects"
          imageOnRight={false}
          SvgComponent={<div className='w-full relative -mt-12 -ml-10'><Illustration6 /></div>}
        />

        <div className="my-2 md:my-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          <VerticalContentBlock
            title="Turning Ideas into Scalable Solutions"
            description="I specialize in bridging the gap between frontend and backend. With expertise in both, I build scalable solutions that are not only functional but also aligned with business goals and designed to grow."
            IllustrationComponent={<div className="w-full relative h-full"><Illustration5 /></div>}
            className="h-full"
          />

          <div className="flex flex-col gap-4 h-full">
            <PerformanceCard
              title="Fluid, User-Centric Interfaces"
              description="Building engaging, responsive interfaces that make the user journey intuitive and delightful using modern frontend frameworks."
              className="flex-1"
            />
            <PerformanceCard
              title="Reliable Backend Solutions"
              description="Designing powerful backend systems that support data integrity, security, and scalability for seamless application performance."
              className="flex-1"
            />
            <PerformanceCard
              title="End-to-End Application Integration"
              description="Connecting frontend and backend seamlessly to deliver high-performance, fully integrated applications that work flawlessly together."
              className="flex-1"
            />
          </div>
        </div>

        <ContentBlock
          imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          imageAlt="Laptop displaying code on a desk"
          title="Adaptable, Modern Solutions"
          description="Fluent across the entire stack, I develop with the latest technologies to build scalable and future-proof solutions. From frontend frameworks like React to backend technologies and cloud services, I ensure your project is built for today and tomorrow."
          buttonText="Let's Collaborate"
          buttonLink="#contact"
          imageOnRight={true}
          SvgComponent={<div className='w-full relative -mb-20 ml-20'><Illustration7 /></div>}
        />

      </div>
    </section>
  );
};

export default AboutSection;