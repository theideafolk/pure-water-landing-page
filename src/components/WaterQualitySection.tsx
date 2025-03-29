import React, { useState } from 'react';
import { MapPin, AlertCircle } from 'lucide-react';

const neighborhoods = [
  { id: 1, name: 'Summerlin', hardness: 'Very Hard (300+ PPM)', color: 'bg-red-500' },
  { id: 2, name: 'Henderson', hardness: 'Hard (200-300 PPM)', color: 'bg-orange-500' },
  { id: 3, name: 'North Las Vegas', hardness: 'Very Hard (300+ PPM)', color: 'bg-red-500' },
  { id: 4, name: 'Downtown', hardness: 'Hard (200-300 PPM)', color: 'bg-orange-500' },
  { id: 5, name: 'Spring Valley', hardness: 'Hard (200-300 PPM)', color: 'bg-orange-500' },
  { id: 6, name: 'Paradise', hardness: 'Hard (200-300 PPM)', color: 'bg-orange-500' },
  { id: 7, name: 'Centennial Hills', hardness: 'Very Hard (300+ PPM)', color: 'bg-red-500' },
  { id: 8, name: 'Aliante', hardness: 'Very Hard (300+ PPM)', color: 'bg-red-500' },
];

const WaterQualitySection: React.FC = () => {
  const [activeNeighborhood, setActiveNeighborhood] = useState<number | null>(null);

  return (
    <section id="quality" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">The Las Vegas Water Challenge</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Las Vegas has some of the hardest water in the nation, causing numerous issues for homeowners.
            Discover how your neighborhood's water quality stacks up and what it means for your home.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 mt-8">
          {/* Water Hardness Map */}
          <div className="relative w-full lg:w-1/2 h-96 bg-blue-50 rounded-lg shadow-md overflow-hidden">
            <div className="absolute inset-0 bg-blue-900/5 rounded-lg">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566936737687-8f392a237b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] opacity-10 bg-cover bg-center"></div>
              
              {/* Map Pins */}
              {neighborhoods.map((neighborhood) => (
                <div 
                  key={neighborhood.id}
                  className="absolute cursor-pointer transform transition-all duration-300 hover:scale-110"
                  style={{ 
                    left: `${15 + (neighborhood.id * 10)}%`, 
                    top: `${20 + ((neighborhood.id % 4) * 20)}%`
                  }}
                  onMouseEnter={() => setActiveNeighborhood(neighborhood.id)}
                  onMouseLeave={() => setActiveNeighborhood(null)}
                >
                  <div className={`w-3 h-3 rounded-full ${neighborhood.color} animate-pulse shadow-lg`}></div>
                  
                  {activeNeighborhood === neighborhood.id && (
                    <div className="absolute left-4 top-0 bg-white p-3 rounded shadow-lg z-10 w-48 text-sm">
                      <p className="font-bold text-blue-900">{neighborhood.name}</p>
                      <p className="text-gray-700">{neighborhood.hardness}</p>
                    </div>
                  )}
                </div>
              ))}
              
              {/* Water flow animation */}
              <div className="absolute inset-0 pointer-events-none">
                <svg width="100%" height="100%" className="opacity-20">
                  <path 
                    d="M0,60 Q150,120 300,60 T600,60" 
                    fill="none" 
                    stroke="#0B3D91" 
                    strokeWidth="8"
                    className="animate-flow"
                  />
                </svg>
              </div>
            </div>
            
            <div className="absolute bottom-4 left-4 bg-white/90 p-3 rounded shadow-sm">
              <h3 className="font-semibold text-blue-900 text-sm mb-1">Water Hardness Scale</h3>
              <div className="flex items-center gap-2 text-xs">
                <span className="block w-3 h-3 bg-green-500 rounded-full"></span>
                <span>Soft (0-100 PPM)</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="block w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span>Moderately Hard (100-200 PPM)</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="block w-3 h-3 bg-orange-500 rounded-full"></span>
                <span>Hard (200-300 PPM)</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="block w-3 h-3 bg-red-500 rounded-full"></span>
                <span>Very Hard (300+ PPM)</span>
              </div>
            </div>
          </div>
          
          {/* Water Quality Facts */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-full p-3 text-blue-700">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-blue-900 mb-2">Las Vegas Water Facts</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>Las Vegas has water hardness levels of 280-300 PPM (16-17 grains), among the highest in the US</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>90% of Lake Mead's water comes from Colorado River snowmelt</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>Hard water can reduce appliance lifespan by up to 30%</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>Chlorine levels in Las Vegas tap water are higher than the national average</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-5 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-2">Why is Las Vegas water so hard?</h4>
                <p className="text-sm text-gray-700">
                  Las Vegas water comes primarily from the mineral-rich Colorado River via Lake Mead.
                  The water picks up calcium and magnesium deposits as it flows through rock formations.
                </p>
              </div>
              
              <div className="bg-teal-50 p-5 rounded-lg">
                <h4 className="font-bold text-teal-900 mb-2">The cost of hard water</h4>
                <p className="text-sm text-gray-700">
                  The average Las Vegas household spends an extra $680 annually on:
                  <br />• Excessive cleaning products
                  <br />• Appliance repairs
                  <br />• Higher energy bills
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaterQualitySection;