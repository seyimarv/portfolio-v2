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
            <span>Five years of building things that actually </span>
            <span className="text-primary-light dark:text-secondary">ship</span>
            <span>.</span>
          </h1>
          <p className="mt-6 md:mt-10 max-w-3xl text-lg md:text-xl text-gray-600 dark:text-grey">
            I've worked across blockchain, healthtech, e-commerce, and AI, building products that people actually use. I care about making things fast, keeping the codebase easy to work with, and building things in a way that still makes sense when you come back to them months later.
          </p>
        </motion.div>

        <ContentBlock
          imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          imageAlt="Laptop displaying code, representing software development"
          title="I work on both sides of the stack"
          description="Frontend is where I spend most of my time. React, Next.js, TypeScript, state management, and all the little details that make an interface feel right. I also build the backend behind it: Node APIs, Postgres databases, authentication, and the services my frontend depends on. Being able to work across both sides makes debugging a lot easier because I can usually trace a problem from the UI all the way to the database instead of passing it around between teams."
          buttonText="View My Work"
          buttonLink="#projects"
          imageOnRight={false}
          SvgComponent={<div className='w-full relative -mt-12 -ml-10'><Illustration6 /></div>}
        />

        <div className="my-2 md:my-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          <VerticalContentBlock
            title="Building with LLMs"
            description="I've been working with LLMs beyond the usual chatbot setup. That means streaming responses, prompt design, tool calls, generated code, and building interfaces around model output. I've worked with Claude, OpenAI, and the Vercel AI SDK, with a lot of the work focused on making AI feel reliable: showing users what's happening, handling failures properly, and making generated output something they can actually work with. The model is only part of the product. The experience around it matters just as much."
            IllustrationComponent={<div className="w-full relative h-full"><Illustration5 /></div>}
            className="h-full"
          />

          <div className="flex flex-col gap-4 h-full">
            <PerformanceCard
              title="Performance that you can actually feel"
              description="I care about performance, especially when an app has a lot going on at once. Lists updating in real time, large amounts of data, complex interactions, and long-running operations all need to stay responsive. I usually profile first rather than guessing at what needs to be changed because a lot of the time, the problem isn't where you first expect it to be."
              className="flex-1"
            />
            <PerformanceCard
              title="State, without the mess"
              description="I've worked with Jotai, Zustand, Redux, and React Query. For me, the important part isn't picking the trendiest state library. It's figuring out what actually needs to be shared, where it should live, and keeping those boundaries clear. Good state management should make the rest of the application easier to understand, not harder."
              className="flex-1"
            />
            <PerformanceCard
              title="Code people can actually work with"
              description="I've worked with Jest, Playwright, Cypress, and Storybook across different projects. I like code that another developer can open and understand without needing me to explain what I was thinking. Clear patterns, sensible naming, useful tests, and components that don't try to do everything are usually enough to get you there."
              className="flex-1"
            />
          </div>
        </div>

        <ContentBlock
          imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          imageAlt="Laptop displaying code on a desk"
          title="How I work"
          description="I learn quickly, and I usually start by understanding how something works before changing it. I read the existing code, figure out why things were built the way they were, and then make the smallest change that solves the actual problem. I don't particularly enjoy overengineering things. If something simple works, I'll take simple. I'm at my best when I'm building something useful, working with people who care about the product, and getting things into the hands of users."
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