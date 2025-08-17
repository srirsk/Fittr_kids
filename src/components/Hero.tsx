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
      {/* --- Mobile (Arch Layout) --- */}
      <div className="sm:hidden w-full flex justify-center mt-32 relative arch-container">
        <div className="arch-row flex gap-4 relative">
          {/* Card 1 */}
          <div className="glass-card-portrait">
            <DotLottieReact
              src="https://lottie.host/c7c062dc-324a-4365-978d-1df5d306912f/kQM1Ri4cNt.lottie"
              className="w-16 animate-float-slow"
              loop
              autoplay
            />
          </div>
          {/* Card 2 */}
          <div className="glass-card-portrait arch-up">
            <DotLottieReact
              src="https://lottie.host/34c8828b-900e-4039-b83d-973473141055/Vb5htTnYgD.lottie"
              className="w-16 animate-float-med"
              loop
              autoplay
            />
          </div>
          {/* Card 3 */}
          <div className="glass-card-portrait arch-up">
            <DotLottieReact
              src="https://lottie.host/44c52e08-7116-4aa7-8dbc-938fe346608a/7lWL1JOdGU.lottie"
              className="w-16 animate-float-fast"
              loop
              autoplay
            />
          </div>
          {/* Card 4 */}
          <div className="glass-card-portrait">
            <DotLottieReact
              src="https://lottie.host/d9f82825-e7cf-404d-9b10-e71bf9539905/FiNgFx9WPq.lottie"
              className="w-16 animate-float-slow"
              loop
              autoplay
            />
          </div>
        </div>
      </div>

      {/* --- Desktop (Corner Layout) --- */}
      <div className="hidden sm:block">
        {/* Top Left */}
        <div className="absolute glass-card-portrait top-[30%] left-[15%]">
          <DotLottieReact
            src="https://lottie.host/c7c062dc-324a-4365-978d-1df5d306912f/kQM1Ri4cNt.lottie"
            className="w-28 md:w-36 animate-float-slow"
            loop
            autoplay
          />
        </div>
        {/* Top Right */}
        <div className="absolute glass-card-portrait top-[30%] right-[15%]">
          <DotLottieReact
            src="https://lottie.host/34c8828b-900e-4039-b83d-973473141055/Vb5htTnYgD.lottie"
            className="w-28 md:w-36 animate-float-med"
            loop
            autoplay
          />
        </div>
        {/* Bottom Left */}
        <div className="absolute glass-card-portrait bottom-[25%] left-[30%]">
          <DotLottieReact
            src="https://lottie.host/44c52e08-7116-4aa7-8dbc-938fe346608a/7lWL1JOdGU.lottie"
            className="w-28 md:w-36 animate-float-fast"
            loop
            autoplay
          />
        </div>
        {/* Bottom Right */}
        <div className="absolute glass-card-portrait bottom-[25%] right-[30%]">
          <DotLottieReact
            src="https://lottie.host/d9f82825-e7cf-404d-9b10-e71bf9539905/FiNgFx9WPq.lottie"
            className="w-28 md:w-36 animate-float-slow"
            loop
            autoplay
          />
        </div>
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

      <style jsx>{`
        /* Floating Animations */
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
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-med { animation: float-med 4s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 3s ease-in-out infinite; }

        .hero-section {
          background-size: 100%, cover;
          background-position: center center, center;
        }
        @media (min-width: 640px) {
          .hero-section {
            background-size: 50%, cover;
            background-position: center, center;
          }
        }
        @media (min-width: 768px) {
          .hero-section {
            background-size: 40%, cover;
            background-position: center, center;
          }
        }
        @media (min-width: 1024px) {
          .hero-section {
            background-size: 35%, cover;
            background-position: center, center;
          }
        }

        /* Glassmorphic Card */
        .glass-card-portrait {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 80px; /* reduced size for mobile */
          height: calc(80px * 4 / 3);
          background: rgba(255, 255, 255, 0.1);
          border-radius: 22px;
          backdrop-filter: blur(13px);
          -webkit-backdrop-filter: blur(13px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          /* removed shadow */
          overflow: hidden;
        }
        @media (min-width: 640px) {
          .glass-card-portrait {
            width: 140px;
            height: calc(140px * 4 / 3);
          }
        }

        /* Scale up Lotties on Mobile */
        .glass-card-portrait .dotlottie-player,
        .glass-card-portrait canvas {
          transform: scale(2);
        }
        @media (min-width: 640px) {
          .glass-card-portrait .dotlottie-player,
          .glass-card-portrait canvas {
            transform: scale(1.4);
          }
        }

        /* Arch effect for mobile row */
        .arch-container .arch-row > :nth-child(2),
        .arch-container .arch-row > :nth-child(3) {
          margin-top: -20px;
        }
      `}</style>
    </section>
  );
};

export default Hero;
