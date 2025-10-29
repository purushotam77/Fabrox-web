import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import QR from "../../assets/qr.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://formsubmit.co/ajax/info@fabrox.in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", mobile: "", message: "" });
        setTimeout(() => {
          window.location.href = "https://wa.me/917352754125";
        }, 2000);
      } else {
        toast.error("Something went wrong. Try again.");
      }
    } catch {
      toast.error("Error submitting form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-tr from-slate-100 to-slate-300 dark:from-slate-900 dark:to-slate-800 py-16 px-4 sm:px-10 lg:px-20 text-gray-800 dark:text-white transition-all duration-500"
    >
      <ToastContainer />
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          data-aos="fade-down"
        >
          Let's Connect 🤝
        </h2>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Left Side */}
          <div data-aos="fade-right">
            <div className="space-y-4 text-lg font-medium">
              <p>
                📍 <strong>Address:</strong><br />
                Block - A, 5th Floor, Maurya Lok Complex, Patna, Bihar - 800001
              </p>
              <p>📧 <strong>Email:</strong> info@fabrox.in</p>
              <p>📞 <strong>Phone:</strong> 7352754125, 9523933384</p>
            </div>

            <div className="flex gap-4 text-2xl mt-6">
              <a href="https://facebook.com" target="_blank"><FaFacebook className="hover:text-blue-600" /></a>
              <a href="https://instagram.com" target="_blank"><FaInstagram className="hover:text-pink-500" /></a>
              <a href="https://linkedin.com" target="_blank"><FaLinkedin className="hover:text-blue-700" /></a>
              <a href="https://twitter.com" target="_blank"><FaTwitter className="hover:text-sky-400" /></a>
              <a href="https://wa.me/917352754125" target="_blank"><FaWhatsapp className="hover:text-green-500" /></a>
            </div>

            <iframe
              title="Fabrox Location"
              className="w-full h-60 rounded-xl shadow-md mt-8 border"
              src="https://www.google.com/maps?q=Block+A,+5th+Floor,+Maurya+Lok+Complex,+Patna,+Bihar+-+800001&output=embed"
              loading="lazy"
            ></iframe>

            <div className="mt-6 text-center">
              <p className="mb-2 font-semibold">📲 Scan to Connect</p>
              <img
                src={QR}
                alt="QR Code"
                className="w-32 h-32 mx-auto rounded-lg shadow-md border border-slate-300 p-1 bg-white"
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <div
            className="p-8 backdrop-blur-md bg-white/70 dark:bg-slate-800/70 rounded-2xl shadow-xl"
            data-aos="fade-left"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-semibold mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 px-6 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold text-lg rounded-lg transition-transform transform hover:scale-105"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
