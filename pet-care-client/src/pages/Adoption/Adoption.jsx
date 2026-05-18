import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import petsJson from "../../data/PetDogs.json";

const Adoption = () => {
  const navigate = useNavigate();

  const [selectedType, setSelectedType] = useState("All");
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("pets");

    let finalPets = petsJson;

    if (localData) {
      try {
        const parsed = JSON.parse(localData);

        if (Array.isArray(parsed) && parsed.length > 0) {
          finalPets = parsed;
        }
      } catch (e) {
        finalPets = petsJson;
      }
    }

    setPets(finalPets);
  }, []);

  const filteredPets =
    selectedType === "All"
      ? pets
      : pets.filter((pet) => pet.type === selectedType);

  const petTypes = ["All", ...new Set(pets.map((p) => p.type))];

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">🐾 Pet Adoption Center</h2>

          <button
            onClick={() => navigate("/add-adoption")}
            className="mt-5 px-6 py-3 bg-cyan-500 text-white rounded-xl"
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
                  : "bg-white shadow"
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
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <img
                src={pet.image}
                alt={pet.name}
                className="h-56 w-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/400x300?text=No+Image";
                }}
              />

              <div className="p-4">
                <h3 className="font-bold">{pet.name}</h3>

                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <FaMapMarkerAlt />
                  {pet.location}
                </p>

                <p className="text-sm mt-2">{pet.description}</p>

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