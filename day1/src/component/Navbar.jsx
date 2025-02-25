import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Header animation
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Menu fade animation
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 w-full bg-white shadow-md backdrop-blur-lg z-50 px-6 h-[50px]"
    >
      <div className="flex justify-between h-[50px] items-center">
        {/* Logo */}
        <motion.div className="text-[#FF406E] text-2xl font-bold">
          Straight From Pintrest
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden h-[50px] items-center md:flex space-x-8 text-lg font-semibold ">
              <button className="bg-transparent text-black px-4 py-2 rounded-4xl hover:bg-[#FF406E] hover:text-[#ffffff]  transition">
                Home
              </button>
              <button className="bg-transparent text-black px-4 py-2 rounded-4xl hover:bg-[#FF406E] hover:text-[#ffffff] transition">
                About
              </button>
              <button className="bg-transparent text-black px-4 py-2 rounded-4xl hover:bg-[#FF406E] hover:text-[#ffffff] transition">
                Services
              </button>
              <button className="bg-transparent text-black px-4 py-2 rounded-4xl hover:bg-[#FF406E] hover:text-[#ffffff] transition">
                Contact
              </button>

        </nav>
  
        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button onClick={handleToggle} className="focus:outline-none relative w-10 h-10 flex flex-col justify-center items-center">
            <motion.div
              animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }}
              className="w-8 h-[3px] bg-black rounded-md"
            />
            <motion.div
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              className="w-8 h-[3px] bg-black rounded-md my-[5px]"
            />
            <motion.div
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }}
              className="w-8 h-[3px] bg-black rounded-md"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-16 left-0 w-full bg-white backdrop-blur-md shadow-lg rounded-b-lg md:hidden"
          >
            <nav className="flex flex-col items-center py-4 space-y-4 text-lg font-semibold">
              <a href="#" className="hover:text-gray-600">Home</a>
              <a href="#" className="hover:text-gray-600">About</a>
              <a href="#" className="hover:text-gray-600">Services</a>
              <a href="#" className="hover:text-gray-600">Contact</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;