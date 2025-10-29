import React, { useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./footer.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="bg-gray-100 dark:bg-slate-900 text-gray-800 dark:text-white pt-12 pb-16 px-6 transition-all duration-500 relative"
      data-aos="fade-up"
    >
      {/* --- TOP GRID SECTION --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* LEFT - CONTACT INFO */}
        <div data-aos="fade-right">
          <h2 className="text-xl font-bold mb-4">📍 Contact Info</h2>
          <p className="flex items-start gap-2 text-sm mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
            <FaMapMarkerAlt className="mt-1" />
            <span className="leading-5">
              Block A, 5th Floor, Maurya Lok Complex,
              <br />
              Patna, Bihar - 800001
            </span>
          </p>
          <p className="flex items-center gap-2 text-sm mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
            <FaEnvelope />
            <a href="mailto:info@fabrox.in" className="underline">
              info@fabrox.in
            </a>
          </p>
          <p className="flex items-center gap-2 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-all">
            <FaPhoneAlt />
            <span>
              <a href="tel:7352754125" className="underline">
                7352754125
              </a>
              ,{" "}
              <a href="tel:9523933384" className="underline">
                9523933384
              </a>
            </span>
          </p>
        </div>

        {/* MIDDLE - QUICK LINKS */}
        <div className="space-y-3" data-aos="fade-up">
          <h2 className="text-xl font-bold mb-2">🔗 Quick Links</h2>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Gallery", "Products", "Contact"].map(
              (item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-all glow-text"
                  >
                    ➤ {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* RIGHT - MESSAGE FORM */}
        <div data-aos="fade-left">
          <h2 className="text-xl font-bold mb-3">📬 Message Us</h2>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 rounded-md bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
            />
            <textarea
              rows="3"
              placeholder="Your Message"
              className="w-full p-2 rounded-md bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm resize-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* --- GRADIENT DIVIDER --- */}
      <div className="w-full flex justify-center my-10" data-aos="fade-up">
        <div className="w-3/4 h-[3px] bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 rounded-full shadow-lg shadow-blue-300/40 dark:shadow-blue-900/60 animate-pulse"></div>
      </div>

      {/* --- SOCIAL + COPYRIGHT SECTION --- */}
      <div className="text-center space-y-3" data-aos="fade-up">
        {/* Social Icons */}
        <div className="flex justify-center gap-5 text-xl mb-2">
          <a
            href="https://www.facebook.com/share/16RfZvPZ4d/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-all duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/fabrox.in?igsh=bW8zcXp2amJqMGg0"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-all duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/fabrox-private-limited/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-all duration-300"
          >
            <FaLinkedinIn />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-6">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-blue-700 dark:text-blue-400">
            Fabrox
          </span>{" "}
          | All rights reserved.
        </p>

        {/* Developer Credit */}
        <p className="text-sm glow-text text-gray-600 dark:text-gray-300 leading-6">
          Designed & Developed with ❤️ by{" "}
          <a
            href="https://www.linkedin.com/in/purushotam-kumar-8b37b1281/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-700 dark:text-blue-400 underline hover:text-blue-500"
          >
            Purushotam Kumar
          </a>
        </p>
      </div>

      {/* Scroll To Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300"
        title="Scroll to Top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
