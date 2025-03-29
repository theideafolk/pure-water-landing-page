import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, MapPin } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Summerlin",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "The difference in our water quality is incredible. My skin feels better and our dishes are spot-free.",
    system: "Whole Home System"
  },
  {
    id: 2,
    name: "Michael L.",
    location: "Henderson",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "After installing PureWater's system, I'm amazed at how much better everything feels.",
    system: "Water Softener"
  },
  {
    id: 3,
    name: "Jennifer K.",
    location: "North Las Vegas",
    image: "https://images.unsplash.com/photo-1488716820095-cbe80883c496?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Our shower doors and faucets now stay clean and shiny. Highly recommend!",
    system: "Whole Home System"
  }
];

const TestimonialSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const scrollToTestimonial = (index: number) => {
    setActiveIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cards = container.querySelectorAll('.testimonial-card');
      if (cards[index]) {
        container.scrollTo({
          left: cards[index].getBoundingClientRect().left + container.scrollLeft - container.getBoundingClientRect().left,
          behavior: 'smooth'
        });
      }
    }
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    scrollToTestimonial((activeIndex + 1) % testimonials.length);
  };
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    scrollToTestimonial((activeIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4
                        drop-shadow-[0_2px_2px_rgba(14,116,144,0.08)]
                        [text-shadow:_0_1px_0_rgb(255_255_255_/_70%),_0_2px_3px_rgba(14,116,144,0.15)]">
            Customer Stories
          </h2>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 
                      bg-white rounded-full p-2 
                      shadow-[0_3px_10px_rgba(13,148,136,0.15)] hover:shadow-[0_4px_12px_rgba(13,148,136,0.2)]
                      z-10 hover:bg-gray-100 transition-all duration-300 focus:outline-none hidden md:block"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-blue-900" />
          </button>
          
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide smooth-scroll"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`testimonial-card min-w-full md:min-w-[450px] px-4 flex-shrink-0 snap-center transform transition-transform duration-300 ${
                  activeIndex === index ? 'scale-100' : 'scale-95 opacity-60'
                }`}
              >
                <div className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col relative
                               transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl backdrop-filter backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-teal-500"
                    />
                    <div>
                      <h4 className="font-bold text-lg text-blue-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm flex items-center">
                        <MapPin className="w-3 h-3 mr-1" /> {testimonial.location}
                      </p>
                      <div className="flex mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-500" fill="#EAB308" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 flex-grow mb-4 italic text-lg">"{testimonial.text}"</p>
                  
                  <div className="bg-blue-50 py-2 px-3 rounded text-sm text-blue-800 self-start">
                    {testimonial.system}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 
                      bg-white rounded-full p-2 
                      shadow-[0_3px_10px_rgba(13,148,136,0.15)] hover:shadow-[0_4px_12px_rgba(13,148,136,0.2)]
                      z-10 hover:bg-gray-100 transition-all duration-300 focus:outline-none hidden md:block"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-blue-900" />
          </button>
        </div>
        
        {/* Mobile navigation dots */}
        <div className="flex justify-center space-x-2 mt-4 md:hidden">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToTestimonial(index)}
              className={`w-3 h-3 rounded-full ${
                activeIndex === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;