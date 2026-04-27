import React, { useContext, useEffect, useState } from "react";
import { FaStar, FaEdit, FaTrash } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import api from "../../api/reviewApi";

export default function ReviewSection() {
  const { user } = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    review: "",
    rating: 5,
  });

  // hover state (NEW for better UX)
  const [hoverRating, setHoverRating] = useState(0);

  const loadReviews = async () => {
    try {
      setLoading(true);
      const res = await api.get("/reviews");
      setReviews(res.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) return alert("Please login first");

    if (editId) {
      await api.put(`/reviews/${editId}`, formData);
      setEditId(null);
    } else {
      await api.post("/reviews", {
        name: user?.displayName || user?.email?.split("@")[0],
        email: user.email,
        photo: user.photoURL || "",
        ...formData,
        createdAt: new Date(),
      });
    }

    setFormData({ review: "", rating: 5 });
    setHoverRating(0);
    loadReviews();
  };

  const handleEdit = (item) => {
    setEditId(item._id);
    setFormData({
      review: item.review,
      rating: item.rating,
    });
  };

  const handleDelete = async (item) => {
    if (user?.email !== item.email) {
      return alert("You can only delete your own review");
    }

    await api.delete(`/reviews/${item._id}`);
    loadReviews();
  };

  return (
    <section className="py-10 px-4 md:px-16 bg-gradient-to-br from-cyan-50 to-blue-50">

      {/* TITLE */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Customer Reviews
        </h2>
        <p className="text-gray-500 text-sm">
          What our users say about PetCare 🐾
        </p>
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-center text-gray-500">Loading reviews...</p>
      )}

      {/* EMPTY */}
      {!loading && reviews.length === 0 && (
        <p className="text-center text-gray-400">
          No reviews yet. Be the first! 🐾
        </p>
      )}

      {/* CARDS */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {reviews.map((item) => (
          <div
            key={item._id}
            className="bg-white/70 backdrop-blur border border-white/40 p-4 rounded-2xl shadow hover:shadow-lg transition"
          >
            {/* USER */}
            <div className="flex items-center gap-2 mb-2">
              <img
                src={item.photo || "https://i.ibb.co/4pDNDk1/avatar.png"}
                className="w-8 h-8 rounded-full"
              />
              <h4 className="text-sm font-semibold text-gray-800">
                {item.name || item.email?.split("@")[0] || "Anonymous"}
              </h4>
            </div>

            {/* STARS (DISPLAY ONLY) */}
            <div className="flex text-yellow-400 mb-2 text-sm">
              {[...Array(item.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* REVIEW */}
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {item.review}
            </p>

            {/* ACTIONS */}
            {user?.email === item.email && (
              <div className="flex gap-4 text-sm">
                <button
                  onClick={() => handleEdit(item)}
                  className="text-blue-500 hover:scale-110 transition"
                >
                  <FaEdit />
                </button>

                <button
                  onClick={() => handleDelete(item)}
                  className="text-red-500 hover:scale-110 transition"
                >
                  <FaTrash />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* FORM */}
      <div className="max-w-md mx-auto bg-white/80 backdrop-blur p-5 rounded-2xl shadow-lg">
        <h3 className="text-center font-semibold text-lg mb-4 text-cyan-600">
          {editId ? "Update Review" : "Leave a Review"}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-3">

          {/* TEXT */}
          <textarea
            placeholder="Share your experience..."
            className="w-full p-2 text-sm border rounded-lg outline-none focus:ring-2 focus:ring-cyan-400"
            value={formData.review}
            onChange={(e) =>
              setFormData({ ...formData, review: e.target.value })
            }
            required
          />

          {/* ⭐ IMPROVED STAR RATING (HOVER + CLICK + SMOOTH UI) */}
          <div className="flex justify-center gap-2 py-2">
            {[1, 2, 3, 4, 5].map((star) => {
              const active = star <= (hoverRating || formData.rating);

              return (
                <FaStar
                  key={star}
                  size={26}
                  onClick={() =>
                    setFormData({ ...formData, rating: star })
                  }
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className={`
                    cursor-pointer transition-all duration-200
                    hover:scale-125
                    ${active ? "text-yellow-400" : "text-gray-300"}
                  `}
                />
              );
            })}
          </div>

          {/* BUTTON */}
          <button className="w-full bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-600 transition">
            {editId ? "Update Review" : "Submit Review"}
          </button>
        </form>
      </div>
    </section>
  );
}