import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { NavItem } from '../types';
import { portfolioData } from '../lib/data';
import { Instagram, Facebook, Linkedin, Menu, ArrowRight } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    },
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      className="w-full pt-5 pb-8 md:pb-0 bg-transparent"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div className="flex items-center gap-0 md:gap-8 w-full md:w-fit" variants={itemVariants}>
          <button
            className="focus:outline-none text-primary dark:text-white mr-6 border border-primary/20 dark:border-secondary/10 rounded-xl p-4"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <Menu size={24} />
          </button>
          <motion.div variants={itemVariants} className='flex items-center justify-center w-full md:block'>
            <a
              href="#home"
              className="text-2xl font-bold text-primary dark:text-white !font-logo tracking-widest"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              Seyi
            </a>
          </motion.div>
        </motion.div>
        <motion.div className="hidden md:flex items-center space-x-4" variants={itemVariants}>
          <a
            href="#contact"
            className="hidden md:flex items-center text-primary dark:text-white hover:text-secondary dark:hover:text-secondary transition-colors duration-300 border-b border-primary/20 dark:border-white/90 pb-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            <span className="mr-2">Contact me</span>
            <ArrowRight size={16} />
          </a>
        </motion.div>
        <motion.div className="flex items-center space-x-6" variants={itemVariants}>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-primary dark:text-white hover:text-secondary dark:hover:text-secondary transition-colors duration-300" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-primary dark:text-white hover:text-secondary dark:hover:text-secondary transition-colors duration-300" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-primary dark:text-white hover:text-secondary dark:hover:text-secondary transition-colors duration-300" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
          <ThemeToggle />
        </motion.div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-white/95 dark:bg-primary/90 backdrop-blur-md z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-6 py-20">
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-primary dark:text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="mt-10">
              <ul className="space-y-8">
                {portfolioData.navItems.map((item: NavItem) => (
                  <li key={item.section} className="overflow-hidden group">
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 120, damping: 15, delay: 0.2 + 0.05 * portfolioData.navItems.indexOf(item) }}
                    >
                      <a
                        href={`#${item.section}`}
                        className="text-3xl md:text-4xl font-bold text-primary dark:text-white hover:text-secondary dark:hover:text-secondary transition-colors duration-300 flex items-center"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.section);
                        }}
                      >
                        {item.name}
                        <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </a>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-16 flex space-x-6">
              <a href="#" className="text-primary dark:text-white hover:text-secondary dark:hover:text-secondary transition-colors duration-300" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-primary dark:text-white hover:text-secondary dark:hover:text-secondary transition-colors duration-300" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-primary dark:text-white hover:text-secondary dark:hover:text-secondary transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
            </div>
            <div className="mt-12">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-primary dark:bg-secondary text-white dark:text-primary font-medium rounded-md hover:bg-primary-light dark:hover:bg-secondary/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 group"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                <span>Contact me</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
