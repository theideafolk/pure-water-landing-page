import React from 'react';
import { Droplets, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-12 relative overflow-hidden">
      {/* Video Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <Droplets className="h-8 w-8 text-teal-400" />
            <span className="ml-2 font-bold text-xl
                          drop-shadow-[0_1px_2px_rgba(13,148,136,0.2)]">
              PureWater
            </span>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-blue-200 hover:text-teal-400 transition-colors transform hover:scale-110 transition-transform">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-blue-200 hover:text-teal-400 transition-colors transform hover:scale-110 transition-transform">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-blue-200 hover:text-teal-400 transition-colors transform hover:scale-110 transition-transform">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 items-center mb-4 md:mb-0">
            <div className="flex items-center hover:text-teal-400 transition-colors">
              <Phone className="h-4 w-4 mr-2 text-teal-400" />
              <span>(702) 123-4567</span>
            </div>
            <div className="flex items-center hover:text-teal-400 transition-colors">
              <Mail className="h-4 w-4 mr-2 text-teal-400" />
              <span>info@purewaterlasvegas.com</span>
            </div>
            <div className="flex items-center hover:text-teal-400 transition-colors">
              <MapPin className="h-4 w-4 mr-2 text-teal-400" />
              <span>Las Vegas, NV</span>
            </div>
          </div>
          
          <p className="text-blue-200 text-sm">
            © 2025 PureWater. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;