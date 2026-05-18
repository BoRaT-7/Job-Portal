//pet-care-client\src\pages\Home\AdoptionSection
import React from "react";
import { Link } from "react-router-dom";
import petsJson from "../../data/PetDogs.json";

const AdoptionSection = () => {
  const pets = Array.isArray(petsJson) ? petsJson : [];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-4xl text-center font-bold text-gray-800 mb-3">
          🐾 Available for Adoption
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Give a loving home to pets waiting for care and affection.
        </p>

        {/* CARDS */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pets.slice(0, 6).map((pet) => (
            <div
              key={pet._id}
              className="bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={pet.image}
                alt={pet.name}
                className="h-56 w-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/400x300?text=No+Image";
                }}
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold">{pet.name}</h3>

                <p className="text-sm text-gray-500 mt-1">
                  📍 {pet.location}
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

        {/* VIEW ALL */}
        <div className="text-center mt-12">
          <Link to="/adoption">
            <button className="px-6 py-3 bg-cyan-500 text-white rounded-xl">
              See All Adoption →
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AdoptionSection;