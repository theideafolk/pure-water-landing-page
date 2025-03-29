import React, { useState } from 'react';
import { Check, X, AlertTriangle } from 'lucide-react';

interface WaterProblem {
  id: string;
  problem: string;
  description: string;
  percentage: number;
  checked: boolean;
}

const WaterProblemsSection: React.FC = () => {
  const [problems, setProblems] = useState<WaterProblem[]>([
    { 
      id: 'scale', 
      problem: 'Scale buildup on fixtures and appliances', 
      description: 'White, chalky deposits on faucets, shower heads, and inside appliances',
      percentage: 87, 
      checked: false 
    },
    { 
      id: 'spotty', 
      problem: 'Spotty dishes and glassware', 
      description: 'Cloudy glasses and water spots on dishes even after washing',
      percentage: 92, 
      checked: false 
    },
    { 
      id: 'skin', 
      problem: 'Dry, itchy skin and dull hair', 
      description: 'Hard water leaves soap film on skin and makes hair difficult to manage',
      percentage: 78, 
      checked: false 
    },
    { 
      id: 'soaps', 
      problem: 'Using excessive soap and detergent', 
      description: 'Hard water requires more cleaning products to create lather',
      percentage: 85, 
      checked: false 
    },
    { 
      id: 'taste', 
      problem: 'Poor taste or smell in drinking water', 
      description: 'Chlorine smell or metallic taste in tap water',
      percentage: 73, 
      checked: false 
    },
    { 
      id: 'appliances', 
      problem: 'Frequent appliance repairs', 
      description: 'Water heaters, dishwashers, and washing machines breaking down prematurely',
      percentage: 68, 
      checked: false 
    },
  ]);

  const toggleProblem = (id: string) => {
    setProblems(problems.map(problem => 
      problem.id === id ? { ...problem, checked: !problem.checked } : problem
    ));
  };

  const checkedCount = problems.filter(p => p.checked).length;
  const showResults = checkedCount > 0;

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background water effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute w-full h-full bg-[url('https://images.unsplash.com/photo-1559825481-12a05cc00344?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Is Your Water Working Against You?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Check the issues you're experiencing to see how many Las Vegas homeowners share your water problems.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {problems.map((problem) => (
                <div 
                  key={problem.id}
                  className={`border rounded-lg p-4 transition-all cursor-pointer
                    ${problem.checked 
                      ? 'border-teal-500 bg-teal-50' 
                      : 'border-gray-200 hover:border-gray-300'}`}
                  onClick={() => toggleProblem(problem.id)}
                >
                  <div className="flex items-start">
                    <div className={`w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center mr-3 mt-0.5
                      ${problem.checked ? 'bg-teal-500' : 'border border-gray-300'}`}>
                      {problem.checked && <Check className="w-4 h-4 text-white" />}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{problem.problem}</h3>
                      <p className="text-sm text-gray-600 mt-1">{problem.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {showResults ? (
              <div className="bg-blue-50 rounded-lg p-6 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full p-2 text-blue-700 mt-1">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Your Water Quality Results</h3>
                    <p className="text-gray-700 mb-4">
                      Based on your selections, you're experiencing issues that are common among Las Vegas homes with hard water.
                      Here's how your experiences compare to other local homeowners:
                    </p>
                    
                    <div className="space-y-4">
                      {problems.filter(p => p.checked).map((problem) => (
                        <div key={problem.id} className="bg-white rounded-md p-4 shadow-sm">
                          <p className="font-medium text-gray-800 mb-2">{problem.problem}</p>
                          <div className="w-full bg-gray-200 rounded-full h-4 mb-1">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-teal-500 h-4 rounded-full animate-grow-width"
                              style={{ width: `${problem.percentage}%` }}
                            ></div>
                          </div>
                          <p className="text-sm text-gray-600">
                            <span className="font-semibold">{problem.percentage}%</span> of Las Vegas homes experience this issue
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 border border-blue-200 bg-blue-50 rounded-md">
                      <p className="text-blue-800">
                        <span className="font-bold">The good news:</span> All of these issues can be solved with the right water refinement solution tailored to your home's specific needs.
                      </p>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <a 
                        href="#contact" 
                        className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-md transition-colors shadow-md"
                      >
                        Get Your Free Water Test
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <p className="text-gray-700">
                  Check the boxes above to see how your water issues compare to other Las Vegas homes.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaterProblemsSection;