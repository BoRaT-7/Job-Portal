import React from "react";
import { FaPaw, FaMapMarkerAlt } from "react-icons/fa";
import { GiDogHouse } from "react-icons/gi";
import { MdPets } from "react-icons/md";
import { Link } from "react-router-dom";

import petfood1 from "../../assets/petfood/petfood.jpg";
import petfood2 from "../../assets/petfood/petfood2.jpg";
import sideCat from "../../assets/side cat.jpg";
import adoptionImg from "../../assets/jscreativelab-simba-8618301_1920.jpg";
import Reviews from "./Reviews";
import Footer from "./Footer";
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
              <h1 className="text-4xl lg:text-6xl font-extrabold mb-6">
                Welcome to PetCare
              </h1>

              <p className="mb-6 text-lg text-gray-200">
                Your trusted platform for pet adoption, grooming, and care
                services.
              </p>

              <button className="btn btn-primary hover:scale-105 transition duration-300">
                Explore Pets 🐶
              </button>

              {/* Stats */}
              <div className="grid gap-4 sm:grid-cols-3 mt-10">
                {stats.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl bg-white/90 backdrop-blur-md shadow-lg py-2 text-center hover:scale-105 transition duration-300"
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
              <div>
                <p>If you adop your pet </p>
                  <button
            onClick={() => navigate("/add-adoption")}
            className="mt-5 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl shadow-lg"
          >
            + Add Your Pet
          </button>
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

    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
      Give a loving home to pets who are waiting for care and affection. 
      Browse our available pets and find your perfect companion today. 
      Every adoption saves a life and brings endless joy to your family.
    </p>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          key={item}
          className="bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 hover:-translate-y-2"
        >
          <img
            src={adoptionImg}
            alt="Pet"
            className="h-56 w-full object-cover hover:scale-110 transition duration-500"
          />

          <div className="p-5">
            <h3 className="text-xl font-semibold text-gray-800">
              Simba
            </h3>

            <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
              <FaMapMarkerAlt className="text-pink-500" />
              Dhaka, Bangladesh
            </p>

            <p className="text-sm text-gray-600 mt-3">
              Friendly and playful pet looking for a loving home.
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

    <div className="text-center mt-12">
      <Link to="/adoption">
        <button className="btn btn-primary px-8 hover:scale-105 transition">
          See All Adoption →
        </button>
      </Link>
    </div>
  </div>
</section>

      {/* ================= PET FOOD SECTION ================= */}
     <FoodSection></FoodSection>

 {/* ================= Services SECTION ================= */}
      <ServicesSection></ServicesSection>


   <Reviews />
   
    </>
  );
};

export default Home;