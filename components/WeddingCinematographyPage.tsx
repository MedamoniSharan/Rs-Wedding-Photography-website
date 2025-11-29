import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, XIcon } from './icons';
import SEO from './SEO';
import { YOUTUBE_VIDEOS } from '../constants';
import type { YouTubeVideo } from '../types';

const WeddingCinematographyPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedVideo) {
        setSelectedVideo(null);
      }
    };

    if (selectedVideo) {
      window.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedVideo]);

  const getVideoId = (url: string): string => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : '';
  };

  const getEmbedUrl = (videoId: string, autoplay: boolean = true): string => {
    return `https://www.youtube.com/embed/${videoId}${autoplay ? '?autoplay=1' : ''}`;
  };

  const getThumbnailUrl = (videoId: string): string => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const handleVideoClick = (video: YouTubeVideo) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <SEO 
        title="Wedding Cinematography | Candid & Cinematic Wedding Films"
        description="Experience premium wedding cinematography with cinematic films, candid storytelling, drone shots & pre-wedding videos. Capture your wedding like a movie."
        keywords="wedding cinematography, wedding videography, wedding videos, cinematic wedding films, wedding highlights, wedding trailer, professional wedding videography, drone cinematography, pre-wedding cinematic film"
        image="https://rangasuryaphotography.com/IMG_3061.JPG"
        url="https://rangasuryaphotography.com/wedding-cinematography"
      />
      <div className="min-h-screen bg-white dark:bg-charcoal-gray text-charcoal-gray dark:text-gray-300">
        <div className="container mx-auto px-6 py-20">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center text-golden-beige hover:text-golden-beige/80 mb-8 transition-colors group"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>

          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-poppins font-black text-charcoal-gray dark:text-white mb-4">
              🎥 Wedding Cinematography
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-golden-beige mb-6">
              Capture Your Love Story Like a Film
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
              Weddings deserve to be remembered not just in photographs, but in a beautiful cinematic film that captures every emotion, every smile, and every heartfelt moment. Our Wedding Cinematography Service is designed to create visually stunning, story-driven films that feel like a movie crafted around your personalities, emotions, and wedding journey.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mt-4">
              From candid emotional moments to grand celebrations, we transform your special day into a cinematic experience you'll cherish forever.
            </p>
          </div>

          {/* Why Wedding Cinematography Matters */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-charcoal-gray dark:text-white mb-6 flex items-center">
              <span className="mr-3">⭐</span> Why Wedding Cinematography Matters
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Your wedding day is full of stories, your first look, the laughter during Haldi, emotional blessings from your parents, the grand baraat, and the moment you say "I do." Cinematography helps you relive these memories with:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start">
                <span className="text-golden-beige mr-3">•</span>
                <span className="text-gray-700 dark:text-gray-300">Emotional storytelling</span>
              </div>
              <div className="flex items-start">
                <span className="text-golden-beige mr-3">•</span>
                <span className="text-gray-700 dark:text-gray-300">Slow-motion magical moments</span>
              </div>
              <div className="flex items-start">
                <span className="text-golden-beige mr-3">•</span>
                <span className="text-gray-700 dark:text-gray-300">Background music synced with emotions</span>
              </div>
              <div className="flex items-start">
                <span className="text-golden-beige mr-3">•</span>
                <span className="text-gray-700 dark:text-gray-300">Close-up cinematic expressions</span>
              </div>
              <div className="flex items-start">
                <span className="text-golden-beige mr-3">•</span>
                <span className="text-gray-700 dark:text-gray-300">A professionally crafted highlight film</span>
              </div>
              <div className="flex items-start">
                <span className="text-golden-beige mr-3">•</span>
                <span className="text-gray-700 dark:text-gray-300">A full wedding documentary</span>
              </div>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Every scene, angle, sound, and movement is captured with precision, passion, and artistic vision.
            </p>
          </section>

          {/* Our Wedding Cinematography Style */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-charcoal-gray dark:text-white mb-6 flex items-center">
              <span className="mr-3">🎬</span> Our Wedding Cinematography Style
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              We combine cinematic filmmaking techniques with heartfelt storytelling, ensuring your wedding film feels natural, elegant, and meaningful.
            </p>
            <div className="bg-gradient-to-r from-golden-beige/10 to-transparent dark:from-golden-beige/20 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-charcoal-gray dark:text-white mb-4 flex items-center">
                <span className="mr-2">🎥</span> Our style includes:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-start">
                  <span className="text-golden-beige mr-3">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Candid cinematic storytelling</span>
                </div>
                <div className="flex items-start">
                  <span className="text-golden-beige mr-3">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">High-frame slow-motion shots</span>
                </div>
                <div className="flex items-start">
                  <span className="text-golden-beige mr-3">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Aerial drone visuals</span>
                </div>
                <div className="flex items-start">
                  <span className="text-golden-beige mr-3">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Natural light & mood lighting</span>
                </div>
                <div className="flex items-start">
                  <span className="text-golden-beige mr-3">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Emotional voiceovers</span>
                </div>
                <div className="flex items-start">
                  <span className="text-golden-beige mr-3">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Dialogue-based storytelling</span>
                </div>
                <div className="flex items-start">
                  <span className="text-golden-beige mr-3">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Couple-centric romance shots</span>
                </div>
                <div className="flex items-start">
                  <span className="text-golden-beige mr-3">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Smooth gimbal movements</span>
                </div>
                <div className="flex items-start">
                  <span className="text-golden-beige mr-3">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Multi-camera coverage</span>
                </div>
                <div className="flex items-start">
                  <span className="text-golden-beige mr-3">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Artistic color grading</span>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Your film will feel timeless, grand, and emotionally powerful.
            </p>
          </section>

          {/* Wedding Cinematography Services */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-charcoal-gray dark:text-white mb-6 flex items-center">
              <span className="mr-3">📦</span> Wedding Cinematography Services We Offer
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-golden-beige pl-6 py-4 bg-gray-50 dark:bg-gray-800/50 rounded-r-lg">
                <h3 className="text-xl font-semibold text-charcoal-gray dark:text-white mb-2">
                  1️⃣ Cinematic Wedding Film
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  A highlight film (3–7 minutes) capturing the essence of your big day with music, emotions, and storytelling.
                </p>
              </div>
              <div className="border-l-4 border-golden-beige pl-6 py-4 bg-gray-50 dark:bg-gray-800/50 rounded-r-lg">
                <h3 className="text-xl font-semibold text-charcoal-gray dark:text-white mb-2">
                  2️⃣ Full Wedding Documentary
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  A detailed film (30–90 minutes) covering rituals, vows, traditions, and celebrations in a cinematic format.
                </p>
              </div>
              <div className="border-l-4 border-golden-beige pl-6 py-4 bg-gray-50 dark:bg-gray-800/50 rounded-r-lg">
                <h3 className="text-xl font-semibold text-charcoal-gray dark:text-white mb-2">
                  3️⃣ Pre-Wedding Cinematic Film
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Shot at beautiful locations, featuring your real personalities, expressions, and chemistry.
                </p>
              </div>
              <div className="border-l-4 border-golden-beige pl-6 py-4 bg-gray-50 dark:bg-gray-800/50 rounded-r-lg">
                <h3 className="text-xl font-semibold text-charcoal-gray dark:text-white mb-2">
                  4️⃣ Save-the-Date Teasers
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Short trailers perfect for sharing on Instagram & WhatsApp.
                </p>
              </div>
              <div className="border-l-4 border-golden-beige pl-6 py-4 bg-gray-50 dark:bg-gray-800/50 rounded-r-lg">
                <h3 className="text-xl font-semibold text-charcoal-gray dark:text-white mb-2">
                  5️⃣ Haldi • Mehendi • Sangeet Cinematic Coverage
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Capture the fun, colors, and candid vibes of your wedding events.
                </p>
              </div>
              <div className="border-l-4 border-golden-beige pl-6 py-4 bg-gray-50 dark:bg-gray-800/50 rounded-r-lg">
                <h3 className="text-xl font-semibold text-charcoal-gray dark:text-white mb-2">
                  6️⃣ Drone Cinematography
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Aerial shots of the venue, couple entry, baraat, rituals & group celebrations.
                </p>
              </div>
              <div className="border-l-4 border-golden-beige pl-6 py-4 bg-gray-50 dark:bg-gray-800/50 rounded-r-lg">
                <h3 className="text-xl font-semibold text-charcoal-gray dark:text-white mb-2">
                  7️⃣ Bride & Groom Solo Films
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Dramatic expressive solo shots with aesthetic editing.
                </p>
              </div>
              <div className="border-l-4 border-golden-beige pl-6 py-4 bg-gray-50 dark:bg-gray-800/50 rounded-r-lg">
                <h3 className="text-xl font-semibold text-charcoal-gray dark:text-white mb-2">
                  8️⃣ Same-Day Edit Films
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  A cinematic film edited within hours for same-day screening at the reception.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-charcoal-gray dark:text-white mb-6 flex items-center">
              <span className="mr-3">🔥</span> Why Choose Us for Wedding Cinematography?
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-golden-beige/10 to-transparent dark:from-golden-beige/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-charcoal-gray dark:text-white mb-4 flex items-center">
                  <span className="mr-2">✔</span> Skilled Cinematographers & Creative Directors
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Our team consists of experts who understand lighting, framing, emotion, storytelling, and wedding flow.
                </p>
              </div>
              <div className="bg-gradient-to-r from-golden-beige/10 to-transparent dark:from-golden-beige/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-charcoal-gray dark:text-white mb-4 flex items-center">
                  <span className="mr-2">✔</span> High-End Equipment
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">We use:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="flex items-start">
                    <span className="text-golden-beige mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">4K/6K cinema cameras</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-golden-beige mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Mirrorless cameras</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-golden-beige mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Gimbals & stabilizers</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-golden-beige mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Drones</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-golden-beige mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Multi-camera setups</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-golden-beige mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Professional mics & audio equipment</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-golden-beige/10 to-transparent dark:from-golden-beige/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-charcoal-gray dark:text-white mb-4 flex items-center">
                  <span className="mr-2">✔</span> Story-Based Film Editing
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We don't just combine clips—we craft a storyline that reflects your journey, emotions, and families.
                </p>
              </div>
              <div className="bg-gradient-to-r from-golden-beige/10 to-transparent dark:from-golden-beige/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-charcoal-gray dark:text-white mb-4 flex items-center">
                  <span className="mr-2">✔</span> Customized Film Themes
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">Choose your film style:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-golden-beige/20 text-charcoal-gray dark:text-white rounded-full text-sm">Romantic</span>
                  <span className="px-3 py-1 bg-golden-beige/20 text-charcoal-gray dark:text-white rounded-full text-sm">Elegant</span>
                  <span className="px-3 py-1 bg-golden-beige/20 text-charcoal-gray dark:text-white rounded-full text-sm">Traditional</span>
                  <span className="px-3 py-1 bg-golden-beige/20 text-charcoal-gray dark:text-white rounded-full text-sm">Modern cinematic</span>
                  <span className="px-3 py-1 bg-golden-beige/20 text-charcoal-gray dark:text-white rounded-full text-sm">Fun & energetic</span>
                  <span className="px-3 py-1 bg-golden-beige/20 text-charcoal-gray dark:text-white rounded-full text-sm">Slow-motion emotional</span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-golden-beige/10 to-transparent dark:from-golden-beige/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-charcoal-gray dark:text-white mb-4 flex items-center">
                  <span className="mr-2">✔</span> Color Grading for Luxury Look
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Our editors use professional-grade color grading to give your film a polished, cinematic finish.
                </p>
              </div>
              <div className="bg-gradient-to-r from-golden-beige/10 to-transparent dark:from-golden-beige/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-charcoal-gray dark:text-white mb-4 flex items-center">
                  <span className="mr-2">✔</span> Experience in Telugu, Hindu, Christian & Muslim Weddings
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We understand rituals, timings, emotions, and what to capture at the perfect moment.
                </p>
              </div>
            </div>
          </section>

          {/* Our Cinematography Process */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-charcoal-gray dark:text-white mb-6 flex items-center">
              <span className="mr-3">🎞️</span> Our Cinematography Process
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-golden-beige text-white rounded-full flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-gray dark:text-white mb-2">Pre-Wedding Consultation</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We understand your love story, preferences, theme, and expectations.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-golden-beige text-white rounded-full flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-gray dark:text-white mb-2">Shot Plan & Film Concept</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">Our creative team plans:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <span className="text-gray-700 dark:text-gray-300">• Shot list</span>
                    <span className="text-gray-700 dark:text-gray-300">• Locations</span>
                    <span className="text-gray-700 dark:text-gray-300">• Angles</span>
                    <span className="text-gray-700 dark:text-gray-300">• Timeline</span>
                    <span className="text-gray-700 dark:text-gray-300">• Story flow</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-golden-beige text-white rounded-full flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-gray dark:text-white mb-2">On-Event Cinematic Shoot</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We capture the wedding silently, naturally, and artistically without disturbing rituals.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-golden-beige text-white rounded-full flex items-center justify-center font-bold mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-gray dark:text-white mb-2">Curation & Editing</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We carefully select emotional clips, audio, speeches, and music.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-golden-beige text-white rounded-full flex items-center justify-center font-bold mr-4">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-gray dark:text-white mb-2">Color Grading & Final Touches</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Your film gets polished with a cinematic color tone.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-golden-beige text-white rounded-full flex items-center justify-center font-bold mr-4">
                  6
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-gray dark:text-white mb-2">Final Delivery</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">Delivered in:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-golden-beige/20 text-charcoal-gray dark:text-white rounded-full text-sm">USB drive</span>
                    <span className="px-3 py-1 bg-golden-beige/20 text-charcoal-gray dark:text-white rounded-full text-sm">Cloud link</span>
                    <span className="px-3 py-1 bg-golden-beige/20 text-charcoal-gray dark:text-white rounded-full text-sm">Wedding website (optional)</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-charcoal-gray dark:text-white mb-6 flex items-center">
              <span className="mr-3">💬</span> Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-charcoal-gray dark:text-white mb-2">Q1: What is the difference between wedding videography and cinematography?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Cinematography focuses on storytelling, music, creative shots, and movie-like visuals. It's premium, artistic, and highly emotional.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-charcoal-gray dark:text-white mb-2">Q2: How long is a cinematic wedding film?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Highlight films are 3–7 minutes. Full documentary films can be 30–90 minutes.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-charcoal-gray dark:text-white mb-2">Q3: Do you provide drone coverage?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes. Drone shooting is included in most premium packages.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-charcoal-gray dark:text-white mb-2">Q4: Can we choose our own songs?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Absolutely! You can share your favorite songs or mood references.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-charcoal-gray dark:text-white mb-2">Q5: Do you cover multi-day weddings?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes, we specialize in multi-day weddings with full cinematic coverage.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-charcoal-gray dark:text-white mb-2">Q6: Do you shoot destination weddings?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes! We travel anywhere across India for cinematic weddings.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mb-16 text-center bg-gradient-to-r from-golden-beige/20 to-golden-beige/10 dark:from-golden-beige/30 dark:to-golden-beige/20 p-8 rounded-lg">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-charcoal-gray dark:text-white mb-4">
              ❤️ Make Your Wedding Feel Like a Film
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Your love deserves a movie crafted with passion, creativity, and cinematic beauty.
            </p>
            <p className="text-xl font-semibold text-golden-beige mb-4">
              ✨ Book your Wedding Cinematography package today.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Let's turn your wedding memories into a timeless film.
            </p>
          </section>

          {/* Video Gallery Section */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-charcoal-gray dark:text-white mb-6 text-center">
              Watch Our Latest Wedding Cinematography Work
            </h2>
          </section>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {YOUTUBE_VIDEOS.map((video, index) => {
              const videoId = getVideoId(video.url);
              if (!videoId) return null;
              
              return (
                <div 
                  key={video.id || index} 
                  className="relative group overflow-hidden rounded-lg shadow-lg bg-black hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                  onClick={() => handleVideoClick(video)}
                >
                  <div className="aspect-video relative">
                    <img 
                      src={getThumbnailUrl(videoId)} 
                      alt={video.title || `Video ${index + 1}`}
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
                  {video.title && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm font-medium line-clamp-2">{video.title}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

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
                title={selectedVideo.title || 'Video Player'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            {selectedVideo.title && (
              <div className="mt-4 text-center">
                <h3 className="text-xl font-poppins font-bold text-white">{selectedVideo.title}</h3>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default WeddingCinematographyPage;

