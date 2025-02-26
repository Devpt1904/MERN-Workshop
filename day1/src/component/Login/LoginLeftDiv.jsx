import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LoginLeftDiv = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  // Animation settings
  const animationSettings = {
    initial: { opacity: 0, x: -50, y: 20 },
    animate: { opacity: 1, x: 0, y: 0 },
    transition: (delay) => ({ duration: 0.5, delay }),
  };

  return (
    <div className="flex-1 flex items-center justify-center mt-8 lg:mt-12 mb-12 lg:mb-0">
      <motion.div
        className="p-6 md:p-8 w-full max-w-md bg-white/40 backdrop-blur-lg border border-[#05445E]/30 rounded-2xl shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Title */}
        <motion.h1
          className="text-[#05445E] text-5xl font-bold text-center mb-4"
          {...animationSettings}
          transition={animationSettings.transition(0.1)}
        >
          Login
        </motion.h1>

        <motion.h2
          className="text-[#05445E]/70 text-sm text-center mb-6"
          {...animationSettings}
          transition={animationSettings.transition(0.2)}
        >
          Please Enter Your Details
        </motion.h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit} noValidate>
          {/* Email ID */}
          <motion.div
            className="mb-8"
            {...animationSettings}
            transition={animationSettings.transition(0.3)}
          >
            <input
              type="email"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Email ID"
              className="w-full p-3 rounded-full bg-white/30 text-[#06283D] placeholder-[#05445E]/70 border border-[#05445E]/50 focus:border-[#05445E] focus:ring-[#05445E] outline-none"
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
          </motion.div>

          {/* Password Field */}
          <motion.div
            className="mb-4"
            {...animationSettings}
            transition={animationSettings.transition(0.4)}
          >
            <div className="relative">
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
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-[#05445E]/70 hover:text-[#05445E]"
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </motion.div>

          {/* Submit Button and Sign Up Link */}
          <motion.div
            className="mb-4 flex justify-between items-center"
            {...animationSettings}
            transition={animationSettings.transition(0.5)}
          >
            <div></div>
            <Link to="/signup" className="text-[#05445E] text-sm hover:underline">
              New User? Sign Up
            </Link>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-[#05445E] text-white py-3 rounded-full font-semibold transition-transform duration-100 ease-in-out hover:scale-105 "
            {...animationSettings}
            transition={animationSettings.transition(0.6)}
          >
            Submit
          </motion.button>
        </form>

        {/* OR Divider */}
        <motion.div
          className="flex items-center my-6"
          {...animationSettings}
          transition={animationSettings.transition(0.7)}
        >
          <div className="flex-1 border-t border-dashed border-[#05445E]/50"></div>
          <span className="px-2 text-[#05445E] text-sm">OR</span>
          <div className="flex-1 border-t border-dashed border-[#05445E]/50"></div>
        </motion.div>

        {/* Social Login Options */}
        <motion.div
          className="flex justify-center space-x-16 text-black text-md"
          {...animationSettings}
          transition={animationSettings.transition(0.8)}
        >
          <button className="flex items-center space-x-2 transition-transform duration-300 ease-in-out hover:scale-110">
            <img src="/google.png" alt="Google" className="w-5 h-5" />
            <span>Google</span>
          </button>
          <button className="flex items-center space-x-2 transition-transform duration-300 ease-in-out hover:scale-110">
            <img src="/github.png" alt="Github" className="w-5 h-5" />
            <span>Github</span>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginLeftDiv;