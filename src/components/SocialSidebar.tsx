
import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const SocialSidebar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate the transform value based on scroll position
  // This will move the sidebar up as the user scrolls down
  const transformValue = scrollPosition > 0 ? Math.min(scrollPosition * 0.2, 100) : 0;

  // Social media links
  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Email', icon: Mail, href: 'mailto:contact@example.com' },
  ];

  return (
    <div 
      className="fixed left-6 bottom-0 z-40 hidden md:flex flex-col items-center"
      style={{ transform: `translateY(-${transformValue}px)`, transition: 'transform 0.3s ease-out' }}
    >
      <div className="flex flex-col space-y-6">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transform hover:scale-110 transition-all duration-300"
            aria-label={link.name}
          >
            <link.icon size={20} />
          </a>
        ))}
      </div>
      <div className="w-[1px] h-24 bg-foreground/20 mt-6"></div>
    </div>
  );
};

export default SocialSidebar;
