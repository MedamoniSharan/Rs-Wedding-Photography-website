import React from 'react';
import { ArrowLeftIcon } from './icons';
import { TEAM_DATA } from '../constants';
import type { Section } from '../types';

interface AboutPageProps {
  onBack: () => void;
  scrollToSection: (section: Section) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBack, scrollToSection }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-charcoal-gray text-charcoal-gray dark:text-gray-300">
      <div className="container mx-auto px-6 py-20">
        <button
          onClick={onBack}
          className="inline-flex items-center text-golden-beige hover:text-golden-beige/80 mb-8 transition-colors group"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-poppins font-black text-charcoal-gray dark:text-white mb-6">
            About Us
          </h1>
          <p className="text-2xl md:text-3xl font-poppins text-golden-beige mb-8 italic">
            "We don't just take photos; we craft timeless stories."
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
            Founded by Mr. Chinnababu Garu (Ranga Surya) with over 30 years of experience in photography, our studio is a collective of passionate storytellers who live and breathe photography and cinematography. We believe every moment has a story waiting to be told, and our mission is to capture that narrative with artistic vision and technical excellence. Based in Hyderabad and serving across Andhra Pradesh and Telangana, we travel to document your most cherished memories.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-poppins font-black text-charcoal-gray dark:text-white mb-12 text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {TEAM_DATA.map(member => (
              <div key={member.name} className="group text-center">
                <div className="relative overflow-hidden rounded-lg">
                  <img src={member.imageSrc} alt={member.name} className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <h3 className="text-xl font-poppins font-bold text-charcoal-gray dark:text-white mt-4">{member.name}</h3>
                <p className="text-golden-beige mb-2">{member.role}</p>
                {member.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{member.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 p-8 bg-gray-50 dark:bg-charcoal-gray/50 rounded-2xl">
          <h3 className="text-2xl font-poppins font-bold text-charcoal-gray dark:text-white mb-4">
            Why Choose Us?
          </h3>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-golden-beige mr-3">✓</span>
              <span>Over 30 years of professional photography experience</span>
            </li>
            <li className="flex items-start">
              <span className="text-golden-beige mr-3">✓</span>
              <span>Passionate team of creative storytellers</span>
            </li>
            <li className="flex items-start">
              <span className="text-golden-beige mr-3">✓</span>
              <span>Artistic vision combined with technical excellence</span>
            </li>
            <li className="flex items-start">
              <span className="text-golden-beige mr-3">✓</span>
              <span>Serving across Andhra Pradesh and Telangana</span>
            </li>
            <li className="flex items-start">
              <span className="text-golden-beige mr-3">✓</span>
              <span>Travel to document your most cherished memories</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

