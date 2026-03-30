import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function ReviewSection() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Sarah Ahmed",
      rating: 5,
      review:
        "PetCare provided amazing grooming service for my dog. Highly recommended!",
    },
    {
      id: 2,
      name: "John Smith",
      rating: 4,
      review:
        "Excellent service and very caring staff. My cat loved the environment!",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    review: "",
    rating: 5,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      id: Date.now(),
      ...formData,
    };

    setReviews([newReview, ...reviews]);

    setFormData({
      name: "",
      review: "",
      rating: 5,
    });
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 md:px-20">

      {/* ================= SECTION TITLE ================= */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-primary mb-3">
          🐾 Customer Reviews
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          See what pet parents are saying about our services.
        </p>
      </div>

      {/* ================= REVIEW CARDS (TOP) ================= */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {reviews.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-3xl shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2 border"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-lg text-gray-800">
                {item.name}
              </h3>

              <div className="flex text-yellow-400">
                {[...Array(item.rating)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              {item.review}
            </p>
          </div>
        ))}
      </div>

      {/* ================= INPUT FORM (BOTTOM) ================= */}
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl border">
        <h3 className="text-2xl font-semibold mb-6 text-center text-primary">
          ✍️ Leave Your Review
        </h3>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none p-3 rounded-xl transition"
            value={formData.name}
            required
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />

          {/* Review */}
          <textarea
            placeholder="Write your experience..."
            className="w-full border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none p-3 rounded-xl transition"
            rows="4"
            required
            value={formData.review}
            onChange={(e) =>
              setFormData({ ...formData, review: e.target.value })
            }
          ></textarea>

          {/* Rating */}
          <select
            className="w-full border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none p-3 rounded-xl transition"
            value={formData.rating}
            onChange={(e) =>
              setFormData({ ...formData, rating: Number(e.target.value) })
            }
          >
            <option value={5}>⭐⭐⭐⭐⭐ (5 Star)</option>
            <option value={4}>⭐⭐⭐⭐ (4 Star)</option>
            <option value={3}>⭐⭐⭐ (3 Star)</option>
            <option value={2}>⭐⭐ (2 Star)</option>
            <option value={1}>⭐ (1 Star)</option>
          </select>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-lg transition duration-300"
          >
            Submit Review
          </button>
        </form>
      </div>
    </section>
  );
}