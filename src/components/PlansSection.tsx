import React from 'react';
import { Users, Play, BookOpen } from 'lucide-react';

const PlansSection: React.FC = () => {
  const plans = [
    {
      icon: <Users className="w-8 h-8 text-brand-green-500" />,
      emoji: '👫',
      title: 'Parent & Kid Plans',
      description: 'Shared goals, workouts & meal ideas',
      features: 'Includes habit trackers + printable fun sheets',
      color: 'bg-brand-green-500 hover:bg-brand-green-400',
      bgColor: 'bg-gray-50 border border-gray-200'
    },
    {
      icon: <Users className="w-8 h-8 text-brand-green-500" />,
      emoji: '🧍',
      title: 'Group Sessions for Kids',
      description: 'Dance, yoga, fitness games',
      features: 'Ages 5–8, 9–12, and teens • Weekly schedule',
      color: 'bg-brand-green-500 hover:bg-brand-green-400',
      bgColor: 'bg-gray-50 border border-gray-200'
    },
    {
      icon: <Play className="w-8 h-8 text-black" />,
      emoji: '🧠',
      title: 'On-Demand Video Sessions',
      description: 'Nutrition & fitness videos',
      features: 'Watch anytime on YouTube',
      color: 'bg-black hover:bg-gray-800',
      bgColor: 'bg-gray-50 border border-gray-200'
    }
  ];

  return (
    <section id="plans" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
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
              className={`${plan.bgColor} rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
            >
              <div className="text-center mb-6">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-4xl">{plan.emoji}</span>
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">{plan.title}</h3>
                <p className="text-lg text-black font-medium mb-2">{plan.description}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{plan.features}</p>
              </div>
              
              <button className={`w-full ${plan.color} text-white py-4 rounded-2xl font-bold text-lg transform hover:scale-105 transition-all duration-300`}>
                Learn More
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="bg-brand-green-500 hover:bg-brand-green-400 text-white px-12 py-5 rounded-full font-bold text-xl shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto">
            <BookOpen className="w-6 h-6" />
            See All Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;