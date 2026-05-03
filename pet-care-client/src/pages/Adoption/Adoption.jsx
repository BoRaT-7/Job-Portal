// src/pages/Adoption/Adoption.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";

// fallback image
import DogImg from "../../assets/PaymentForm/zoe-gayah-jonker-G7kUPmzi80E-unsplash.jpg";

const initialPetsData = [
  {
    _id: "1",
    name: "Buddy",
    type: "Dog",
    location: "Dhaka, Bangladesh",
    image: DogImg,
    description: "Energetic dog who loves to play and cuddle.",
  },
  {
    _id: "2",
    name: "Simba",
    type: "Cat",
    location: "Chittagong, Bangladesh",
    image: DogImg,
    description: "Friendly and playful pet looking for a loving home.",
  },
  {
    _id: "3",
    name: "Coco",
    type: "Bird",
    location: "Sylhet, Bangladesh",
    image: DogImg,
    description: "Colorful parrot, very friendly and talkative.",
  },
];

const api = axios.create({
  baseURL: "http://localhost:5000",
});

const Adoption = () => {
  const [selectedType, setSelectedType] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [petsData, setPetsData] = useState(initialPetsData);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    location: "",
    description: "",
    imageUrl: "",
    imageFile: null,
  });

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      setLoading(true);

      const res = await api.get("/pets");

      if (Array.isArray(res.data) && res.data.length > 0) {
        setPetsData(res.data);
      }
    } catch (error) {
      console.log("Failed to fetch pets:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPets =
    selectedType === "All"
      ? petsData
      : petsData.filter((pet) => pet.type === selectedType);

  const petTypes = ["All", ...new Set(petsData.map((pet) => pet.type))];

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "imageFile" && files?.[0]) {
      setFormData((prev) => ({
        ...prev,
        imageFile: files[0],
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      type: "",
      location: "",
      description: "",
      imageUrl: "",
      imageFile: null,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true);

      const data = new FormData();

      data.append("name", formData.name);
      data.append("type", formData.type);
      data.append("location", formData.location);
      data.append("description", formData.description);

      if (formData.imageFile) {
        data.append("image", formData.imageFile);
      }

      const res = await api.post("/pets", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data?.pet) {
        setPetsData((prev) => [res.data.pet, ...prev]);
      }

      resetForm();
      setShowForm(false);
    } catch (error) {
      console.log("Failed to create pet:", error);
      alert("Failed to add pet");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-primary">
            🐾 Pet Adoption Center
          </h2>

          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Give a loving home to pets waiting for care and affection. Browse
            our adorable pets and find your perfect companion today!
          </p>

          <button
            onClick={() => setShowForm(true)}
            className="btn btn-outline btn-primary mt-6"
          >
            Add Your Pet
          </button>
        </div>

        {/* filter */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {petTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                selectedType === type
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* loading */}
        {loading ? (
          <div className="text-center text-gray-500 py-10">Loading pets...</div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredPets.map((pet) => (
              <div
                key={pet._id}
                className="bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 hover:-translate-y-2"
              >
                <img
                  src={pet.image || DogImg}
                  alt={pet.name}
                  className="h-56 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {pet.name}
                  </h3>

                  <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                    <FaMapMarkerAlt className="text-pink-500" />
                    {pet.location}
                  </p>

                  <p className="text-sm text-gray-600 mt-2">
                    {pet.description}
                  </p>

                  <Link to="/adopt-form">
                    <button className="btn btn-primary w-full mt-4 hover:scale-105 transition duration-300">
                      Adopt Now 🐾
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl w-full max-w-lg p-6 relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute right-4 top-4 text-xl"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-5 text-primary">
              Add Your Pet
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Pet Name"
                required
                className="input input-bordered w-full"
              />

              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                placeholder="Pet Type"
                required
                className="input input-bordered w-full"
              />

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                required
                className="input input-bordered w-full"
              />

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Pet Description"
                required
                className="textarea textarea-bordered w-full"
              />

              <input
                type="file"
                name="imageFile"
                accept="image/*"
                onChange={handleChange}
                className="file-input file-input-bordered w-full"
              />

              <button
                type="submit"
                disabled={submitting}
                className="btn btn-primary w-full"
              >
                {submitting ? "Submitting..." : "Submit Pet"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Adoption;