import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import bgImage from "./images/ChatGPT Image Aug 16, 2025, 08_08_47 AM.png"; // 👈 background image
import heroTitle from "./images/3d balloon.png"; // 👈 title image as bg

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-start text-center overflow-hidden font-['Baloo_2']"
      style={{
        backgroundImage: `url(${heroTitle}), url(${bgImage})`, // 👈 stacked bg images
        backgroundSize: "40%, cover",
        backgroundPosition: "center top -80px, center", // 👈 Adjusted title image to move up by 50px
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      {/* Floating Background Characters */}
      <DotLottieReact
        src="https://lottie.host/c7c062dc-324a-4365-978d-1df5d306912f/kQM1Ri4cNt.lottie"
        className="absolute bottom-10 left-10 w-32 animate-float-slow"
        loop
        autoplay
      />
      <DotLottieReact
        src="https://lottie.host/34c8828b-900e-4039-b83d-973473141055/Vb5htTnYgD.lottie"
        className="absolute top-20 left-1/4 w-28 animate-float-med"
        loop
        autoplay
      />
      <DotLottieReact
        src="https://lottie.host/44c52e08-7116-4aa7-8dbc-938fe346608a/7lWL1JOdGU.lottie"
        className="absolute top-32 right-1/4 w-28 animate-float-fast"
        loop
        autoplay
      />
      <DotLottieReact
        src="https://lottie.host/d9f82825-e7cf-404d-9b10-e71bf9539905/FiNgFx9WPq.lottie"
        className="absolute bottom-0 right-12 w-36 animate-float-slow"
        loop
        autoplay
      />
      {/* Bottom Section (Subtitle + Buttons) */}
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
      {/* Floating Animation */}
      <style jsx>{`
        @keyframes float-slow {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes float-med {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes float-fast {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
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
        /* Responsive title image size */
        @media (min-width: 768px) {
          section {
            background-size: 25%, cover;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;