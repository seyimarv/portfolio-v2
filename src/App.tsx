import React, { useState, useEffect } from 'react';
import { ThemeProvider } from "./contexts/ThemeContext";
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import WorkSection from './components/sections/WorkSection';
import ExperienceSection from './components/sections/ExperienceSection';
import SkillsSection from './components/sections/SkillsSection';
import ContactSection from './components/sections/ContactSection';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    // Lock scrolling during preloader
    document.body.style.overflow = "hidden";
    
    // Initialize any global scripts or event listeners here
    const handleScrollAnimations = () => {
      // Handle reveal animations (slide up)
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
      
      // Handle expand animations (scale up)
      const expands = document.querySelectorAll('.expand');
      
      expands.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    // Run once on initial load to reveal elements already in viewport
    setTimeout(handleScrollAnimations, 100);
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimations);
    
    return () => {
      window.removeEventListener('scroll', handleScrollAnimations);
    };
  }, []);

  return (
    <ThemeProvider>
        <div className="font-body bg-white dark:bg-primary text-gray-800 dark:text-text-primary transition-colors duration-300">
          <CustomCursor />
          
          {loading ? (
            <Preloader onLoadingComplete={handleLoadingComplete} />
          ) : (
            <>
              <Header />
              <main className="relative">
                <HeroSection />
                <AboutSection />
                <WorkSection />
                <ExperienceSection />
                <ContactSection />
                <SkillsSection />
              </main>
              
              <Footer />
            </>
          )}
        </div>
      </ThemeProvider>
  );
};

export default App;
