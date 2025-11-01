import React from 'react';
import { ArrowLeftIcon } from './icons';
import { useTheme } from '../App';
import type { Service } from '../types';

interface ServicePageProps {
  service: Service;
  images: string[];
  onBack: () => void;
}

const ServicePage: React.FC<ServicePageProps> = ({ service, images, onBack }) => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-charcoal-gray text-charcoal-gray dark:text-gray-300">
      <div className="container mx-auto px-6 py-20">
        <button
          onClick={onBack}
          className="inline-flex items-center text-golden-beige hover:text-golden-beige/80 mb-8 transition-colors group"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="order-2 lg:order-1">
            <img 
              src={service.imageSrc} 
              alt={service.title} 
              className="w-full h-full min-h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
          
          <div className="flex flex-col justify-center order-1 lg:order-2">
            <h1 className="text-5xl md:text-6xl font-poppins font-black text-charcoal-gray dark:text-white mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => window.open('https://wa.me/917036929247', '_blank')}
                className="bg-golden-beige text-charcoal-gray px-8 py-4 font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 rounded-md"
              >
                Book Now
              </button>
              <button 
                onClick={() => window.open('tel:+917036929247')}
                className="border-2 border-golden-beige text-golden-beige px-8 py-4 font-bold uppercase tracking-widest hover:bg-golden-beige hover:text-charcoal-gray transition-all duration-300 transform hover:scale-105 rounded-md"
              >
                Call Us
              </button>
            </div>
          </div>
        </div>
        
        {images.length > 0 && (
          <div className="mt-20">
            <h2 className="text-4xl font-poppins font-black text-charcoal-gray dark:text-white mb-12 text-center">
              Our Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((img, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-lg group cursor-pointer transform transition-transform duration-300 hover:scale-105">
                  <img 
                    src={img} 
                    alt={`${service.title} - ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading={index < 8 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-20 p-8 bg-gray-50 dark:bg-charcoal-gray/50 rounded-2xl">
          <h3 className="text-2xl font-poppins font-bold text-charcoal-gray dark:text-white mb-4">
            Why Choose Us for {service.title}?
          </h3>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-golden-beige mr-3">✓</span>
              <span>Professional team with years of experience</span>
            </li>
            <li className="flex items-start">
              <span className="text-golden-beige mr-3">✓</span>
              <span>High-quality equipment and latest technology</span>
            </li>
            <li className="flex items-start">
              <span className="text-golden-beige mr-3">✓</span>
              <span>Creative and artistic approach to photography</span>
            </li>
            <li className="flex items-start">
              <span className="text-golden-beige mr-3">✓</span>
              <span>Affordable pricing packages for all budgets</span>
            </li>
            <li className="flex items-start">
              <span className="text-golden-beige mr-3">✓</span>
              <span>Timely delivery of edited photos</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;

