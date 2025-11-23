import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Showcase from './components/Showcase';
import Services from './components/Services';
import ServicePage from './components/ServicePage';
import LocationPage from './components/LocationPage';
import PortfolioCarousel from './components/PortfolioCarousel';
import AboutPage from './components/AboutPage';
import YouTubeVideos from './components/YouTubeVideos';
import WeddingCinematographyPage from './components/WeddingCinematographyPage';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import SEO from './components/SEO';
import { SERVICES_DATA, YOUTUBE_VIDEOS, CLIENT_REVIEWS, FAQ_DATA } from './constants';
import { LOCATIONS_DATA } from './locationData';
import type { Section } from './types';
import type { Service } from './types';
import type { LocationData } from './types';

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
  const navigate = useNavigate();
  const location = useLocation();
  
  const sectionsRef = {
    home: useRef<HTMLDivElement>(null),
    gallery: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
    videos: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

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

  // Structured Data (JSON-LD) for SEO - must be called before any conditional returns
  useEffect(() => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'PhotographyBusiness',
      name: 'Ranga Surya Photography',
      description: 'Ranga Surya Photography offers 30+ years of expertise in wedding photography , candid photoshoots, pre-wedding shoots , Mehendi & events photography across india',
      url: 'https://rangasurya.com',
      logo: 'https://rangasurya.com/white_logo_design12.png',
      image: 'https://rangasurya.com/IMG_3061.JPG',
      telephone: '+917036929247',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        addressCountry: 'IN'
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Hyderabad'
        },
        {
          '@type': 'State',
          name: 'Andhra Pradesh'
        },
        {
          '@type': 'State',
          name: 'Telangana'
        }
      ],
      priceRange: '$$',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '100+'
      }
    };

    // Add structured data script to head
    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

    return () => {
      // Cleanup if needed
    };
  }, []);

  const scrollToSection = (section: Section) => {
    sectionsRef[section].current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBackToServices = () => {
    navigate('/');
    setTimeout(() => {
      scrollToSection('services');
    }, 100);
  };

  const handleBackToHome = () => {
    navigate('/');
    setTimeout(() => {
      scrollToSection('home');
    }, 100);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <SEO 
              title="Ranga Surya Photography |  Wedding, Candid & Pre-Wedding Shoots"
              description="Ranga Surya Photography offers 30+ years of expertise in wedding photography , candid photoshoots, pre-wedding shoots , Mehendi & events photography across india"
              keywords="wedding photography hyderabad, wedding photographers hyderabad, pre-wedding photography, haldi photography, half saree photography, candid photography, event photography, wedding cinematography, best wedding photographers andhra pradesh, wedding photographers telangana, ranga surya photography"
              image="https://rangasurya.com/IMG_3061.JPG"
              url="https://rangasurya.com/"
            />
            <div className="bg-white dark:bg-charcoal-gray text-charcoal-gray dark:text-gray-300 font-lato antialiased selection:bg-golden-beige selection:text-charcoal-gray">
              <Header activeSection={activeSection} scrollToSection={scrollToSection} />
              <main>
                <div id="home" ref={sectionsRef.home}><Hero scrollToSection={scrollToSection} /></div>
                <div id="gallery" ref={sectionsRef.gallery}><Gallery /></div>
                <Showcase />
                <div id="services" ref={sectionsRef.services}><Services /></div>
                <PortfolioCarousel />
                <div id="videos" ref={sectionsRef.videos}><YouTubeVideos videos={YOUTUBE_VIDEOS} /></div>
                <Testimonials testimonials={CLIENT_REVIEWS} />
                <FAQ faqs={FAQ_DATA} />
                <div id="contact" ref={sectionsRef.contact}><Contact /></div>
              </main>
              <Footer scrollToSection={scrollToSection} />
              <FloatingWhatsApp />
            </div>
          </>
        } />
        <Route path="/about" element={
          <div className="bg-white dark:bg-charcoal-gray text-charcoal-gray dark:text-gray-300 font-lato antialiased selection:bg-golden-beige selection:text-charcoal-gray">
            <Header activeSection="about" scrollToSection={scrollToSection} />
            <AboutPage 
              onBack={handleBackToHome}
              scrollToSection={scrollToSection}
            />
            <Footer scrollToSection={scrollToSection} />
            <FloatingWhatsApp />
          </div>
        } />
        <Route path="/wedding-cinematography" element={
          <div className="bg-white dark:bg-charcoal-gray text-charcoal-gray dark:text-gray-300 font-lato antialiased selection:bg-golden-beige selection:text-charcoal-gray">
            <Header activeSection="videos" scrollToSection={scrollToSection} />
            <WeddingCinematographyPage />
            <Footer scrollToSection={scrollToSection} />
            <FloatingWhatsApp />
          </div>
        } />
        <Route path="/:id" element={<DynamicRoute />} />
      </Routes>
    </>
  );
};

const DynamicRoute: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.slice(1); // Remove leading '/'
  
  // Check if it's a service
  const service = SERVICES_DATA.find(s => s.id === id);
  if (service) {
    return <ServiceContent service={service} navigate={navigate} />;
  }
  
  // Check if it's a location
  const locationData = LOCATIONS_DATA.find(l => l.id === id);
  if (locationData) {
    return <LocationContent location={locationData} navigate={navigate} />;
  }
  
  // If neither matches, redirect to home
  navigate('/');
  return null;
};

const ServiceContent: React.FC<{ service: Service; navigate: ReturnType<typeof useNavigate> }> = ({ service, navigate }) => {

  const scrollToSection = (section: Section) => {
    // This is for navigation within the home page
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(section);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleBackToServices = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('services');
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const getServiceImages = (serviceTitle: string): string[] => {
    const serviceImageMap: Record<string, string[]> = {
      'Wedding Photography': [
        '/IMG_1117.JPG', '/img_1760.jpg', '/img_2597.jpg', '/img_2598.jpg', '/img_2604.jpg',
        '/img_2620.jpg', '/img_2623.jpg', '/img_2625.jpg', '/img_2626.jpg', '/img_2953.jpg',
        '/img_2954.jpg', '/IMG_3061.JPG', '/img_3425.jpg', '/img_3427.jpg', '/img_3428.jpg',
        '/img_3429.jpg', '/IMG_3431.JPG', '/img_3434.jpg', '/img_3665.jpg', '/img_4389.jpg',
        '/img_4464.jpg', '/img_5098.jpg', '/img_5901.jpg', '/img_5902.jpg', '/img_5904.jpg',
        '/img_5905.jpg', '/img_5907.jpg', '/IMG_5908.JPG', '/img_6805.jpg', '/img_6806.jpg',
        '/img_7149.jpg', '/img_7152.jpg', '/img_7153.jpg', '/img_7154.jpg', '/img_7155.jpg',
        '/img_7589.jpg', '/img_7636.jpg', '/img_7639.jpg', '/img_7640.jpg', '/img_7862.jpg',
        '/img_8016.jpg', '/img_8017.jpg', '/img_8134.jpg', '/img_8135.jpg', '/img_8136.jpg',
        '/img_8137.jpg', '/9001a35c-4486-4854-9bf4-8e836fbb1c66.jpg', '/img_4464.jpg'
      ],
      'Pre-Wedding Photography': [
        '/0i2a6343.jpg', '/0i2a6368.jpg', '/0i2a6592.jpg', '/0i2a6596.jpg', '/0i2a6876.jpg', '/0i2a7636.jpg', '/0i2a7746 copy.jpg',
        '/4835c39a-fb51-44c1-81dd-2ba1fc94ec64.jpg', '/66ee6e40-33e8-41bb-9c12-d9d7189f69f8.jpg', '/e23ceee0-b275-465d-a249-381120f3f88d.jpg',
        '/img_2776.jpg', '/img_2790.jpg', '/img_2794.jpg', '/img_3048.jpg', '/img_3581.jpg', '/img_3587.jpg', '/img_3590.jpg',
        '/img_3754.jpg', '/img_4097.jpg', '/img_7556.jpg', '/img_7557.jpg'
      ],
      'Candid Photography': [
        '/0j5a9030-.jpg', '/62e61066-8be8-4ba6-924c-15af5dfe0007.jpg', '/64078515-2E5B-46A0-8596-50DD23915610.jpg',
        '/9001a35c-4486-4854-9bf4-8e836fbb1c66.jpg', '/EEED92E7-65B9-49E0-93F1-01B243C79D7B.jpg', '/IMG_1115.JPG',
        '/img_2604.jpg', '/img_3426.jpg', '/img_3432.jpg', '/img_3433.jpg', '/img_3435.jpg', '/img_5905.jpg',
        '/img_5907.jpg',  '/img_6765.jpg', '/img_7862.jpg', '/IMG_9113.JPG',
        '/img_9114.jpg',
      ],
      'Half Saree Photography': [
        '/00b87dac-63f4-4e99-b783-0d8f5669953d.jpg',
        '/070199a0-ff7f-4947-9033-4ffaaf648c64.jpg',
        '/0bf63c81-aef2-4fec-a3bd-055387d7e051.jpg',
        '/1e3792b3-e12b-4a2b-82a6-8433166c4032.jpg',
        '/23021988-06b3-4204-9516-55298763cc86.jpg',
        '/24f8ba36-135d-4f61-bd8d-7eb333160ead.jpg',
        '/271e21fd-6f60-40cd-9416-adefc3ece625.jpg',
        '/2d785e38-7c00-49ed-a4c5-e65025dbe6b6.jpg',
        '/44a9f020-47bd-47a0-9590-6844733b5b0d.jpg',
        '/4996bb15-b248-4410-a1dc-597bae443ba2.jpg',
        '/52ba1afa-eea9-4121-9ec7-5083dc2149f3.jpg',
        '/6f45d9e6-95e3-4629-b702-595732e3b675.jpg',
        '/b69aaacf-9a1a-4c0c-bcf7-59b379ee862e.jpg',
        '/b6c23224-7ef1-4b70-8932-4da46a417e85.jpg',
        '/b910b10f-b0d2-43c7-bf7c-9afa3d15a757.jpg',
        '/c1059d75-4f33-4988-8b72-17c05191aed8.jpg',
        '/c6e27989-a600-4234-9a23-60e61dbc0379.jpg',
        '/f35845bf-633a-46db-ac2a-2fe2cc536a03.jpg',
        '/IMG_5061.JPG',
        '/IMG_7417.JPG',
        '/IMG_7420.JPG',
        '/IMG_7421.JPG',
        '/IMG_7422.JPG',
        '/IMG_8019.JPG'
      ],
      'Haldi Photography': [
        '/IMG_0482.JPG', '/IMG_0485.JPG', '/IMG_0486.JPG', '/IMG_0487.JPG', '/IMG_0488.JPG',
        '/img_0489.jpg', '/img_0491.jpg', '/img_0493.jpg', '/img_1214.jpg', '/img_1215.jpg',
        '/img_2003.jpg', '/img_2008.jpg', '/img_2009.jpg', '/IMG_2014.JPG', '/IMG_2016.JPG',
        '/img_2017.jpg', '/img_2018.jpg', '/img_2021.jpg', '/img_2644.jpg', '/img_2647.jpg',
        '/img_2648.jpg', '/img_2649.jpg', '/img_2947.jpg', '/img_2948.jpg', '/img_2949.jpg',
        '/img_6583.jpg', '/img_6584.jpg', '/img_6769.jpg', '/img_6770.jpg', '/img_6808.jpg',
        '/img_6809.jpg', '/img_7012.jpg', '/img_7013.jpg', '/b14fc2d1-02ec-4f5b-917f-7d079a7ea7f5.jpg',
        '/c80e8b10-90f2-44e4-9487-8c920f9a1359.jpg', '/e859eba3-3a41-401b-8938-e04a859f3977.jpg'
      ],
      'Event Photography': [
        '/events/WhatsApp Image 2025-11-21 at 19.53.04 (1).jpeg',
        '/events/WhatsApp Image 2025-11-21 at 19.53.04 (2).jpeg',
        '/events/WhatsApp Image 2025-11-21 at 19.53.04.jpeg',
        '/events/WhatsApp Image 2025-11-21 at 19.53.05 (1).jpeg',
        '/events/WhatsApp Image 2025-11-21 at 19.53.05 (2).jpeg',
        '/events/WhatsApp Image 2025-11-21 at 19.53.05.jpeg',
        '/events/WhatsApp Image 2025-11-21 at 19.53.06.jpeg',
        '/events/WhatsApp Image 2025-11-21 at 19.53.07 (1).jpeg',
        '/events/WhatsApp Image 2025-11-21 at 19.53.07 (2).jpeg'
      ],
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
      ],
      'Mehendi Photography': [
        '/mehendi/elegant-indian-bride-adorning-herself-with-jewelry.jpg',
        '/mehendi/indian-bride-portrait.jpg',
        '/mehendi/indian-wedding-bangles-mehandi-henna-coloured-hands-with-reflective-ornament.jpg',
        '/mehendi/indian-woman-showing-her-painted-hands-with-henna-decoration.jpg',
        '/mehendi/mehndi-wedding-ornament-hands-drawn-by-henna.jpg'
      ]
    };
    return serviceImageMap[serviceTitle] || [];
  };

  return (
    <div className="bg-white dark:bg-charcoal-gray text-charcoal-gray dark:text-gray-300 font-lato antialiased selection:bg-golden-beige selection:text-charcoal-gray">
      <Header activeSection="services" scrollToSection={scrollToSection} />
      <ServicePage 
        service={service} 
        images={getServiceImages(service.title)}
        onBack={handleBackToServices}
      />
      <Footer scrollToSection={scrollToSection} />
      <FloatingWhatsApp />
    </div>
  );
};

const LocationContent: React.FC<{ location: LocationData; navigate: ReturnType<typeof useNavigate> }> = ({ location: locationData, navigate }) => {

  const scrollToSection = (section: Section) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(section);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleBackToHome = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('home');
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="bg-white dark:bg-charcoal-gray text-charcoal-gray dark:text-gray-300 font-lato antialiased selection:bg-golden-beige selection:text-charcoal-gray">
      <Header activeSection="home" scrollToSection={scrollToSection} />
      <LocationPage 
        location={locationData} 
        onBack={handleBackToHome}
      />
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