
import React from 'react';
import { Heart, Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:adithyant982@gmail.com',
      label: 'Email'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/adithya982/',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/adhi982',
      label: 'GitHub'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo/Name */}
          <button
            onClick={scrollToTop}
            className="text-2xl font-bold hover:text-teal-400 transition-colors duration-200"
          >
            Adithya N T
          </button>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-teal-600 rounded-lg transition-all duration-200 hover:scale-110"
                aria-label={link.label}
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center space-x-8 text-sm">
            {['Home', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.querySelector(`#${item.toLowerCase()}`);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 w-full text-center">
            <p className="text-gray-400 text-sm flex items-center justify-center space-x-1">
              <span>© {currentYear} Adithya N T. Portfolio</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
