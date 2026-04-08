// src/pages/Services/ServiceDetail.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { services } from "./serviceData";

export default function ServiceDetail() {
  const { serviceName } = useParams();
  const service = services.find((s) => s.name === serviceName);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    petName: "",
    petType: "",
    petAge: "",
    petGender: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData); // Later send to backend
    toast.success(`${serviceName} request submitted successfully! 🎉`);
    setFormData({
      name: "",
      email: "",
      petName: "",
      petType: "",
      petAge: "",
      petGender: "",
      message: "",
    });
  };

  if (!service) return <p className="text-center mt-16">Service not found.</p>;

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-3xl max-w-4xl w-full p-8">
        <h2 className="text-3xl font-bold text-primary text-center mb-4">
          {service.emoji} {service.name}
        </h2>
        <p className="text-gray-600 text-center mb-8">{service.description}</p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* User Details */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary outline-none"
          />

          {/* Pet Details */}
          <input
            type="text"
            name="petName"
            placeholder="Your Pet's Name"
            value={formData.petName}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary outline-none"
          />

          <select
            name="petType"
            value={formData.petType}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary outline-none"
          >
            <option value="">Select Pet Type</option>
            <option value="Dog">Dog 🐶</option>
            <option value="Cat">Cat 🐱</option>
            <option value="Bird">Bird 🐦</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="number"
            name="petAge"
            placeholder="Your Pet's Age (in years)"
            value={formData.petAge}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary outline-none"
          />

          <select
            name="petGender"
            value={formData.petGender}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary outline-none"
          >
            <option value="">Select Pet Gender</option>
            <option value="Male">Male ♂️</option>
            <option value="Female">Female ♀️</option>
          </select>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Additional Details / Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary outline-none"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-xl hover:bg-primary-focus transition duration-300"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}