import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, MapPin } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Summerlin",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "The difference in our water quality is incredible. My skin feels better, our dishes are spot-free, and we're using way less soap and detergent. The free water test revealed just how bad our water was. So glad we made this investment!",
    system: "Whole Home System"
  },
  {
    id: 2,
    name: "Michael L.",
    location: "Henderson",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "As a Las Vegas resident for 15 years, I'd accepted hard water as a fact of life. After installing PureWater's system, I'm amazed at how much money we're saving on cleaning products and how much better everything feels. The installation was quick and professional.",
    system: "Water Softener"
  },
  {
    id: 3,
    name: "Jennifer & David K.",
    location: "North Las Vegas",
    image: "https://images.unsplash.com/photo-1488716820095-cbe80883c496?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Our shower doors and faucets used to be covered in scale no matter how much we cleaned. Now they stay clean and shiny! The technician who did our water test explained everything clearly without any sales pressure. Highly recommend!",
    system: "Whole Home System + RO"
  },
  {
    id: 4,
    name: "Robert T.",
    location: "Spring Valley",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    rating: 4,
    text: "The reverse osmosis system has completely transformed our drinking water. It tastes clean and fresh, and we've stopped buying bottled water completely. Installation was professional and the system is very low maintenance.",
    system: "Reverse Osmosis System"
  },
  {
    id: 5,
    name: "Amanda B.",
    location: "Paradise",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "After getting frustrated with constantly cleaning calcium deposits, we decided to get our water tested. The results were shocking! The difference after installation was immediate - softer skin, cleaner fixtures, and better tasting water. Worth every penny.",
    system: "Water Softener + Filter"
  }
];

const TestimonialsSection: React.FC = () => {
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
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Trusted by Las Vegas Homeowners</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what our customers have to say about their
            experience with our water refinement solutions.
          </p>
        </div>
        
        <div className="relative">
          {/* Customer Satisfaction Stats */}
          <div className="mb-10 bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Our Customer Satisfaction</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-1">98%</div>
                <p className="text-sm text-gray-600">Would Recommend</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-1">4.9/5</div>
                <div className="flex justify-center">
                  <Star className="w-4 h-4 text-yellow-500" fill="#EAB308" />
                  <Star className="w-4 h-4 text-yellow-500" fill="#EAB308" />
                  <Star className="w-4 h-4 text-yellow-500" fill="#EAB308" />
                  <Star className="w-4 h-4 text-yellow-500" fill="#EAB308" />
                  <Star className="w-4 h-4 text-yellow-500" fill="#EAB308" />
                </div>
                <p className="text-sm text-gray-600">Average Rating</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-1">15+</div>
                <p className="text-sm text-gray-600">Years in Business</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-1">10,000+</div>
                <p className="text-sm text-gray-600">Homes Serviced</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial Carousel */}
          <div className="relative max-w-5xl mx-auto">
            <button 
              onClick={handlePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 focus:outline-none hidden md:block"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-blue-900" />
            </button>
            
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className={`testimonial-card min-w-full md:min-w-[450px] px-4 flex-shrink-0 snap-center transform transition-transform duration-300 ${
                    activeIndex === index ? 'scale-100' : 'scale-95 opacity-60'
                  }`}
                >
                  <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col relative">
                    <Quote className="absolute top-4 right-4 w-10 h-10 text-blue-100" />
                    
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
                    
                    <p className="text-gray-700 flex-grow mb-4 italic">"{testimonial.text}"</p>
                    
                    <div className="bg-blue-50 py-2 px-3 rounded text-sm text-blue-800 self-start">
                      System: {testimonial.system}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 focus:outline-none hidden md:block"
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
      </div>
    </section>
  );
};

export default TestimonialsSection;