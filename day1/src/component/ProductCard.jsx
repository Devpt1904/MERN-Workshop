import React from "react";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      className="cursor-pointer flex flex-col items-center text-center space-y-2"
      whileHover={{ scale: 1.05 }} // Slight hover effect
    >
      <div className="flex justify-center">
        <img
          src={product.img}
          alt={product.name}
          className="max-w-full h-48 object-contain transition-transform duration-300 hover:scale-105 rounded-lg shadow-xl"
        />
      </div>
      <div className="w-full">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">{product.desc}</p>
        <p className="text-[#FF406E] font-bold">${product.price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
