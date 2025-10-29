import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Desktop images
import img1 from "../../assets/Gallery/img1.jpg";
import img2 from "../../assets/Gallery/img2.png";
import img3 from "../../assets/Gallery/img3.png";
import img4 from "../../assets/Gallery/img4.png";
import img5 from "../../assets/Gallery/img5.jpg";
import img6 from "../../assets/Gallery/img6.png";
import img7 from "../../assets/Gallery/img7.jpg";
import img8 from "../../assets/Gallery/img8.jpg";
import img9 from "../../assets/Gallery/img9.png";

// Mobile images (.jpeg)
import mimg1 from "../../assets/Gallery/img1.jpeg";
import mimg2 from "../../assets/Gallery/img2.jpeg";
import mimg3 from "../../assets/Gallery/img3.jpeg";
import mimg4 from "../../assets/Gallery/img4.jpeg";
import mimg5 from "../../assets/Gallery/img5.jpeg";
import mimg6 from "../../assets/Gallery/img6.jpeg";
import mimg7 from "../../assets/Gallery/img7.jpeg";
import mimg8 from "../../assets/Gallery/img8.jpeg";
import mimg9 from "../../assets/Gallery/img9.jpeg";

const desktopImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
const mobileImages = [mimg1, mimg2, mimg3, mimg4, mimg5, mimg6, mimg7, mimg8, mimg9];

const texts = [
  "Awarded at Bihar Entrepreneurship Summit 2023",
  "2nd WINNER at Patna Mind Fest 2023",
  "Awarded at Gujarat Ministry by Shri Praful Pansheriya, Education Minister of Gujarat",
  "Semifinalist at Asia's Largest Business Model Competition EUREKA! Organised by E-Cell IIT Bombay",
  "2nd WINNER at NATIONAL ENTREPRENEURSHIP CHALLENGE, 2024, Organised by E-Cell IIT Bombay",
  "Awarded by IAS Officer Shri Yashpal Meena, District Magistrate of Vaishali District at District Collectorate, Vaishali",
  "",
  "",
  ""
];

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % desktopImages.length);
    }, 2500);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  const handleDotClick = (i) => {
    setIndex(i);
  };

  const images = isMobile ? mobileImages : desktopImages;
  const currentImage = images[index];
  const currentText = texts[index];

  return (
    <div
      id="gallery"
      className="relative w-full min-h-screen overflow-hidden transition-colors duration-300 dark:bg-gray-900 bg-white"
    >
      {/* Background Blur with Gradient */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-contain bg-center bg-no-repeat blur-md scale-105 z-0"
        style={{
          backgroundImage: `url(${currentImage})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.65),rgba(0,0,0,0.9))] z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center p-4 sm:p-8 md:p-10">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 dark:text-white text-center mb-8 sm:mb-10
          drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)]
          dark:drop-shadow-[2px_2px_6px_rgba(255,255,255,0.3)]
          hover:drop-shadow-[4px_4px_8px_rgba(0,0,0,0.5)]
          dark:hover:drop-shadow-[4px_4px_10px_rgba(255,255,255,0.6)]
          transition-all duration-300 ease-in-out hover:scale-105"
          data-aos="fade-up"
        >
          Achievements🏆 Gallery
        </h2>

        {/* Image Container */}
        <div
          className="w-full max-w-6xl relative group flex justify-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="overflow-hidden rounded-3xl shadow-2xl transform hover:-translate-y-2 transition-all duration-500 bg-white/10 backdrop-blur-md relative flex justify-center items-center">
            <img
              src={currentImage}
              alt={`Achievement ${index + 1}`}
              className="w-full h-[65vh] sm:h-[75vh] md:h-[80vh] object-contain object-center rounded-3xl transition-transform duration-500 bg-black"
            />

            {index < 6 && (
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex items-center justify-center transition duration-500 px-2 sm:px-4 text-center">
                <p className="text-white text-sm sm:text-base md:text-lg font-semibold drop-shadow-lg animate-glow">
                  {currentText}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-5 space-x-2 sm:space-x-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 ${
                index === i
                  ? "bg-blue-500 border-blue-500"
                  : "border-gray-400"
              } transition`}
            ></button>
          ))}
        </div>
      </div>

      {/* Glow Text Animation */}
      <style>{`
        @keyframes glow {
          0% { text-shadow: 0 0 5px #fff, 0 0 10px #00f, 0 0 15px #00f; }
          50% { text-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff; }
          100% { text-shadow: 0 0 5px #fff, 0 0 10px #00f, 0 0 15px #00f; }
        }
        .animate-glow {
          animation: glow 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
