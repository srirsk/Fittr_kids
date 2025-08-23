import React, { useState } from "react";

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
    alert("Thanks! You'll start receiving free nutrition content soon.");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 sm:p-6">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 text-center relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Unlock Free Kids’ Nutrition Guides📘
        </h2>
        <p className="text-gray-600 mb-6">
          Download trusted resources and easy tips to help your child build healthy eating habits
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-green-500 outline-none"
          />
          <button
            type="submit"
            className="bg-brand-green-500 hover:bg-brand-green-400 text-white py-2 rounded-lg font-semibold transition-all duration-300"
          >
            Get Free Content
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailSignupPopup;
