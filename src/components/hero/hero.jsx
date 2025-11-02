import React from "react";
import Image1 from "../../assets/hero/img1.png";
import Image2 from "../../assets/hero/img2.png";
import Image3 from "../../assets/hero/img3.png";
import Image4 from "../../assets/hero/img4.png";
import Image5 from "../../assets/hero/img5.png";
import Image6 from "../../assets/hero/img6.png";
import Image7 from "../../assets/hero/img7.png";
import Image8 from "../../assets/hero/img8.png";
import Image9 from "../../assets/hero/img9.png";
import Image10 from "../../assets/hero/img10.png";
import Image11 from "../../assets/hero/img11.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageList = [
  { id: 1, img: Image1, title: "From Waste to Wear", description: "Turning plastic bottles into premium cotton-blended T-shirts — fashion with a future." },
  { id: 2, img: Image2, title: "Style Meets Sustainability", description: "Where eco-conscious design meets everyday comfort." },
  { id: 3, img: Image3, title: "Wear the Change", description: "Join the revolution — because every T-shirt can save the planet." },
  { id: 4, img: Image4, title: "Eco Fashion Everyday", description: "Comfortable, stylish, and kind to the planet." },
  { id: 5, img: Image5, title: "Premium Cotton Blend", description: "Soft, breathable fabrics for your everyday wear." },
  { id: 6, img: Image6, title: "Be The Change", description: "Your choice of T-shirt makes a difference." },
  { id: 7, img: Image7, title: "Modern Streetwear", description: "Urban designs with a sustainable touch." },
  { id: 8, img: Image8, title: "Comfort Redefined", description: "Feel good, look great in eco-friendly T-shirts." },
  { id: 9, img: Image9, title: "Fashion With Purpose", description: "Every purchase supports a cleaner planet." },
  { id: 10, img: Image10, title: "Sustainable Trends", description: "Stay trendy without harming the environment." },
  { id: 11, img: Image11, title: "Wear Your Values", description: "Show off your commitment to sustainability." },
];

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-slate-950">
      {/* Abstract background shape */}
      <div className="absolute -top-1/3 -right-1/4 w-[1200px] h-[900px] bg-indigo-400/30 dark:bg-purple-700/20 rounded-[50%] rotate-45 -z-10 animate-pulse-slow"></div>

      <Slider {...settings} className="w-full h-full">
        {ImageList.map((data) => (
          <div key={data.id} className="w-full h-screen flex items-center justify-center px-4 sm:px-6 lg:px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8 w-full h-full">
              {/* Text Section */}
              <div
                className="flex flex-col justify-center gap-6 text-center sm:text-left order-2 sm:order-1 relative z-10"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight">
                  {data.title}
                </h1>
                <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-lg">
                  {data.description}
                </p>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                  <button
                    onClick={() => {
                      const categorySection = document.querySelector("#category");
                      if (categorySection) {
                        categorySection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-600
              hover:from-pink-500 hover:via-orange-400 hover:to-purple-700
              text-white font-semibold py-4 px-14 rounded-full shadow-2xl
              hover:shadow-[0_0_40px_rgba(199,21,133,0.6)] transition-all duration-500"
                  >
                    Buy Now
                  </button>

                </div>
                <p className="mt-4 text-sm sm:text-base text-gray-500 dark:text-gray-400 flex items-center justify-center sm:justify-start gap-2">
                  🌿 Eco-friendly | 🇮🇳 Made in India
                </p>
              </div>

              {/* Image Section */}
              <div
                className="order-1 sm:order-2 flex justify-center sm:justify-end relative z-10"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] lg:w-[650px] lg:h-[650px] object-contain rounded-xl shadow-2xl hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
