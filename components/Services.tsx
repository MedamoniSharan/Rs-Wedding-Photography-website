import React from 'react';
import { SERVICES_DATA } from '../constants';
import type { Service } from '../types';
import { ArrowUpRightIcon } from './icons';

const ServiceCard: React.FC<{ service: Service; className?: string }> = ({ service, className }) => {
  const handleClick = () => {
    window.location.hash = service.id || '';
  };

  return (
    <div className={className}>
      <h3 className="text-2xl font-bold text-charcoal-gray dark:text-white mb-4">{service.title}</h3>
      <div className="mb-4 cursor-pointer" onClick={handleClick}>
        <img src={service.imageSrc} alt={service.title} className="w-full object-cover rounded-2xl shadow-lg aspect-[4/3] transform transition-transform duration-300 hover:scale-105" />
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-6 text-left">{service.description}</p>
      <button 
        onClick={handleClick}
        className="w-14 h-14 border border-gray-300 dark:border-gray-700 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-charcoal-gray dark:hover:bg-gray-700 hover:text-white dark:hover:text-white transition-colors duration-300" 
        aria-label={`Learn more about ${service.title}`}
      >
        <ArrowUpRightIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

const Services: React.FC = () => {

  return (
    <section className="py-16 md:py-24 bg-[#F6F4F1] dark:bg-charcoal-gray/50" id="services-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-black text-charcoal-gray dark:text-white">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 items-start">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard 
              key={service.title} 
              service={service} 
              className={ index % 2 !== 0 ? 'md:mt-16' : '' }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;