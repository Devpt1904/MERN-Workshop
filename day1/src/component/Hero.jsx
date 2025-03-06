import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  }),
};

const Hero = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={{
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
      }}
      className="flex items-center justify-center px-6 md:px-12 lg:px-20 
      w-full bg-cover bg-center bg-no-repeat 
      h-[500px] md:h-[600px] lg:h-[700px]"
      style={{
        backgroundImage: `url("/bg.webp")`,
      }}
    >
      {/* Content */}
      <div className="text-center text-[#FF007F]">
        <motion.h1
          variants={textVariants}
          custom={0.5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="text-4xl font-bold text-white text-with-border"
        >
          Welcome to Our Store
        </motion.h1>
        <motion.p
          variants={textVariants}
          custom={0.7}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="text-[14px] md:text-xl mb-8 text-with-border"
        >
          Discover the best products at unbeatable prices
        </motion.p>

        {/* Centering the button */}
        <div className="flex justify-center">
          <Link to="/login">
            <motion.div
              variants={textVariants}
              custom={0.9}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              className="bg-[#ffffff] font-bold text-black w-[200px] py-3 px-6 rounded-full text-[16px] transition duration-300 hover:bg-[#FF406E] hover:text-white text-center"
            >
              Login
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
