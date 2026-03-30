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
            </div>
          </div>
        </div>
      </section>

      {/* ================= ADOPTION SECTION ================= */}
     <section className="py-16 bg-gray-50">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
      🐾 Available for Adoption
    </h2>

    {/* New Paragraph Added */}
    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
      Give a loving home to pets who are waiting for care and affection. 
      Browse our available pets and find your perfect companion today. 
      Every adoption saves a life and brings endless joy to your family.
    </p>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          key={item}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 hover:-translate-y-2"
        >
          <img
            src={adoptionImg}
            alt="Pet"
            className="h-56 w-full object-cover"
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
            <button className="mt-4 w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition duration-300">
              Adopt Now 🐾
            </button>
          </Link>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-12">
      <Link to="/adoption">
        <button className="px-8 py-3 btn btn-primary rounded-full shadow-lg hover:scale-105 transition duration-300">
          See All Adoption →
        </button>
      </Link>
    </div>
  </div>
</section>

      {/* ================= PET FOOD SECTION ================= */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            🍖 Healthy Pet Food
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={item}
                className="bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 hover:-translate-y-2"
              >
                <img
                  src={index % 2 === 0 ? petfood1 : petfood2}
                  alt="Pet Food"
                  className="h-56 w-full object-cover hover:scale-110 transition duration-500"
                />

                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Premium Dog Food
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    High-quality nutrition for your lovely pets.
                  </p>

                  <p className="text-lg font-bold text-primary mt-3">
                    ৳ 1200
                  </p>

                  <button className="btn btn-primary w-full mt-4 hover:scale-105 transition duration-300">
                    Buy Now 🛒
                  </button>
                </div>
              </div>
            ))}
          </div>

           <div className="text-center mt-12">
            <Link to="/petfood">
              <button className="px-8 py-3 btn btn-primary rounded-full shadow-lg hover:scale-105 transition duration-300">
                See All Food →
              </button>
            </Link>
          </div>
        </div>
      </section>


       <section className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">
            🐾 Our Pet Services
          </h2>
          <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
            We provide professional and caring services to keep your pets
            healthy, happy, and safe.
          </p>
        </div>

        {/* 3 Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Grooming */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300">
            <div className="card-body text-center">
              <h3 className="card-title justify-center text-primary">
                ✂️ Grooming
              </h3>
              <p className="text-base-content/70">
                Professional grooming services to keep your pet clean,
                fresh, and stylish.
              </p>
            </div>
          </div>

          {/* Veterinary */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300">
            <div className="card-body text-center">
              <h3 className="card-title justify-center text-primary">
                🏥 Veterinary Care
              </h3>
              <p className="text-base-content/70">
                Regular check-ups, vaccinations, and emergency medical
                care for your beloved pets.
              </p>
            </div>
          </div>

          {/* Pet Boarding */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300">
            <div className="card-body text-center">
              <h3 className="card-title justify-center text-primary">
                🏠 Pet Boarding
              </h3>
              <p className="text-base-content/70">
                Safe and comfortable boarding facilities when you are
                away from home.
              </p>
            </div>
          </div>

        </div>

        {/* See All Button */}
        <div className="text-center mt-12">
          <Link to="/services">
            <button className="btn btn-primary px-8 hover:scale-105 transition">
              See All Services
            </button>
          </Link>
        </div>

      </div>
    </section>

   <Reviews />
   
    </>
  );
};

export default Home;