import React from "react";
import { FaPaw } from "react-icons/fa";
import { GiDogHouse } from "react-icons/gi";
import { MdPets } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import AdoptionSection from "./AdoptionSection";
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
      {/* HERO */}
      <section className="-mt-10">
        <div
          className="min-h-screen bg-cover bg-center relative flex items-center"
          style={{ backgroundImage: `url(${sideCat})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 container mx-auto px-6 text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Welcome to PetCare
            </h1>

            <p className="mb-6 text-gray-200">
              Pet adoption and care platform
            </p>

            <button
              onClick={() => navigate("/add-adoption")}
              className="px-6 py-3 bg-cyan-500 rounded-xl"
            >
              + Add Your Pet
            </button>

            <div className="grid sm:grid-cols-3 gap-4 mt-10">
              {stats.map((s) => (
                <div key={s.id} className="bg-white/80 p-4 rounded-xl text-center">
                  {s.icon}
                  <p className="font-bold">{s.value}</p>
                  <p>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ADOPTION SECTION (NOW CLEAN COMPONENT) */}
      <AdoptionSection />

      <FoodSection />
      <ServicesSection />
      <Reviews />
    </>
  );
};

export default Home;