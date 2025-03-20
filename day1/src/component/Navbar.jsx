import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPinterest } from "react-icons/fa"; // Import Pinterest Icon

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle Menu for Mobile
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle Navbar Hide on Scroll Down & Show on Scroll Up
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: isVisible ? 0 : -40, opacity: isVisible ? 1 : 0 }} // Moves up slightly & fades out
      transition={{ duration: 0.6, ease: "easeOut" }} // Slower fade effect
      className="fixed top-0 left-0 w-full bg-white shadow-md backdrop-blur-lg z-50 px-6 h-[50px] transition-transform"
    >
      <div className="flex justify-between h-[50px] items-center">
        {/* Logo with Pinterest Icon */}
        <motion.div className="flex items-center text-[#FF406E] text-2xl font-bold">
          <FaPinterest size={30} className="mr-2" /> {/* Pinterest Icon */}
          Straight From Pinterest
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden h-[50px] items-center md:flex space-x-8 text-lg font-semibold">
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
    </motion.header>
  );
};

export default Navbar;
