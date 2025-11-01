import React, { useState, useEffect, useCallback } from 'react';
import { CAROUSEL_IMAGES } from '../constants';

const PortfolioCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 4000);
        return () => clearInterval(intervalId);
    }, [nextSlide]);

    return (
        <section className="py-16 md:py-24 bg-black relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-charcoal-gray to-black/50"></div>
             <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-gradient-radial from-white/5 to-transparent rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-50 blur-3xl" aria-hidden="true"></div>
             <div className="absolute -bottom-1/2 -right-1/4 w-3/4 h-3/4 bg-gradient-radial from-golden-beige/5 to-transparent rounded-full transform translate-x-1/2 translate-y-1/2 opacity-30 blur-3xl" aria-hidden="true"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
                        Portraits
                    </h2>
                    <p className="text-lg text-gray-300">
                        Each image tells a beautifully unique story.
                    </p>
                </div>

                <div className="relative h-[55vh] flex items-center justify-center">
                    <div className="relative w-full max-w-5xl h-full" style={{ perspective: '1200px' }}>
                        {CAROUSEL_IMAGES.map((image, index) => {
                            const offset = index - currentIndex;
                            const total = CAROUSEL_IMAGES.length;

                            let displayOffset = offset;
                            // Handle wrap-around for a seamless loop
                            if (Math.abs(offset) > total / 2) {
                                displayOffset = offset > 0 ? offset - total : offset + total;
                            }

                            const isCenter = displayOffset === 0;
                            
                            const transform = `
                                translateX(${displayOffset * 40}%)
                                scale(${isCenter ? 1 : 0.8})
                                rotateY(${displayOffset * -15}deg)
                            `;
                            
                            const opacity = isCenter ? 1 : 0.4;
                            const zIndex = total - Math.abs(displayOffset);
                            const filter = isCenter ? 'blur(0px)' : 'blur(4px)';

                            return (
                                <div
                                    key={image.id}
                                    className="absolute top-0 left-0 w-full h-full flex justify-center items-center transition-all duration-700 ease-out"
                                    style={{
                                        transform,
                                        opacity,
                                        zIndex,
                                        filter,
                                        transformOrigin: 'center center',
                                    }}
                                    aria-hidden={!isCenter}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="object-contain h-full w-auto max-w-[90%] md:max-w-[45%] rounded-2xl shadow-2xl shadow-black/60"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioCarousel;