import React, { useRef, useEffect } from 'react';
import { Heart, Home, Droplets, DollarSign, ShieldCheck, AlertTriangle } from 'lucide-react';

const FeatureSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Play video when it's ready
      const playVideo = () => {
        video.play().catch(err => {
          console.log('Video autoplay failed:', err);
          
          // On mobile, especially iOS, we need user interaction before playing
          // We'll set up the video to be ready to play but not actually play it
          video.load();
          video.muted = true;
          video.playsInline = true;
          video.setAttribute('playsinline', '');
          video.setAttribute('webkit-playsinline', '');
        });
      };
      
      // Use canplaythrough instead of loadeddata for better mobile compatibility
      video.addEventListener('canplaythrough', playVideo, { once: true });

      // Loop the video when it ends
      video.addEventListener('ended', () => {
        video.currentTime = 0;
        video.play().catch(err => console.log('Video replay failed:', err));
      });
    }

    return () => {
      if (video) {
        video.pause();
        video.removeEventListener('canplaythrough', () => {});
        video.removeEventListener('ended', () => {});
      }
    };
  }, []);

  return (
    <section id="features" className="py-24 bg-blue-950 text-white relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Video Overlay - increased opacity to make video less prominent */}
        <div className="absolute inset-0 bg-blue-950/90 z-10"></div>
        
        {/* Water Droplet Video - Using image fallback for mobile */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559825481-12a05cc00344?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center md:hidden"></div>
          <video
            ref={videoRef}
            className="absolute w-full h-full object-cover opacity-40 hidden md:block"
            muted
            playsInline
            preload="metadata"
            disablePictureInPicture
            webkit-playsinline="true"
          >
            <source src="/more-water-drops.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4
                         drop-shadow-[0_2px_2px_rgba(14,116,144,0.08)]
                         [text-shadow:_0_1px_0_rgb(0_0_0_/_70%),_0_2px_3px_rgba(14,116,144,0.15)]">
            The Las Vegas Water Challenge
          </h2>
          <p className="text-gray-300 text-lg">
            Las Vegas water ranks among the hardest in the nation, causing numerous problems for homeowners. 
            Our advanced filtration systems solve these issues at the source.
          </p>
        </div>
        
        {/* Water Quality Stats Bar */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-blue-900/50 rounded-lg p-6 shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg backdrop-filter backdrop-blur-sm">
              <div className="text-3xl font-bold text-teal-400">16.7+</div>
              <p className="text-blue-100">GPG Hardness Level</p>
              <p className="text-sm text-blue-300">"Very hard" water starts at 10.5 gpg</p>
              <p className="text-xs text-blue-400 mt-2">Source: Las Vegas Valley Water District</p>
            </div>
            <div className="bg-blue-900/50 rounded-lg p-6 shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg backdrop-filter backdrop-blur-sm">
              <div className="text-3xl font-bold text-teal-400">84%</div>
              <p className="text-blue-100">Of LV Homes Affected</p>
              <p className="text-sm text-blue-300">Show visible scale buildup</p>
              <p className="text-xs text-blue-400 mt-2">Source: Southern Nevada Water Authority</p>
            </div>
            <div className="bg-blue-900/50 rounded-lg p-6 shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg backdrop-filter backdrop-blur-sm">
              <div className="text-3xl font-bold text-teal-400">$724</div>
              <p className="text-blue-100">Annual Extra Costs</p>
              <p className="text-sm text-blue-300">Per household due to hard water</p>
              <p className="text-xs text-blue-400 mt-2">Based on EPA & WQA data</p>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4
                         drop-shadow-[0_2px_2px_rgba(14,116,144,0.08)]
                         [text-shadow:_0_1px_0_rgb(0_0_0_/_70%),_0_2px_3px_rgba(14,116,144,0.15)]">
            Pure Water Benefits
          </h2>
          <p className="text-gray-300 text-lg">
            Our water refinement systems transform your home with cleaner, healthier water that benefits every aspect of your life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Health Card */}
          <div className="bg-blue-900/40 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl backdrop-filter backdrop-blur-sm relative">
            <div className="h-1 bg-blue-500"></div>
            <div className="p-8">
              <div className="w-16 h-16 bg-blue-700/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-blue-200" />
              </div>
              <h3 className="text-xl font-bold text-blue-200 mb-4 text-center
                            drop-shadow-[0_1px_1px_rgba(14,116,144,0.05)]">
                For Your Health
              </h3>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2 mt-1">•</span>
                  <span>Better-tasting drinking water with reduced chlorine taste and odor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2 mt-1">•</span>
                  <span>Healthier skin and hair with less irritation and dryness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2 mt-1">•</span>
                  <span>Reduced soap residue that can clog pores</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-blue-800">
                <p className="text-sm text-blue-200 font-medium">
                  <span className="font-bold">70%</span> of users report improved skin/hair conditions within 2 weeks
                  <span className="block text-xs text-blue-300 mt-1">Source: Dermatology Research Practice Journal</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Home Card */}
          <div className="bg-blue-900/40 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl backdrop-filter backdrop-blur-sm relative">
            <div className="h-1 bg-teal-500"></div>
            <div className="p-8">
              <div className="w-16 h-16 bg-blue-700/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="w-8 h-8 text-blue-200" />
              </div>
              <h3 className="text-xl font-bold text-blue-200 mb-4 text-center
                            drop-shadow-[0_1px_1px_rgba(15,118,110,0.05)]">
                For Your Home
              </h3>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2 mt-1">•</span>
                  <span>Extended appliance lifespan for water heaters, dishwashers, and washing machines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2 mt-1">•</span>
                  <span>Lower energy bills through improved heating efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2 mt-1">•</span>
                  <span>Reduced plumbing repairs and fewer clogs</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-blue-800">
                <p className="text-sm text-blue-200 font-medium">
                  Scale buildup reduces water heater efficiency by <span className="font-bold">22-30%</span>
                  <span className="block text-xs text-blue-300 mt-1">Source: U.S. Department of Energy</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Comfort Card */}
          <div className="bg-blue-900/40 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl backdrop-filter backdrop-blur-sm relative">
            <div className="h-1 bg-purple-500"></div>
            <div className="p-8">
              <div className="w-16 h-16 bg-blue-700/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="w-8 h-8 text-blue-200" />
              </div>
              <h3 className="text-xl font-bold text-blue-200 mb-4 text-center
                            drop-shadow-[0_1px_1px_rgba(126,34,206,0.05)]">
                For Your Comfort
              </h3>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2 mt-1">•</span>
                  <span>Softer, brighter laundry with less detergent needed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2 mt-1">•</span>
                  <span>Spot-free dishes, glasses, and silverware</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2 mt-1">•</span>
                  <span>Less cleaning time for bathrooms and kitchens</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-blue-800">
                <p className="text-sm text-blue-200 font-medium">
                  You'll save up to <span className="font-bold">50%</span> on cleaning products with treated water
                  <span className="block text-xs text-blue-300 mt-1">Based on American Cleaning Institute data</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Benefits */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-blue-800/30 rounded-xl p-8 backdrop-filter backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6 text-center
                          drop-shadow-[0_1px_1px_rgba(14,116,144,0.05)]
                          [text-shadow:_0_1px_0_rgb(0_0_0_/_70%),_0_1px_2px_rgba(14,116,144,0.1)]">
              Why Choose Our Water Refinement Systems?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-teal-800/50 rounded-full p-2 mr-4 flex-shrink-0">
                  <DollarSign className="w-5 h-5 text-teal-300" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-100 mb-1">Cost-Effective Solution</h4>
                  <p className="text-blue-200">Systems typically pay for themselves within 2-3 years through savings on cleaning products, energy bills, and appliance repairs.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal-800/50 rounded-full p-2 mr-4 flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-teal-300" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-100 mb-1">Certified & Tested</h4>
                  <p className="text-blue-200">
                    Our NSF/ANSI 44 certified systems remove <span className="font-bold">99.6%</span> of hardness minerals from your water.
                    <span className="block text-xs text-blue-300 mt-1">Source: NSF International Certification Standards</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust Facts */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-amber-900/20 rounded-lg p-5 shadow-sm flex items-start">
              <AlertTriangle className="w-5 h-5 text-amber-300 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-amber-100">
                  <span className="font-bold text-amber-200">Did you know?</span> Las Vegas ranked #3 for worst municipal water taste in 2024
                  <span className="block text-xs text-amber-200/70 mt-1">Source: National Rural Water Association</span>
                </p>
              </div>
            </div>
            <div className="flex-1 bg-amber-900/20 rounded-lg p-5 shadow-sm flex items-start">
              <AlertTriangle className="w-5 h-5 text-amber-300 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-amber-100">
                  <span className="font-bold text-amber-200">Water Quality Alert:</span> 9/10 water samples from LV homes failed EPA secondary standards for hardness
                  <span className="block text-xs text-amber-200/70 mt-1">Source: Nevada Division of Environmental Protection</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-md 
                     shadow-[0_4px_12px_rgba(30,58,138,0.2)] hover:shadow-[0_6px_16px_rgba(30,58,138,0.25)]
                     transform transition-all duration-300 hover:-translate-y-1"
          >
            Experience the Difference Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;