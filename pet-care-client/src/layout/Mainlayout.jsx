import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../shared/Navber";
import Footer from "../pages/Home/Footer";
import { Toaster } from "react-hot-toast"; // ✅ ADD

const Mainlayout = () => {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ✅ GLOBAL TOASTER (IMPORTANT) */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            padding: "14px 20px",
            fontSize: "16px",
            borderRadius: "12px",
          },
        }}
      />

      {/* Navbar */}
      <Navber />

      {/* Page Content */}
      <div className="flex-grow max-w-full mx-auto w-full">
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Mainlayout;