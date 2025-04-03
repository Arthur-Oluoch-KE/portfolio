
import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Social media links
  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/Arthur-Oluoch-KE' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/arthur-oluoch-2641a1310' },
    { name: 'Twitter', icon: Twitter, href: 'https://x.com/iam_oluoch' },
    { name: 'Email', icon: Mail, href: 'mailto:arthuroluoch624@gmail.com' },
  ];

  return (
    <footer className="bg-wood-dark text-white py-12">
      <div className="section-container">
        <div className="flex flex-col items-center">
          {/* Logo/Name */}
          <a href="#home" className="text-2xl font-bold mb-6">Portfolio</a>
          
          {/* Social Links */}
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transform hover:scale-110 transition-all duration-300"
                aria-label={link.name}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
          
          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-white/80 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
          </div>
          
          {/* Copyright */}
          <p className="text-white/60 text-sm">
            © {currentYear} Oscar Arthur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
