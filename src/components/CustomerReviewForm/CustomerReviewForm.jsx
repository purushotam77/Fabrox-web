import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import backgroundImage from "../../assets/hero/img1.png"; 

const CustomerReviewForm = () => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(null);
  const [form, setForm] = useState({ name: "", review: "" });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      ...form,
      rating,
      id: Date.now(),
    };
    setReviews([newReview, ...reviews]);
    setForm({ name: "", review: "" });
    setRating(0);
  };

  const StarDisplay = ({ count }) => (
    <div className="flex justify-center text-yellow-400 mb-2">
      {Array.from({ length: count }, (_, i) => (
        <span key={i}>★</span>
      ))}
      {Array.from({ length: 5 - count }, (_, i) => (
        <span key={i} className="text-gray-400">★</span>
      ))}
    </div>
  );

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      {/* Background with AOS and overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        data-aos="zoom-in-up"
        data-aos-duration="1200"
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Foreground form and content */}
      <div className="relative z-10 max-w-3xl mx-auto text-white">
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-8 -mt-4 drop-shadow-xl"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          📝 Share Your Experience
        </h2>

        <form
          onSubmit={handleSubmit}
          className="p-6 rounded-xl bg-white/80 dark:bg-slate-800/80 shadow-2xl backdrop-blur-md text-black dark:text-white"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            required
            className="w-full mb-4 p-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            name="review"
            value={form.review}
            onChange={handleInputChange}
            placeholder="Write your review..."
            required
            rows="3"
            className="w-full mb-4 p-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>

          <div className="mb-4">
            <label className="block font-medium mb-2">Your Rating:</label>
            <div className="flex gap-1 text-2xl">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredStar(star)}
                  onMouseLeave={() => setHoveredStar(null)}
                  className={`cursor-pointer transition-transform transform hover:scale-125 ${
                    (hoveredStar || rating) >= star
                      ? "text-yellow-400"
                      : "text-gray-400"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg hover:scale-105 transition-all duration-300"
          >
            Submit
          </button>
        </form>

        {reviews.length > 0 && (
          <div className="mt-10 space-y-6" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-2xl font-bold text-center text-white drop-shadow">
              ✨ Recent Reviews
            </h3>
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="p-4 rounded-lg bg-white/80 dark:bg-slate-800/80 text-black dark:text-white shadow hover:shadow-indigo-400 transition duration-300 backdrop-blur"
                data-aos="fade-up"
              >
                <StarDisplay count={rev.rating} />
                <p className="text-lg font-semibold">{rev.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{rev.review}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CustomerReviewForm;
