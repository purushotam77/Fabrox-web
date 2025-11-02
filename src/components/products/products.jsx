import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Product1 from "../../assets/hero/img1.png";
import Product2 from "../../assets/hero/img2.png";
import Product3 from "../../assets/hero/img3.png";
import Product4 from "../../assets/hero/img4.png";
import Product5 from "../../assets/hero/img5.png";
import Product6 from "../../assets/hero/img6.png";
import Product7 from "../../assets/hero/img7.png";
import Product8 from "../../assets/hero/img8.png";

AOS.init();

const products = [
  { id: 1, img: Product1, name: "Retro Cotton Polo T-Shirt", price: "₹ 399", originalPrice: "₹ 1,699" },
  { id: 2, img: Product2, name: "Classic Black Art Hoodie", price: "₹ 799", originalPrice: "₹ 1,199" },
  { id: 3, img: Product3, name: "Printed Recycled Cotton Hoodie", price: "₹ 699", originalPrice: "₹ 1,499" },
  { id: 4, img: Product4, name: "Black Eco Blend Sweatshirt", price: "₹ 799", originalPrice: "₹ 1,399" },
  { id: 5, img: Product5, name: "Sunset Orange Cotton Shirt", price: "₹ 349", originalPrice: "₹ 1,499" },
  { id: 6, img: Product6, name: "Minimal Red Polo Neck Tee", price: "₹299", originalPrice: "₹ 1,299" },
  { id: 7, img: Product7, name: "Charcoal Slim Fit Round Neck", price: "₹ 329", originalPrice: "₹ 1,599" },
  { id: 8, img: Product8, name: "Urban Cotton T-Shirt", price: "₹ 399", originalPrice: "₹ 1,499" },
];

const Products = () => {
  return (
    <section
      id="products"
      className="py-16 px-4 bg-white dark:bg-slate-900 text-gray-900 dark:text-white duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl sm:text-5xl font-bold text-black dark:text-white text-center mb-10
          drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-300 ease-in-out"
          data-aos="fade-up"
        >
          ⭐ Our Bestsellers 💎
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-60 object-cover rounded-lg transform transition-all duration-700 hover:scale-110"
                />
              </div>

              {/* Product Details */}
              <div className="mt-4 text-center space-y-1">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-indigo-600 dark:text-indigo-300 text-base font-medium">
                  <span className="line-through text-gray-400 mr-2">{product.originalPrice}</span>
                  <span className="font-bold text-lg">{product.price}</span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center items-center gap-3 mt-4 flex-wrap">
                <a
                  href="https://forms.gle/L5ZU3mWKNPFyGCjNA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-gradient-to-r from-purple-500 to-indigo-500 hover:scale-105 transition-all duration-300 text-white px-4 py-2 rounded-full font-semibold shadow-md"
                >
                  Buy Now
                </a>
                <button className="text-center border border-indigo-600 dark:border-indigo-300 text-indigo-600 dark:text-indigo-300 px-4 py-2 rounded-full hover:bg-indigo-600 hover:text-white transition duration-300 font-semibold">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
