// src/pages/Services/Services.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { services } from "./serviceData";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">🐾 Our Pet Services</h2>
          <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
            We provide top-quality care services for your beloved pets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
         <ServiceCard
  key={service.name}
  service={service}
  onClick={() => {
    if (service.name === "Pet Adoption") {
      navigate("/adopt-form");
    } else {
      navigate(`/services/${encodeURIComponent(service.name)}`);
    }
  }}
/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;