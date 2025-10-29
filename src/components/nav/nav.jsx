import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useLocation } from "react-router-dom";
import faviconLight from "../../assets/Favicon/fabrox.png";
import faviconDark from "../../assets/Favicon/fabrox2.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/#hero" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/#products" },
    { name: "Gallery", path: "/#gallery" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    setTimeout(() => AOS.refreshHard(), 100);
  }, [darkMode]);

  // ✅ Add padding to body to prevent content hiding behind navbar
  useEffect(() => {
    document.body.style.paddingTop = "64px"; // because navbar height = h-16 = 64px
    return () => {
      document.body.style.paddingTop = "0px"; // cleanup if component unmounts
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 shadow-md backdrop-blur-lg transition-colors duration-700 ${
        darkMode ? "bg-gradient-to-r from-slate-900 to-slate-800" : "bg-white/90"
      }`}
      data-aos="fade-down"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-4 group transition-all duration-500">
            <div className="w-20 h-auto">
              <img
                src={faviconLight}
                alt="Logo Light"
                className="w-full object-contain shadow-md rounded-md group-hover:shadow-blue-400 transition duration-500 dark:hidden"
              />
              <img
                src={faviconDark}
                alt="Logo Dark"
                className="w-full object-contain shadow-md rounded-md group-hover:shadow-white transition duration-500 hidden dark:block"
              />
            </div>
            <div className="hidden sm:block text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-white dark:to-slate-400 text-transparent bg-clip-text drop-shadow hover:drop-shadow-[0_0_15px_rgba(99,102,241,0.9)] transition-all duration-500 transform hover:scale-105">
              Fabrox
            </div>
          </div>

          {/* Dark mode + Hamburger (tablet & mobile) */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-indigo-600 dark:to-blue-800 text-white px-4 py-1 rounded-full shadow-md hover:shadow-indigo-500/50 dark:hover:shadow-blue-500/50 transition-all duration-500"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-blue-900 dark:text-white font-medium px-4 py-1 rounded-full transition-all duration-300 hover:text-white hover:scale-105 hover:bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-indigo-500 dark:to-blue-700 text-white px-4 py-1 rounded-full shadow-md hover:shadow-blue-500/40 dark:hover:shadow-indigo-400/40 transition-all duration-500"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col items-center py-4 bg-white/90 dark:bg-slate-800 backdrop-blur-md space-y-2 shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block w-full text-center text-blue-900 dark:text-white font-medium py-2 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white rounded transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-2 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-indigo-400 dark:to-blue-700 text-white px-4 py-1 rounded-full shadow-lg hover:shadow-blue-500/40 dark:hover:shadow-indigo-400/40 transition-all duration-500"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
