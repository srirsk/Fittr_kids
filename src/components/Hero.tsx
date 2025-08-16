import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import bgImage from "./images/ChatGPT Image Aug 16, 2025, 08_08_47 AM.png";
import heroTitle from "./images/3d balloon.png";

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-start text-center overflow-hidden font-['Baloo_2'] hero-section"
      style={{
        backgroundImage: `url(${heroTitle}), url(${bgImage})`,
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      {/* --- Lottie Animations in Portrait Glass Cards --- */}
      {/* Top Left */}
      <div className="absolute top-44 left-[15%] glass-card-portrait">
        <DotLottieReact
          src="https://lottie.host/c7c062dc-324a-4365-978d-1df5d306912f/kQM1Ri4cNt.lottie"
          className="w-28 sm:w-32 md:w-36 animate-float-slow"
          loop
          autoplay
        />
      </div>

      {/* Top Right */}
      <div className="absolute top-44 right-[15%] glass-card-portrait">
        <DotLottieReact
          src="https://lottie.host/34c8828b-900e-4039-b83d-973473141055/Vb5htTnYgD.lottie"
          className="w-28 sm:w-32 md:w-36 animate-float-med"
          loop
          autoplay
        />
      </div>

      {/* Bottom Left */}
      <div className="absolute bottom-48 left-[30%] glass-card-portrait">
        <DotLottieReact
          src="https://lottie.host/44c52e08-7116-4aa7-8dbc-938fe346608a/7lWL1JOdGU.lottie"
          className="w-28 sm:w-32 md:w-36 animate-float-fast"
          loop
          autoplay
        />
      </div>

      {/* Bottom Right */}
      <div className="absolute bottom-48 right-[30%] glass-card-portrait">
        <DotLottieReact
          src="https://lottie.host/d9f82825-e7cf-404d-9b10-e71bf9539905/FiNgFx9WPq.lottie"
          className="w-28 sm:w-32 md:w-36 animate-float-slow"
          loop
          autoplay
        />
      </div>

      {/* --- Bottom Section (Subtitle + Buttons) --- */}
      <div className="absolute bottom-12 w-full flex flex-col items-center px-4">
        <p className="text-lg md:text-xl max-w-2xl text-white drop-shadow-md mb-6">
          Fun fitness and nutrition programs designed for kids and parents together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-[#11A663] text-white px-8 py-4 rounded-full font-bold text-lg shadow-md hover:scale-105 transition-transform">
            Start Your Plan 💪
          </button>
          <button className="bg-white text-[#11A663] px-8 py-4 rounded-full font-bold text-lg shadow-md border-2 border-[#11A663] hover:scale-105 transition-transform">
            Watch a Session 🎥
          </button>
        </div>
      </div>

      {/* --- Floating Animation Keyframes + Glassmorphic Styles --- */}
      <style jsx>{`
        @keyframes float-slow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-med {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-fast {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-med {
          animation: float-med 4s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 3s ease-in-out infinite;
        }

        .hero-section {
          background-size: 100%, cover;
          background-position: center center, center;
        }
        @media (min-width: 640px) {
          .hero-section {
            background-size: 50%, cover;
            background-position: center top -60px, center;
          }
        }
        @media (min-width: 768px) {
          .hero-section {
            background-size: 40%, cover;
            background-position: center top -80px, center;
          }
        }
        @media (min-width: 1024px) {
          .hero-section {
            background-size: 35%, cover;
            background-position: center, center;
          }
        }

        /* Fixed Portrait Glassmorphic Card */
        /* --- Fixed Portrait Glassmorphic Card --- */
.glass-card-portrait {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  /* Maintain 4:3 ratio */
  width: 120px;   /* base width */
  height: calc(120px * 4 / 3); /* ensures 4:3 ratio */

  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

/* Scale up Lottie animations inside card without resizing card */
.glass-card-portrait .dotlottie-player,
.glass-card-portrait canvas {
  transform: scale(1.3);   /* Increase size */
}

      `}</style>
    </section>
  );
};

export default Hero;
