// src/shared/Navbar.jsx
import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const firstName =
    user?.displayName?.split(" ")[0] || user?.email?.split("@")[0];

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "font-medium"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "font-medium"
          }
        >
          Services
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/adoption"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "font-medium"
          }
        >
          Adoption
        </NavLink>
      </li>
       <li>
        <NavLink
          to="/petfood"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "font-medium"
          }
        >
         Pet Food
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "font-medium"
          }
        >
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-4 sticky top-0 z-50">
      
      {/* Left Section */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            ☰
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>

        {/* Logo */}
    <Link
  to="/"
  className="text-2xl font-extrabold flex items-center gap-2 group transition-all duration-300"
>
  <span className="text-3xl group-hover:scale-110 transition">
    🐈
  </span>
  <span className="text-primary">
    Pet<span className="text-secondary group-hover:text-primary transition">
      Care
    </span>
  </span>
</Link>
      </div>

      {/* Center Menu (Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          {navLinks}
        </ul>
      </div>

      {/* Right Section */}
      <div className="navbar-end gap-2">

        {!user ? (
          <>
            <Link to="/register" className="btn btn-outline btn-primary">
              Register
            </Link>
            <Link to="/login" className="btn btn-primary">
              Sign In
            </Link>
          </>
        ) : (
          <>
            {/* User Info */}
            <div className="hidden sm:flex items-center px-3 py-1 rounded-full bg-base-200">
              <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold mr-2">
                {user.email?.[0]?.toUpperCase() || "U"}
              </span>
              <span className="text-sm max-w-[140px] truncate">
                {firstName}
              </span>
            </div>

            <button
              onClick={handleLogout}
              className="btn btn-outline btn-error btn-sm sm:btn-md"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;