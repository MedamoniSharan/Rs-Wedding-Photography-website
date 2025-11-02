import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Showcase from './components/Showcase';
import Services from './components/Services';
import ServicePage from './components/ServicePage';
import PortfolioCarousel from './components/PortfolioCarousel';
import AboutPage from './components/AboutPage';
import YouTubeVideos from './components/YouTubeVideos';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { SERVICES_DATA, YOUTUBE_VIDEOS } from './constants';
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
  const [showAboutPage, setShowAboutPage] = useState<boolean>(false);
  
  const sectionsRef = {
    home: useRef<HTMLDivElement>(null),
    gallery: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
    videos: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        if (hash === 'about') {
          setShowAboutPage(true);
          setCurrentService(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const service = SERVICES_DATA.find(s => s.id === hash);
          if (service) {
            setCurrentService(service);
            setShowAboutPage(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            setCurrentService(null);
            setShowAboutPage(false);
          }
        }
      } else {
        setCurrentService(null);
        setShowAboutPage(false);
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

  const handleBackToHome = () => {
    window.location.hash = '';
    setShowAboutPage(false);
    setTimeout(() => {
      scrollToSection('home');
    }, 100);
  };

  const getServiceImages = (serviceTitle: string): string[] => {
    const serviceImageMap: Record<string, string[]> = {
      'Wedding Photography': ['/RS_P7491.jpg', '/RS_P8283.jpg', '/RS_P8309.jpg', '/RS_P8492.jpg', '/RS_P8513.jpg', '/RS_P8572.jpg', '/RS_P8610.jpg', '/RS_P82834.jpg'],
      'Pre-Wedding Photography': ['/0I2A6395.jpg', '/0I2A6648.jpg', '/IMG_0283.JPG', '/IMG_2786.JPG', '/IMG_3588.JPG', '/IMG_3589.JPG', '/IMG_3595.JPG'],
      'Candid Photography': ['/RS_P7491.jpg', '/RS_P8572.jpg', '/IMG_3434.JPG', '/IMG_3061.JPG', '/RS_P8309.jpg'],
      'Half Saree Photography': ['/IMG_2014.JPG', '/IMG_2016.JPG', '/RS_P8492.jpg'],
      'Haldi Photography': [
        '/259fd242-7274-4663-9da9-8b062a000ec9.jpg',
        '/52ff6597-98a2-4db0-b294-f5b5d9f8ebb2.jpg',
        '/62e61066-8be8-4ba6-924c-15af5dfe0007.jpg',
        '/660ed3ea-6d8c-4221-995a-ee626ecd6455.jpg',
        '/9de2bf60-56dd-4552-9ed3-34462dab9b30.jpg',
        '/IMG_0482.JPG',
        '/IMG_0485.JPG',
        '/IMG_0486.JPG',
        '/IMG_0487.JPG',
        '/IMG_0488.JPG'
      ],
      'Event Photography': ['/RS_P8513.jpg', '/RS_P8610.jpg', '/PHOTO-2024-05-19-19-47-16.jpg', '/IMG_9113.JPG'],
      'Celebrate Photography': [
        '/02377817-F29F-4B1B-B0E6-DFEC4D44DF9B.jpg',
        '/0BEB5C88-A889-49C8-8C1F-7BD9F9562682.jpg',
        '/482A1607-5AC2-415A-9F70-148ECAA35E3C.jpg',
        '/4C5C35AA-9037-4E77-A80C-FF53C8ACFE71.jpg',
        '/55888B26-40C0-4CA8-B803-42263D0CE76B.jpg',
        '/64078515-2E5B-46A0-8596-50DD23915610.jpg',
        '/65AA0718-7005-4A8D-BDAA-B9888ABAB6A1.jpg',
        '/6EC1F929-8ACA-4F2B-8F54-E994DE7D1378.jpg',
        '/7476BB13-83D5-4373-85DB-C89CF8F55BBD.jpg',
        '/97D76C00-49C0-4F21-8177-C49BD16C9481.jpg',
        '/A563F658-5DDD-4428-ADC0-43AB2CBF6E1B.jpg',
        '/C80ADDD6-089C-43F5-9E6F-3146CA763534.jpg',
        '/EEED92E7-65B9-49E0-93F1-01B243C79D7B.jpg',
        '/F783AF91-B00D-4DF2-B28C-AEFE32E17B77.jpg',
        '/IMG_1110.JPG',
        '/IMG_1111.JPG',
        '/IMG_1112.JPG',
        '/IMG_1113.JPG',
        '/IMG_1114.JPG',
        '/IMG_1115.JPG',
        '/IMG_1116.JPG',
        '/IMG_1117.JPG',
        '/IMG_4854.JPG',
        '/IMG_9878.JPG',
        '/IMG_9879.JPG',
        '/IMG_9880.JPG',
        '/IMG_9881.JPG',
        '/IMG_9882.JPG'
      ]
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
        <FloatingWhatsApp />
      </div>
    );
  }

  if (showAboutPage) {
    return (
      <div className="bg-white dark:bg-charcoal-gray text-charcoal-gray dark:text-gray-300 font-lato antialiased selection:bg-golden-beige selection:text-charcoal-gray">
        <Header activeSection="about" scrollToSection={scrollToSection} />
        <AboutPage 
          onBack={handleBackToHome}
          scrollToSection={scrollToSection}
        />
        <Footer scrollToSection={scrollToSection} />
        <FloatingWhatsApp />
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
        <div id="videos" ref={sectionsRef.videos}><YouTubeVideos videos={YOUTUBE_VIDEOS} /></div>
        <div id="contact" ref={sectionsRef.contact}><Contact /></div>
      </main>
      <Footer scrollToSection={scrollToSection} />
      <FloatingWhatsApp />
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