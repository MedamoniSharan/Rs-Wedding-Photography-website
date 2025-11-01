import React from 'react';
import type { YouTubeVideo } from '../types';

interface YouTubeVideosProps {
  videos: YouTubeVideo[];
}

const YouTubeVideos: React.FC<YouTubeVideosProps> = ({ videos }) => {
  const getVideoId = (url: string): string => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : '';
  };

  const getEmbedUrl = (videoId: string): string => {
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-charcoal-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-poppins font-black text-charcoal-gray dark:text-white mb-4">
            Our Videos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Watch our latest wedding photography and cinematography work
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => {
            const videoId = getVideoId(video.url);
            if (!videoId) return null;
            
            return (
              <div 
                key={video.id || index} 
                className="relative group overflow-hidden rounded-lg shadow-lg bg-black hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video">
                  <iframe
                    src={getEmbedUrl(videoId)}
                    title={video.title || `Video ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideos;

