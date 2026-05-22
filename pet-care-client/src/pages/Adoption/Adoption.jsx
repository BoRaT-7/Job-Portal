import React from "react";
import { Link } from "react-router-dom";
import petsJson from "../../data/PetDogs.json";

const Adoption = () => {
  const pets = Array.isArray(petsJson) ? petsJson : [];

  const handleImageError = (e) => {
    e.target.src =
      "https://via.placeholder.com/400x300?text=No+Image";
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-10">

          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            🐾 Available for Adoption
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Give a loving home to pets waiting for care and affection.
          </p>

          {/* FACEBOOK LOADER */}
          <div className="flex justify-center mb-6">
            <div className="flex gap-2">
              <span className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce"></span>
              <span className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>
          </div>

          {/* ADD BUTTON (CENTER TOP) */}
          <Link to="/add-adoption">
            <button className="px-6 py-3 bg-cyan-500 text-white rounded-xl hover:bg-cyan-600 transition">
              + Add Adoption
            </button>
          </Link>

        </div>

        {/* CARDS GRID */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {pets.slice(0, 12).map((pet) => (
            <div
              key={pet._id}
              className="bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={pet.image}
                alt={pet.name}
                className="h-56 w-full object-cover"
                loading="lazy"
                onError={handleImageError}
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
                  <button className="mt-4 w-full bg-cyan-500 text-white py-2 rounded-xl hover:bg-cyan-600 transition">
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