import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Icons for password visibility
import zxcvbn from "zxcvbn"; // Password strength checker

const fadeInLeft = (delay) => ({
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, delay },
});

const SignupLeftDiv = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // Password strength calculation
  const passwordStrength = zxcvbn(formData.password);
  const strengthLabels = ["Weak", "Fair", "Good", "Strong"];
  const strengthColors = ["bg-red-500", "bg-yellow-500", "bg-green-500", "bg-blue-500"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const signupResponse = await axios.post("http://localhost:5000/api/auth/signup", formData);

      if (signupResponse.data.token) {
        localStorage.setItem("token", signupResponse.data.token);
        navigate("/home");
      } else {
        setError("Signup successful, but no token received. Please log in.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred during signup");
      console.error("Signup error:", err);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center mt-8 lg:mt-12 mb-12 lg:mb-0">
      <motion.div
        className="p-6 md:p-8 w-full max-w-md bg-white/40 backdrop-blur-lg border border-[#05445E]/30 rounded-2xl shadow-lg"
        {...fadeInLeft(0.1)}
      >
        <motion.h1 className="text-[#05445E] text-5xl font-bold text-center mb-4">
          Sign Up
        </motion.h1>

        <motion.h2 className="text-[#05445E]/70 text-sm text-center mb-6">
          Please Enter Your Details
        </motion.h2>

        {error && (
          <motion.div 
            className="mb-4 p-3 rounded-lg bg-red-50 text-red-700 text-sm"
            {...fadeInLeft(0.2)}
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          {/* Username Input */}
          <motion.div className="mb-5" {...fadeInLeft(0.2)}>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full p-3 rounded-full bg-white/30 text-[#06283D] placeholder-[#05445E]/70 border border-[#05445E]/50 focus:border-[#05445E] focus:ring-[#05445E] outline-none"
            />
          </motion.div>

          {/* Email Input */}
          <motion.div className="mb-5" {...fadeInLeft(0.3)}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email ID"
              className="w-full p-3 rounded-full bg-white/30 text-[#06283D] placeholder-[#05445E]/70 border border-[#05445E]/50 focus:border-[#05445E] focus:ring-[#05445E] outline-none"
            />
          </motion.div>

          {/* Password Input with Strength Meter */}
          <motion.div className="mb-4 relative" {...fadeInLeft(0.4)}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-3 rounded-full bg-white/30 text-[#06283D] placeholder-[#05445E]/70 border border-[#05445E]/50 focus:border-[#05445E] focus:ring-[#05445E] outline-none"
            />
            <button
              type="button"
              aria-label="Toggle Password Visibility"
              className="absolute inset-y-0 right-3 flex items-center text-[#05445E]/70 hover:text-[#05445E]"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>

            {/* Password Strength Meter */}
            {formData.password && (
              <motion.div className="mt-2">
                <div className="w-full bg-gray-200 h-1 rounded">
                  <div className={`h-1 rounded ${strengthColors[passwordStrength.score]}`} style={{ width: `${(passwordStrength.score + 1) * 25}%` }}></div>
                </div>
                <p className="text-xs mt-1">{strengthLabels[passwordStrength.score]}</p>
              </motion.div>
            )}
          </motion.div>

          {/* Login Link */}
          <motion.div className="mb-4 flex justify-between items-center" {...fadeInLeft(0.5)}>
            <Link to="/login" className="text-[#05445E] text-sm hover:underline">
              Already a User? Login
            </Link>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full bg-[#05445E] text-white py-3 rounded-full font-semibold transition-transform duration-100 ease-in-out hover:scale-105"
            {...fadeInLeft(0.6)}
          >
            Sign Up
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default SignupLeftDiv;