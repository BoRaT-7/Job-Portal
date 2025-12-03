// src/pages/Home/register/Register.jsx
// src/pages/Home/register/Register.jsx  (আপনার স্ক্রিনশট অনুযায়ী)
import React, { useState, useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({ email: "", firebase: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      if (!value) {
        setErrors((p) => ({ ...p, email: "Email is required" }));
      } else if (!emailRegex.test(value)) {
        setErrors((p) => ({ ...p, email: "Invalid email address" }));
      } else {
        setErrors((p) => ({ ...p, email: "" }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors((p) => ({ ...p, firebase: "" }));

    if (!emailRegex.test(formData.email)) {
      setErrors((p) => ({ ...p, email: "Invalid email address" }));
      return;
    }

    try {
      setSubmitting(true);
      const result = await createUser(formData.email, formData.password);
      console.log("Register success user:", result.user);
      console.log("Full form data (with name):", formData);
      // later: send name to backend or updateProfile
    } catch (error) {
      console.error("Firebase register error:", error);
      setErrors((p) => ({
        ...p,
        firebase: error.message || "Registration failed",
      }));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-base-300 flex items-center justify-center">
      <div className="hero max-w-5xl w-full px-4">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <div className="text-center lg:text-left space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold">
              Create your account
            </h1>
            <p className="py-2 text-base-content/70 max-w-md">
              Join our job portal to explore thousands of opportunities, manage
              your applications, and get hired faster.
            </p>
          </div>

          <div className="card bg-base-100 w-full max-w-md shadow-2xl animate-slide-up">
            <div className="card-body">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Register
              </h2>

              {errors.firebase && (
                <div className="alert alert-error text-sm mb-2">
                  {errors.firebase}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Name */}
                <label className="form-control w-full">
                  <span className="label-text">Full Name</span>
                  <input
                    type="text"
                    name="name"
                    className="input input-bordered w-full"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </label>

                {/* Email */}
                <label className="form-control w-full">
                  <span className="label-text">Email</span>
                  <input
                    type="email"
                    name="email"
                    className={`input input-bordered w-full ${
                      errors.email ? "input-error" : ""
                    }`}
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && (
                    <span className="label-text-alt text-error">
                      {errors.email}
                    </span>
                  )}
                </label>

                {/* Password */}
                <label className="form-control w-full">
                  <span className="label-text">Password</span>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="input input-bordered w-full pr-10"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type="button"
                      className="btn btn-ghost btn-xs absolute right-1 top-1/2 -translate-y-1/2"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </label>

               <div className="flex items-center justify-between text-sm mt-2">
  <span className="text-base-content/70">
    Already have an account?{" "}
    <Link to="/login" className="link link-primary">
      Log in
    </Link>
  </span>
</div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-neutral w-full mt-4 hover:scale-[1.02] transition-transform disabled:opacity-60"
                >
                  {submitting ? "Signing Up..." : "Sign Up"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
