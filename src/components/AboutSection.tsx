import React, { useState, useEffect, useRef } from 'react';
import { Zap } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const features = [
    {
      emoji: '🥦',
      title: 'Expert-guided nutrition',
      description: 'Child-friendly and parent-approved meal plans',
      color: 'brand-green',
      particles: ['🥕', '🍎', '🥬']
    },
    {
      emoji: '🏃',
      title: 'Movement-focused fitness',
      description: 'Games, challenges, and fun classes',
      color: 'brand-green',
      particles: ['⚽', '🏀', '🎾']
    },
    {
      emoji: '👨‍👩‍👧',
      title: 'Parent support',
      description: 'Help build healthy habits at home',
      color: 'brand-green',
      particles: ['❤️', '🏠', '🤝']
    }
  ];

  const whyItMatters = [
    {
      emoji: '📱⚖️',
      title: 'Rising childhood obesity & screen time',
      description: '1 in 3 kids are inactive or not eating balanced meals regularly.',
      color: 'red'
    },
    {
      emoji: '🧠⏰',
      title: 'Poor habits begin early',
      description: 'Food relationships, energy levels, and mood are shaped young.',
      color: 'orange'
    },
    {
      emoji: '👨‍👩‍👧‍👦🤝',
      title: 'Kids learn best when families join in',
      description: 'Parent involvement creates better long-term results.',
      color: 'brand-green'
    }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Disclaimer */}
          <div className="text-center mb-8">
            <p className="text-lg font-semibold text-gray-800 bg-brand-green-100 inline-block px-6 py-2 rounded-full border border-brand-green-200 shadow-sm">
              Disclaimer: For children aged 5 to 15 only
            </p>
          </div>

          <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 relative">
              What is <span className="text-brand-green-500 relative inline-block group">Fittr Kids</span>?
            </h2>
          </div>

          <div className={`bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-12 mb-16 shadow-xl hover:shadow-2xl transition-all duration-500 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} hover:scale-[1.02]`}>
            <p className="text-lg md:text-xl text-black leading-relaxed mb-8">
              <strong className="text-brand-green-500 relative">
                Fittr Kids
              </strong> is a health-first initiative designed to build stronger, healthier habits for children through fun fitness and simple nutrition. Our mission is to make wellness part of everyday family life — without pressure, punishment, or guilt.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`text-center group cursor-pointer transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:scale-110 relative`}
                  style={{ animationDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  {/* Floating particles */}
                  {hoveredFeature === index && feature.particles.map((particle, pIndex) => (
                    <div
                      key={pIndex}
                      className="absolute animate-bounce opacity-70"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 50}%`,
                        animationDelay: `${pIndex * 300}ms`,
                        fontSize: '1.2rem'
                      }}
                    >
                      {particle}
                    </div>
                  ))}

                  <div className={`bg-${feature.color}-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative group-hover:animate-pulse transition-all duration-300 group-hover:scale-125 group-hover:bg-${feature.color}-600`}>
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {feature.emoji}
                    </span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 group-hover:animate-ping" />
                  </div>

                  <h3 className="font-bold text-black mb-2 group-hover:text-brand-green-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-3xl md:text-4xl font-black text-black relative">
              Why It Matters <span className="text-brand-green-500 relative inline-block">(Now More Than Ever)</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyItMatters.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center cursor-pointer transition-all duration-500 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:rotate-1 hover:scale-105 relative overflow-hidden group`}
                  style={{ animationDelay: `${600 + index * 200}ms` }}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Animated background glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0" />

                  <div className="relative mb-4">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto bg-${item.color}-100 border-2 border-${item.color}-200 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:bg-${item.color}-200`}>
                      <span className="text-3xl group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg">
                        {item.emoji}
                      </span>
                    </div>
                    {activeCard === index && (
                      <div className="absolute inset-0 animate-ping">
                        <div className={`w-16 h-16 rounded-full bg-${item.color}-200 opacity-50 mx-auto`} />
                      </div>
                    )}
                    <Zap className={`absolute -top-1 -right-1 w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce`} />
                  </div>

                  <h4 className="font-bold text-lg mb-3 text-black group-hover:text-gray-900 transition-colors duration-300 relative">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                    {item.description}
                  </p>

                  <div className={`absolute top-0 right-0 w-8 h-8 bg-${item.color}-200 rounded-bl-full opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;