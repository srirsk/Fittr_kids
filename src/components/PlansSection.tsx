import React, { useState, useEffect, useRef } from 'react';
import { BookOpen } from 'lucide-react';

const PlansSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activePlan, setActivePlan] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setIsVisible(true), 100);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const plans = [
    {
      emoji: '👫',
      title: 'Parent & Kid Plans',
      description: 'Shared goals, workouts & meal ideas',
      features: 'Includes habit trackers + printable fun sheets',
      particles: ['🏃', '🥗', '💪'],
      buttonColor: 'bg-brand-green-500 hover:bg-brand-green-400',
      price: 10500,
      discount: 8500,
    },
    {
      emoji: '🧍',
      title: 'Group Sessions for Kids',
      description: 'Dance, yoga, fitness games',
      features: 'Ages 5–8, 9–12, and teens • Weekly schedule',
      particles: ['🕺', '🤸', '🎯'],
      buttonColor: 'bg-brand-green-500 hover:bg-brand-green-400',
      price: 14500,
      discount: 11500,
    },
    {
      emoji: '🧠',
      title: 'On-Demand Video Sessions',
      description: 'Nutrition & fitness videos',
      features: 'Watch anytime on YouTube',
      particles: ['📹', '🥦', '🏋️'],
      buttonColor: 'bg-black hover:bg-gray-800',
      price: 22000,
      discount: 18000,
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      id="plans" 
      className="py-20 bg-white relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Floating background dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-green-300 to-blue-300 rounded-full opacity-20 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Interactive cursor glow */}
      <div
        className="absolute pointer-events-none opacity-30 transition-opacity duration-300"
        style={{
          left: mousePosition.x - 50,
          top: mousePosition.y - 50,
          width: '100px',
          height: '100px',
          background: 'radial-gradient(circle, rgba(74, 222, 128, 0.3) 0%, transparent 70%)',
          borderRadius: '50%'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-black">
            Our <span className="text-brand-green-500">Plans</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect program for your family's fitness journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow-xl transition-all duration-500 relative overflow-hidden group
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                hover:shadow-2xl hover:scale-[1.02] flex flex-col h-full`}  // 👈 flex + h-full
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => {
                setHoveredPlan(index);
                setActivePlan(index);
              }}
              onMouseLeave={() => {
                setHoveredPlan(null);
                setActivePlan(null);
              }}
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0" />

              {/* Floating particles on hover */}
              {hoveredPlan === index && plan.particles.map((particle, pIndex) => (
                <div
                  key={pIndex}
                  className="absolute animate-bounce opacity-70"
                  style={{
                    left: `${Math.random() * 80}%`,
                    top: `${Math.random() * 40}%`,
                    animationDelay: `${pIndex * 200}ms`,
                    fontSize: '1.2rem'
                  }}
                >
                  {particle}
                </div>
              ))}

              <div className="text-center mb-6 relative">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg relative group-hover:animate-pulse transition-all duration-300 group-hover:scale-125">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {plan.emoji}
                  </span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 group-hover:animate-ping" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-brand-green-600 transition-colors duration-300">
                  {plan.title}
                </h3>
                <p className="text-lg text-black font-medium mb-2 group-hover:text-gray-900 transition-colors duration-300">
                  {plan.description}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {plan.features}
                </p>

                {/* Pricing */}
                <div className="mt-6 mb-4">
                  <p className="text-gray-500 line-through text-lg">₹{plan.price.toLocaleString()}</p>
                  <p className="text-2xl font-extrabold text-brand-green-600">₹{plan.discount.toLocaleString()}</p>
                </div>
              </div>

              {/* CTA Button pinned bottom */}
              <button
                className={`mt-auto w-full ${plan.buttonColor} text-white py-4 rounded-2xl font-bold text-lg transform transition-all duration-300 hover:scale-105 relative overflow-hidden`}
              >
                <span className="relative z-10">Get Plan</span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0" />
              </button>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="bg-brand-green-500 hover:bg-brand-green-400 text-white px-12 py-5 rounded-full font-bold text-xl shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto relative overflow-hidden group">
            <BookOpen className="w-6 h-6 relative z-10" />
            <span className="relative z-10">See All Programs</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
