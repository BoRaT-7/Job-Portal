import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6 md:px-20">

      {/* ================= TOP GRID ================= */}
      <div className="grid md:grid-cols-4 gap-10 mb-12">

        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            🐾 PetCare
          </h2>
          <p className="text-sm leading-relaxed">
            Your trusted platform for pet adoption, grooming, veterinary care,
            and premium pet food. We care for your pets like family.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-primary transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/adoption" className="hover:text-primary transition">
                Adoption
              </Link>
            </li>
            <li>
              <Link to="/petfood" className="hover:text-primary transition">
                Pet Food
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-primary transition">
                Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-primary transition cursor-pointer">
              Grooming
            </li>
            <li className="hover:text-primary transition cursor-pointer">
              Veterinary Care
            </li>
            <li className="hover:text-primary transition cursor-pointer">
              Pet Boarding
            </li>
            <li className="hover:text-primary transition cursor-pointer">
              Pet Training
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaLocationDot className="text-primary" />
              Dhaka, Bangladesh
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-primary" />
              +880 1234 567 890
            </li>
            <li className="flex items-center gap-2">
              <MdEmail className="text-primary" />
              support@petcare.com
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <div className="p-2 bg-gray-800 rounded-full hover:bg-primary transition cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="p-2 bg-gray-800 rounded-full hover:bg-primary transition cursor-pointer">
              <FaInstagram />
            </div>
            <div className="p-2 bg-gray-800 rounded-full hover:bg-primary transition cursor-pointer">
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM COPYRIGHT ================= */}
      <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} PetCare. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;