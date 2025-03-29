import React from 'react';
import { Heart, Home, Droplets } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">The Pure Water Difference</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transform your Las Vegas home with water that looks, feels, and tastes better. 
            Our advanced refinement systems solve hard water issues at the source.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Health Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative">
            <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">For Your Health</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Cleaner, better-tasting drinking water with reduced chlorine and contaminants</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Healthier skin with reduced dryness and irritation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Softer, more manageable hair that feels cleaner</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Reduced soap residue that can clog pores</span>
                </li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex gap-2">
                  <div className="w-1/2">
                    <p className="text-sm font-semibold text-blue-800 mb-1">Before</p>
                    <div className="h-20 bg-blue-200 rounded-md flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80')] bg-cover bg-center opacity-60"></div>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <p className="text-sm font-semibold text-blue-800 mb-1">After</p>
                    <div className="h-20 bg-blue-100 rounded-md flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1560707854-8ac1cb2d5907?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80')] bg-cover bg-center"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Home Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative">
            <div className="h-2 bg-gradient-to-r from-teal-400 to-teal-600"></div>
            <div className="p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-teal-900 mb-4 text-center">For Your Home</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span>Extended appliance lifespan (water heaters, dishwashers, washing machines)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span>Reduced plumbing repairs from scale buildup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span>Lower energy bills due to more efficient water heating</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span>Fewer clogs and improved water flow throughout your home</span>
                </li>
              </ul>
              <div className="bg-teal-50 p-4 rounded-lg">
                <div className="flex gap-2">
                  <div className="w-1/2">
                    <p className="text-sm font-semibold text-teal-800 mb-1">Before</p>
                    <div className="h-20 bg-teal-200 rounded-md flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1584822796304-33b919943399?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80')] bg-cover bg-center opacity-60"></div>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <p className="text-sm font-semibold text-teal-800 mb-1">After</p>
                    <div className="h-20 bg-teal-100 rounded-md flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1584822795930-125032399bcc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80')] bg-cover bg-center"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Comfort Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative">
            <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-600"></div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-purple-900 mb-4 text-center">For Your Comfort</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Softer, brighter laundry with less detergent required</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Spot-free dishes, glasses, and silverware</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>More enjoyable showers with better lathering</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Reduced cleaning time and frequency for bathrooms and kitchens</span>
                </li>
              </ul>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex gap-2">
                  <div className="w-1/2">
                    <p className="text-sm font-semibold text-purple-800 mb-1">Before</p>
                    <div className="h-20 bg-purple-200 rounded-md flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1575908539614-ff89490f4a78?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80')] bg-cover bg-center opacity-60"></div>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <p className="text-sm font-semibold text-purple-800 mb-1">After</p>
                    <div className="h-20 bg-purple-100 rounded-md flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80')] bg-cover bg-center"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-md transition-colors shadow-md"
          >
            Experience the Difference Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;