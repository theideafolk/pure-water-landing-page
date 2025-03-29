import React, { useState, useRef, useEffect } from 'react';
import { Check, AlertTriangle, BarChart, ChevronDown, X } from 'lucide-react';

interface WaterIssue {
  id: string;
  title: string;
  description: string;
  stat: string;
  percentage: number;
  source: string;
  insight: string;
  selected: boolean;
}

const WaterIssuesSection: React.FC = () => {
  const [issues, setIssues] = useState<WaterIssue[]>([
    {
      id: "scale",
      title: "Scale Buildup on Fixtures and Appliances",
      description: "White, chalky deposits on faucets, showerheads, and inside appliances",
      stat: "85% of Las Vegas homes",
      percentage: 85,
      source: "Southern Nevada Water Authority (SNWA)",
      insight: "Hard water leaves white, chalky deposits on faucets, showerheads, and inside appliances, reducing their efficiency and lifespan.",
      selected: false
    },
    {
      id: "spots",
      title: "Spots on Dishes and Glassware After Washing",
      description: "Visible water spots and cloudy residue on dishes and glassware",
      stat: "70% of Las Vegas residents",
      percentage: 70,
      source: "Water Quality Association (WQA)",
      insight: "Hard water minerals leave stubborn spots on dishes, even after washing, making them look dirty and unappealing.",
      selected: false
    },
    {
      id: "skin",
      title: "Dry Skin and Hair After Showering",
      description: "Irritated skin and brittle hair after bathing",
      stat: "50% more dryness and irritation",
      percentage: 50,
      source: "Water Quality Research Foundation (WQRF)",
      insight: "Hard water minerals and chlorine strip natural oils from skin and hair, leading to dryness, irritation, and brittle hair.",
      selected: false
    },
    {
      id: "taste",
      title: "Unpleasant Taste or Odor in Drinking Water",
      description: "Swimming pool-like taste and smell in tap water",
      stat: "70% of Las Vegas residents",
      percentage: 70,
      source: "Southern Nevada Water Authority (SNWA)",
      insight: "High chlorine levels in Las Vegas water (up to 4 mg/L) cause a swimming pool-like taste and smell, making tap water unappealing to drink.",
      selected: false
    },
    {
      id: "soap",
      title: "Soap Doesn't Lather Well",
      description: "Need to use excessive soap and detergent",
      stat: "2x more soap or shampoo required",
      percentage: 65,
      source: "American Cleaning Institute (ACI)",
      insight: "Hard water minerals react with soap, reducing lather and leaving residue, which increases cleaning time and costs.",
      selected: false
    },
    {
      id: "appliances",
      title: "Frequently Replacing Appliances",
      description: "Water heaters, dishwashers, and washing machines breaking down prematurely",
      stat: "30-50% reduced appliance lifespan",
      percentage: 75,
      source: "American Water Works Association (AWWA)",
      insight: "Scale buildup clogs appliances, reduces efficiency, and forces homeowners to replace them sooner, costing hundreds of dollars annually.",
      selected: false
    },
    {
      id: "energy",
      title: "Increased Energy Costs",
      description: "Higher utility bills from inefficient water heating",
      stat: "$200-$300 added annually to bills",
      percentage: 80,
      source: "Battelle Memorial Institute Study",
      insight: "Hard water scale buildup forces water heaters to work harder, increasing energy consumption and monthly utility bills.",
      selected: false
    }
  ]);

  const [activeIssueId, setActiveIssueId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const resultsSectionRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Detect if we're on mobile
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial load
    checkMobile();
    
    // Set up event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Effect to handle video playback
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', () => {
        video.play().catch(err => console.log('Video autoplay failed:', err));
      });

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

  const toggleIssue = (id: string) => {
    // If on mobile, show the result in a modal
    if (isMobile) {
      // If clicking the same issue that's already selected, toggle it off
      if (issues.find(issue => issue.id === id)?.selected) {
        setIssues(issues.map(issue => 
          issue.id === id ? { ...issue, selected: false } : issue
        ));
        return;
      }
      
      // Set this issue as active for the modal
      setActiveIssueId(id);
      setIsModalOpen(true);
      
      // Toggle the selected state
      setIssues(issues.map(issue => 
        issue.id === id ? { ...issue, selected: true } : issue
      ));
    } else {
      // On desktop, just toggle the selection
      setIssues(issues.map(issue => 
        issue.id === id ? { ...issue, selected: !issue.selected } : issue
      ));
      
      // Scroll to results section if this is the first selected issue
      const wasNoneSelected = !issues.some(issue => issue.selected);
      const isCurrentlySelected = !issues.find(issue => issue.id === id)?.selected;
      
      if (wasNoneSelected && isCurrentlySelected && resultsSectionRef.current) {
        setTimeout(() => {
          resultsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveIssueId(null);
  };

  // Close modal when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalContentRef.current && !modalContentRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  const selectedIssues = issues.filter(issue => issue.selected);
  const hasSelection = selectedIssues.length > 0;
  const activeIssue = activeIssueId ? issues.find(issue => issue.id === activeIssueId) : null;

  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Video Overlay - increased opacity to make video less prominent */}
        <div className="absolute inset-0 bg-gray-900/90 z-10"></div>
        
        {/* Water Droplet Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            ref={videoRef}
            className="absolute w-full h-full object-cover opacity-40"
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
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
            Is Your Water Working Against You?
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Check the issues you're experiencing to see how many Las Vegas homes share your water problems.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-800/60 rounded-xl shadow-lg overflow-hidden backdrop-filter backdrop-blur-md border border-gray-700/50">
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {issues.map((issue) => (
                  <div 
                    key={issue.id}
                    className={`border rounded-lg p-4 transition-all cursor-pointer transform hover:scale-[1.02]
                      ${issue.selected 
                        ? 'border-teal-500 bg-teal-900/30 shadow-md' 
                        : 'border-gray-700 hover:border-gray-600 hover:shadow-sm'}`}
                    onClick={() => toggleIssue(issue.id)}
                  >
                    <div className="flex items-start">
                      <div className={`w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center mr-3 mt-0.5
                        ${issue.selected ? 'bg-teal-500 shadow-sm' : 'border border-gray-500'}`}>
                        {issue.selected && <Check className="w-4 h-4 text-white" />}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{issue.title}</h3>
                        <p className="text-sm text-gray-300 mt-1">{issue.description}</p>
                        
                        {/* Indicator for mobile to show there's more info */}
                        {isMobile && (
                          <div className="flex items-center mt-2 text-xs text-teal-400">
                            <span>See water quality data</span>
                            <ChevronDown className="w-3 h-3 ml-1" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Desktop results section */}
              {!isMobile && hasSelection && (
                <div ref={resultsSectionRef} className="bg-blue-900/30 rounded-xl p-6 animate-fade-in smooth-scroll">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-900/50 rounded-full p-3 text-blue-300 mt-1 flex-shrink-0">
                      <BarChart className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-blue-100 mb-4
                                    drop-shadow-[0_1px_1px_rgba(14,116,144,0.05)]
                                    [text-shadow:_0_1px_0_rgb(0_0_0_/_70%),_0_1px_2px_rgba(14,116,144,0.1)]">
                        Your Water Quality Results
                      </h3>
                      <p className="text-gray-300 mb-6">
                        Based on your selections, you're experiencing issues that are common among Las Vegas homes with hard water.
                        Here's how your experiences compare to other local homeowners:
                      </p>
                      
                      <div className="space-y-6">
                        {selectedIssues.map((issue) => (
                          <div key={issue.id} className="bg-gray-800/70 rounded-lg p-5 shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-bold text-blue-100">{issue.title}</h4>
                              <span className="bg-teal-900/50 text-teal-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                {issue.stat}
                              </span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-4 mb-3">
                              <div 
                                className="bg-gradient-to-r from-blue-600 to-teal-500 h-4 rounded-full animate-grow-width"
                                style={{ width: `${issue.percentage}%` }}
                              ></div>
                            </div>
                            <p className="text-gray-300 text-sm mb-2">{issue.insight}</p>
                            <p className="text-xs text-gray-400">Source: {issue.source}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 p-5 border border-amber-800/50 bg-amber-900/20 rounded-lg flex items-start">
                        <AlertTriangle className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-amber-300 font-medium">The Hard Water Impact</p>
                          <p className="text-sm text-gray-300 mt-1">
                            Las Vegas has some of the hardest water in the nation at 16.7+ gpg (grains per gallon). 
                            The EPA considers water "hard" at just 7.0 gpg. This extreme hardness causes all the issues 
                            you selected and costs the average Las Vegas homeowner over $700 annually in extra expenses.
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-8 text-center">
                        <a 
                          href="#contact" 
                          className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-md 
                                    shadow-[0_4px_12px_rgba(13,148,136,0.25)] hover:shadow-[0_6px_16px_rgba(13,148,136,0.3)]
                                    transform transition-all duration-300 hover:-translate-y-1"
                        >
                          Get Your Free Water Test
                        </a>
                        <p className="text-sm text-gray-400 mt-3">
                          Find out exactly what's in your water and get a customized solution.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* If nothing is selected on desktop or mobile */}
              {!hasSelection && (
                <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                  <p className="text-gray-300">
                    Select the water issues you're experiencing above to see how your water problems compare to other Las Vegas homes.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Results Modal */}
      {isMobile && isModalOpen && activeIssue && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4 backdrop-blur-sm">
          <div 
            ref={modalContentRef}
            className="bg-gray-800 rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-fade-in border border-gray-700"
          >
            <div className="sticky top-0 bg-gray-800 border-b border-gray-700 flex justify-between items-center p-4 z-10">
              <h3 className="font-bold text-white">Water Issue Details</h3>
              <button 
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-200 focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-5">
              <div className="bg-blue-900/30 rounded-lg p-5 mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-blue-100">{activeIssue.title}</h4>
                  <span className="bg-teal-900/50 text-teal-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {activeIssue.stat}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-4 mb-3">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-teal-500 h-4 rounded-full animate-grow-width"
                    style={{ width: `${activeIssue.percentage}%` }}
                  ></div>
                </div>
                <p className="text-gray-300 text-sm mb-2">{activeIssue.insight}</p>
                <p className="text-xs text-gray-400">Source: {activeIssue.source}</p>
              </div>
              
              <div className="p-4 border border-amber-800/50 bg-amber-900/20 rounded-lg flex items-start mb-6">
                <AlertTriangle className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-amber-300 font-medium">Hard Water Impact</p>
                  <p className="text-sm text-gray-300 mt-1">
                    Las Vegas has some of the hardest water in the nation at 16.7+ gpg (grains per gallon). 
                    The EPA considers water "hard" at just 7.0 gpg.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <a 
                  href="#contact" 
                  className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-md 
                             shadow-[0_4px_10px_rgba(13,148,136,0.2)] 
                             transition-all duration-300 w-full"
                  onClick={closeModal}
                >
                  Get Your Free Water Test
                </a>
                <button 
                  onClick={closeModal}
                  className="mt-3 inline-block text-teal-400 font-medium text-sm"
                >
                  Select more issues
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* CTA for mobile if items are selected */}
      {isMobile && hasSelection && !isModalOpen && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 shadow-lg border-t border-gray-700 p-4 z-40">
          <a 
            href="#contact" 
            className="block bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-md 
                     shadow-[0_-4px_10px_rgba(13,148,136,0.15)]
                     transition-colors text-center"
          >
            Get Your Free Water Test ({selectedIssues.length} {selectedIssues.length === 1 ? 'issue' : 'issues'} selected)
          </a>
        </div>
      )}
    </section>
  );
};

export default WaterIssuesSection;