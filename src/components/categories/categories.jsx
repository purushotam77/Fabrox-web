import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Shirt, ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import clsx from "clsx";

const categories = [
  { id: 1, name: "T-Shirts", slug: "tshirt", glow: "hover:shadow-pink-500/40" },
  { id: 2, name: "Shirts", slug: "shirt", glow: "hover:shadow-blue-500/40" },
  { id: 3, name: "Hoodies", slug: "hoodie", glow: "hover:shadow-green-500/40" },
  { id: 4, name: "Sweat Shirts", slug: "sweatshirt", glow: "hover:shadow-yellow-500/40" },
  { id: 5, name: "Women", slug: "women", glow: "hover:shadow-purple-500/40" },
  { id: 6, name: "Kids", slug: "kids", glow: "hover:shadow-red-500/40" },
];

const Categories = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-16 px-4 bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl font-bold text-center mb-10 drop-shadow-md"
          data-aos="fade-up"
        >
          🛍️ Explore Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <Link
              key={cat.id}
              to={`/category/${cat.slug}`}
              className={clsx(
                "bg-white dark:bg-slate-800 transition-all duration-300 border border-gray-200 dark:border-slate-700 hover:scale-105 hover:brightness-110 p-6 rounded-2xl shadow-md hover:shadow-lg flex flex-col items-center text-center",
                cat.glow
              )}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <Shirt size={50} className="mb-4 text-indigo-500 dark:text-indigo-300" />
              <h3 className="text-xl font-semibold mb-2">{cat.name}</h3>
              <ArrowRight className="text-indigo-400 mt-2" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
