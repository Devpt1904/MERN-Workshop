import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const LogSignNav = () => {

  // Header animation
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Menu fade animation
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay, // Use specific delay per item
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-lg z-50 px-6 py-4"
    >
      <div className="flex justify-between items-center">
        {/* Logo */}    
        <Link to="/">
          <motion.div
            className="text-white lg:text-5xl text-xl font-bold roboto-flex transition-transform duration-300 ease-in-out hover:scale-105"
            variants={itemVariants}
            custom={0.1}
          >
            Straight From Pinterest
          </motion.div>
        </Link>
      </div>
    </motion.header>
  );
};

export default LogSignNav;