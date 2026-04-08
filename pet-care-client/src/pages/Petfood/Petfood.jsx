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
  { id: 7, name: "Kitten Growth Formula", category: "Cat", image: food2, price: 28, rating: 4.9 },
  { id: 9, name: "Parrot Special Seeds", category: "Bird", image: food2, price: 18, rating: 5 },
];

const categories = ["All", "Dog", "Cat", "Bird", "Fish", "Rabbit", "Small Pet"];

const Petfood = () => {
  const navigate = useNavigate();
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          🍖 Healthy Pet Food
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Provide your beloved pets with premium, nutritious meals that keep them healthy, happy, and active. 
          Browse our selection to find the perfect food for your furry friends.
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
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"}`}
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
            className="px-4 py-2 border rounded-xl w-full md:w-64 focus:ring-2 focus:ring-primary outline-none shadow-sm"
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
              className="relative bg-base-200 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
            >
              <img
                src={food.image}
                alt={food.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">{food.name}</h3>
                <p className="text-sm text-gray-500 mt-1">Category: {food.category}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-primary font-bold text-lg">${food.price}</span>
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
                  className="mt-4 w-full btn btn-primary"
                >
                  Add to Cart 🛒
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredFoods.length === 0 && (
          <p className="text-center text-gray-500 mt-10 text-lg">
            No food found 😢
          </p>
        )}
      </div>
    </section>
  );
};

export default Petfood;