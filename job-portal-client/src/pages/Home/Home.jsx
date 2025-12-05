// src/pages/Home/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaUserTie } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";
import { FaClipboardCheck } from "react-icons/fa";
import jobSearch from "../../assets/job search.jpg";
import jobHome from "../../assets/4236127.jpg";

const stats = [
  {
    id: 1,
    icon: <FaUserTie className="text-3xl text-[#ff6b3d]" />,
    label: "Freelance Developers",
    value: "919207",
  },
  {
    id: 2,
    icon: <FaLaptopCode className="text-3xl text-[#ff6b3d]" />,
    label: "Developers Per Project",
    value: "25100",
  },
  {
    id: 3,
    icon: <FaClipboardCheck className="text-3xl text-[#ff6b3d]" />,
    label: "Completed Projects",
    value: "388615",
  },
];

const Home = () => {
  return (
    <section className="-mt-10">
      <div className="hero bg-base-200 min-h-[calc(100vh-5px)]">
        <div className="hero-content flex-col lg:flex-row lg:gap-12">
          {/* Left image: up/down motion */}
          <motion.div
            className="w-64 h-64 lg:w-72 lg:h-72 rounded-2xl shadow-2xl overflow-hidden"
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

          {/* Right image: left/right motion */}
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

          {/* Text + stats */}
          <div className="max-w-xl">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Find your next opportunity
            </h1>
            <p className="py-6 text-base-content/80">
              Discover curated jobs, save your favorites, and track every
              application in one place. Build your career with a modern,
              professional job portal.
            </p>
            <button className="btn btn-primary mb-6">Get Started</button>

            {/* stats cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.id}
                  className="relative rounded-2xl bg-white shadow-sm border border-orange-50 px-3 py-4 text-center"
                >
                  <div className="flex items-center justify-center mb-2">
                    {item.icon}
                  </div>
                  <p className="text-lg font-semibold text-slate-900">
                    {item.value}
                  </p>
                  <p className="text-xs font-medium text-slate-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
