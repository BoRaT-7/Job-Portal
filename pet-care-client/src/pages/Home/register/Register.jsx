import React, { useState, useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Register = () => {
  const { createUser } = useContext(AuthContext);
 const navigate = useNavigate();
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
      navigate("/");
    } catch (error) {
      setErrors((p) => ({
        ...p,
        firebase: error.message || "Registration failed",
      }));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 px-4">
      <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-10 items-center">

        {/* Left Side Text */}
        <div className="text-center lg:text-left space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
            🐾 Join PetCare
          </h1>
          <p className="text-base-content/70 max-w-md">
            Create your account and start exploring pet adoption,
            grooming services, and premium pet food.
          </p>
        </div>

        {/* Register Card */}
        <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-center text-primary mb-6">
            Create Account
          </h2>

          {errors.firebase && (
            <div className="alert alert-error text-sm mb-4">
              {errors.firebase}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full focus:input-primary"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                name="email"
                className={`input input-bordered w-full ${
                  errors.email ? "input-error" : "focus:input-primary"
                }`}
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <p className="text-error text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input input-bordered w-full pr-16 focus:input-primary"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-primary font-medium"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Login Link */}
            <div className="text-sm text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-semibold hover:underline">
                Log in
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="btn btn-primary w-full mt-4 hover:scale-105 transition duration-300 disabled:opacity-60"
            >
              {submitting ? "Creating Account..." : "Sign Up 🐶"}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Register;