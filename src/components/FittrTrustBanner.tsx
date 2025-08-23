import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import "@fontsource/bubblegum-sans"; // npm i @fontsource/bubblegum-sans
import "@fontsource/rubik"; // npm i @fontsource/rubik

/**
 * FittrTrustBanner (Kids theme version)
 */
const FittrTrustBanner: React.FC = () => {
  return (
    <section
      aria-labelledby="fittr-trust-title"
      className="mb-12"
      style={{ fontFamily: '"Rubik", sans-serif' }}
    >
      <div className="container mx-auto px-6 sm:px-0">
        <div className="max-w-4xl mx-auto sm:max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.01]">
            {/* Powered by band */}
            <div className="absolute inset-x-0 top-0">
              <div className="mx-auto w-full max-w-3xl bg-brand-green-500 text-white rounded-t-3xl">
                <div
                  className="px-4 py-1.5 text-center text-sm font-bold tracking-wide"
                  style={{ fontFamily: '"Bubblegum Sans", cursive' }}
                >
                  Powered by <span className="font-extrabold">Fittr</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-6 pb-6 pt-10 md:px-8 md:pt-12">
              <h2
                id="fittr-trust-title"
                className="text-2xl md:text-3xl font-black text-gray-800 mb-6 text-center"
                style={{ fontFamily: '"Bubblegum Sans", cursive' }}
              >
                Why Trust <span className="text-brand-green-500">Fittr Kids?</span>
              </h2>

              <ul className="mt-4 space-y-4">
                {[
                  "Backed by INFS certified coaches",
                  "From the team that transformed 3M+ adults globally",
                  "India’s most loved fitness community since 2016",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <CheckCircle
                      className="mt-0.5 w-5 h-5 text-brand-green-500 flex-none"
                      aria-hidden="true"
                    />
                    <span className="text-base font-medium text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 text-center">
                <a
                  href="https://www.fittr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-green-500 px-6 py-3 text-base font-bold text-white shadow-md hover:bg-brand-green-600 transition-all duration-300"
                  aria-label="Learn more about Fittr (opens in a new tab)"
                  style={{ fontFamily: '"Bubblegum Sans", cursive' }}
                >
                  <span>Learn More About Fittr</span>
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FittrTrustBanner;