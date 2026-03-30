// src/pages/Petfood/Petfood.jsx
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";

import food1 from "../../assets/petfood/petfood.jpg";
import food2 from "../../assets/petfood/petfood2.jpg";

const allFoods = [
  { id: 1, name: "Premium Dog Food", category: "Dog", image: food1, price: 25, rating: 4.5 },
  { id: 2, name: "Healthy Puppy Meal", category: "Dog", image: food2, price: 30, rating: 4.8 },
  { id: 3, name: "Organic Cat Food", category: "Cat", image: food1, price: 22, rating: 4.6 },
  { id: 4, name: "Kitten Growth Formula", category: "Cat", image: food2, price: 28, rating: 4.7 },
  { id: 5, name: "Bird Nutri Mix", category: "Bird", image: food1, price: 15, rating: 4.3 },
  { id: 6, name: "Parrot Special Seeds", category: "Bird", image: food2, price: 18, rating: 4.4 },
  { id: 7, name: "Fish Flakes Pro", category: "Fish", image: food1, price: 12, rating: 4.2 },
  { id: 8, name: "Goldfish Premium Feed", category: "Fish", image: food2, price: 14, rating: 4.5 },
  { id: 9, name: "Rabbit Fresh Pellets", category: "Rabbit", image: food1, price: 20, rating: 4.6 },
  { id: 10, name: "Hamster Crunch Mix", category: "Small Pet", image: food2, price: 10, rating: 4.1 },
  { id: 11, name: "Senior Dog Care", category: "Dog", image: food1, price: 27, rating: 4.7 },
  { id: 12, name: "Indoor Cat Delight", category: "Cat", image: food2, price: 24, rating: 4.8 },
  { id: 13, name: "Tropical Fish Diet", category: "Fish", image: food1, price: 16, rating: 4.3 },
  { id: 14, name: "Lovebird Special Feed", category: "Bird", image: food2, price: 19, rating: 4.4 },
  { id: 15, name: "Guinea Pig Natural Mix", category: "Small Pet", image: food1, price: 13, rating: 4.2 },
  { id: 16, name: "High Protein Dog Meal", category: "Dog", image: food2, price: 32, rating: 4.9 },
];

const categories = ["All", "Dog", "Cat", "Bird", "Fish", "Rabbit", "Small Pet"];

const Petfood = () => {
  const navigate = useNavigate(); // ✅ Correctly inside the component
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredFoods = allFoods.filter((food) => {
    const matchCategory = category === "All" || food.category === category;
    const matchSearch = food.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleAddToCart = (food) => {
    toast.success(`${food.name} added to cart 🛒`);
    navigate("/payment", { state: { food } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center text-pink-600 mb-4">
          🐾 Our Pet Food Collection
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Discover high-quality, nutritious, and tasty pet food for your beloved companions. Filter by category or search to find the perfect meal.
        </p>

        {/* Filter + Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300
                  ${category === cat
                    ? "bg-pink-500 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-pink-100"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <input
            type="text"
            placeholder="Search pet food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border rounded-xl w-full md:w-64 focus:ring-2 focus:ring-pink-400 outline-none shadow-sm"
          />
        </div>

        {/* Food Cards */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredFoods.map((food) => (
            <motion.div
              key={food.id}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-3xl overflow-hidden shadow-md"
            >
              <img
                src={food.image}
                alt={food.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">{food.name}</h3>
                <p className="text-sm text-gray-500 mt-1">Category: {food.category}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-pink-500 font-bold text-lg">${food.price}</span>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <FaStar
                        key={i}
                        size={14}
                        className={i < Math.round(food.rating) ? "text-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleAddToCart(food)}
                  className="mt-4 w-full bg-pink-500 text-white py-2 rounded-xl hover:bg-pink-600 transition duration-300 shadow"
                >
                  Add to Cart 🛒
                </button>
              </div>
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-5 rounded-3xl transition duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {filteredFoods.length === 0 && (
          <p className="text-center text-gray-500 mt-10 text-lg">
            No food found 😢
          </p>
        )}
      </div>
    </div>
  );
};

export default Petfood;