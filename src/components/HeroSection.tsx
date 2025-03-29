import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Effect to handle video playback
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Play video when it's ready
      video.addEventListener('loadeddata', () => {
        video.play().catch(err => console.log('Video autoplay failed:', err));
      });

      // Loop the video when it ends
      video.addEventListener('ended', () => {
        video.currentTime = 0;
        video.play().catch(err => console.log('Video replay failed:', err));
      });
    }

    return () => {
      if (video) {
        video.pause();
        video.removeEventListener('loadeddata', () => {});
        video.removeEventListener('ended', () => {});
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Video Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-teal-600/80 z-10"></div>
        
        {/* Water Droplet Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            ref={videoRef}
            className="absolute w-full h-full object-cover md:object-center object-[center_center]"
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
          >
            <source src="/hero-footage.mp4" type="video/mp4" />
            {/* Fallback image in case video fails to load */}
            <img 
              src="https://images.unsplash.com/photo-1559825481-12a05cc00344?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
              alt="Water droplet" 
              className="absolute w-full h-full object-cover"
            />
          </video>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        {/* 3D Text Effect with lighter shadows */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 
                       drop-shadow-[0_5px_5px_rgba(20,184,166,0.3)]
                       [text-shadow:_0_1px_0_rgb(255_255_255_/_40%),_0_4px_8px_rgba(14,116,144,0.4),_0_18px_23px_rgba(14,116,144,0.2)]
                       transform-gpu
                       max-w-4xl mx-auto
                       tracking-tight">
          Pure Water. <span className="text-teal-300">Better Life.</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto 
                      drop-shadow-lg backdrop-blur-[1px] 
                      [text-shadow:_0_1px_5px_rgba(17,94,89,0.4)]">
          Experience the difference with our advanced water refinement systems
        </h2>

        <div className="flex flex-col items-center">
          {!isFormVisible ? (
            <div className="animate-fade-in">
              <button 
                onClick={() => setIsFormVisible(true)}
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-md 
                           transition-all duration-300 transform hover:scale-105 
                           shadow-[0_4px_14px_0_rgba(20,184,166,0.4)] 
                           hover:shadow-[0_6px_20px_0_rgba(20,184,166,0.5)]
                           text-xl"
              >
                Get Your Free Water Test
              </button>
              <p className="text-white text-sm mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2">
                <span className="flex items-center"><span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>No obligation</span>
                <span className="flex items-center"><span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>Takes only 15 minutes</span>
                <span className="flex items-center"><span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>Professional technician</span>
              </p>
            </div>
          ) : (
            <div className="bg-white/95 p-8 rounded-lg shadow-lg max-w-md w-full transition-all duration-300 animate-fade-in">
              <h3 className="text-blue-900 font-bold text-2xl mb-6">Schedule Your Free Test</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded flex items-center justify-center
                            transition-all duration-300 transform hover:scale-[1.01] 
                            shadow-[0_4px_14px_0_rgba(30,58,138,0.3)]"
                >
                  Book My Free Test <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/70 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;