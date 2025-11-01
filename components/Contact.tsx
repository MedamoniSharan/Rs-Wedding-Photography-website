import React, { useState } from 'react';
import { MailIcon, PhoneIcon, InstagramIcon, FacebookIcon, YouTubeIcon, LocationPinIcon } from './icons';
import { BRANCHES_DATA } from '../constants';
import type { Branch } from '../types';

const BranchCard: React.FC<{ branch: Branch }> = ({ branch }) => {
  return (
    <div className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-2xl p-6 shadow-lg hover:border-golden-beige/50 hover:scale-105 transition-all duration-300 ease-in-out flex flex-col gap-4">
      <div>
        <h3 className="text-xl font-poppins font-bold text-charcoal-gray dark:text-white">{branch.name}</h3>
        <p className="text-sm text-golden-beige">{branch.specialty}</p>
      </div>
      <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <div className="flex items-start gap-3">
          <LocationPinIcon className="w-5 h-5 mt-0.5 text-golden-beige flex-shrink-0" />
          <div className="flex-1">
            <span>{branch.address}</span>
            {branch.mapLink && (
              <a href={branch.mapLink} target="_blank" rel="noopener noreferrer" className="block text-golden-beige hover:underline mt-1">
                View on Map
              </a>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <PhoneIcon className="w-5 h-5 text-golden-beige flex-shrink-0" />
          <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="hover:underline">{branch.phone}</a>
        </div>
        <div className="flex items-center gap-3">
          <MailIcon className="w-5 h-5 text-golden-beige flex-shrink-0" />
          <a href={`mailto:${branch.email}`} className="hover:underline break-all">{branch.email}</a>
        </div>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', eventType: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formState.name || !formState.email || !formState.phone || !formState.eventType || !formState.message) {
      setStatus('Please fill out all fields before sending.');
      return;
    }

    const messageBody = `
New Inquiry from RS Wedding Website:
-----------------------------------
*Name:* ${formState.name}
*Email:* ${formState.email}
*Phone:* ${formState.phone}
*Event Type:* ${formState.eventType}

*Message:*
${formState.message}
    `.trim().replace(/\n\s*\n/g, '\n'); // Clean up extra lines

    const encodedMessage = encodeURIComponent(messageBody);
    const phoneNumber = "917036929247"; // India country code + number without spaces

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    setStatus('Your inquiry is ready to be sent via WhatsApp!');
    setFormState({ name: '', email: '', phone: '', eventType: '', message: '' });
  };
  
  const inputFieldClasses = "w-full bg-gray-200/50 dark:bg-charcoal-gray/50 border border-gray-400 dark:border-gray-700 text-charcoal-gray dark:text-white p-3 focus:ring-2 focus:ring-golden-beige focus:border-golden-beige transition placeholder:text-gray-600 dark:placeholder:text-gray-500 rounded-md";
  const selectFieldClasses = `${inputFieldClasses} appearance-none bg-no-repeat bg-right pr-10`;


  return (
    <section 
        className="py-16 md:py-24 bg-cover bg-center bg-fixed relative" 
        style={{ backgroundImage: `url('https://picsum.photos/seed/contactbg/1920/1080')` }}
    >
      <div className="absolute inset-0 bg-white/80 dark:bg-charcoal-gray/80 backdrop-blur-sm"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-poppins font-black text-charcoal-gray dark:text-white mb-4">Visit Our Studios Across India 📍</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            With studios in major cities, we're ready to bring our cinematic vision to your special moments, wherever you are.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-24">
          {BRANCHES_DATA.map(branch => (
            <BranchCard key={branch.name} branch={branch} />
          ))}
        </div>

        <div className="text-center mb-12">
            <h3 className="text-3xl font-poppins font-bold text-charcoal-gray dark:text-white">Or Send a Universal Inquiry</h3>
        </div>
        <div className="max-w-4xl mx-auto bg-white/50 dark:bg-black/30 p-8 shadow-2xl rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" id="name" placeholder="Your Name" value={formState.name} onChange={handleChange} required className={inputFieldClasses} />
                <input type="email" id="email" placeholder="Your Email" value={formState.email} onChange={handleChange} required className={inputFieldClasses} />
                <input type="tel" id="phone" placeholder="Your Phone" value={formState.phone} onChange={handleChange} required className={inputFieldClasses} />
                <div className="relative">
                  <select id="eventType" value={formState.eventType} onChange={handleChange} required className={selectFieldClasses}>
                      <option value="" disabled>Select Event Type</option>
                      <option>Wedding</option>
                      <option>Pre-Wedding</option>
                      <option>Model Shoot</option>
                      <option>Corporate Event</option>
                      <option>Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
              <textarea id="message" placeholder="Your Message" rows={5} value={formState.message} onChange={handleChange} required className={`${inputFieldClasses} w-full`}></textarea>
              <button type="submit" className="w-full bg-golden-beige text-charcoal-gray font-bold py-4 text-sm uppercase tracking-widest hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-golden-beige/20 rounded-md">
                Send Inquiry via WhatsApp
              </button>
            </form>
            {status && <p className="mt-4 text-center text-green-500 dark:text-green-400">{status}</p>}
        </div>
        <div className="text-center mt-12">
            <h3 className="text-xl font-poppins font-bold text-charcoal-gray dark:text-white mb-4">Follow Our Journey</h3>
            <div className="flex justify-center space-x-6">
                <a href="https://www.instagram.com/ranga_surya_photography" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-600 dark:text-gray-400 hover:text-golden-beige transition-colors duration-300"><InstagramIcon className="w-8 h-8" /></a>
                <a href="#" aria-label="Facebook" className="text-gray-600 dark:text-gray-400 hover:text-golden-beige transition-colors duration-300"><FacebookIcon className="w-8 h-8" /></a>
                <a href="https://www.youtube.com/@rangasuryacinematography" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-600 dark:text-gray-400 hover:text-golden-beige transition-colors duration-300"><YouTubeIcon className="w-8 h-8" /></a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;