import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from './icons';
import { useTheme } from '../App';
import SEO from './SEO';
import type { Service } from '../types';

interface ServicePageProps {
  service: Service;
  images: string[];
  onBack: () => void;
}

// SEO metadata mapping for each service
const getSEOMetadata = (serviceTitle: string) => {
  const baseUrl = 'https://rangasurya.com';
  const defaultImage = `${baseUrl}/IMG_3061.JPG`;
  
  const seoMap: Record<string, { title: string; description: string; keywords: string; image?: string; url: string }> = {
    'Wedding Photography': {
      title: 'Wedding Photography in Hyderabad | Ranga Surya Photography',
      description: 'Professional wedding photography in Hyderabad by Ranga Surya Photography. 30+ years of experience in wedding photoshoots and candid photography.',
      keywords: 'wedding photography hyderabad, wedding photographers hyderabad, wedding photography, candid wedding photography, wedding photoshoot hyderabad, best wedding photographers',
      image: `${baseUrl}/img_2597.jpg`,
      url: `${baseUrl}/#wedding-photography`
    },
    'Pre-Wedding Photography': {
      title: 'Best Pre-Wedding Photoshoots in Hyderabad | Ranga Surya Photography',
      description: 'Experience cinematic pre-wedding shoots with Ranga Surya Photography. Over 180+ pre-wedding photoshoots across India at stunning locations.',
      keywords: 'pre-wedding photography, pre-wedding photoshoot hyderabad, pre-wedding shoot, couple photoshoot, pre-wedding photography hyderabad, best pre-wedding photographers',
      image: `${baseUrl}/0i2a6343.jpg`,
      url: `${baseUrl}/#pre-wedding-photography`
    },
    'Candid Photography': {
      title: 'Candid Photography in Hyderabad | Natural Wedding Photoshoots',
      description: 'Capture natural emotions with professional candid photography by Ranga Surya Photography. Perfect for weddings, events, and couple shoots.',
      keywords: 'candid photography, candid photography hyderabad, candid wedding photography, natural photography, unposed photography, candid photoshoot',
      image: `${baseUrl}/img_3426.jpg`,
      url: `${baseUrl}/#candid-photography`
    },
    'Half Saree Photography': {
      title: 'Half Saree Ceremony Photography | Ranga Surya Photography',
      description: 'Capture your half saree ceremony beautifully with Ranga Surya Photography. Elegant portraits and candid photography for traditional celebrations.',
      keywords: 'half saree photography, half saree ceremony photography, half saree photoshoot, traditional photography, half saree photography hyderabad',
      image: `${baseUrl}/070199a0-ff7f-4947-9033-4ffaaf648c64.jpg`,
      url: `${baseUrl}/#half-saree-photography`
    },
    'Haldi Photography': {
      title: 'Haldi Photography in Hyderabad | Wedding Photoshoots',
      description: 'Bright, joyful, and colorful Haldi photography by Ranga Surya Photography. Specialists in candid and wedding photoshoots.',
      keywords: 'haldi photography, haldi ceremony photography, haldi photoshoot, haldi photography hyderabad, wedding haldi photography, colorful photography',
      image: `${baseUrl}/IMG_0482.JPG`,
      url: `${baseUrl}/#haldi-photography`
    },
    'Event Photography': {
      title: 'Event Photography in Hyderabad | Ranga Surya Photography',
      description: 'Professional event photography for birthdays, baby showers, housewarming, and corporate events across Andhra & Telangana.',
      keywords: 'event photography, event photography hyderabad, birthday photography, baby shower photography, housewarming photography, corporate event photography, celebrity photography',
      image: `${baseUrl}/events/WhatsApp Image 2025-11-21 at 19.53.04.jpeg`,
      url: `${baseUrl}/#event-photography`
    },
    'Celebrate Photography': {
      title: 'Celebrity Photography in Hyderabad | Ranga Surya Photography',
      description: 'Premium celebrity photography and event coverage by Ranga Surya Photography. Professional, stylish, and cinematic portraits.',
      keywords: 'celebrity photography, celebrity photography hyderabad, celebrity photoshoot, professional photography, high-end photography, celebrity event photography',
      image: `${baseUrl}/RS_P8513.jpg`,
      url: `${baseUrl}/#event-photography`
    }
  };

  return seoMap[serviceTitle] || {
    title: `${serviceTitle} | Ranga Surya Photography`,
    description: `${serviceTitle} services by Ranga Surya Photography. Professional photography services in Hyderabad, Andhra Pradesh, and Telangana.`,
    keywords: `${serviceTitle.toLowerCase()}, photography hyderabad, professional photography`,
    image: defaultImage,
    url: `${baseUrl}/`
  };
};

const ServicePage: React.FC<ServicePageProps> = ({ service, images, onBack }) => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const seoData = getSEOMetadata(service.title);

  const getServiceContent = (title: string) => {
    const contentMap: Record<string, { description: string; subtitle?: string; whyChooseUs: string[]; extraContent?: string }> = {
      'Wedding Photography': {
        subtitle: 'Capturing the Magic of Your Special Day',
        description: "With over 30 years of experience, Ranga Surya Photography has been a trusted name in wedding photography across Andhra Pradesh, Telangana, and all over India. Our team specializes in transforming every emotion, smile, and ritual into timeless memories that you can cherish forever. Every wedding is unique and so is our approach. From intimate traditional ceremonies to grand destination weddings, we focus on capturing every moment with authenticity and elegance. Our experienced photographers and cinematographers ensure each frame tells your story beautifully. At Ranga Surya Photography, we believe that a wedding photoshoot should go beyond pictures, it should reflect your emotions, culture, and love story. We use advanced equipment and creative techniques to deliver high-quality images and cinematic visuals that stand out for their clarity, color, and detail. Looking for professional wedding photography in Hyderabad? Our team brings expertise and creativity to capture your special moments.",
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
        description: "Celebrate your journey together with a magical pre-wedding photoshoot by Ranga Surya Photography. Having completed over 180+ pre-wedding shoots across India — including picturesque locations in Munnar, Kerala, and the best spots in Andhra Pradesh and Telangana — our team knows how to turn your love story into art. We blend creativity with emotion to make every pre-wedding photoshoot truly memorable. Our experienced team of wedding photographers helps you choose the best pre-wedding locations, ensuring every image reflects your chemistry and style. Whether you prefer candid moments or cinematic storytelling, we bring your dream shoot to life with elegance and perfection.",
        whyChooseUs: [
          'Experience of 180+ successful pre-wedding photoshoots across India',
          'Expertise in selecting the best pre-wedding locations that complement your story',
          'A creative team of best wedding photographers and cinematographers',
          'Personalized concepts, themes, and styling for every couple',
          'High-end editing and premium image quality for lasting memories'
        ]
      },
      'Haldi Photography': {
        subtitle: 'Bright Colors. Pure Joy. Beautiful Memories.',
        description: "The Haldi ceremony is one of the happiest and most colorful wedding rituals. Our team at Ranga Surya Photography captures these vibrant moments through stunning Haldi photography, filled with laughter, love, and emotion. As experts in candid photoshoots and wedding photography, we focus on capturing spontaneous joy and the beauty of real emotions. Every splash of turmeric, every smile, and every celebration is documented with artistic precision.",
        whyChooseUs: [
          'Experts in capturing the true emotions and colors of your Haldi ceremony',
          'Recognized for delivering the best wedding photoshoots across Andhra Pradesh, Telangana, and beyond',
          'Experienced in both traditional and candid photography styles',
          'Use of premium equipment and natural lighting for authentic, vibrant shots',
          'A passionate team ensuring every image radiates happiness and cultural beauty'
        ]
      },
      'Event Photography': {
        subtitle: 'Every Celebration, Perfectly Captured',
        description: "At Ranga Surya Photography, we cover all kinds of events with passion and professionalism — from corporate gatherings and birthday parties to baby showers, housewarming ceremonies, and family celebrations. With over three decades of experience, our team ensures every emotion and detail is captured perfectly. Using creative framing, lighting, and candid techniques, we deliver event albums that are filled with life and color. We are known for our candid photoshoots and wedding photoshoots that showcase real emotions and lasting memories. Ranga Surya Photography proudly offers celebrity photography services for public figures, artists, and influencers. Our photographers combine professionalism with creative direction to deliver high-end portraits and event coverage that reflect confidence and elegance. From magazine-style shoots to live event coverage, our team ensures every frame exudes perfection. With decades of expertise in wedding photography and candid shoots, we bring the same artistic touch to the world of glamour and fame.",
        whyChooseUs: [
          'Professional coverage for corporate events, conferences, and award functions',
          'Expertise in capturing housewarming ceremonies with warmth and joy',
          'Specialized baby shower event photography preserving love and anticipation',
          'Lively birthday photography for all age groups',
          'Family & cultural events captured with care and emotion',
          'Celebrity photography services for public figures, artists, and influencers'
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
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        image={seoData.image}
        url={seoData.url}
      />
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
              {service.title === 'Wedding Photography' ? (
                <p>
                  {displayDescription.split('wedding photography in Hyderabad').map((part, index, array) => {
                    if (index === array.length - 1) return part;
                    return (
                      <React.Fragment key={index}>
                        {part}
                        <button
                          onClick={() => navigate('/wedding-photography-in-hyderabad')}
                          className="text-golden-beige hover:text-golden-beige/80 underline font-semibold transition-colors"
                        >
                          wedding photoshoot
                        </button>
                      </React.Fragment>
                    );
                  })}
                </p>
              ) : service.title === 'Pre-Wedding Photography' ? (
                <p>
                  {displayDescription.split('wedding photographers').map((part, index, array) => {
                    if (index === array.length - 1) return part;
                    return (
                      <React.Fragment key={index}>
                        {part}
                        <button
                          onClick={() => navigate('/wedding-photography')}
                          className="text-golden-beige hover:text-golden-beige/80 underline font-semibold transition-colors"
                        >
                          wedding photographers
                        </button>
                      </React.Fragment>
                    );
                  })}
                </p>
              ) : service.title === 'Candid Photography' ? (
                <p>
                  {displayDescription.split('pre-wedding shoots').map((part, index, array) => {
                    if (index === array.length - 1) return part;
                    return (
                      <React.Fragment key={index}>
                        {part}
                        <button
                          onClick={() => navigate('/pre-wedding-photography')}
                          className="text-golden-beige hover:text-golden-beige/80 underline font-semibold transition-colors"
                        >
                          pre-wedding shoots
                        </button>
                      </React.Fragment>
                    );
                  })}
                </p>
              ) : service.title === 'Half Saree Photography' ? (
                <p>
                  {displayDescription.split('candid photoshoots').map((part, index, array) => {
                    if (index === array.length - 1) return part;
                    return (
                      <React.Fragment key={index}>
                        {part}
                        <button
                          onClick={() => navigate('/candid-photography')}
                          className="text-golden-beige hover:text-golden-beige/80 underline font-semibold transition-colors"
                        >
                          candid photoshoots
                        </button>
                      </React.Fragment>
                    );
                  })}
                </p>
              ) : service.title === 'Event Photography' ? (
                <p>
                  {displayDescription.split('wedding photoshoots').map((part, index, array) => {
                    if (index === array.length - 1) return part;
                    return (
                      <React.Fragment key={index}>
                        {part}
                        <button
                          onClick={() => navigate('/wedding-photography-in-vijayawada')}
                          className="text-golden-beige hover:text-golden-beige/80 underline font-semibold transition-colors"
                        >
                          wedding photoshoots
                        </button>
                      </React.Fragment>
                    );
                  })}
                </p>
              ) : service.title === 'Celebrate Photography' ? (
                <p>
                  {displayDescription.split('creative photography').map((part, index, array) => {
                    if (index === array.length - 1) return part;
                    return (
                      <React.Fragment key={index}>
                        {part}
                        <button
                          onClick={() => navigate('/')}
                          className="text-golden-beige hover:text-golden-beige/80 underline font-semibold transition-colors"
                        >
                          creative photography
                        </button>
                      </React.Fragment>
                    );
                  })}
                </p>
              ) : service.title === 'Mehendi Photography' ? (
                <p>
                  {displayDescription.split('candid moments').map((part, index, array) => {
                    if (index === array.length - 1) return part;
                    return (
                      <React.Fragment key={index}>
                        {part}
                        <button
                          onClick={() => navigate('/candid-photography')}
                          className="text-golden-beige hover:text-golden-beige/80 underline font-semibold transition-colors"
                        >
                          candid moments
                        </button>
                      </React.Fragment>
                    );
                  })}
                </p>
              ) : (
                <p>{displayDescription}</p>
              )}
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
                    <span>
                      {service.title === 'Haldi Photography' && item.includes('best wedding photoshoots') ? (
                        <>
                          {item.split('best wedding photoshoots').map((part, index, array) => {
                            if (index === array.length - 1) return part;
                            return (
                              <React.Fragment key={index}>
                                {part}
                                <button
                                  onClick={() => navigate('/wedding-photography')}
                                  className="text-golden-beige hover:text-golden-beige/80 underline font-semibold transition-colors"
                                >
                                  best wedding photoshoots
                                </button>
                              </React.Fragment>
                            );
                          })}
                        </>
                      ) : (
                        item
                      )}
                    </span>
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
    </>
  );
};

export default ServicePage;

