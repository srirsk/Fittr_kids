import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import '@fontsource/bubblegum-sans'; // ✅ Import Bubblegum Sans
import LogoImage from './images/fittrlogo.png'; // Adjust the path to your logo image
import SecondaryImage from './images/kidslogo.png'; // Adjust the path to your secondary image

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = [
    { label: 'Home', action: scrollToTop },
    { label: 'About', action: () => scrollToSection('about') },
    { label: 'Programs', action: () => scrollToSection('programs') },
    { label: 'Videos', action: () => scrollToSection('videos') },
    { label: 'Community', action: () => scrollToSection('community') }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-['Bubblegum_Sans'] ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo and Secondary Image */}
          <button onClick={scrollToTop} className="flex items-center gap-3 group">
            <img
              src={LogoImage}
              alt="FITTR Kids Logo"
              className={`h-12 w-auto transition-transform duration-300 ${
                isScrolled ? '' : 'filter invert'
              }`}
            />
            <img
              src={SecondaryImage}
              alt="Secondary Image"
              className={`h-12 w-auto transition-transform duration-300 ${
                isScrolled ? '' : 'filter invert'
              } md:static absolute left-1/2 transform -translate-x-1/2 md:transform-none`}
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className={`font-semibold transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full ${
                  isScrolled
                    ? 'text-black hover:text-brand-green-500 hover:bg-gray-100'
                    : 'text-white hover:text-brand-green-300 hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="bg-brand-green-500 hover:bg-brand-green-400 text-white px-6 py-3 rounded-full font-bold transform hover:scale-105 transition-all duration-300 shadow-lg">
              Get Started 🚀
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-full transition-all duration-300 ${
              isScrolled ? 'text-black hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 mt-4 shadow-xl border border-gray-100">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="block w-full text-left py-3 px-4 text-black hover:text-brand-green-500 hover:bg-gray-50 rounded-xl font-semibold transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
            <button className="w-full mt-4 bg-brand-green-500 hover:bg-brand-green-400 text-white px-6 py-3 rounded-full font-bold transform hover:scale-105 transition-all duration-300 shadow-lg">
              Get Started 🚀
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
