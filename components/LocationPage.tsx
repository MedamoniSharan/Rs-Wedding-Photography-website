import React from 'react';
import { ArrowLeftIcon } from './icons';
import SEO from './SEO';
import { BRANCHES_DATA } from '../constants';
import type { LocationData } from '../types';

interface LocationPageProps {
  location: LocationData;
  onBack: () => void;
}

const LocationPage: React.FC<LocationPageProps> = ({ location, onBack }) => {
  // Find matching branch data based on location ID
  const branch = BRANCHES_DATA.find(b => {
    const branchName = b.name.toLowerCase();
    const locationName = location.name.toLowerCase();
    const locationId = location.id.toLowerCase();
    
    // Match by location ID or name
    if (locationId === 'hyderabad' && branchName.includes('hyderabad')) return true;
    if (locationId === 'vijayawada' && branchName.includes('vijayawada')) return true;
    if (locationId === 'bhimavaram' && branchName.includes('bhimavaram')) return true;
    if (locationId === 'rajahmundry' && branchName.includes('rajahmundry')) return true;
    if (locationId === 'vizag' && branchName.includes('vizag')) return true;
    
    // Fallback to name matching
    return branchName.includes(locationName) || locationName.includes(branchName.split(' ')[0]);
  });

  return (
    <>
      <SEO 
        title={location.metaTitle}
        description={location.metaDescription}
        keywords={location.keywords}
        image={location.image}
        url={location.url}
      />
      <div className="min-h-screen bg-white dark:bg-charcoal-gray text-charcoal-gray dark:text-gray-300">
        <div className="container mx-auto px-6 py-20 max-w-4xl">
          <button
            onClick={onBack}
            className="inline-flex items-center text-golden-beige hover:text-golden-beige/80 mb-8 transition-colors group"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>

          {/* H1 Title */}
          <h1 className="text-4xl md:text-5xl font-poppins font-black text-charcoal-gray dark:text-white mb-8">
            {location.h1}
          </h1>

          {/* Introduction Paragraph */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            {location.intro.map((paragraph, index) => (
              <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Why Choose Us Section */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-charcoal-gray dark:text-white mb-8">
              {location.whyChooseUs.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {location.whyChooseUs.points.map((point, index) => (
                <div key={index} className="bg-gray-50 dark:bg-charcoal-gray/50 p-6 rounded-lg">
                  <h3 className="text-xl font-poppins font-bold text-charcoal-gray dark:text-white mb-3">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-charcoal-gray dark:text-white mb-8">
              {location.services.title}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {location.services.items.map((service, index) => (
                <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                  <span className="text-golden-beige mr-3 mt-1">✓</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            {location.services.closingNote && (
              <p className="text-gray-600 dark:text-gray-400 italic">
                {location.services.closingNote}
              </p>
            )}
          </section>

          {/* Areas Served Section */}
          {location.areasServed && (
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-charcoal-gray dark:text-white mb-8">
                {location.areasServed.title}
              </h2>
              <div className="bg-gray-50 dark:bg-charcoal-gray/50 p-6 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {location.areasServed.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {location.areasServed.areas.map((area, index) => (
                    <span
                      key={index}
                      className="inline-block px-4 py-2 bg-white dark:bg-charcoal-gray text-charcoal-gray dark:text-gray-300 rounded-full text-sm font-medium shadow-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* FAQs Section */}
          {location.faqs && location.faqs.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-charcoal-gray dark:text-white mb-8">
                FAQs
              </h2>
              <div className="space-y-6">
                {location.faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0">
                    <h3 className="text-lg font-poppins font-bold text-charcoal-gray dark:text-white mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Call to Action */}
          <section className="space-y-8">
            {/* Location Box */}
            {branch && (
              <div className="bg-gray-800 dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-poppins font-bold text-white mb-3">
                  {branch.name}
                </h2>
                <p className="text-golden-beige mb-6 text-sm md:text-base">
                  {branch.specialty}
                </p>
                
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-golden-beige mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div className="flex-1">
                      <p className="text-white text-sm md:text-base">{branch.address}</p>
                      {branch.mapLink && (
                        <a
                          href={branch.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-golden-beige hover:text-golden-beige/80 text-sm mt-1 inline-block transition-colors"
                        >
                          View on Map
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-golden-beige mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <a
                      href={`tel:${branch.phone.replace(/\s/g, '')}`}
                      className="text-white hover:text-golden-beige text-sm md:text-base transition-colors"
                    >
                      {branch.phone}
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-golden-beige mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a
                      href={`mailto:${branch.email}`}
                      className="text-white hover:text-golden-beige text-sm md:text-base transition-colors"
                    >
                      {branch.email}
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-golden-beige/10 to-transparent border border-golden-beige/20 rounded-2xl p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-poppins font-bold text-charcoal-gray dark:text-white mb-4">
                {location.cta.title}
              </h2>
              {location.cta.subtitle && (
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  {location.cta.subtitle}
                </p>
              )}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </section>
        </div>
      </div>
    </>
  );
};

export default LocationPage;

