import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // First, sign up the user
      const signupResponse = await axios.post('http://localhost:5000/api/auth/signup', formData);
      
      if (signupResponse.data.token) {
        // If signup returns a token, use it directly
        localStorage.setItem('token', signupResponse.data.token);
        navigate('/home');
      } else {
        // If signup doesn't return a token, perform login
        const loginResponse = await axios.post('http://localhost:5000/api/auth/login', {
          username: formData.username,
          password: formData.password
        });
        
        localStorage.setItem('token', loginResponse.data.token);
        navigate('/home');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred during signup');
      console.error('Signup error:', err);
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
              {showPassword ? "🙈" : "👁️"}
            </button>
          </motion.div>

          <motion.div className="mb-4 flex justify-between items-center" {...fadeInLeft(0.5)}>
            <Link to="/login" className="text-[#05445E] text-sm hover:underline">
              Already a User? Login
            </Link>
          </motion.div>

          <motion.button
            type="submit"
            
            className="w-full bg-[#05445E] text-white py-3 rounded-full font-semibold transition-transform duration-100 ease-in-out hover:scale-105 "
            {...fadeInLeft(0.6)}
          >
            Sign Up
          </motion.button>
        </form>

        <motion.div className="flex items-center my-6" {...fadeInLeft(0.7)}>
          <div className="flex-1 border-t border-dashed border-[#05445E]/50"></div>
          <span className="px-2 text-[#05445E] text-sm">OR</span>
          <div className="flex-1 border-t border-dashed border-[#05445E]/50"></div>
        </motion.div>

        <motion.div className="flex justify-center space-x-10 text-[#05445E] text-md" {...fadeInLeft(0.8)}>
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

export default SignupLeftDiv;
