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
const paymentOptions = [
  {
    name: "Bkash",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/BKash_logo.svg/2560px-BKash_logo.svg.png",
  },
  {
    name: "Nogod",
    logo: "https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png",
  },
  {
    name: "Rocket",
    logo: "https://seeklogo.com/images/D/dutch-bangla-rocket-logo-BB6B2C6F9D-seeklogo.com.png",
  },
];
const handleSubmit = async (e) => {
  e.preventDefault();

  const paymentData = {
    name: formData.name,
    phone: formData.phone,
    address: formData.address,
    paymentMethod: formData.paymentMethod,
    transactionId: formData.transactionId,
    productName: food.name,
    productCategory: food.category,
    productImage: food.image,
    unitPrice: food.price,
    quantity: quantity,
  };

  try {
    const response = await fetch("http://localhost:5000/api/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentData),
    });

    const data = await response.json();

    if (response.ok) {
      toast.success("Payment submitted successfully! 🎉");
      navigate("/");
    } else {
      toast.error(data.error || "Payment failed!");
    }
  } catch (error) {
    console.error(error);
    toast.error("Server error!");
  }
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

          <div className="space-y-3">
  {paymentOptions.map((item) => (
    <label
      key={item.name}
      className={`flex items-center justify-between p-3 border rounded-xl cursor-pointer transition ${
        formData.paymentMethod === item.name
          ? "border-pink-500 bg-pink-50"
          : "border-gray-300"
      }`}
    >
      <div className="flex items-center gap-3">
        <img src={item.logo} alt={item.name} className="w-10 h-10 object-contain" />
        <span className="font-medium">{item.name}</span>
      </div>

      {/* Dot (radio style) */}
      <div
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
          formData.paymentMethod === item.name
            ? "border-pink-500"
            : "border-gray-400"
        }`}
      >
        {formData.paymentMethod === item.name && (
          <div className="w-2.5 h-2.5 bg-pink-500 rounded-full"></div>
        )}
      </div>

      <input
        type="radio"
        name="paymentMethod"
        value={item.name}
        checked={formData.paymentMethod === item.name}
        onChange={handleChange}
        className="hidden"
      />
    </label>
  ))}
</div>

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