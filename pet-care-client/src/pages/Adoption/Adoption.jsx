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
            Give a loving home to pets waiting for care and affection.
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
              className={`px-4 py-2 rounded-full ${
                selectedType === type
                  ? "bg-primary text-white"
                  : "bg-gray-200"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* 🔥 Skeleton Loader Added Here */}
        {loading ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="bg-gray-100 rounded-2xl shadow animate-pulse overflow-hidden"
              >
                <div className="h-56 bg-gray-300"></div>

                <div className="p-5 space-y-3">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                  <div className="h-3 bg-gray-300 rounded w-full"></div>
                  <div className="h-10 bg-gray-300 rounded mt-4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredPets.map((pet) => (
              <div
                key={pet._id}
                className="bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={pet.image || DogImg}
                  alt={pet.name}
                  className="h-56 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="text-xl font-semibold">{pet.name}</h3>

                  <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                    <FaMapMarkerAlt className="text-pink-500" />
                    {pet.location}
                  </p>

                  <p className="text-sm text-gray-600 mt-2">
                    {pet.description}
                  </p>

                  <Link to="/adopt-form">
                    <button className="btn btn-primary w-full mt-4">
                      Adopt Now 🐾
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* modal (unchanged) */}
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
              <input name="name" value={formData.name} onChange={handleChange} placeholder="Pet Name" required className="input input-bordered w-full" />
              <input name="type" value={formData.type} onChange={handleChange} placeholder="Pet Type" required className="input input-bordered w-full" />
              <input name="location" value={formData.location} onChange={handleChange} placeholder="Location" required className="input input-bordered w-full" />
              <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Pet Description" required className="textarea textarea-bordered w-full" />
              <input type="file" name="imageFile" onChange={handleChange} className="file-input file-input-bordered w-full" />

              <button type="submit" disabled={submitting} className="btn btn-primary w-full">
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