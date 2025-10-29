import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Nav from "./components/nav/nav";
import Hero from "./components/hero/hero";
import Categories from "./components/categories/categories";
import CategoryPage from "./components/categories/categoriespage";
import Products from "./components/products/products";
import OurCustomers from './components/ourcostumers/ourcostumers';
import CustomerReviewForm from './components/CustomerReviewForm/CustomerReviewForm';
import Gallery from './components/Gallery/gallery';
import Footer from './components/Footer/footer';
import About from "./components/About/About";
import Contact from './components/contact/contact';
import Loader from './components/loader/loader'; // ✅ Loader import

// ✅ Scroll to hash section
function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.replace("#", ""));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    }
  }, [hash, pathname]);

  return null;
}

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true); // ✅ Loader state

  useEffect(() => {
    AOS.init({ duration: 800 });

    // ✅ Simulate loading for 2.5s
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />; // ✅ Show loader

  return (
    // ✅ Scrollbar Fix Wrapper
    <div className="overflow-x-hidden">
      <Nav />
      <ScrollToHash />

      <Routes>
        <Route path="/" element={
          <>
            <div id="hero"><Hero /></div>
            <div id="categories"><Categories /></div>
            <div id="products"><Products /></div>
            <div id="ourcustomers"><OurCustomers /></div>
            <div id="reviews"><CustomerReviewForm /></div>
            <div id="gallery"><Gallery /></div>
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
