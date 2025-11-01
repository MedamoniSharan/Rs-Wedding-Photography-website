import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Showcase from './components/Showcase';
import Services from './components/Services';
import PortfolioCarousel from './components/PortfolioCarousel';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import type { Section } from './types';

// THEME CONTEXT
type Theme = 'light' | 'dark';
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

const AppContent: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');
  
  const sectionsRef = {
    home: useRef<HTMLDivElement>(null),
    gallery: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as Section);
        }
      });
    }, observerOptions);

    const refs = Object.values(sectionsRef);
    refs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      refs.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const scrollToSection = (section: Section) => {
    sectionsRef[section].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white dark:bg-charcoal-gray text-charcoal-gray dark:text-gray-300 font-lato antialiased selection:bg-golden-beige selection:text-charcoal-gray">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <main>
        <div id="home" ref={sectionsRef.home}><Hero scrollToSection={scrollToSection} /></div>
        <div id="gallery" ref={sectionsRef.gallery}><Gallery /></div>
        <Showcase />
        <div id="services" ref={sectionsRef.services}><Services /></div>
        <PortfolioCarousel />
        <div id="about" ref={sectionsRef.about}><About /></div>
        <div id="contact" ref={sectionsRef.contact}><Contact /></div>
      </main>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

const App: React.FC = () => {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                return savedTheme as Theme;
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'dark';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <AppContent />
        </ThemeContext.Provider>
    );
};

export default App;