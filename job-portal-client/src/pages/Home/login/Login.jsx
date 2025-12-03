// src/pages/Home/login/Login.jsx
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Login = () => {
  const { loginUser, resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [infoMsg, setInfoMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setInfoMsg("");

    try {
      setSubmitting(true);
      const result = await loginUser(formData.email, formData.password);
      console.log("Login success:", result.user);
      navigate(from, { replace: true }); // সফল হলে আগের বা home এ নেভিগেট
    } catch (error) {
      console.error("Login error:", error);
      if (error.code === "auth/user-not-found") {
        setErrorMsg("No user found with this email.");
      } else if (error.code === "auth/wrong-password") {
        setErrorMsg("Incorrect password. Please try again.");
      } else if (error.code === "auth/too-many-requests") {
        setErrorMsg("Too many attempts. Try again later.");
      } else {
        setErrorMsg(error.message || "Login failed. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleForgotPassword = async () => {
    setErrorMsg("");
    setInfoMsg("");
    if (!formData.email) {
      setErrorMsg("Please enter your email first.");
      return;
    }
    try {
      await resetPassword(formData.email);
      setInfoMsg("Password reset email sent. Check your inbox.");
    } catch (error) {
      console.error("Reset password error:", error);
      setErrorMsg(error.message || "Failed to send reset email.");
    }
  };

  return (
    <section className="min-h-screen bg-base-300 flex items-center justify-center">
      <div className="hero max-w-5xl w-full px-4">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <div className="text-center lg:text-left space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold">
              Welcome back
            </h1>
            <p className="py-2 text-base-content/70 max-w-md">
              Log in to manage your applications, track interviews, and
              access personalized job recommendations.
            </p>
          </div>

          <div className="card bg-base-100 w-full max-w-md shadow-2xl animate-slide-up">
            <div className="card-body">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Login
              </h2>

              {errorMsg && (
                <div className="alert alert-error text-sm mb-2">
                  {errorMsg}
                </div>
              )}
              {infoMsg && (
                <div className="alert alert-info text-sm mb-2">
                  {infoMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Email */}
                <label className="form-control w-full">
                  <span className="label-text">Email</span>
                  <input
                    type="email"
                    name="email"
                    className="input input-bordered w-full"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
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
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="link link-hover"
                  >
                    Forgot password?
                  </button>
                  <span>
                    New here?{" "}
                    <Link to="/register" className="link link-primary">
                      Create account
                    </Link>
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-neutral w-full mt-4 hover:scale-[1.02] transition-transform disabled:opacity-60"
                >
                  {submitting ? "Logging in..." : "Log In"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
