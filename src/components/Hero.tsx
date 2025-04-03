
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/roman.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="section-container relative z-10 mt-20 text-center" data-aos="fade-up">
        <h1 className="text-white mb-6">
          <span className="block text-xl md:text-2xl font-normal mb-4">Hello, I'm</span>
          <span className="text-4xl md:text-6xl font-bold">Oscar Arthur</span>
        </h1>
        <h2 className="text-xl md:text-3xl text-white/90 mb-8">
          Software Developer
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-primary text-white rounded hover:bg-wood transition-colors"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-transparent border border-white text-white rounded hover:bg-white/10 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white animate-bounce transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
