import React, { useState } from "react";
import toast from "react-hot-toast";
import catImg from "../../assets/Adopt-from/cute-cat-relaxing-indoors-removebg-preview.png";
import dogImg from "../../assets/Adopt-from/Dog.png";

export default function AdoptForm() {
  // ✅ ONLY ONE STATE (FIXED)
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/adoptions/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
        });
      } else {
        toast.error("Failed to submit ❌");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error submitting form ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 to-purple-100 flex items-center justify-center p-6">

      {/* ✅ SUCCESS MODAL */}
      {success && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] md:w-1/3 p-8 rounded-2xl shadow-2xl text-center animate-bounce">

            <div className="text-5xl mb-3">🐾</div>

            <h2 className="text-2xl font-bold text-green-600">
              Adoption Successful
            </h2>

            <p className="text-gray-500 mt-2">
              Your adoption request has been submitted successfully.
            </p>

            <button
              onClick={() => setSuccess(false)}
              className="mt-5 bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600"
            >
              OK
            </button>

          </div>
        </div>
      )}

      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden max-w-5xl w-full grid md:grid-cols-2">

        {/* LEFT */}
        <div className="bg-pink-100 flex flex-col items-center justify-center p-8 relative">
          <h2 className="text-3xl font-bold text-pink-600 mb-4 text-center">
            🐾 Find Your Best Friend
          </h2>

          <p className="text-gray-600 text-center mb-6">
            Give a loving home to a pet and make a lifelong companion.
          </p>

          <div className="flex items-end gap-4">
            <img src={catImg} className="w-40 drop-shadow-xl" />
            <img src={dogImg} className="w-40 drop-shadow-xl" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="p-10">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Adoption Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-xl"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-xl"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-xl"
            />

            <textarea
              name="address"
              placeholder="Your Address"
              value={formData.address}
              onChange={handleChange}
              required
              rows="3"
              className="w-full p-3 border rounded-xl"
            />

            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-3 rounded-xl hover:bg-pink-600 transition"
            >
              Submit Adoption Request 🐾
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}