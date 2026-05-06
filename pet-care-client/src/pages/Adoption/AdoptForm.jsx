import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AdoptForm() {
  const location = useLocation();
  const navigate = useNavigate();

  const pet = location.state?.pet;

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          pet,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
      } else {
        toast.error("Failed!");
      }
    } catch (err) {
      toast.error("Server error");
    }
  };

  // ✅ FIX: NO PET HANDLING
  if (!pet) {
    return (
      <div className="h-screen flex items-center justify-center text-red-500">
        ⚠ No pet selected. Please go back.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">

      {/* SUCCESS */}
      {success && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-2xl text-center w-96">
            <h2 className="text-green-600 text-xl font-bold">
              Adoption Successful 🐾
            </h2>

            <button
              onClick={() => navigate("/")}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
            >
              Go Home
            </button>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-5xl">

        {/* LEFT */}
        <div className="bg-cyan-600 text-white p-8">
          <img
            src={pet.image}
            alt={pet.name}
            className="w-full h-64 object-cover rounded-xl mb-4"
          />

          <h2 className="text-2xl font-bold">
            Adopt {pet.name}
          </h2>

          <p className="mt-2">{pet.description}</p>
          <p className="mt-2 text-sm">📍 {pet.location}</p>
        </div>

        {/* RIGHT */}
        <div className="p-8">
          <h2 className="text-xl font-bold mb-4">Adoption Form</h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              name="name"
              placeholder="Name"
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />

            <input
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />

            <input
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />

            <textarea
              name="address"
              placeholder="Address"
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />

            <button className="w-full bg-cyan-500 text-white py-2 rounded">
              Submit 🐾
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}