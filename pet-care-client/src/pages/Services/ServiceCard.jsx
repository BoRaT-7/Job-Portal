import React from "react";

const ServiceCard = ({ service, onClick }) => {
  return (
    <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition">
      <div className="card-body text-center">
        <h3 className="card-title justify-center text-primary">
          {service.emoji} {service.name}
        </h3>

        {/* Short Description */}
        <p className="text-base-content/70 line-clamp-3">
          {service.description}
        </p>

        {/* Button */}
        <div className="mt-4">
          <button
            onClick={onClick}
            className="btn btn-primary btn-sm rounded-full"
          >
            Read More →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;