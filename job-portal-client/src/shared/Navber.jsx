// src/shared/Navber.jsx
import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navber = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();           // Firebase signOut
      navigate("/login");           // লগআউটের পর লগইন পেজে পাঠাবে
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="font-medium">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/jobs" className="font-medium">
          Jobs
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="font-medium">
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      {/* Left / Brand */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl font-bold">
          Job<span className="text-primary">Portal</span>
        </Link>
      </div>

      {/* Center menu (desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">{navLinks}</ul>
      </div>

      {/* Right auth buttons */}
      <div className="navbar-end gap-2">
        {!user && (
          <>
            <Link to="/register" className="btn btn-outline btn-primary">
              Register
            </Link>
            <Link to="/login" className="btn btn-primary">
              Sign In
            </Link>
          </>
        )}

        {user && (
          <>
            <div className="hidden sm:flex items-center px-3 py-1 rounded-full bg-base-200">
              <span className="w-8 h-8 rounded-full bg-primary text-primary-content flex items-center justify-center text-sm font-semibold mr-2">
                {user.email?.[0]?.toUpperCase() || "U"}
              </span>
              <span className="text-sm max-w-[140px] truncate">
                {user.email}
              </span>
            </div>
            <button
  onClick={handleLogout}
  className="btn btn-outline btn-primary btn-sm sm:btn-md"
>
  Logout
</button>

          </>
        )}
      </div>
    </div>
  );
};

export default Navber;
