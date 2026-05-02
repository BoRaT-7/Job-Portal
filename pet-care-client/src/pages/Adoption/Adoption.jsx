// src/pages/Adoption/Adoption.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

// Image
import DogImg from "../../assets/PaymentForm/zoe-gayah-jonker-G7kUPmzi80E-unsplash.jpg";

const initialPetsData = [
  {
    id: 1,
    name: "Buddy",
    type: "Dog",
    location: "Dhaka, Bangladesh",
    image: DogImg,
    description: "Energetic dog who loves to play and cuddle.",
  },
  {
    id: 2,
    name: "Simba",
    type: "Cat",
    location: "Chittagong, Bangladesh",
    image: DogImg,
    description: "Friendly and playful pet looking for a loving home.",
  },
  {
    id: 3,
    name: "Coco",
    type: "Bird",
    location: "Sylhet, Bangladesh",
    image: DogImg,
    description: "Colorful parrot, very friendly and talkative.",
  },
  {
    id: 4,
    name: "Milo",
    type: "Rabbit",
    location: "Khulna, Bangladesh",
    image: DogImg,
    description: "Gentle rabbit, perfect for a calm home.",
  },
  {
    id: 5,
    name: "Hammy",
    type: "Hamster",
    location: "Rajshahi, Bangladesh",
    image: DogImg,
    description: "Cute little hamster for small spaces.",
  },
  {
    id: 6,
    name: "Polly",
    type: "Parrot",
    location: "Barishal, Bangladesh",
    image: DogImg,
    description: "Talkative parrot that loves attention.",
  },
  {
    id: 7,
    name: "Goldie",
    type: "Fish",
    location: "Rangpur, Bangladesh",
    image: DogImg,
    description: "Beautiful fish for your aquarium.",
  },
  {
    id: 8,
    name: "Ginger",
    type: "Guinea Pig",
    location: "Mymensingh, Bangladesh",
    image: DogImg,
    description: "Friendly guinea pig that enjoys companionship.",
  },
  {
    id: 9,
    name: "Shelly",
    type: "Turtle",
    location: "Comilla, Bangladesh",
    image: DogImg,
    description: "Calm turtle, great for a peaceful home.",
  },
  {
    id: 10,
    name: "Kitty",
    type: "Kitten",
    location: "Dinajpur, Bangladesh",
    image: DogImg,
    description: "Playful kitten, perfect for kids.",
  },
  {
    id: 11,
    name: "Max",
    type: "Puppy",
    location: "Sylhet, Bangladesh",
    image: DogImg,
    description: "Adorable puppy, loves cuddles.",
  },
  {
    id: 12,
    name: "Lovebird",
    type: "Lovebird",
    location: "Dhaka, Bangladesh",
    image: DogImg,
    description: "Colorful lovebird, very social and friendly.",
  },
];

const Adoption = () => {
  const [selectedType, setSelectedType] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [petsData, setPetsData] = useState(initialPetsData);

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    location: "",
    description: "",
    imageUrl: "",
    imageFile: null,
  });

  const filteredPets =
    selectedType === "All"
      ? petsData
      : petsData.filter((pet) => pet.type === selectedType);

  const petTypes = ["All", ...new Set(petsData.map((pet) => pet.type))];

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "imageFile" && files[0]) {
      setFormData((prev) => ({
        ...prev,
        imageFile: files[0],
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const createPet = (image) => {
      const newPet = {
        id: Date.now(),
        name: formData.name,
        type: formData.type,
        location: formData.location,
        description: formData.description,
        image: image || DogImg,
      };

      setPetsData((prev) => [newPet, ...prev]);

      setFormData({
        name: "",
        type: "",
        location: "",
        description: "",
        imageUrl: "",
        imageFile: null,
      });

      setShowForm(false);
    };

    if (formData.imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => createPet(reader.result);
      reader.readAsDataURL(formData.imageFile);
    } else {
      createPet(formData.imageUrl || DogImg);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-primary">
            🐾 Pet Adoption Center
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Give a loving home to pets waiting for care and affection. Browse
            our adorable pets and find your perfect companion today!
          </p>

          <button
            onClick={() => setShowForm(true)}
            className="btn btn-outline btn-primary mt-6"
          >
            Add Your Pet
          </button>
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
                <h3 className="text-xl font-semibold text-gray-800">
                  {pet.name}
                </h3>

                <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                  <FaMapMarkerAlt className="text-pink-500" />
                  {pet.location}
                </p>

                <p className="text-sm text-gray-600 mt-2">
                  {pet.description}
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
      </div>

      {/* Add Pet Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl w-full max-w-lg p-6 relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute right-4 top-4 text-xl"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-5 text-primary">
              Add Your Pet
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Pet Name"
                required
                className="input input-bordered w-full"
              />

              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                placeholder="Pet Type"
                required
                className="input input-bordered w-full"
              />

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                required
                className="input input-bordered w-full"
              />

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Pet Description"
                required
                className="textarea textarea-bordered w-full"
              />

              <input
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="Photo URL (optional)"
                className="input input-bordered w-full"
              />

              <input
                type="file"
                name="imageFile"
                accept="image/*"
                onChange={handleChange}
                className="file-input file-input-bordered w-full"
              />

              <button type="submit" className="btn btn-primary w-full">
                Submit Pet
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Adoption;