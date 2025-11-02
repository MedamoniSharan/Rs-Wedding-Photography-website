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

  const getServiceContent = (title: string) => {
    const contentMap: Record<string, { description: string; subtitle?: string; whyChooseUs: string[]; extraContent?: string }> = {
      'Wedding Photography': {
        subtitle: 'Capturing the Magic of Your Special Day',
        description: "With over 30 years of experience, Ranga Surya Photography has been a trusted name in wedding photography across Andhra Pradesh, Telangana, and all over India. Our team specializes in transforming every emotion, smile, and ritual into timeless memories that you can cherish forever. Every wedding is unique and so is our approach. From intimate traditional ceremonies to grand destination weddings, we focus on capturing every moment with authenticity and elegance. Our experienced photographers and cinematographers ensure each frame tells your story beautifully. At Ranga Surya Photography, we believe that a wedding photoshoot should go beyond pictures, it should reflect your emotions, culture, and love story. We use advanced equipment and creative techniques to deliver high-quality images and cinematic visuals that stand out for their clarity, color, and detail.",
        whyChooseUs: [
          'Over 30+ years of professional experience in wedding shoots',
          'Expertise across Andhra Pradesh, Telangana, and pan India locations',
          'Blend of traditional and candid wedding photography styles',
          'Use of latest cameras, lighting, and drone technology for premium results',
          'A dedicated team that handles each project with creativity and precision',
          'High-quality output with quick delivery and perfect editing'
        ]
      },
      'Pre-Wedding Photography': {
        subtitle: 'Telling Your Love Story Before the Big Day',
        description: "A pre-wedding photoshoot is the most beautiful way to celebrate your journey before marriage — and Ranga Surya Photography has mastered this art. With over 180+ pre-wedding shoots completed across India, our team is known for creating cinematic love stories at the most stunning locations. From the serene tea gardens of Munnar, Kerala to the romantic landscapes and heritage spots across Andhra Pradesh and Telangana, our photographers ensure every couple's story is captured with creativity, warmth, and emotion. As one of the best photographers in the region, our focus is on natural expressions, artistic framing, and picture-perfect compositions that reflect your unique chemistry. Whether you prefer a traditional vibe, a modern cinematic theme, or a destination backdrop, our team designs every shoot to bring your dream vision to life.",
        whyChooseUs: [
          'Experience of 180+ successful pre-wedding photoshoots across India',
          'Expertise in selecting the best pre-wedding locations that complement your story',
          'A creative team of best wedding photographers and cinematographers',
          'Personalized concepts, themes, and styling for every couple',
          'High-end editing and premium image quality for lasting memories'
        ]
      },
      'Haldi Photography': {
        subtitle: 'Bright Colors, Pure Joy, and Unforgettable Moments',
        description: "The Haldi ceremony is one of the most heartfelt and joyful parts of every Indian wedding filled with laughter, emotion, and tradition. At Ranga Surya Photography, we believe this vibrant celebration deserves to be captured with the same warmth and beauty it brings. Our team of experienced photographers specializes in Haldi photography, turning every splash of color and candid smile into a timeless memory. With over 30 years of experience in wedding photography, we bring creative storytelling, technical precision, and emotional depth to every frame. Whether it's playful Haldi moments among friends or intimate family rituals, our candid photoshoots capture the real emotions that make your day unforgettable. Each photograph reflects joy, love, and togetherness — perfectly blending tradition with artistic flair.",
        whyChooseUs: [
          'Experts in capturing the true emotions and colors of your Haldi ceremony',
          'Recognized for delivering the best wedding photoshoots across Andhra Pradesh, Telangana, and beyond',
          'Experienced in both traditional and candid photography styles',
          'Use of premium equipment and natural lighting for authentic, vibrant shots',
          'A passionate team ensuring every image radiates happiness and cultural beauty'
        ]
      },
      'Event Photography': {
        subtitle: 'Capturing Every Celebration with Perfection',
        description: "Our team specializes in event photography that beautifully captures emotions, energy, and memories that last a lifetime. We cover all kinds of events from corporate events and family functions to baby showers, birthday celebrations, and housewarming ceremonies. No matter the occasion, our focus remains the same — to deliver high-quality, expressive images that reflect the spirit of your celebration. Our photographers blend professionalism with creativity, using modern equipment and unique angles to ensure every detail is perfectly framed. Whether it's formal corporate coverage or fun, candid moments at a family event, we make sure your story is told beautifully.",
        whyChooseUs: [
          'Professional coverage for corporate events, conferences, and award functions',
          'Expertise in capturing housewarming ceremonies with warmth and joy',
          'Specialized baby shower event photography preserving love and anticipation',
          'Lively birthday photography for all age groups',
          'Family & cultural events captured with care and emotion'
        ],
        extraContent: 'Our Event Photography Services Include:\n• Corporate Events – conferences, award functions, product launches, and team gatherings\n• Housewarming Ceremonies – capturing the warmth, joy, and new beginnings\n• Baby Shower Events – preserving the love and anticipation of welcoming new life\n• Birthday photography – candid and lively coverage for all age groups\n• Family & Cultural Events – every tradition and emotion captured with care'
      }
    };
    return contentMap[title] || null;
  };

  const serviceContent = getServiceContent(service.title);
  const displayDescription = serviceContent?.description || service.description;
  const displaySubtitle = serviceContent?.subtitle;
  const whyChooseUsItems = serviceContent?.whyChooseUs;

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
            <h1 className="text-5xl md:text-6xl font-poppins font-black text-charcoal-gray dark:text-white mb-4">
              {service.title}
            </h1>
            {displaySubtitle && (
              <p className="text-2xl md:text-3xl font-poppins text-golden-beige mb-6 italic">
                {displaySubtitle}
              </p>
            )}
            <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 space-y-4">
              <p>{displayDescription}</p>
            </div>
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

        {(whyChooseUsItems || serviceContent?.extraContent) && (
          <div className="mt-20 p-8 bg-gray-50 dark:bg-charcoal-gray/50 rounded-2xl">
            <h3 className="text-2xl font-poppins font-bold text-charcoal-gray dark:text-white mb-6">
              Why Choose Us for {service.title}?
            </h3>
            {whyChooseUsItems && (
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-6">
                {whyChooseUsItems.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-golden-beige mr-3">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
            {serviceContent?.extraContent && (
              <div className="mt-6 text-gray-600 dark:text-gray-300">
                <h4 className="text-xl font-poppins font-bold text-charcoal-gray dark:text-white mb-4">
                  {service.title === 'Event Photography' ? 'Our Event Photography Services Include:' : ''}
                </h4>
                <div className="space-y-2 whitespace-pre-line">
                  {serviceContent.extraContent}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicePage;

