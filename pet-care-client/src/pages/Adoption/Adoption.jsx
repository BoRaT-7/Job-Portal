import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import petsJson from "../../data/PetDogs.json";

const Adoption = () => {
  const navigate = useNavigate();

  const [selectedType, setSelectedType] = useState("All");
  const [pets, setPets] = useState([]);

  // load + localStorage support
  useEffect(() => {
    const savedPets = JSON.parse(localStorage.getItem("pets")) || petsJson;
    setPets(savedPets);
  }, []);

  const filteredPets =
    selectedType === "All"
      ? pets
      : pets.filter((pet) => pet.type === selectedType);

  const petTypes = ["All", ...new Set(pets.map((pet) => pet.type))];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold">🐾 Pet Adoption Center</h2>

          <p className="text-gray-600 mt-2">
            Find your perfect companion today
          </p>

          {/* ✅ ADD PET BUTTON */}
          <button
            onClick={() => navigate("/add-adoption")}
            className="mt-5 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl shadow-lg"
          >
            + Add Your Pet
          </button>
        </div>

        {/* FILTER */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {petTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full ${
                selectedType === type
                  ? "bg-cyan-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPets.map((pet) => (
            <div
              key={pet._id}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={pet.image}
                alt={pet.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-bold text-lg">{pet.name}</h3>

                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <FaMapMarkerAlt /> {pet.location}
                </p>

                <p className="text-sm mt-2 line-clamp-2">
                  {pet.description}
                </p>

                <Link to="/adopt-form" state={{ pet }}>
                  <button className="mt-4 w-full bg-cyan-500 text-white py-2 rounded-xl">
                    Adopt Now 🐾
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Adoption;