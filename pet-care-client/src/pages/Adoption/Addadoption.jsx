import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addadoption = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    type: "",
    location: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPet = {
      _id: Date.now().toString(),
      ...form,
    };

    // existing pets load
    const existing = JSON.parse(localStorage.getItem("pets")) || [];

    const updatedPets = [newPet, ...existing];

    localStorage.setItem("pets", JSON.stringify(updatedPets));

    alert("Pet Added Successfully 🐾");

    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">

        <h2 className="text-2xl font-bold mb-5 text-center">
          Add Your Pet 🐾
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Pet Name"
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
            required
          />

          <input
            type="text"
            name="type"
            placeholder="Type (Dog, Cat)"
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
            required
          />

          <button
            type="submit"
            className="w-full bg-cyan-500 text-white py-3 rounded-xl"
          >
            Submit Pet 🐾
          </button>

        </form>
      </div>
    </div>
  );
};

export default Addadoption;