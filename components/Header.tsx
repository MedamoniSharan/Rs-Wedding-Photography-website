import React, { useState } from 'react';
import type { Section } from '../types';
import { useTheme } from '../App';
import { MenuIcon, XIcon, SunIcon, MoonIcon } from './icons';

interface HeaderProps {
  activeSection: Section;
  scrollToSection: (section: Section) => void;
}

const NavLink: React.FC<{
  section: Section;
  activeSection: Section;
  onClick: (section: Section) => void;
  children: React.ReactNode;
}> = ({ section, activeSection, onClick, children }) => (
  <button
    onClick={() => onClick(section)}
    className={`px-4 py-2 text-sm font-medium transition-colors duration-300 relative group uppercase tracking-widest ${
      activeSection === section ? 'text-golden-beige' : 'text-gray-700 dark:text-gray-300 hover:text-golden-beige'
    }`}
  >
    {children}
    <span
      className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-golden-beige transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
        activeSection === section ? 'scale-x-100' : ''
      }`}
    ></span>
  </button>
);

const Header: React.FC<HeaderProps> = ({ activeSection, scrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleLinkClick = (section: Section) => {
    scrollToSection(section);
    setIsMobileMenuOpen(false);
  };

  const navLinks: { section: Section; label: string }[] = [
    { section: 'home', label: 'Home' },
    { section: 'gallery', label: 'Gallery' },
    { section: 'services', label: 'Services' },
    { section: 'about', label: 'About' },
    { section: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-4 left-4 right-4 z-50 bg-white/80 dark:bg-charcoal-gray/80 backdrop-blur-md shadow-lg shadow-black/5 dark:shadow-black/30 max-w-7xl mx-auto transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'rounded-2xl' : 'rounded-full'}`}>
      <div className="px-4 py-2 flex justify-between items-center">
        <div 
          className="flex items-center cursor-pointer"
          onClick={() => handleLinkClick('home')}
        >
          <img 
            src={theme === 'dark' ? "/logo-white.png" : "/logo-dark.png"} 
            alt="RS Wedding Logo" 
            className="h-12 w-auto" 
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map(link => (
            <NavLink key={link.section} section={link.section} activeSection={activeSection} onClick={handleLinkClick}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
           <button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-golden-beige dark:hover:text-golden-beige transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
          </button>
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 dark:text-gray-300 hover:text-golden-beige">
              {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center pb-4 px-6">
            {navLinks.map(link => (
               <button
                key={link.section}
                onClick={() => handleLinkClick(link.section)}
                className={`py-3 w-full text-center text-lg uppercase tracking-widest transition-colors duration-200 rounded-md ${
                  activeSection === link.section ? 'text-golden-beige bg-black/10 dark:bg-black/30' : 'text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-black/20'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;