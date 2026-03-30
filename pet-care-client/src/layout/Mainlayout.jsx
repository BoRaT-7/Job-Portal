import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../shared/Navber";
import Footer from "../pages/Home/Footer";

const Mainlayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Navbar */}
      <Navber />

      {/* Page Content */}
      <div className="flex-grow max-w-7xl mx-auto w-full">
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />

    </div> 
  );
};

export default Mainlayout;