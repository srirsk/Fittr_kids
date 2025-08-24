import React from "react";
import { motion } from "framer-motion";
import FittrLogo from "./images/fittrlogo.png"; // adjust the path to your logo

interface DoctorVideoSectionProps {
  youtubeId: string; // e.g. "dQw4w9WgXcQ"
}

const floating = (delay = 0, rotate = false) => ({
  initial: { y: 0, x: 0, rotate: 0, scale: 1 },
  animate: {
    y: [0, -20, 0, 15, 0],
    x: [0, 10, -10, 5, 0],
    rotate: rotate ? [0, 15, -15, 10, 0] : 0,
    scale: [1, 1.1, 0.9, 1],
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
    delay,
  },
});

const DoctorVideoSection: React.FC<DoctorVideoSectionProps> = ({ youtubeId }) => {
  return (
    <section className="w-full bg-gradient-to-r from-blue-50 to-pink-50 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: Text & Video */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug mb-4">
            Learn the importance of starting nutrition at an early age
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-6">
            From <span className="font-semibold">Dr. Prashant</span> – Pediatrician and long-term Coach with Fittr
          </p>

          {/* YouTube Embed */}
          <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title="Doctor's Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Right: Logo + Animated playful objects */}
        <div className="relative flex justify-center items-center min-h-[300px]">
          {/* Fittr Logo */}
          <motion.img
            src={FittrLogo}
            alt="Fittr Logo"
            className="w-40 md:w-52 relative z-10 drop-shadow-lg"
            initial={{ scale: 0.9 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Floating Stars / Shapes */}
          <motion.div
            className="absolute top-8 left-8 text-yellow-400 text-4xl"
            {...floating(0.2, true)}
          >
            ⭐
          </motion.div>
          <motion.div
            className="absolute bottom-10 right-10 text-pink-500 text-4xl"
            {...floating(0.5, true)}
          >
            ❤️
          </motion.div>
          <motion.div
            className="absolute top-16 right-20 text-blue-500 text-3xl"
            {...floating(0.8, true)}
          >
            ✨
          </motion.div>
          <motion.div
            className="absolute bottom-20 left-12 text-green-500 text-4xl"
            {...floating(1.2, true)}
          >
            🍎
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DoctorVideoSection;
