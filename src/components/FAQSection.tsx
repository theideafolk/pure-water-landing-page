import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How does the free water test work?",
    answer: "Our certified technician will visit your home at a time that's convenient for you. Using professional testing equipment, they'll analyze your water for hardness, pH levels, chlorine, total dissolved solids (TDS), and other contaminants. The test takes about 15 minutes, and you'll receive immediate results with a clear explanation of what they mean for your home and family. There's absolutely no obligation to purchase anything after the test."
  },
  {
    question: "What types of water refinement systems do you offer?",
    answer: "We offer a comprehensive range of solutions including: (1) Water Softeners to remove hardness minerals like calcium and magnesium, (2) Whole Home Filtration Systems that address chlorine, sediment, and other contaminants throughout your home, (3) Reverse Osmosis Systems for high-quality drinking water, and (4) Combination Systems that provide complete protection. During your free consultation, we'll recommend the best solution based on your specific water quality issues and budget."
  },
  {
    question: "How much do water refinement systems cost?",
    answer: "System costs vary depending on your specific needs, home size, and water quality. Entry-level solutions start around $995, while comprehensive whole-home systems range from $1,895 to $3,495. We offer flexible financing options with payments as low as $39/month, and many customers find their systems pay for themselves through savings on cleaning supplies, reduced appliance repairs, and extended appliance lifespans. We provide transparent pricing with no hidden costs or surprise fees."
  },
  {
    question: "How long does installation take and will it disrupt my home?",
    answer: "Most installations take 2-3 hours and are completed with minimal disruption to your home. Our professional installers are courteous, clean up after themselves, and will walk you through how to operate and maintain your new system. We typically only need to shut off water to your home for 30-60 minutes during the installation process."
  },
  {
    question: "Do your systems require a lot of maintenance?",
    answer: "Our water refinement systems are designed to be low-maintenance. Water softeners require periodic addition of salt (typically every 2-3 months), and filters need to be changed according to their schedule (usually 6-12 months depending on usage). Reverse osmosis membranes typically last 2-5 years. Each system includes clear instructions, and we offer maintenance services if you prefer not to handle these simple tasks yourself. All systems come with comprehensive warranties and ongoing support."
  }
];

const FAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Effect to handle video playback
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
    <section id="faq" className="py-20 bg-blue-900 text-white relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Video Overlay - increased opacity to make video less prominent */}
        <div className="absolute inset-0 bg-blue-900/90 z-10"></div>
        
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4
                        drop-shadow-[0_2px_2px_rgba(14,116,144,0.08)]
                        [text-shadow:_0_1px_0_rgb(0_0_0_/_70%),_0_2px_3px_rgba(14,116,144,0.15)]">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Get answers to the most common questions about our water refinement solutions.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-blue-800/50 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg backdrop-filter backdrop-blur-sm border border-blue-700/50"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openFAQ === index}
                >
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  )}
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openFAQ === index ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <div className="prose prose-invert">
                    <p className="text-blue-100">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center bg-blue-800/30 p-6 rounded-lg shadow-md backdrop-filter backdrop-blur-sm border border-blue-700/50">
            <h3 className="text-xl font-bold text-white mb-3">Have more questions?</h3>
            <p className="text-blue-100 mb-4">
              Our water experts are ready to help with any questions you might have about our water refinement solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:7021234567" 
                className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition-colors shadow-sm"
              >
                Call (702) 123-4567
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-md transition-colors shadow-md"
              >
                Schedule a Free Test
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;