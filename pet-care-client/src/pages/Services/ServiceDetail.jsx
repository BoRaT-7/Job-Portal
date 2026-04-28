import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { services } from "./serviceData";

export default function ServiceDetail() {
  const { serviceName } = useParams();
  const decodedName = decodeURIComponent(serviceName);

  const service = services.find((s) => s.name === decodedName);

  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false); // ✅ ADDED

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/services/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          serviceName: decodedName,
        }),
      });

      const data = await res.json();

      if (data.success) {
        // ✅ SHOW SUCCESS MODAL
        setSuccess(true);

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
      } else {
        alert(data.error || "Failed to submit");
      }
    } catch (err) {
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  if (!service)
    return <p className="text-center mt-16">Service not found</p>;

  return (
    <div className="min-h-screen flex justify-center p-6">

      {/* ✅ SUCCESS MODAL (YOUR PAYMENT STYLE) */}
      {success && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] md:w-1/3 p-8 rounded-2xl shadow-2xl text-center animate-bounce">

            <div className="text-5xl mb-3">🎉</div>

            <h2 className="text-2xl font-bold text-green-600">
              Service Request Successful
            </h2>

            <p className="text-gray-500 mt-2">
              Your service request has been submitted successfully.
            </p>

            <button
              onClick={() => setSuccess(false)}
              className="mt-5 bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600"
            >
              OK
            </button>

          </div>
        </div>
      )}

      <div className="bg-white shadow-xl rounded-2xl max-w-3xl w-full p-6">

        <h2 className="text-3xl font-bold text-center">
          {service.emoji} {service.name}
        </h2>

        <p className="text-gray-600 text-center mt-2">
          {service.description}
        </p>

        {!showForm && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowForm(true)}
              className="bg-green-500 text-white px-6 py-2 rounded-xl"
            >
              Request Service
            </button>
          </div>
        )}

        {showForm && (
          <form onSubmit={handleSubmit} className="space-y-4 mt-6">

            <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full p-3 border rounded-xl" />

            <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-xl" />

            <input name="petName" placeholder="Pet Name" value={formData.petName} onChange={handleChange} className="w-full p-3 border rounded-xl" />

            <select name="petType" value={formData.petType} onChange={handleChange} className="w-full p-3 border rounded-xl">
              <option value="">Select Pet Type</option>
              <option>Dog</option>
              <option>Cat</option>
              <option>Bird</option>
            </select>

            <input name="petAge" type="number" placeholder="Age" value={formData.petAge} onChange={handleChange} className="w-full p-3 border rounded-xl" />

            <select name="petGender" value={formData.petGender} onChange={handleChange} className="w-full p-3 border rounded-xl">
              <option value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>

            <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} className="w-full p-3 border rounded-xl" />

            <button
              disabled={loading}
              className="w-full bg-green-500 text-white py-3 rounded-xl"
            >
              {loading ? "Sending..." : "Submit"}
            </button>

          </form>
        )}

      </div>
    </div>
  );
}