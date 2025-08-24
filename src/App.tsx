import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import PlansSection from './components/PlansSection';
import VideoSection from './components/VideoSection';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';
import FittrTrustBanner from './components/FittrTrustBanner';
import EmailSignupPopup from './components/EmailSignupPopup';
import '@fontsource/rubik'; // npm i @fontsource/rubik
import DoctorVideoSection from './components/DoctorVideoSection';

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [showSupportPopup, setShowSupportPopup] = useState(false);

  return (
    <div className="min-h-screen" style={{ fontFamily: '"Rubik", sans-serif' }}>
      <Navbar />
      <Hero />
      <AboutSection />
      <DoctorVideoSection />
      <FittrTrustBanner />
      <ProgramsSection />
      <VideoSection />
      <CommunitySection />
      <Footer />

      {/* Sticky CTA Bar */}
      <div className="fixed bottom-6 right-6 z-40">
        <button 
          onClick={() => setShowSupportPopup(true)}
          className="bg-brand-green-500 hover:bg-brand-green-400 text-white px-6 py-3 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          💬 Need Support?
        </button>
      </div>

      {/* Email Signup Popup */}
      <EmailSignupPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />

      {/* Support Popup Modal */}
      {showSupportPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 sm:p-6">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 text-center relative">
            <button
              onClick={() => setShowSupportPopup(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Contact Support
            </h2>
            <p className="text-gray-600 mb-4">
              Reach out to our support team for assistance:
            </p>
            <div className="text-left">
              <p className="text-gray-800 mb-2">
                <strong>Email:</strong> <a href="mailto:support@fittr.com" className="text-brand-green-500 hover:underline">support@fittr.com</a>
              </p>
              <p className="text-gray-800">
                <strong>Phone:</strong> <a href="tel:08888003430" className="text-brand-green-500 hover:underline">08888003430</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;