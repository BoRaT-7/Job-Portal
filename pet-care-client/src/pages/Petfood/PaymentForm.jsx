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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const paymentData = {
      ...formData,
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
      {/* Background */}
      <img
        src={bg1}
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <img
        src={bg2}
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full grid md:grid-cols-2 overflow-hidden">
        {/* LEFT */}
        <div className="bg-pink-50 p-8 flex flex-col items-center gap-4">
          <h2 className="text-3xl font-bold text-pink-600">🐾 Checkout</h2>

          <img
            src={food.image}
            className="w-44 h-44 object-cover rounded-2xl shadow"
          />

          <h3 className="text-xl font-semibold">{food.name}</h3>
          <p className="text-gray-600">{food.category}</p>
          <p className="text-lg font-medium">${food.price}</p>

          {/* Quantity */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleQuantity("decrease")}
              className="px-3 py-1 bg-pink-500 text-white rounded-lg"
            >
              -
            </button>
            <span className="font-bold">{quantity}</span>
            <button
              onClick={() => handleQuantity("increase")}
              className="px-3 py-1 bg-pink-500 text-white rounded-lg"
            >
              +
            </button>
          </div>

          <p className="text-2xl font-bold text-pink-500">
            Total: ${totalCost}
          </p>
        </div>

        {/* RIGHT */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            Payment Details
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Enter your number"
              pattern="01[0-9]{9}"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl"
            />

            <textarea
              name="address"
              placeholder="Your Address"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl"
            />

            {/* PAYMENT METHOD */}
   <div className="flex gap-4 flex-wrap">
  {paymentOptions.map((item) => (
    <label
      key={item.name}
      className={`flex items-center gap-2 cursor-pointer px-3 py-2 rounded-lg border transition ${
        formData.paymentMethod === item.name
          ? "border-pink-500 bg-pink-50"
          : "border-gray-300"
      }`}
    >
      {/* Dot */}
      <div className="w-4 h-4 border-2 rounded-full flex items-center justify-center">
        {formData.paymentMethod === item.name && (
          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
        )}
      </div>

      {/* Name */}
      <span className="text-sm font-medium">{item.name}</span>

      {/* Hidden input */}
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

{/* 🔥 Payment Number Show */}
<div className="mt-4 p-3 rounded-xl bg-yellow-50 border border-yellow-200 text-sm">
  {formData.paymentMethod === "Bkash" && (
    <p>
      Send Money to <span className="font-bold text-pink-600">01754862489 (Bkash)</span>
    </p>
  )}

  {formData.paymentMethod === "Nogod" && (
    <p>
      Send Money to <span className="font-bold text-orange-500">01962584371 (Nogod)</span>
    </p>
  )}

  {formData.paymentMethod === "Rocket" && (
    <p>
      Send Money to <span className="font-bold text-purple-500">01854211690 (Rocket)</span>
    </p>
  )}
</div>

            {/* INSTRUCTION */}
          
            <input
              name="transactionId"
              placeholder="Transaction ID"
              required
              value={formData.transactionId}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl"
            />

            <button className="w-full bg-pink-500 text-white py-3 rounded-xl">
              Confirm Payment 💳
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;