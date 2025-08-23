import React, { useState } from "react";
import bannerImg from "./images/emailpic2.png"; // 👈 adjust path to your local image

interface EmailSignupPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailSignupPopup: React.FC<EmailSignupPopupProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User Email:", email);
    onClose();
    alert("🎉 Thanks! You'll start receiving free nutrition content soon.");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6">
      <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl max-w-md w-full overflow-hidden border border-gray-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-lg transition"
        >
          ✖
        </button>

        {/* Banner Image */}
        <div className="w-full aspect-[4/3] overflow-hidden">
          <img
            src={bannerImg}
            alt="Kids exercising banner"
            className="w-full h-full object-cover rounded-t-3xl"
          />
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-3 tracking-tight">
            Unlock Free Kids’ Nutrition Guides <span className="inline-block">📘✨</span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
                      Download trusted resources and easy tips to help your child build healthy eating habits
 💪🥦
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none transition"
            />
            <button
              type="submit"
              className="bg-brand-green-500 hover:bg-brand-green-400 text-white py-3 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              Get Free Content 🎁
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailSignupPopup;
