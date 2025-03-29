import React, { useState, useEffect } from 'react';
import { Droplets, Menu, X } from 'lucide-react';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import WaterIssuesSection from './components/WaterIssuesSection';
import TestimonialSection from './components/TestimonialSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import { playWaterDropletSound } from './utils/sound';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Handle scroll for nav bar styling
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Handle scroll reveal animations
      const revealElements = document.querySelectorAll('.scroll-reveal');
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    // Trigger initial reveal check for visible elements
    setTimeout(() => {
      handleScroll();
    }, 100);
    
    // Add click/touch event listeners to play the water droplet sound
    const handleInteraction = () => {
      playWaterDropletSound();
    };
    
    // Add event listeners for both click (desktop) and touch (mobile)
    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);
    
    // Implement smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // Close mobile menu if open
          if (isMenuOpen) {
            setIsMenuOpen(false);
          }
          
          // Scroll to target with smooth behavior
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Update URL hash without actual jump
          history.pushState(null, '', targetId);
        }
      });
    });
    
    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function() {});
      });
    };
  }, [isMenuOpen]);

  return (
    <div className="font-sans text-gray-800">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Droplets className="h-8 w-8 text-teal-600" />
              <span className={`ml-2 font-bold text-xl ${isScrolled ? 'text-blue-900' : 'text-white'}`}>PureWater</span>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? 
                <X className={`h-6 w-6 ${isScrolled ? 'text-blue-900' : 'text-white'}`} /> : 
                <Menu className={`h-6 w-6 ${isScrolled ? 'text-blue-900' : 'text-white'}`} />
              }
            </button>
            
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className={`${isScrolled ? 'text-blue-900' : 'text-white'} hover:text-teal-400 transition-colors`}>Benefits</a>
              <a href="#water-issues" className={`${isScrolled ? 'text-blue-900' : 'text-white'} hover:text-teal-400 transition-colors`}>Water Issues</a>
              <a href="#testimonials" className={`${isScrolled ? 'text-blue-900' : 'text-white'} hover:text-teal-400 transition-colors`}>Testimonials</a>
              <a href="#faq" className={`${isScrolled ? 'text-blue-900' : 'text-white'} hover:text-teal-400 transition-colors`}>FAQ</a>
              <a href="#contact" className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">Free Water Test</a>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg mt-2 rounded-b-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-blue-900 hover:bg-teal-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Benefits</a>
              <a href="#water-issues" className="block px-3 py-2 text-blue-900 hover:bg-teal-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Water Issues</a>
              <a href="#testimonials" className="block px-3 py-2 text-blue-900 hover:bg-teal-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
              <a href="#faq" className="block px-3 py-2 text-blue-900 hover:bg-teal-50 rounded-md" onClick={() => setIsMenuOpen(false)}>FAQ</a>
              <a href="#contact" className="block px-3 py-2 bg-teal-500 text-white rounded-md mt-4" onClick={() => setIsMenuOpen(false)}>Free Water Test</a>
            </div>
          </div>
        )}
      </nav>

      <main>
        <HeroSection />
        <div className="scroll-reveal">
          <FeatureSection />
        </div>
        <div id="water-issues" className="scroll-reveal">
          <WaterIssuesSection />
        </div>
        <div className="scroll-reveal">
          <TestimonialSection />
        </div>
        <div className="scroll-reveal">
          <FAQSection />
        </div>
        <div className="scroll-reveal">
          <CTASection />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;