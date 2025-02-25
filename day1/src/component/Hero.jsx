import React from "react";
import { motion } from "framer-motion";

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
      <div className=" text-center text-white">
        <motion.h1
          variants={textVariants}
          custom={0.5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="text-xl md:text-5xl font-bold mb-4"
        >
          Welcome to Our Store
        </motion.h1>
        <motion.p
          variants={textVariants}
          custom={0.7}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className=" text-[14px] md:text-xl mb-8"
        >
          Discover the best products at unbeatable prices
        </motion.p>
        <motion.a
          href="/shop"
          variants={textVariants}
          custom={0.9}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="bg-[#ffffff] text-black  py-3 px-6 rounded-full text-[16px] transition duration-300 hover:bg-[#FF406E] hover:text-white"
        >
          Shop Now
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Hero;