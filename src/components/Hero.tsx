import React from 'react';
import { Play, Zap } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import heroBg from './images/ChatGPT Image Aug 16, 2025, 08_08_47 AM.png'; // 👈 import local image

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden font-['Baloo_2'] flex items-center justify-center bg-black text-white"
      style={{
        backgroundImage: `url(${heroBg})`, // 👈 use local image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
          <span className="inline-block transform -rotate-2 bg-[#348EE3] text-white px-4 py-1 rounded-md shadow-lg">
            Strong Bodies.
          </span>
          <br />
          <span className="inline-block transform rotate-1 bg-[#2BAD73] text-white px-4 py-1 rounded-md shadow-lg">
            Smart Habits.
          </span>
          <br />
          <span className="inline-block transform -rotate-1 bg-[#FFB866] text-black px-4 py-1 rounded-md shadow-lg">
            Happy Kids!
          </span>
        </h1>

        {/* Row of Lotties */}
        <div className="relative mb-10 inline-block rounded-2xl overflow-hidden">
          <div className="relative flex gap-6 p-5">
            <div className="w-20 h-20 flex items-center justify-center animate-float-slow">
              <DotLottieReact
                src="https://lottie.host/44c52e08-7116-4aa7-8dbc-938fe346608a/7lWL1JOdGU.lottie"
                loop
                autoplay
              />
            </div>
            <div className="w-20 h-20 flex items-center justify-center animate-float-med">
              <DotLottieReact
                src="https://lottie.host/d9f82825-e7cf-404d-9b10-e71bf9539905/FiNgFx9WPq.lottie"
                loop
                autoplay
              />
            </div>
            <div className="w-20 h-20 flex items-center justify-center animate-float-fast">
              <DotLottieReact
                src="https://lottie.host/c7c062dc-324a-4365-978d-1df5d306912f/kQM1Ri4cNt.lottie"
                loop
                autoplay
              />
            </div>
            <div className="w-20 h-20 flex items-center justify-center animate-float-slow">
              <DotLottieReact
                src="https://lottie.host/34c8828b-900e-4039-b83d-973473141055/Vb5htTnYgD.lottie"
                loop
                autoplay
              />
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl font-medium mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md text-white">
          Fun fitness and nutrition programs designed for kids and parents together.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('programs')}
            className="group bg-[#11A663] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
          >
            <Zap className="w-6 h-6 group-hover:animate-pulse text-white" />
            Start Your Plan 💪
          </button>
          <button
            onClick={() => scrollToSection('videos')}
            className="group bg-white text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg border-2 border-[#11A663] transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
          >
            <Play className="w-6 h-6 group-hover:animate-pulse text-[#11A663]" />
            Watch a Session 🎥
          </button>
        </div>
      </div>

      {/* Floating Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes float-med {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes float-fast {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(8deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-med {
          animation: float-med 4.5s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 3.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
