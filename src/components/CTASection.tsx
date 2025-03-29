import React, { useState, useRef, useEffect } from 'react';
import { CheckCircle, Shield, ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zipCode: '',
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would submit the form data to your backend
    setFormSubmitted(true);
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
    <section id="contact" className="py-24 bg-gradient-to-r from-blue-900 to-blue-800 text-white relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Video Overlay - increased opacity to make video less prominent */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90 z-10"></div>
        
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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4
                          drop-shadow-[0_2px_4px_rgba(13,148,136,0.3)]
                          [text-shadow:_0_1px_0_rgb(255_255_255_/_20%),_0_3px_8px_rgba(13,148,136,0.3)]
                          tracking-wide">
              Transform Your Water Today
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join thousands of satisfied Las Vegas homeowners who have discovered the difference pure water makes.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:bg-white/15">
            <div className="p-8 relative z-10">
              {!formSubmitted ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4
                                 drop-shadow-[0_1px_2px_rgba(13,148,136,0.2)]">
                      Free Water Test
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md 
                                    focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-white/60 text-white
                                    shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md 
                                    focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-white/60 text-white
                                    shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
                          placeholder="Email address"
                        />
                      </div>
                      
                      <div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md 
                                    focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-white/60 text-white
                                    shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
                          placeholder="Phone number"
                        />
                      </div>
                      
                      <div>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          required
                          value={formData.zipCode}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md 
                                    focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-white/60 text-white
                                    shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
                          placeholder="Zip code"
                        />
                      </div>
                      
                      <div className="flex items-center text-sm mt-6">
                        <Shield className="w-4 h-4 mr-2" />
                        <p>Your information is secure and will never be shared.</p>
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-md 
                                 transition-all duration-300 shadow-[0_4px_12px_rgba(20,184,166,0.3)] 
                                 hover:shadow-[0_6px_16px_rgba(20,184,166,0.4)]
                                 transform hover:-translate-y-1
                                 flex items-center justify-center"
                      >
                        Schedule My Free Water Test
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                    </form>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-800/30 to-blue-900/30 p-6 rounded-lg backdrop-filter backdrop-blur-sm">
                    <h3 className="text-xl font-bold mb-6
                                 drop-shadow-[0_1px_2px_rgba(13,148,136,0.2)]">
                      Your Free Water Test Includes:
                    </h3>
                    
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-teal-400 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Comprehensive Analysis</p>
                          <p className="text-white/80 text-sm">Professional testing for hardness (16.7+ gpg in Las Vegas), TDS, chlorine, pH, and more</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-teal-400 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Expert Consultation</p>
                          <p className="text-white/80 text-sm">Learn about your specific water issues and solutions</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-teal-400 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Cost Savings Report</p>
                          <p className="text-white/80 text-sm">See how much of the average $724/year in extra costs you can save</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-teal-400 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Customized Solutions</p>
                          <p className="text-white/80 text-sm">Tailored recommendations based on your needs and budget</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-6
                                shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                    <CheckCircle className="w-12 h-12 text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4
                               drop-shadow-[0_1px_2px_rgba(13,148,136,0.2)]">
                    Thank You!
                  </h3>
                  <p className="mb-6">
                    Your free water test request has been submitted. We'll contact you within 24 hours to confirm your appointment.
                  </p>
                  <p className="text-sm bg-white/10 p-4 rounded-md inline-block backdrop-blur-sm">
                    A confirmation email has been sent to <span className="font-semibold">{formData.email}</span>
                  </p>
                </div>
              )}
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-8 text-center">
            <p className="flex items-center justify-center">
              <Shield className="w-5 h-5 mr-2" />
              <span>100% Satisfaction Guarantee | Licensed & Insured | Serving Las Vegas Since 2010</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;