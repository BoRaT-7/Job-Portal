import React from "react";
import { FaPaw, FaMapMarkerAlt } from "react-icons/fa";
import { GiDogHouse } from "react-icons/gi";
import { MdPets } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

import petsJson from "../../data/PetDogs.json";

import sideCat from "../../assets/side cat.jpg";

import Reviews from "./Reviews";
import FoodSection from "./FoodSection";
import ServicesSection from "./ServicesSection";

const stats = [
  {
    id: 1,
    icon: <FaPaw className="text-3xl text-pink-500" />,
    label: "Happy Pets",
    value: "12,500+",
  },
  {
    id: 2,
    icon: <GiDogHouse className="text-3xl text-purple-500" />,
    label: "Adoptions Completed",
    value: "4,200+",
  },
  {
    id: 3,
    icon: <MdPets className="text-3xl text-blue-500" />,
    label: "Pet Services",
    value: "150+",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="-mt-10">
        <div
          className="min-h-screen bg-cover bg-center relative flex items-center"
          style={{ backgroundImage: `url(${sideCat})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>

          <div className="relative z-10 container mx-auto px-6 text-white">
            <div className="max-w-2xl">
              <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Welcome to PetCare
              </h1>

              <p className="mb-6 text-lg text-gray-200 leading-relaxed">
                Your trusted platform for pet adoption, grooming, and pet care
                services. Find your perfect furry companion today.
              </p>

              <div className="flex flex-wrap gap-4">
              

                <button
                  onClick={() => navigate("/add-adoption")}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl shadow-lg hover:scale-105 transition duration-300"
                >
                  + Add Your Pet
                </button>
              </div>

              {/* Stats */}
              <div className="grid gap-4 sm:grid-cols-3 mt-10">
                {stats.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl bg-white/90 backdrop-blur-md shadow-lg py-4 px-3 text-center hover:scale-105 transition duration-300"
                  >
                    <div className="flex items-center justify-center mb-2">
                      {item.icon}
                    </div>

                    <p className="text-lg font-semibold text-slate-900">
                      {item.value}
                    </p>

                    <p className="text-xs font-medium text-slate-500">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <p className="text-gray-200 text-base">
                  Want to rehome your pet safely and find a loving family?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ADOPTION SECTION ================= */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl text-center font-bold text-gray-800 mb-3">
            🐾 Available for Adoption
          </h2>

          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Give a loving home to pets who are waiting for care and affection.
            Browse our available pets and find your perfect companion today.
            Every adoption saves a life and brings endless joy to your family.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {petsJson.slice(0, 6).map((pet) => (
              <div
                key={pet._id}
                className="group bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 hover:-translate-y-2"
              >
                <div className="overflow-hidden">
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {pet.name}
                    </h3>

                    <span className="text-xs bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full">
                      {pet.type}
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 flex items-center gap-2 mt-2">
                    <FaMapMarkerAlt className="text-pink-500" />
                    {pet.location}
                  </p>

                  <p className="text-sm text-gray-600 mt-3 line-clamp-2 leading-relaxed">
                    {pet.description}
                  </p>

                  <Link to="/adopt-form" state={{ pet }}>
                    <button className="btn btn-primary w-full mt-5 hover:scale-105 transition duration-300">
                      Adopt Now 🐾
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/adoption">
              <button className="btn btn-primary px-8 hover:scale-105 transition duration-300">
                See All Adoption →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= PET FOOD SECTION ================= */}
      <FoodSection />

      {/* ================= SERVICES SECTION ================= */}
      <ServicesSection />

      {/* ================= REVIEWS SECTION ================= */}
      <Reviews />
    </>
  );
};

export default Home;