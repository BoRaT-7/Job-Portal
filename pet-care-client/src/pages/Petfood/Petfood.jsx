import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// JSON Data Import
import allFoods from "../../data/Petfood.json";

const categories = [
  "All",
  "Dog",
  "Cat",
  "Bird",
  "Fish",
  "Rabbit",
  "Small Pet",
];

const Petfood = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Filter Foods
  const filteredFoods = allFoods.filter((food) => {
    const matchCategory =
      category === "All" || food.category === category;

    const matchSearch = food.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  // Add To Cart
  const handleAddToCart = (food) => {
    toast.success(`${food.name} added to cart 🛒`);

    navigate("/payment", {
      state: { food },
    });
  };

  return (
    <section className="py-16 bg-base-100 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            🍖 Healthy Pet Food
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Provide your beloved pets with nutritious and healthy meals.
            Browse premium food collections for dogs, cats, birds,
            fish, rabbits, and more.
          </p>
        </div>

        {/* Filter + Search */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-5 mb-12">

          {/* Categories */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 border
                  
                  ${
                    category === cat
                      ? "bg-primary text-white border-primary shadow-lg scale-105"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-primary hover:text-white"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="w-full lg:w-72">
            <input
              type="text"
              placeholder="Search pet food..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-3 border border-gray-300 rounded-2xl outline-none focus:ring-2 focus:ring-primary shadow-sm"
            />
          </div>
        </div>

        {/* Food Cards */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {filteredFoods.map((food) => (
            <motion.div
              key={food.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={food.image}
                  alt={food.name}
                  className="h-56 w-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">

                {/* Name */}
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {food.name}
                </h3>

                {/* Category */}
                <p className="text-sm text-gray-500">
                  Category: {food.category}
                </p>

                {/* Price + Rating */}
                <div className="flex justify-between items-center mt-4">

                  {/* Price */}
                  <span className="text-primary text-2xl font-bold">
                    ${food.price}
                  </span>

                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <FaStar
                        key={i}
                        size={15}
                        className={
                          i < Math.round(food.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}

                    <span className="ml-1 text-sm text-gray-500">
                      ({food.rating})
                    </span>
                  </div>
                </div>

                {/* Button */}
                <button
                  onClick={() => handleAddToCart(food)}
                  className="mt-5 w-full btn btn-primary rounded-xl text-white"
                >
                  Add To Cart 🛒
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredFoods.length === 0 && (
          <div className="text-center mt-16">
            <h2 className="text-2xl font-semibold text-gray-500">
              No food found 😢
            </h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default Petfood;