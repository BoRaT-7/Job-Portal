// src/pages/Services/ServiceCard.jsx
import React from "react";

const ServiceCard = ({ service, onClick }) => {
  return (
    <div
      className="card bg-base-200 shadow-xl hover:shadow-2xl cursor-pointer transition"
      onClick={onClick}
    >
      <div className="card-body text-center">
        <h3 className="card-title justify-center text-primary">
          {service.emoji} {service.name}
        </h3>
        <p className="text-base-content/70">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;