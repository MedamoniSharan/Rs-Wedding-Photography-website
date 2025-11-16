import React from 'react';
import { InstagramIcon, FacebookIcon, YouTubeIcon, WhatsAppIcon } from './icons';
import type { Section } from '../types';
import { useTheme } from '../App';
import { SERVICES_DATA } from '../constants';

interface FooterProps {
  scrollToSection: (section: Section) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  const { theme } = useTheme();

  const handleServiceClick = (serviceId: string) => {
    window.location.hash = serviceId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-gray-100 dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div 
              className="flex items-center cursor-pointer mb-4"
              onClick={() => scrollToSection('home')}
            >
              <img 
                src={theme === 'dark' ? "/logo-white.png" : "/white_logo_design12.png"} 
                alt="RS Wedding Logo" 
                className="h-18 md:h-18 lg:h-25 w-auto" 
              />
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.instagram.com/ranga_surya_photography" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 dark:text-gray-400 hover:text-golden-beige transition-colors duration-300"><InstagramIcon className="w-5 h-5" /></a>
              <a href="https://wa.me/917036929247" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-500 dark:text-gray-400 hover:text-golden-beige transition-colors duration-300"><WhatsAppIcon className="w-5 h-5" /></a>
              <a href="#" aria-label="Facebook" className="text-gray-500 dark:text-gray-400 hover:text-golden-beige transition-colors duration-300"><FacebookIcon className="w-5 h-5" /></a>
              <a href="https://www.youtube.com/@rangasuryacinematography" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-500 dark:text-gray-400 hover:text-golden-beige transition-colors duration-300"><YouTubeIcon className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-charcoal-gray dark:text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => handleServiceClick(service.id || '')}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-golden-beige transition-colors duration-200 text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-charcoal-gray dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-golden-beige transition-colors duration-200 text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-golden-beige transition-colors duration-200 text-left"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-golden-beige transition-colors duration-200 text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    window.location.hash = 'about';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-golden-beige transition-colors duration-200 text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-golden-beige transition-colors duration-200 text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-charcoal-gray dark:text-white mb-4">Locations</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    window.location.hash = 'location-hyderabad';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-golden-beige transition-colors duration-200 text-left"
                >
                  Wedding Photographer in Hyderabad
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    window.location.hash = 'location-vijayawada';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-golden-beige transition-colors duration-200 text-left"
                >
                  Wedding Photographer in Vijayawada
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    window.location.hash = 'location-bhimavaram';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-golden-beige transition-colors duration-200 text-left"
                >
                  Wedding Photographer in Bhimavaram
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    window.location.hash = 'location-rajahmundry';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-golden-beige transition-colors duration-200 text-left"
                >
                  Wedding Photographer in Rajahmundry
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="text-center text-gray-600 dark:text-gray-500 text-sm space-y-1">
            <p>© {new Date().getFullYear()} RS Wedding. All Rights Reserved.</p>
            <p className="flex items-center justify-center gap-2">
              <span className="sr-only">Designed by Optiwebrix</span>
              <span className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">Designed with</span>
              <span className="text-golden-beige animate-pulse">♥</span>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full ring-1 ring-golden-beige/40 bg-gradient-to-r from-golden-beige/10 to-transparent hover:from-golden-beige/20 transition-all duration-300"
                aria-label="Optiwebrix Team"
              >
                <img
                  src="/optiwebrix_logo.jpg"
                  alt="Optiwebrix logo"
                  className="h-5 w-auto md:h-6 rounded-sm"
                  loading="lazy"
                />
                <span className="font-extrabold bg-gradient-to-r from-amber-300 via-yellow-400 to-rose-300 bg-clip-text text-transparent underline underline-offset-4 decoration-golden-beige/70">
                  Optiwebrix
                </span>
                <span className="text-gray-700 dark:text-gray-300 font-semibold">Team</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;