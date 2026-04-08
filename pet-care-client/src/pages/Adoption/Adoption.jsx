// src/pages/Adoption/Adoption.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

// Image
import DogImg from "../../assets/PaymentForm/zoe-gayah-jonker-G7kUPmzi80E-unsplash.jpg";

const petsData = [
  { id: 1, name: "Buddy", type: "Dog", location: "Dhaka, Bangladesh", image: DogImg, description: "Energetic dog who loves to play and cuddle." },
  { id: 2, name: "Simba", type: "Cat", location: "Chittagong, Bangladesh", image: DogImg, description: "Friendly and playful pet looking for a loving home." },
  { id: 3, name: "Coco", type: "Bird", location: "Sylhet, Bangladesh", image: DogImg, description: "Colorful parrot, very friendly and talkative." },
  { id: 4, name: "Milo", type: "Rabbit", location: "Khulna, Bangladesh", image: DogImg, description: "Gentle rabbit, perfect for a calm home." },
  { id: 5, name: "Hammy", type: "Hamster", location: "Rajshahi, Bangladesh", image: DogImg, description: "Cute little hamster for small spaces." },
  { id: 6, name: "Polly", type: "Parrot", location: "Barishal, Bangladesh", image: DogImg, description: "Talkative parrot that loves attention." },
  { id: 7, name: "Goldie", type: "Fish", location: "Rangpur, Bangladesh", image: DogImg, description: "Beautiful fish for your aquarium." },
  { id: 8, name: "Ginger", type: "Guinea Pig", location: "Mymensingh, Bangladesh", image: DogImg, description: "Friendly guinea pig that enjoys companionship." },
  { id: 9, name: "Shelly", type: "Turtle", location: "Comilla, Bangladesh", image: DogImg, description: "Calm turtle, great for a peaceful home." },
  { id: 10, name: "Kitty", type: "Kitten", location: "Dinajpur, Bangladesh", image: DogImg, description: "Playful kitten, perfect for kids." },
  { id: 11, name: "Max", type: "Puppy", location: "Sylhet, Bangladesh", image: DogImg, description: "Adorable puppy, loves cuddles." },
  { id: 12, name: "Lovebird", type: "Lovebird", location: "Dhaka, Bangladesh", image: DogImg, description: "Colorful lovebird, very social and friendly." },
];

const Adoption = () => {
  const [selectedType, setSelectedType] = useState("All");

  // Filter pets based on type
  const filteredPets =
    selectedType === "All"
      ? petsData
      : petsData.filter((pet) => pet.type === selectedType);

  // Unique types for filter buttons
  const petTypes = ["All", ...new Set(petsData.map((pet) => pet.type))];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-primary">🐾 Pet Adoption Center</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Give a loving home to pets waiting for care and affection. Browse our adorable pets and find your perfect companion today!
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {petTypes.map((type) => (
            <button
              key={type}
              className={`px-4 py-2 rounded-full font-medium transition ${
                selectedType === type
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setSelectedType(type)}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Pet Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredPets.map((pet) => (
            <div
              key={pet.id}
              className="bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >
              <img
                src={pet.image}
                alt={pet.name}
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">{pet.name}</h3>
                <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                  <FaMapMarkerAlt className="text-pink-500" /> {pet.location}
                </p>
                <p className="text-sm text-gray-600 mt-2">{pet.description}</p>
<Link to="/adopt-form">
  <button className="btn btn-primary w-full mt-4 hover:scale-105 transition duration-300">
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