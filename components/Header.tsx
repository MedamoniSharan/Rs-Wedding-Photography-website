import React, { useState } from 'react';
import type { Section } from '../types';
import { useTheme } from '../App';
import { MenuIcon, XIcon, SunIcon, MoonIcon } from './icons';
import { SERVICES_DATA } from '../constants';

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
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleLinkClick = (section: Section) => {
    if (section !== 'services') {
      window.location.hash = '';
    }
    scrollToSection(section);
    setIsMobileMenuOpen(false);
  };

  const handleServiceClick = (serviceId: string) => {
    window.location.hash = serviceId;
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            src={theme === 'dark' ? "/logo-white.png" : "/white_logo_design12.png"} 
            alt="RS Wedding Logo" 
            className="h-12 w-auto" 
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map(link => {
            if (link.section === 'services') {
              return (
                <div key={link.section} className="relative group">
                  <button
                    onClick={() => scrollToSection('services')}
                    className={`px-4 py-2 text-sm font-medium transition-colors duration-300 relative uppercase tracking-widest ${
                      activeSection === 'services' ? 'text-golden-beige' : 'text-gray-700 dark:text-gray-300 hover:text-golden-beige'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-golden-beige transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                        activeSection === 'services' ? 'scale-x-100' : ''
                      }`}
                    ></span>
                  </button>
                  <div className="absolute left-0 mt-2 w-56 bg-white dark:bg-charcoal-gray rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden">
                    {SERVICES_DATA.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => handleServiceClick(service.id || '')}
                        className="w-full px-4 py-3 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-golden-beige hover:text-white dark:hover:text-white transition-colors duration-200 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                      >
                        {service.title}
                      </button>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <NavLink key={link.section} section={link.section} activeSection={activeSection} onClick={handleLinkClick}>
                {link.label}
              </NavLink>
            );
          })}
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
            {navLinks.map(link => {
              if (link.section === 'services') {
                return (
                  <div key={link.section} className="w-full">
                    <button
                      onClick={() => {
                        scrollToSection('services');
                        setIsServicesDropdownOpen(!isServicesDropdownOpen);
                      }}
                      className={`py-3 w-full text-center text-lg uppercase tracking-widest transition-colors duration-200 rounded-md flex items-center justify-center gap-2 ${
                        activeSection === link.section ? 'text-golden-beige bg-black/10 dark:bg-black/30' : 'text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-black/20'
                      }`}
                    >
                      {link.label}
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isServicesDropdownOpen && (
                      <div className="pl-4 mt-2 space-y-1">
                        {SERVICES_DATA.map((service) => (
                          <button
                            key={service.id}
                            onClick={() => handleServiceClick(service.id || '')}
                            className="w-full py-2 text-left text-sm text-gray-600 dark:text-gray-400 hover:text-golden-beige transition-colors duration-200"
                          >
                            {service.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <button
                  key={link.section}
                  onClick={() => handleLinkClick(link.section)}
                  className={`py-3 w-full text-center text-lg uppercase tracking-widest transition-colors duration-200 rounded-md ${
                    activeSection === link.section ? 'text-golden-beige bg-black/10 dark:bg-black/30' : 'text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-black/20'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;