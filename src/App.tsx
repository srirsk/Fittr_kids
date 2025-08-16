import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import PlansSection from './components/PlansSection';
import VideoSection from './components/VideoSection';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User Email:", email);
    setShowPopup(false);
    alert("Thanks! You'll start receiving free nutrition content soon.");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <ProgramsSection />
      <PlansSection />
      <VideoSection />
      <CommunitySection />
      <Footer />

      {/* Sticky CTA Bar */}
      <div className="fixed bottom-4 right-4 z-40">
        <button className="bg-brand-green-500 hover:bg-brand-green-400 text-white px-6 py-3 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
          💬 Chat with a Coach
        </button>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 text-center relative">
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Unlock Free Kids’ Nutrition Tips 🍎
            </h2>
            <p className="text-gray-600 mb-6">
              Get expert advice, meal ideas, and healthy hacks for your kids—straight to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-green-500 outline-none"
              />
              <button
                type="submit"
                className="bg-brand-green-500 hover:bg-brand-green-400 text-white py-2 rounded-lg font-semibold transition-all duration-300"
              >
                Get Free Content
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
