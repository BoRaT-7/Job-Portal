import React from "react";
import { motion } from "framer-motion";
import { FaPaw } from "react-icons/fa";
import { GiDogHouse } from "react-icons/gi";
import { MdPets } from "react-icons/md";

import sideCat from "../../assets/side cat.jpg";

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
    <section className="-mt-10">
      <div
        className="min-h-screen bg-cover bg-center relative flex items-center"
        style={{
          backgroundImage: `url(${sideCat})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
             Welcome to PetCare
            </h1>

            <p className="mb-6 text-lg text-gray-200">
              Your trusted platform for pet adoption, grooming, and care
              services. Find your furry friend and give them a loving home.
            </p>

            <button className="btn btn-primary hover:scale-105 transition duration-300">
              Explore Pets 🐶
            </button>

            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-3 mt-10 ">
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

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;