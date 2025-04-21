import React from 'react';
import { portfolioData } from '../lib/data';
import { useScrollReveal } from '../hooks/use-scroll-reveal';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {

  const leftColReveal = useScrollReveal();
  const centerColReveal = useScrollReveal();
  const rightColReveal = useScrollReveal();

  const leftH3Reveal = useScrollReveal();
  const leftP1Reveal = useScrollReveal();
  const leftAddressReveal = useScrollReveal();

  const centerH3Reveal = useScrollReveal();
  const centerP1Reveal = useScrollReveal();
  const centerDetailsReveal = useScrollReveal();

  const rightH3Reveal = useScrollReveal();
  const rightP1Reveal = useScrollReveal();
  const socialReveal = useScrollReveal();

  return (
    <footer className="py-16 md:py-20 bg-primary dark:bg-primary text-white overflow-hidden border-t border-secondary/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-8 md:flex md:justify-between md:items-start">
          <div className="md:flex md:gap-16">
            <motion.div
              ref={leftColReveal.ref as React.RefObject<HTMLDivElement>}
              className={`reveal ${leftColReveal.isVisible ? 'active' : ''} mb-8 md:mb-0`} // Added margin for mobile
            >
              <motion.h3
                ref={leftH3Reveal.ref as React.RefObject<HTMLHeadingElement>}
                className={`text-xl font-bold mb-2 reveal ${leftH3Reveal.isVisible ? 'active' : ''}`}
                style={{ transitionDelay: '0.1s' }}
              >
                Let's connect.
              </motion.h3>
              <motion.p
                ref={leftP1Reveal.ref as React.RefObject<HTMLParagraphElement>}
                className={`text-gray-300 mb-8 reveal ${leftP1Reveal.isVisible ? 'active' : ''}`}
                style={{ transitionDelay: '0.2s' }}
              >
                Get in touch.
              </motion.p>
              <motion.div
                ref={leftAddressReveal.ref as React.RefObject<HTMLDivElement>}
                className={`space-y-1 text-sm text-gray-300 reveal ${leftAddressReveal.isVisible ? 'active' : ''}`}
                style={{ transitionDelay: '0.3s' }}
              >
                <p className="font-medium">Lagos | Nigeria</p>
                <p className="mt-4">Say hello: oluwaseyitan299@gmail.com</p>
              </motion.div>
            </motion.div>
            <motion.div
              ref={centerColReveal.ref as React.RefObject<HTMLDivElement>}
              className={`reveal ${centerColReveal.isVisible ? 'active' : ''} mb-8 md:mb-0`} // Added margin for mobile
              style={{ transitionDelay: '0.15s' }}
            >
              <motion.h3
                ref={centerH3Reveal.ref as React.RefObject<HTMLHeadingElement>}
                className={`text-xl font-bold mb-2 reveal ${centerH3Reveal.isVisible ? 'active' : ''}`}
                style={{ transitionDelay: '0.25s' }}
              >
                Project thoughts?
              </motion.h3>
              <motion.p
                ref={centerP1Reveal.ref as React.RefObject<HTMLParagraphElement>}
                className={`text-gray-300 mb-8 reveal ${centerP1Reveal.isVisible ? 'active' : ''}`}
                style={{ transitionDelay: '0.35s' }}
              >
                A few key points.
              </motion.p>
              <motion.div
                ref={centerDetailsReveal.ref as React.RefObject<HTMLDivElement>}
                className={`space-y-6 text-gray-300 reveal ${centerDetailsReveal.isVisible ? 'active' : ''}`}
                style={{ transitionDelay: '0.45s' }}
              >
                <div className="flex items-center space-x-3">
                  <ArrowRight size={16} className="text-secondary" />
                  <a 
                    href={`mailto:${portfolioData.contactInfo.email}`}
                    className="hover:text-secondary transition-colors"
                  >
                    Let's build something great.
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <ArrowRight size={16} className="text-secondary" />
                  <a 
                    href="/resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-secondary transition-colors"
                  >
                    View My Resume
                  </a>
                </div>
              </motion.div>
            </motion.div>

          </div>
          <motion.div
            ref={rightColReveal.ref as React.RefObject<HTMLDivElement>}
            className={`reveal ${rightColReveal.isVisible ? 'active' : ''}`}
            style={{ transitionDelay: '0.3s' }}
          >
            <motion.h3
              ref={rightH3Reveal.ref as React.RefObject<HTMLHeadingElement>}
              className={`text-xl font-bold mb-2 reveal ${rightH3Reveal.isVisible ? 'active' : ''}`}
              style={{ transitionDelay: '0.4s' }}
            >
              See what I'm doing.
            </motion.h3>
            <motion.p
              ref={rightP1Reveal.ref as React.RefObject<HTMLParagraphElement>}
              className={`text-gray-300 mb-8 reveal ${rightP1Reveal.isVisible ? 'active' : ''}`}
              style={{ transitionDelay: '0.5s' }}
            >
              Find me online.
            </motion.p>
            <motion.div
              ref={socialReveal.ref as React.RefObject<HTMLDivElement>}
              className={`flex space-x-6 mb-8 reveal ${socialReveal.isVisible ? 'active' : ''}`}
              style={{ transitionDelay: '0.6s' }}
            >
              {portfolioData.contactInfo.social.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary transition-colors"
                    aria-label={social.platform}
                  >
                    <IconComponent size={24} />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;