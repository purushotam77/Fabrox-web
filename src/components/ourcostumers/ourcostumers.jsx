import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Dummy avatars
import Avatar1 from "../../assets/ourcustimers/img1.jpg";
import Avatar2 from "../../assets/ourcustimers/img2.jpg";
import Avatar3 from "../../assets/ourcustimers/img3.jpg";

const customers = [
  {
    name: "Raushan Kumar Mahto",


    review: "Wearing a FABROX T-shirt makes me feel proud—it's comfy, cool, and climate-positive!",
    rating: 5,
    location: "EZY Intern, Patna, Bihar",
    avatar: Avatar1,
  },
  {
    name: "Kaushik Ranjan",
    review: "FABROX is a brand with a purpose. The quality and eco-conscious approach make it stand out.",
    rating: 5,
    location: "NIWASA HOMES PVT. LTD,Bihar",
    avatar: Avatar2,
  },
  {
    name: "Swastika Kumari" 
,
    review: "They printed T-shirts for our college fest—fast delivery, perfect quality, and a meaningful message.",
    rating: 5,
    location: "Startup Coordinator, NCE Chandi ,Bihar",
    avatar: Avatar3,
  },
];

const StarRating = ({ rating }) => (
  <div className="flex justify-center text-yellow-400 mt-2">
    {Array.from({ length: rating }, (_, i) => (
      <span key={i}>★</span>
    ))}
    {Array.from({ length: 5 - rating }, (_, i) => (
      <span key={i} className="text-gray-400">★</span>
    ))}
  </div>
);

const OurCustomers = () => {
  const [modalCustomer, setModalCustomer] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className="py-16 px-4 bg-gray-100 dark:bg-slate-900 dark:text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2
          className="text-4xl sm:text-5xl font-bold text-black dark:text-white text-center mb-10
            drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)]
            dark:drop-shadow-[2px_2px_6px_rgba(255,255,255,0.3)]
            hover:drop-shadow-[4px_4px_8px_rgba(0,0,0,0.5)]
            dark:hover:drop-shadow-[4px_4px_10px_rgba(255,255,255,0.6)]
            transition-all duration-300 ease-in-out hover:scale-105"
          data-aos="fade-up"
          data-aos-duration="800"
        >
            💬 What Our Customers Say.
        </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {customers.map((customer, i) => (
              <div
                key={i}
                onClick={() => setModalCustomer(customer)}
                className="cursor-pointer p-6 rounded-xl text-center transition-all duration-300 ease-in-out bg-white dark:bg-slate-800 relative group hover:scale-105"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <div className="absolute inset-0 rounded-xl pointer-events-none group-hover:before:opacity-100 before:transition-opacity before:duration-700 before:rounded-xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan-400 before:via-indigo-500 before:to-purple-500 before:opacity-0"></div>
                <img
                  src={customer.avatar}
                  alt={customer.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-white dark:border-slate-700 transition-transform duration-300 group-hover:scale-110"
                />
                <h3 className="text-xl font-semibold mb-1 relative z-10">{customer.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 italic relative z-10">{customer.location}</p>
                <p className="mt-4 text-base font-medium relative z-10">{customer.review}</p>
                <div className="relative z-10">
                  <StarRating rating={customer.rating} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {modalCustomer && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl w-11/12 max-w-md text-center shadow-2xl relative animate-scale-in">
            <button
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-xl"
              onClick={() => setModalCustomer(null)}
            >
              &times;
            </button>
            <img
              src={modalCustomer.avatar}
              alt={modalCustomer.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-indigo-500"
            />
            <h3 className="text-2xl font-bold">{modalCustomer.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{modalCustomer.location}</p>
            <p className="mt-4">{modalCustomer.review}</p>
            <StarRating rating={modalCustomer.rating} />
          </div>
        </div>
      )}
    </>
  );
};

export default OurCustomers;
