// src/pages/Home/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import jobSearch from "../../assets/job search.jpg";
import jobHome from "../../assets/4236127.jpg";

const Home = () => {
  return (
    <section className="-mt-10">
      <div className="hero bg-base-200 min-h-[calc(100vh-5px)]">
        <div className="hero-content flex-col lg:flex-row lg:gap-12">
          {/* Left image: small up/down motion */}
          <motion.div
            className="w-64 mb-25 h-64 lg:w-72 lg:h-72 rounded-2xl shadow-2xl overflow-hidden"
            animate={{ y: [-20, 80, -20] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src={jobHome}
              alt="Professionals searching for jobs"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right image: small left/right motion */}
          <motion.div
            className="w-64 h-64 lg:w-72 lg:h-72 rounded-2xl shadow-2xl overflow-hidden"
            animate={{ x: [20, -80, 20] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src={jobSearch}
              alt="Job search illustration"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text content */}
          <div className="max-w-xl">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Find your next opportunity
            </h1>
            <p className="py-6 text-base-content/80">
              Discover curated jobs, save your favorites, and track every
              application in one place. Build your career with a modern,
              professional job portal.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
