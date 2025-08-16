import React, { useState } from 'react';
import { Check, Star, Crown } from 'lucide-react';

interface ConsentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConsent: () => void;
  programName: string;
}

const ConsentModal: React.FC<ConsentModalProps> = ({ isOpen, onClose, onConsent, programName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 relative border-4 border-brand-blue-200">
        <div className="text-center">
          <div className="bg-brand-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🧒👨‍👩‍👧‍👦</span>
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-4">Parent Consent Required</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            You're about to enroll in <strong className="text-brand-blue-500">{programName}</strong>.
            As this program involves children's health and fitness, we require parent/guardian consent before proceeding.
          </p>

          <div className="bg-brand-green-100 border border-brand-green-200 rounded-xl p-4 mb-6">
            <div className="flex items-center gap-3 mb-2">
              <Check className="w-5 h-5 text-brand-green-500" />
              <span className="text-sm font-medium text-brand-green-500">Safe & Age-Appropriate Content</span>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <Check className="w-5 h-5 text-brand-green-500" />
              <span className="text-sm font-medium text-brand-green-500">Certified Child Fitness Coaches</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-brand-green-500" />
              <span className="text-sm font-medium text-brand-green-500">Parent Involvement Encouraged</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onClose}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onConsent}
              className="px-6 py-3 bg-gradient-to-r from-brand-blue-500 to-brand-blue-400 text-white rounded-full font-medium hover:from-brand-blue-400 hover:to-brand-blue-300 transition-all transform hover:scale-105"
            >
              I Consent & Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProgramsSection: React.FC = () => {
  const [modalState, setModalState] = useState<{ isOpen: boolean; program: string }>({
    isOpen: false,
    program: ''
  });

  const handleEnrollClick = (programName: string) => {
    setModalState({ isOpen: true, program: programName });
  };

  const handleConsent = () => {
    setModalState({ isOpen: false, program: '' });
    alert(`Redirecting to enrollment for ${modalState.program}...`);
  };

  const closeModal = () => {
    setModalState({ isOpen: false, program: '' });
  };

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-black">
            💪 <span className="text-brand-green-500">Fittr Kids Programs</span> – Choose What Fits Best!
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto bg-white rounded-2xl p-6 border-2 border-brand-green-200">
            <strong>"All our plans are guided by certified child nutritionists and fitness coaches. Designed with fun and safety in mind!"</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Nutrition Only */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-brand-green-500 transform hover:scale-105 transition-all duration-300 relative flex flex-col">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-brand-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                STARTER
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="bg-brand-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🥦</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">Nutrition Only</h3>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-brand-green-500 flex-shrink-0" />
                <span className="text-black">Personalized meal plans for kids</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-brand-green-500 flex-shrink-0" />
                <span className="text-black">Habit trackers & healthy snack ideas</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-brand-green-500 flex-shrink-0" />
                <span className="text-black">Downloadable tools for parents</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-brand-green-500 flex-shrink-0" />
                <span className="text-black">Email support</span>
              </li>
            </ul>

            <button
              onClick={() => handleEnrollClick('Nutrition Only Plan')}
              className="mt-auto w-full bg-brand-green-500 hover:bg-brand-green-400 text-white py-4 rounded-2xl font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Enroll Now
            </button>
          </div>

          {/* Nutrition + Group Workout */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-black transform hover:scale-105 transition-all duration-300 relative flex flex-col">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-black text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                <Star className="w-4 h-4" />
                POPULAR
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="bg-gray-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">Nutrition + Group Workout</h3>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-black flex-shrink-0" />
                <span className="text-black">1:1 Nutrition Coaching (everything in nutrition only)</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-black flex-shrink-0" />
                <span className="text-black">3x a week group classes</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-black flex-shrink-0" />
                <span className="text-black">Age-appropriate groups</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-black flex-shrink-0" />
                <span className="text-black">Led by certified kid fitness coaches</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-black flex-shrink-0" />
                <span className="text-black">Access to session calendar</span>
              </li>
            </ul>

            <button
              onClick={() => handleEnrollClick('Nutrition + Group Workout Plan')}
              className="mt-auto w-full bg-black hover:bg-gray-800 text-white py-4 rounded-2xl font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Join Group Program
            </button>
          </div>

          {/* Nutrition + 1-on-1 Personal Training */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-300 transform hover:scale-105 transition-all duration-300 relative flex flex-col">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                <Crown className="w-4 h-4" />
                PREMIUM
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="bg-gray-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">Nutrition + 1-on-1 Personal Training</h3>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-gray-600 flex-shrink-0" />
                <span className="text-black">Personal Training</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-gray-600 flex-shrink-0" />
                <span className="text-black">Private 3x week sessions</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-gray-600 flex-shrink-0" />
                <span className="text-black">Customized workouts based on fitness level</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-gray-600 flex-shrink-0" />
                <span className="text-black">Progress check-ins every week</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-gray-600 flex-shrink-0" />
                <span className="text-black">Parent coaching + involvement tips</span>
              </li>
            </ul>

            <button
              onClick={() => handleEnrollClick('Nutrition + 1-on-1 Personal Training Plan')}
              className="mt-auto w-full bg-gray-600 hover:bg-gray-700 text-white py-4 rounded-2xl font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Book Personal Plan
            </button>
          </div>
        </div>
      </div>

      <ConsentModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        onConsent={handleConsent}
        programName={modalState.program}
      />
    </section>
  );
};

export default ProgramsSection;
