import React from 'react';
import { InstagramIcon, FacebookIcon, YouTubeIcon } from './icons';
import type { Section } from '../types';
import { useTheme } from '../App';

interface FooterProps {
  scrollToSection: (section: Section) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  const { theme } = useTheme();
  
  return (
    <footer className="bg-gray-100 dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('home')}
            >
             <img 
               src={theme === 'dark' ? "/logo-white.png" : "/logo-dark.png"} 
               alt="RS Wedding Logo" 
               className="h-12 w-auto" 
             />
          </div>
          
          <div className="flex space-x-6">
            <a href="https://www.instagram.com/ranga_surya_photography" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 dark:text-gray-400 hover:text-golden-beige transition-colors duration-300"><InstagramIcon className="w-6 h-6" /></a>
            <a href="#" aria-label="Facebook" className="text-gray-500 dark:text-gray-400 hover:text-golden-beige transition-colors duration-300"><FacebookIcon className="w-6 h-6" /></a>
            <a href="https://www.youtube.com/@rangasuryacinematography" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-500 dark:text-gray-400 hover:text-golden-beige transition-colors duration-300"><YouTubeIcon className="w-6 h-6" /></a>
          </div>
          
          <p className="text-gray-600 dark:text-gray-500 text-sm">
            © {new Date().getFullYear()} RS Wedding. All Rights Reserved.
          </p>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-500 dark:text-gray-400 text-center">
            <span>Wedding Photographer in Hyderabad</span>
            <span className="hidden md:inline">•</span>
            <span>Wedding Photographer in Vijayawada</span>
            <span className="hidden md:inline">•</span>
            <span>Wedding Photographer in Vizag</span>
            <span className="hidden md:inline">•</span>
            <span>Wedding Photographer in Bhimavaram</span>
            <span className="hidden md:inline">•</span>
            <span>Wedding Photographer in Rajahmundry</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;