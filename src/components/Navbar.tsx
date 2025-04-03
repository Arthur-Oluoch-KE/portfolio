
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to toggle menu open/closed
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Menu items
  const menuItems = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/90 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="section-container flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-white hover:text-yellow-500 transition-colors">
          <span className="text-yellow-500">Oscar Arthur</span>  
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="text-white hover:text-yellow-500 transition-colors font-medium"

            >
              {item.title}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm shadow-md py-4">
          <div className="flex flex-col space-y-4 px-6">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-white hover:text-yellow-500 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
