// src/pages/Petfood/PaymentForm.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import bg1 from "../../assets/PaymentForm/taylor-kopel-WX4i1Jq_o0Y-unsplash.jpg";
import bg2 from "../../assets/PaymentForm/zoe-gayah-jonker-G7kUPmzi80E-unsplash.jpg";

const PaymentForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const food = location.state?.food;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMethod: "Bkash",
    transactionId: "",
  });

  const [quantity, setQuantity] = useState(1);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleQuantity = (type) => {
    if (type === "decrease") {
      setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    } else {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success(
      `Payment for ${food?.name} (Qty: ${quantity}) submitted successfully! 🎉`
    );

    setFormData({
      name: "",
      phone: "",
      address: "",
      paymentMethod: "Bkash",
      transactionId: "",
    });
    setQuantity(1);
    navigate("/");
  };

  if (!food) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">No product selected 😢</p>
      </div>
    );
  }

  const totalCost = (food.price * quantity).toFixed(2);

  return (
    <div className="min-h-screen flex items-center justify-center relative p-4 bg-gray-50">
      {/* Background Images */}
      <img
        src={bg1}
        alt="Background 1"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
      />
      <img
        src={bg2}
        alt="Background 2"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
      />

      <div className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full grid md:grid-cols-2 overflow-hidden">
        {/* Left Side - Product Info */}
        <div className="bg-pink-50 p-8 flex flex-col items-center justify-center gap-4">
          <h2 className="text-3xl font-bold text-pink-600 text-center">
            🐾 Checkout
          </h2>
          <img
            src={food.image}
            alt={food.name}
            className="w-48 h-48 object-cover rounded-2xl shadow-lg"
          />
          <h3 className="text-xl font-semibold text-gray-800">{food.name}</h3>
          <p className="text-gray-600">Category: {food.category}</p>
          <p className="text-lg text-gray-700">Unit Price: ${food.price}</p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mt-2">
            <button
              onClick={() => handleQuantity("decrease")}
              className="px-3 py-1 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition"
            >
              -
            </button>
            <span className="text-lg font-bold">{quantity}</span>
            <button
              onClick={() => handleQuantity("increase")}
              className="px-3 py-1 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition"
            >
              +
            </button>
          </div>

          <p className="mt-3 text-2xl font-bold text-pink-500">
            Total: ${totalCost}
          </p>
        </div>

        {/* Right Side - Payment Form */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Enter Payment Details
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none"
            />

            <textarea
              name="address"
              placeholder="Your Address"
              value={formData.address}
              onChange={handleChange}
              required
              rows="3"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none"
            ></textarea>

            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none"
            >
              <option value="Bkash">Bkash</option>
              <option value="Nogod">Nogod</option>
              <option value="Rocket">Rocket</option>
            </select>

            <input
              type="text"
              name="transactionId"
              placeholder="Transaction ID"
              value={formData.transactionId}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-3 rounded-xl hover:bg-pink-600 transition duration-300 shadow-lg mt-2"
            >
              Pay Now 💳
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;