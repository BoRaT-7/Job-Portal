import React, { useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { services } from "./serviceData";

export default function ServiceDetail() {
  const { serviceName } = useParams();
  const decodedName = decodeURIComponent(serviceName);

  const service = services.find((s) => s.name === decodedName);

  const [showForm, setShowForm] = useState(false);

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

    console.log("Submitted:", formData);

    toast.success(`${decodedName} request submitted successfully! 🎉`);

    setFormData({
      name: "",
      email: "",
      petName: "",
      petType: "",
      petAge: "",
      petGender: "",
      message: "",
    });

    setShowForm(false);
  };

  if (!service)
    return <p className="text-center mt-16">Service not found.</p>;

  return (
    <div className="min-h-screen bg-base-100 flex flex-col items-center p-6">
      <div className="bg-white shadow-2xl rounded-3xl max-w-4xl w-full p-8">

        {/* Title */}
        <h2 className="text-3xl font-bold text-primary text-center mb-4">
          {service.emoji} {service.name}
        </h2>

        {/* Full Description */}
        <p className="text-gray-600 text-center mb-6">
          {service.description}
        </p>

        {/* Request Button */}
        {!showForm && (
          <div className="text-center">
            <button
              onClick={() => setShowForm(true)}
              className="btn btn-primary px-8 rounded-full"
            >
              Request This Service 🚀
            </button>
          </div>
        )}

        {/* FORM */}
        {showForm && (
          <form onSubmit={handleSubmit} className="space-y-5 mt-8">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-xl"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-xl"
            />

            <input
              type="text"
              name="petName"
              placeholder="Pet Name"
              value={formData.petName}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-xl"
            />

            <select
              name="petType"
              value={formData.petType}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-xl"
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
              placeholder="Pet Age"
              value={formData.petAge}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-xl"
            />

            <select
              name="petGender"
              value={formData.petGender}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-xl"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male ♂️</option>
              <option value="Female">Female ♀️</option>
            </select>

            <textarea
              name="message"
              placeholder="Additional Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl"
            />

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-xl"
            >
              Submit Request ✅
            </button>
          </form>
        )}
      </div>
    </div>
  );
}