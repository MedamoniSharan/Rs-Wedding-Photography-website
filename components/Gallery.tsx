import React, { useState, useEffect, useRef } from 'react';
import { GALLERY_PHOTOS } from '../constants';
import type { Photo } from '../types';

type Category = Photo['category'];

const categories: Category[] = ['Wedding', 'Pre-Wedding', 'Haldi', 'Half Saree', 'Celebrate', 'Candid'];

// Component for individual gallery items with scroll animation
const GalleryItem: React.FC<{ photo: Photo; onClick: () => void; }> = ({ photo, onClick }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current!);
        }
      },
      {
        rootMargin: '0px 0px -100px 0px', // Trigger a bit before it's fully in view
        threshold: 0.1
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div 
      ref={ref}
      className={`group relative overflow-hidden cursor-pointer transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
      onClick={onClick}
    >
      <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover aspect-square md:aspect-[3/4] transform transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="font-bold font-poppins">{photo.shootType}</h3>
          <p className="text-sm text-gray-300">{photo.location}</p>
        </div>
      </div>
    </div>
  );
};


const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Wedding');
  const [lightboxImage, setLightboxImage] = useState<Photo | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  // State for zoom and pan
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    // Reset position when zoom is reset to 1
    if (zoomLevel <= 1) {
      setPosition({ x: 0, y: 0 });
    }
  }, [zoomLevel]);

  const handleOpenLightbox = (photo: Photo) => {
    setLightboxImage(photo);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleCloseLightbox = () => {
    setIsClosing(true);
    setTimeout(() => {
      setLightboxImage(null);
      setIsClosing(false);
    }, 300);
  };

  // Zoom handlers
  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(prev => Math.max(prev - 0.25, 1));
  };
  
  // Pan handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLImageElement>) => {
    if (zoomLevel <= 1) return;
    e.preventDefault();
    setPanStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    setIsPanning(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!isPanning || zoomLevel <= 1) return;
    e.preventDefault();
    setPosition({
      x: e.clientX - panStart.x,
      y: e.clientY - panStart.y,
    });
  };

  const handleMouseUpOrLeave = () => {
    setIsPanning(false);
  };

  const filteredPhotos = GALLERY_PHOTOS.filter(photo => photo.category === activeCategory);

  // Icons for zoom controls
  const ZoomInIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3h-6" />
    </svg>
  );
  
  const ZoomOutIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
    </svg>
  );

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-poppins font-black text-charcoal-gray dark:text-white mb-4">Gallery</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A curated collection of our finest work, categorized for your viewing pleasure.
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-3 md:gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-full border-2 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-golden-beige/50 ${
                activeCategory === category 
                  ? 'bg-golden-beige text-charcoal-gray border-golden-beige shadow-md shadow-golden-beige/20' 
                  : 'bg-transparent text-gray-500 dark:text-gray-400 border-gray-300 dark:border-gray-700 hover:border-golden-beige hover:text-golden-beige'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPhotos.map(photo => (
            <GalleryItem key={photo.id} photo={photo} onClick={() => handleOpenLightbox(photo)} />
          ))}
        </div>
      </div>

      {lightboxImage && (
        <div 
          className={`fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 transition-opacity duration-300 ease-in-out ${isClosing ? 'opacity-0' : 'opacity-100'}`}
          onClick={handleCloseLightbox}
        >
           <button 
            onClick={handleCloseLightbox} 
            className="absolute top-4 right-4 text-white text-4xl hover:text-golden-beige z-20 transition-transform duration-300 hover:scale-125"
            aria-label="Close image viewer"
          >
            &times;
          </button>
          
          <div className="absolute bottom-5 z-20 flex items-center gap-2 bg-black/50 backdrop-blur-sm p-2 rounded-full shadow-lg">
             <button onClick={handleZoomOut} className="p-2 text-white hover:text-golden-beige disabled:text-gray-600 disabled:cursor-not-allowed transition-colors" disabled={zoomLevel <= 1} aria-label="Zoom out">
              <ZoomOutIcon className="w-6 h-6" />
            </button>
             <span className="text-white font-mono text-sm w-12 text-center select-none">{Math.round(zoomLevel * 100)}%</span>
            <button onClick={handleZoomIn} className="p-2 text-white hover:text-golden-beige disabled:text-gray-600 disabled:cursor-not-allowed transition-colors" disabled={zoomLevel >= 3} aria-label="Zoom in">
              <ZoomInIcon className="w-6 h-6" />
            </button>
          </div>
          
          <div 
            className="w-full h-full flex items-center justify-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={lightboxImage.src.replace(/(\d+)\/(\d+)/, '1200/800')} 
              alt={lightboxImage.alt}
              className={`max-w-full max-h-full shadow-2xl transition-transform duration-300 ease-out ${isClosing ? 'scale-90 opacity-0' : 'scale-100 opacity-100'} ${zoomLevel > 1 ? 'cursor-grab' : ''} ${isPanning ? 'cursor-grabbing' : ''}`}
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${zoomLevel})`,
                transition: isPanning ? 'none' : 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
              draggable={false}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;