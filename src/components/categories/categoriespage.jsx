import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ShoppingCart, IndianRupee } from "lucide-react";

// TSHIRT
import Product1 from "../../assets/products/t1.jpeg";
import Product2 from "../../assets/products/t2.jpeg";
import Product3 from "../../assets/products/t3.jpeg";
import Product4 from "../../assets/products/t4.jpeg";
import Product5 from "../../assets/products/t5.jpeg";
import Product6 from "../../assets/products/t6.jpeg";

//SHIRT 
import Product7 from "../../assets/products/s1.jpeg";
import Product8 from "../../assets/products/s2.jpeg";
import Product9 from "../../assets/products/s3.jpeg";
import Product10 from "../../assets/products/s4.jpeg";
import Product11 from "../../assets/products/s5.jpeg";
import Product12 from "../../assets/products/s6.jpeg";

// HOODIE 
import Product13 from "../../assets/products/h1.jpeg";
import Product14 from "../../assets/products/h2.jpeg";
import Product15 from "../../assets/products/h3.jpeg";
import Product16 from "../../assets/products/h4.jpeg";
import Product17 from "../../assets/products/h5.jpeg";
import Product18 from "../../assets/products/h6.jpeg";

//SWEATSHIRT
import Product19 from "../../assets/products/sw1.jpeg";
import Product20 from "../../assets/products/sw2.jpeg";
import Product21 from "../../assets/products/sw3.jpeg";
import Product22 from "../../assets/products/sw4.jpeg";
import Product23 from "../../assets/products/sw5.jpeg";
import Product24 from "../../assets/products/sw6.jpeg";

//WOMEN
import Product25 from "../../assets/products/w1.jpeg";
import Product26 from "../../assets/products/w2.jpeg";
import Product27 from "../../assets/products/w3.jpeg";
import Product28 from "../../assets/products/w4.jpeg";
import Product29 from "../../assets/products/w5.jpeg";
import Product30 from "../../assets/products/w6.jpg";

//KIDS
import Product31 from "../../assets/products/k1.jpeg";
import Product32 from "../../assets/products/k2.jpeg";
import Product33 from "../../assets/products/k3.jpeg";
import Product34 from "../../assets/products/k4.jpeg";
import Product35 from "../../assets/products/k5.jpeg";
import Product36 from "../../assets/products/k6.jpeg";

// ✅ Different product sets for each category (6 items each)
const allProducts = {
  tshirt: [
    { id: 1, name: "Classic Polo T-Shirt", img: Product1, price: "₹599", originalPrice: "₹1199" },
    { id: 2, name: "Round Neck T-Shirt", img: Product2, price: "₹899", originalPrice: "₹1099" },
    { id: 3, name: "V-Neck T-Shirt", img: Product3, price: "₹899", originalPrice: "₹1299" },
    { id: 4, name: "Oversized T-Shirt", img: Product4, price: "₹999", originalPrice: "₹1399" },
    { id: 5, name: "Graphic T-Shirt", img: Product5, price: "₹799", originalPrice: "₹1199" },
    { id: 6, name: "Plain Cotton T-Shirt", img: Product6, price: "399", originalPrice: "₹999" },
  ],
  shirt: [
    { id: 1, name: "Formal Blue Shirt", img: Product7, price: "₹1299", originalPrice: "₹1499" },
    { id: 2, name: "Casual Checked Shirt", img: Product8, price: "₹1199", originalPrice: "₹1399" },
    { id: 3, name: "Linen White Shirt", img: Product9, price: "₹1399", originalPrice: "₹1599" },
    { id: 4, name: "Denim Shirt", img: Product10, price: "₹1499", originalPrice: "₹1699" },
    { id: 5, name: "Printed Casual Shirt", img: Product11, price: "₹999", originalPrice: "₹1199" },
    { id: 6, name: "Slim Fit Formal Shirt", img: Product12, price: "₹899", originalPrice: "₹1499" },
  ],
  hoodie: [
    { id: 1, name: "Winter Hoodie Black", img: Product13, price: "₹1499", originalPrice: "₹1799" },
    { id: 2, name: "Graphic Hoodie", img: Product14, price: "₹1599", originalPrice: "₹1899" },
    { id: 3, name: "Plain Cotton Hoodie", img: Product15, price: "₹1399", originalPrice: "₹1699" },
    { id: 4, name: "Zipper Hoodie", img: Product16, price: "₹1499", originalPrice: "₹1799" },
    { id: 5, name: "Oversized Hoodie", img: Product17, price: "₹1699", originalPrice: "₹1999" },
    { id: 6, name: "Street Style Hoodie", img: Product18, price: "₹1599", originalPrice: "₹1899" },
  ],
  sweatshirt: [
    { id: 1, name: "Crew Neck Sweatshirt", img: Product19, price: "₹1399", originalPrice: "₹1599" },
    { id: 2, name: "Zipper Sweatshirt", img: Product20, price: "₹1499", originalPrice: "₹1699" },
    { id: 3, name: "Oversized Sweatshirt", img: Product21, price: "₹1599", originalPrice: "₹1899" },
    { id: 4, name: "Plain Cotton Sweatshirt", img: Product22, price: "₹1299", originalPrice: "₹1499" },
    { id: 5, name: "Printed Sweatshirt", img: Product23, price: "₹1399", originalPrice: "₹1599" },
    { id: 6, name: "Casual Sweatshirt", img: Product24, price: "₹1499", originalPrice: "₹1699" },
  ],
  women: [
    { id: 1, name: "Women Printed Top", img: Product25, price: "₹899", originalPrice: "₹1099" },
    { id: 2, name: "Women Casual T-Shirt", img: Product26, price: "₹799", originalPrice: "₹999" },
    { id: 3, name: "Women Formal Shirt", img: Product27, price: "₹999", originalPrice: "₹1199" },
    { id: 4, name: "Women Hoodie", img: Product28, price: "₹1299", originalPrice: "₹1499" },
    { id: 5, name: "Women Crop Top", img: Product29, price: "₹699", originalPrice: "₹899" },
    { id: 6, name: "Women Sweatshirt", img: Product30, price: "₹1199", originalPrice: "₹1399" },
  ],
  kids: [
    { id: 1, name: "Kids Cartoon Tee", img: Product31, price: "₹599", originalPrice: "₹799" },
    { id: 2, name: "Kids Cotton Shirt", img: Product32, price: "₹699", originalPrice: "₹899" },
    { id: 3, name: "Kids Printed T-Shirt", img: Product33, price: "₹649", originalPrice: "₹849" },
    { id: 4, name: "Kids Sweatshirt", img: Product34, price: "₹799", originalPrice: "₹999" },
    { id: 5, name: "Kids Hoodie", img: Product35, price: "₹899", originalPrice: "₹1099" },
    { id: 6, name: "Kids Fancy Shirt", img: Product36, price: "₹749", originalPrice: "₹949" },
  ],
};

// Shadow color classes
const shadowColors = [
  "hover:shadow-pink-500",
  "hover:shadow-blue-500",
  "hover:shadow-green-500",
  "hover:shadow-yellow-500",
  "hover:shadow-purple-500",
  "hover:shadow-red-500",
  "hover:shadow-orange-500",
  "hover:shadow-teal-500",
  "hover:shadow-indigo-500",
];

const CategoryPage = () => {
  const { slug } = useParams();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const products = allProducts[slug] || [];

  return (
    <section className="py-12 px-4 bg-white dark:bg-slate-900 dark:text-white text-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-8 text-center"
          data-aos="fade-down"
        >
          🧵 Category: {slug.charAt(0).toUpperCase() + slug.slice(1)}
        </h2>

        {products.length === 0 ? (
          <p className="text-center text-gray-500 text-lg" data-aos="fade-up">
            No products available in this category.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {products.map((product, i) => (
              <div
                key={product.id}
                className={`p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg transition duration-500 group hover:shadow-2xl ${shadowColors[i % shadowColors.length]}`}
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-56 object-cover rounded-lg group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-indigo-600 dark:text-indigo-300 mt-1 text-sm">
                    <span className="line-through text-gray-400 mr-2">
                      {product.originalPrice}
                    </span>
                    <span className="font-bold text-lg">{product.price}</span>
                  </p>
                </div>
                <div className="flex justify-center gap-4 mt-4 flex-wrap">
                  <a
                    href="https://forms.gle/L5ZU3mWKNPFyGCjNA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full hover:scale-105 transition-all duration-300 flex items-center gap-1"
                  >
                    <IndianRupee size={18} /> Buy Now
                  </a>
                  <button className="border border-indigo-600 dark:border-indigo-300 text-indigo-600 dark:text-indigo-300 px-4 py-2 rounded-full hover:bg-indigo-600 dark:hover:bg-white hover:text-white dark:hover:text-slate-900 transition duration-300">
                    <ShoppingCart size={18} className="inline mr-1" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryPage;
