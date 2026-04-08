// src/pages/Home/ServicesSection.jsx
import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    name: "Grooming",
    emoji: "✂️",
    description:
      "Professional grooming services to keep your pet clean, fresh, and stylish.",
  },
  {
    name: "Veterinary",
    emoji: "🏥",
    description:
      "Regular check-ups, vaccinations, and emergency medical care for your beloved pets.",
  },
  {
    name: "Pet Boarding",
    emoji: "🏠",
    description:
      "Safe and comfortable boarding facilities when you are away from home.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">🐾 Our Pet Services</h2>
          <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
            We provide professional and caring services to keep your pets
            healthy, happy, and safe.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.name}
              to={`/services/${service.name}`} // ✅ route with serviceName
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300 cursor-pointer"
            >
              <div className="card-body text-center">
                <h3 className="card-title justify-center text-primary">
                  {service.emoji} {service.name}
                </h3>
                <p className="text-base-content/70">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* See All Button */}
        <div className="text-center mt-12">
          <Link to="/services">
            <button className="btn btn-primary px-8 hover:scale-105 transition">
              See All Services →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;