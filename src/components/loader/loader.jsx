import React from "react";

const Loader = () => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900 transition-all duration-300"
      data-aos="fade-zoom-in"
    >
      <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes spin-reverse {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          @keyframes logoBlink {
            0%, 100% { opacity: 0.85; transform: scale(1); filter: drop-shadow(0 0 10px rgba(147,51,234,0.5)); }
            50% { opacity: 1; transform: scale(1.1); filter: drop-shadow(0 0 20px rgba(59,130,246,0.9)); }
          }
          .animate-spin-slow {
            animation: spin-slow 6s linear infinite;
          }
          .animate-spin-reverse {
            animation: spin-reverse 6s linear infinite;
          }
          .animate-logo-blink {
            animation: logoBlink 1.5s ease-in-out infinite;
          }
        `}
      </style>

      <div className="relative flex flex-col items-center justify-center gap-4">
        {/* 3D Glowing Orb Ring with Logo inside */}
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 animate-spin-slow blur-xl opacity-60"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 animate-spin-reverse blur-sm"></div>

          {/* Inner circle with company logo */}
          <div className="absolute inset-2 bg-white dark:bg-gray-900 rounded-full shadow-inner shadow-black/20 flex items-center justify-center overflow-hidden">
            <img
              src="/loader.png" 
              alt="FABROX Logo"
              className="w-16 h-16 object-contain animate-logo-blink"
            />
          </div>
        </div>

        {/* FABROX Branding with 3D Text Style */}
        <div className="relative z-10 text-4xl sm:text-5xl font-extrabold tracking-widest text-gray-800 dark:text-white animate-3dpop">
          <span className="inline-block transform transition-transform duration-700 hover:scale-110 hover:rotate-1 hover:skew-y-1">
            FABROX
          </span>
        </div>

        {/* Tagline */}
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 tracking-wide animate-pulse">
          Innovate. Build. Fabrox.
        </p>
      </div>
    </div>
  );
};

export default Loader;
