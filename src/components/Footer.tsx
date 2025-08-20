import React from 'react';
import { Heart, Mail, Phone, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-brand-green-500 rounded-full p-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-black text-white">
                <span className="text-brand-green-400">FITTR</span> Kids
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Building stronger, healthier habits for children through fun fitness and simple nutrition. 
              Making wellness part of everyday family life.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/Fittrwithsquats" className="bg-gray-800 hover:bg-brand-green-500 p-3 rounded-full transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/fittrwithsquats/" className="bg-gray-800 hover:bg-gray-600 p-3 rounded-full transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@fittrkids7942/videos" className="bg-gray-800 hover:bg-gray-600 p-3 rounded-full transition-colors duration-300">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://x.com/FITTRwithsquats" className="bg-gray-800 hover:bg-brand-green-500 p-3 rounded-full transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.36l-5.214-6.822-5.976 6.822H1.86l7.73-8.82L1.5 2.25h7.143l4.713 6.231 4.888-6.231Zm-1.161 18.51h1.833L7.084 4.126H5.117l11.966 16.634Z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/fittr/" className="bg-gray-800 hover:bg-brand-green-500 p-3 rounded-full transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-white transition-colors duration-300">Programs</a></li>
              <li><a href="#videos" className="text-gray-300 hover:text-white transition-colors duration-300">YouTube</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-green-400 flex-shrink-0" />
                <a href="mailto:support@fittr.com" className="text-gray-300 hover:text-white transition-colors duration-300">
                  support@fittr.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-green-400 flex-shrink-0" />
                <a href="tel:08888003430" className="text-gray-300 hover:text-white transition-colors duration-300">
                  08888003430
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="text-center mb-6">
          <p className="text-xs text-gray-400 italic">Disclaimer: For children aged 5 to 15 only.</p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 FITTR Kids. All rights reserved. Made with ❤️ for healthy families.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;