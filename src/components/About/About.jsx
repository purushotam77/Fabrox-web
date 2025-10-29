import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";

// Images
import img1 from "../../assets/team/rishika.jpeg";
import img2 from "../../assets/team/ankit.jpg";
import img3 from "../../assets/team/uttam.jpg";
import img4 from "../../assets/team/Purushotam.png";
import img5 from "../../assets/team/devashish.jpg";
import img6 from "../../assets/team/principlw.jpg";

// Team Members (Directors + Team)
const team = [
  {
    name: "Rishika Raj",
    role: "Founder & Managing Director",
    thought: "Leads the innovation and product design with a strong eco-centric vision.",
    img: img1,
    glow: "hover:shadow-pink-500/70"
  },
  {
    name: "Ankit Raj",
    role: "Co-Founder & Chief Operating Officer",
    thought: "Manages operations, strategy, and partnerships across the state.",
    img: img2,
    glow: "hover:shadow-blue-500/70"
  },
  {
    name: "Uttam Kumar",
    role: "Executive Manager",
    thought: "Drives market execution, logistics, and B2B collaborations.",
    img: img3,
    glow: "hover:shadow-yellow-500/70"
  },
  {
    name: "Purushotam Kumar",
    role: "Website Handler",
    thought: "Manages our digital presence and ensures seamless web experiences.",
    img: img4,
    glow: "hover:shadow-purple-500/70"
  }
];

// Mentors
const mentors = [
  {
    name: "Er. Devasish Kumar",
    role: "Mentor & Guide",
    thought: "A trusted advisor and District Startup Coordinator guiding strategy and scale.",
    img: img5,
    glow: "hover:shadow-green-500/70"
  },
  {
    name: "Dr. Anant Kumar",
    role: "Mentor",
    thought: "Principal, Government Engineering College, Vaishali — guiding us with academic and administrative insights to align with youth innovation and institutional values.",
    img: img6,
    glow: "hover:shadow-red-500/70"
  }
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white dark:bg-slate-900 text-gray-800 dark:text-white transition-all duration-500 px-4 py-10" id="about">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center" data-aos="fade-down">
          🧵 About FABROX PRIVATE LIMITED
        </h1>

        {/* Description */}
        <div className="space-y-6 text-base md:text-lg leading-relaxed text-justify">
          <p data-aos="fade-up">
            FABROX PRIVATE LIMITED is a next-generation fashion startup started by a group of B.Tech 3rd-year students...
          </p>
          <p data-aos="fade-up">
            🌱 Our slogan "WEAR THE CHANGE" reflects our mission to blend sustainability with style...
          </p>
          <p data-aos="fade-up">
            💰 We are proudly funded under the Startup Bihar Scheme by the Department of Industries, Government of Bihar...
          </p>
        </div>

        {/* Directors */}
        <h2 className="text-2xl font-bold mb-4 mt-12 text-center" data-aos="fade-up">👑 Our Directors</h2>
        <div className="flex flex-wrap justify-center gap-6" data-aos="fade-up">
          {team.slice(0, 2).map((member, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-slate-800 p-5 rounded-xl border dark:border-slate-700 transform transition-all duration-500 hover:scale-105 hover:rotate-[1deg] hover:shadow-2xl ${member.glow} animate-border-glow`}
              data-aos="zoom-in-up"
            >
              <img
                src={member.img}
                alt={member.name}
                className="rounded-full w-28 h-28 mx-auto mb-4 border-4 border-blue-400 dark:border-blue-600 transition-transform duration-300 hover:scale-110 cursor-pointer"
                onClick={() => window.open(member.img, "_blank")}
              />
              <h3 className="text-xl font-semibold text-center mb-1">{member.name}</h3>
              <p className="text-sm text-blue-600 dark:text-blue-400 text-center font-medium mb-2">{member.role}</p>
              <p className="text-sm text-center text-gray-600 dark:text-gray-300">{member.thought}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <h2 className="text-2xl font-bold mb-4 mt-12 text-center" data-aos="fade-up">👨‍💻 Our Team</h2>
        <div className="flex flex-wrap justify-center gap-6" data-aos="fade-up">
          {team.slice(2).map((member, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-slate-800 p-5 rounded-xl border dark:border-slate-700 transform transition-all duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-xl ${member.glow} animate-border-glow`}
              data-aos="zoom-in-up"
            >
              <img
                src={member.img}
                alt={member.name}
                className="rounded-full w-28 h-28 mx-auto mb-4 border-4 border-blue-400 dark:border-blue-600 transition-transform duration-300 hover:scale-110 cursor-pointer"
                onClick={() => window.open(member.img, "_blank")}
              />
              <h3 className="text-xl font-semibold text-center mb-1">{member.name}</h3>
              <p className="text-sm text-blue-600 dark:text-blue-400 text-center font-medium mb-2">{member.role}</p>
              <p className="text-sm text-center text-gray-600 dark:text-gray-300">{member.thought}</p>
            </div>
          ))}
        </div>

        {/* Mentors */}
        <h2 className="text-2xl font-bold mb-4 mt-12 text-center" data-aos="fade-up">🎓 Our Mentors</h2>
        <div className="flex flex-wrap justify-center gap-6" data-aos="fade-up">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-blue-50 to-white dark:from-slate-800 dark:to-slate-900 p-6 rounded-2xl shadow-xl border-2 border-blue-300 dark:border-blue-600 transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 ${mentor.glow} animate-border-glow`}
              data-aos="zoom-in-up"
              style={{ width: "300px" }}
            >
              <div className="absolute -top-4 -left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                🚀 Mentor
              </div>
              <img
                src={mentor.img}
                alt={mentor.name}
                className="rounded-full w-24 h-24 mx-auto mb-3 border-4 border-blue-400 dark:border-blue-600 transition-transform duration-300 hover:scale-110 cursor-pointer"
                onClick={() => window.open(mentor.img, "_blank")}
              />
              <h3 className="text-xl font-semibold text-center mb-1">{mentor.name}</h3>
              <p className="text-sm text-blue-700 dark:text-blue-400 text-center font-medium mb-2">{mentor.role}</p>
              <p className="text-sm text-center text-gray-600 dark:text-gray-300">{mentor.thought}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <h2 className="text-2xl font-bold mb-4 mt-12 text-center" data-aos="fade-up">💡 Why Choose FABROX?</h2>
        <ul className="list-disc list-inside space-y-3 text-base md:text-lg text-gray-700 dark:text-gray-300 px-4" data-aos="fade-up">
          <li>♻ Eco-Innovation: Our T-shirts reduce plastic waste by combining recycled bottles with cotton.</li>
          <li>👕 Affordable Fashion: Stylish, durable, and sustainable apparel for everyone.</li>
          <li>🛍 Expanding Market Reach: Active presence across Bihar through partners and retailers.</li>
          <li>🖨 Custom Solutions: Custom T-shirt printing for schools, colleges, and events.</li>
          <li>🔍 Transparent & Ethical: We uphold values of trust, sustainability, and integrity.</li>
        </ul>

        {/* Product Vision */}
        <div id="products" className="mt-20 pt-10" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-4 text-center">🌟 Our Product Vision</h2>
          <p className="text-center max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            FABROX is committed to launching eco-friendly products made from recycled materials while maintaining top-notch design and affordability.
          </p>
        </div>

        {/* Testimonials */}
        <h2 className="text-2xl font-bold mt-12 mb-4 text-center" data-aos="fade-up">🗣 Customer Testimonials</h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300 text-base px-4" data-aos="fade-up">
          <blockquote>“FABROX is a brand with a purpose...” — <strong>Kaushik Ranjan</strong>, NIWASA HOMES PVT. LTD.</blockquote>
          <blockquote>“They printed T-shirts for our college fest...” — <strong>Swastika Kumari</strong>, NCE Chandi</blockquote>
          <blockquote>“Wearing a FABROX T-shirt makes me feel proud...” — <strong>Raushan Kumar Mahto</strong>, Ezy Intern</blockquote>
        </div>

        {/* Funding Info */}
        <div className="mt-10 text-center" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-2">🏆 Proudly Funded By:</h2>
          <p className="text-lg font-medium">Startup Bihar Scheme</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Department of Industries, Government of Bihar</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">(Support to encourage youth-led innovation)</p>
          <p className="mt-4 text-blue-600 dark:text-blue-400 font-semibold">
            ✨ 🇮🇳 Made with Pride in India ✨ | WEAR THE CHANGE
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
