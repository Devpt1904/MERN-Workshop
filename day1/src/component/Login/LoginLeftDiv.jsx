import React,{useState} from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useLogin from "../../hooks/useLogin"; // Integrated custom hook

const LoginLeftForm = () => {
  const { formData, errors, handleChange, handleSubmit, loading } = useLogin();
  const [showPassword, setShowPassword] = useState(false);

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

        <form onSubmit={handleSubmit} noValidate>
          <motion.div
            className="mb-8"
            {...animationSettings}
            transition={animationSettings.transition(0.3)}
          >
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Email ID"
              className="w-full p-3 rounded-full bg-white/30 text-[#06283D] placeholder-[#05445E]/70 border border-[#05445E]/50 focus:border-[#05445E] focus:ring-[#05445E] outline-none"
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
          </motion.div>

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

          <motion.div
            className="mb-4 flex justify-between items-center "
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
            className="w-full bg-[#05445E] text-white py-3 rounded-full font-semibold transition-transform duration-100 ease-in-out hover:scale-105"
            disabled={loading}
            {...animationSettings}
            transition={animationSettings.transition(0.6)}
          >
            {loading ? "Logging in..." : "Submit"}
          </motion.button>
        </form>

        {errors.apiError && (
          <p className="text-red-500 text-sm text-center mt-4">{errors.apiError}</p>
        )}
      </motion.div>
    </div>
  );
};

export default LoginLeftForm;
