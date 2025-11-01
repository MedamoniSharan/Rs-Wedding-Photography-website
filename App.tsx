import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Showcase from './components/Showcase';
import Services from './components/Services';
import ServicePage from './components/ServicePage';
import PortfolioCarousel from './components/PortfolioCarousel';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { SERVICES_DATA } from './constants';
import type { Section } from './types';
import type { Service } from './types';

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
  const [currentService, setCurrentService] = useState<Service | null>(null);
  
  const sectionsRef = {
    home: useRef<HTMLDivElement>(null),
    gallery: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const service = SERVICES_DATA.find(s => s.id === hash);
        if (service) {
          setCurrentService(service);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          setCurrentService(null);
        }
      } else {
        setCurrentService(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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

  const handleBackToServices = () => {
    window.location.hash = '';
    setCurrentService(null);
    setTimeout(() => {
      scrollToSection('services');
    }, 100);
  };

  const getServiceImages = (serviceTitle: string): string[] => {
    const serviceImageMap: Record<string, string[]> = {
      'Wedding Photography': ['/RS_P7491.jpg', '/RS_P8283.jpg', '/RS_P8309.jpg', '/RS_P8492.jpg', '/RS_P8513.jpg', '/RS_P8572.jpg', '/RS_P8610.jpg', '/RS_P82834.jpg'],
      'Pre-Wedding Photography': ['/0I2A6395.jpg', '/0I2A6648.jpg', '/IMG_0283.JPG', '/IMG_2786.JPG', '/IMG_3588.JPG', '/IMG_3589.JPG', '/IMG_3595.JPG'],
      'Candid Photography': ['/RS_P7491.jpg', '/RS_P8572.jpg', '/IMG_3434.JPG', '/IMG_3061.JPG', '/RS_P8309.jpg'],
      'Drone Shoots': ['/IMG_3431.JPG', '/IMG_5908.JPG', '/RS_P8283.jpg'],
      'Half Saree Photography': ['/IMG_2014.JPG', '/IMG_2016.JPG', '/RS_P8492.jpg'],
      'Event Photography': ['/RS_P8513.jpg', '/RS_P8610.jpg', '/PHOTO-2024-05-19-19-47-16.jpg', '/IMG_9113.JPG']
    };
    return serviceImageMap[serviceTitle] || [];
  };

  if (currentService) {
    return (
      <div className="bg-white dark:bg-charcoal-gray text-charcoal-gray dark:text-gray-300 font-lato antialiased selection:bg-golden-beige selection:text-charcoal-gray">
        <Header activeSection="services" scrollToSection={scrollToSection} />
        <ServicePage 
          service={currentService} 
          images={getServiceImages(currentService.title)}
          onBack={handleBackToServices}
        />
        <Footer scrollToSection={scrollToSection} />
      </div>
    );
  }

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