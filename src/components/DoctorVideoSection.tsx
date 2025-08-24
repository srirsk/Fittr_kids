import React from 'react';
import '@fontsource/bubblegum-sans';
import '@fontsource/rubik';
import FittrLogo from './images/fittrlogo.png'; // Adjust the path to your logo

interface DoctorVideoSectionProps {
  youtubeId: string; // e.g. "dQw4w9WgXcQ"
}

const DoctorVideoSection: React.FC<DoctorVideoSectionProps> = ({ youtubeId }) => {
  return (
    <section
      id="doctor-video"
      className="py-20 bg-gradient-to-r from-blue-50 to-pink-50 relative"
      style={{ fontFamily: '"Rubik", sans-serif' }}
    >
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Text & Video */}
          <div>
            <h2
              className="text-3xl md:text-4xl font-black text-gray-800 leading-snug mb-4"
              style={{ fontFamily: '"Bubblegum Sans", cursive' }}
            >
              Learn the Importance of{' '}
              <span className="text-brand-green-500 relative inline-block">
                Early Nutrition
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              From <span className="font-semibold text-brand-green-500">Dr. Prashant</span> – Pediatrician and long-term Coach with Fittr
            </p>

            {/* YouTube Embed */}
            <div
              className="aspect-video rounded-2xl overflow-hidden shadow-xl"
            >
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title="Doctor's Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Right: Logo */}
          <div
            className="relative flex justify-center items-center min-h-[300px]"
          >
            {/* Fittr Logo */}
            <div className="relative">
              <img
                src={FittrLogo}
                alt="Fittr Logo"
                className="w-40 md:w-52 drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorVideoSection;