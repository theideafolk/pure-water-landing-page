import React from 'react';
import { Calendar, FileText, Droplets, ArrowRight } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Your Journey to Pure Water</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our simple three-step process makes it easy to transform your home's water quality
            with a personalized solution tailored to your specific needs.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting water flow animation */}
          <div className="absolute top-1/2 left-0 w-full h-2 bg-blue-100 -z-10 hidden md:block">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-teal-400 animate-flow-right" style={{ width: '100%' }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden relative z-10 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="h-2 bg-blue-500"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2 text-center">Step 1</h3>
                <h4 className="text-lg font-medium text-gray-800 mb-4 text-center">Schedule Your Free Test</h4>
                <p className="text-gray-600 text-center mb-4">
                  Book a convenient time for your free in-home water analysis with one of our certified technicians.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Takes only 15 minutes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>No obligation or pressure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Convenient appointment times</span>
                  </li>
                </ul>
                <div className="bg-blue-50 p-3 rounded-md text-sm text-blue-800">
                  <p className="font-medium">What to expect:</p>
                  <p>Our technician will perform a comprehensive test of your water's hardness, pH, chlorine levels, TDS, and more.</p>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden relative z-10 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg md:mt-8">
              <div className="h-2 bg-teal-500"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-teal-900 mb-2 text-center">Step 2</h3>
                <h4 className="text-lg font-medium text-gray-800 mb-4 text-center">Receive Your Analysis</h4>
                <p className="text-gray-600 text-center mb-4">
                  Get a detailed breakdown of your water quality and a personalized recommendation for your home.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Clear explanation of test results</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Various solution options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Transparent pricing with no hidden costs</span>
                  </li>
                </ul>
                <div className="bg-teal-50 p-3 rounded-md text-sm text-teal-800">
                  <p className="font-medium">Our commitment:</p>
                  <p>We'll never pressure you to purchase. We provide honest recommendations based on your specific water conditions.</p>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden relative z-10 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="h-2 bg-purple-500"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Droplets className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-purple-900 mb-2 text-center">Step 3</h3>
                <h4 className="text-lg font-medium text-gray-800 mb-4 text-center">Enjoy Pure Water</h4>
                <p className="text-gray-600 text-center mb-4">
                  Experience the transformation with our professional installation and ongoing support.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Professional installation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Comprehensive system warranty</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Ongoing maintenance and support</span>
                  </li>
                </ul>
                <div className="bg-purple-50 p-3 rounded-md text-sm text-purple-800">
                  <p className="font-medium">The result:</p>
                  <p>Immediately notice the difference in water quality throughout your entire home, from better-tasting drinking water to softer showers.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="#contact" 
              className="group inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-md transition-colors shadow-md"
            >
              Book Your Free Test Now
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;