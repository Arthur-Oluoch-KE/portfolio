import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Menu items
  const menuItems = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' },
  ];

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/90 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="section-container flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-white hover:text-yellow-500 transition-colors"
        >
          <span className="text-yellow-500">Oscar Arthur</span>
        </a>

        {/* Hamburger Button (Mobile Only) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links (Desktop and Mobile) */}
        <div
          className={`text-blue font-medium 
                     flex md:flex-row flex-col 
                     space-y-4 md:space-y-0 md:space-x-8 
                     ${isMenuOpen ? 'flex' : 'hidden'} md:flex 
                     absolute md:static top-full left-0 w-full md:w-auto 
                     bg-white md:bg-transparent p-4 md:p-0 
                     transition-all duration-300`}
        >
          {menuItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="text-blue hover:text-yellow-500 transition-colors font-medium py-2 md:py-0"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click (mobile)
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;