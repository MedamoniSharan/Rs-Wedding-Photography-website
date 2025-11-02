import React, { useState } from 'react';
import type { Testimonial } from '../types';
import { XIcon } from './icons';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [selectedVideo, setSelectedVideo] = useState<Testimonial | null>(null);

  const getVideoId = (url: string): string => {
    // Handle YouTube shorts URLs
    if (url.includes('/shorts/')) {
      const match = url.match(/\/shorts\/([a-zA-Z0-9_-]+)/);
      return match ? match[1] : '';
    }
    // Handle regular YouTube URLs
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : '';
  };

  const getEmbedUrl = (videoId: string, autoplay: boolean = true): string => {
    return `https://www.youtube.com/embed/${videoId}${autoplay ? '?autoplay=1' : ''}`;
  };

  const getThumbnailUrl = (videoId: string): string => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const handleVideoClick = (testimonial: Testimonial) => {
    setSelectedVideo(testimonial);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-poppins font-black text-charcoal-gray dark:text-white mb-4">
              Client Reviews
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              See what our clients have to say about their experience with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => {
              const videoId = getVideoId(testimonial.url);
              if (!videoId) return null;
              
              return (
                <div 
                  key={testimonial.id} 
                  className="relative group overflow-hidden rounded-lg shadow-lg bg-black hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                  onClick={() => handleVideoClick(testimonial)}
                >
                  <div className="aspect-video relative">
                    <img 
                      src={getThumbnailUrl(videoId)} 
                      alt={testimonial.title || 'Client Review'}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                        <svg className="w-7 h-7 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  {testimonial.title && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm font-medium">{testimonial.title}</p>
                      {testimonial.clientName && (
                        <p className="text-white/80 text-xs mt-1">— {testimonial.clientName}</p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {selectedVideo && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-4xl hover:text-golden-beige z-20 transition-colors duration-300 hover:scale-125"
            aria-label="Close video"
          >
            <XIcon className="w-8 h-8" />
          </button>
          
          <div 
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src={getEmbedUrl(getVideoId(selectedVideo.url), true)}
                title={selectedVideo.title || 'Client Review'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            {selectedVideo.title && (
              <div className="mt-4 text-center">
                <h3 className="text-xl font-poppins font-bold text-white">{selectedVideo.title}</h3>
                {selectedVideo.clientName && (
                  <p className="text-white/80 mt-2">— {selectedVideo.clientName}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Testimonials;

