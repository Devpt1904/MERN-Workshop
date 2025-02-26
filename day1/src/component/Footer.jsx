import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" text-white px-10">
      <Footer.TopSection />
      <Footer.TextSection />
      <Footer.BottomSection />
    </footer>
  );
};

Footer.TopSection = () => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/dev-patel-244910248/",
      icon: (
        <FaLinkedin className="text-blue-600 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8" />
      ),
    },
    {
      href: "https://github.com/Devpt1904",
      icon: (
        <FaGithub className="text-gray-800 dark:text-white lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8" />
      ),
    },
    {
      href: "mailto:devp04412@gmail.com",
      icon: (
        <FaEnvelope className="text-red-500 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8" />
      ),
    },
    {
      href: "https://www.instagram.com/dev_patel468/",
      icon: (
        <FaInstagram className="text-pink-500 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8" />
      ),
    },
    
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.1 }}
      className="container mx-auto p-3 rounded-[40px] md:p-10 lg:p-10 bg-[#000000] opacity-[82%] text-white"
    >
      <div className="flex flex-col md:flex-row justify-between">
        {/* Left Side */}
        <div className="flex flex-col space-y-7 md:w-1/2 lg:pl-0 pl-10">
          <h1 className="font-extrabold text-[21px] tracking-[2%] roboto-flex">
            Straight From Pinterest
          </h1>
          <div className="flex space-x-[60px]">
            <nav className="space-y-7 text-[#959595] font-extralight roboto-flex tracking-[2%]">
              <Link
                to="/"
                className="block relative transition-transform duration-300 ease-in-out hover:scale-110 hover:underline"
              >
                Home
              </Link>
              <Link
                to="/login"
                className="block relative transition-transform duration-300 ease-in-out hover:scale-110 hover:underline"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block relative transition-transform duration-300 ease-in-out hover:scale-110 hover:underline"
              >
                Sign Up
              </Link>
            </nav>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center pt-4 md:mt-[40px] md:w-1/2">
          <h1 className="font-extrabold text-[21px] tracking-[2%] roboto-flex">
            Social Media
          </h1>
          <div className="flex space-x-4 mt-4 ">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block transition-transform duration-300 ease-in-out hover:scale-110"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

Footer.TextSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: false, amount: 0.1 }}
    className="flex justify-center pl-4 py-1 lg:pl-12 lg:py-1 text-white"
  >
    <div
      className="h-auto w-full max-w-[1350px] flex items-center justify-center masked-text"
      style={{
        backgroundImage: "url('/maskingimage.avif')", // Replace with the actual path to maskingimage.png
      }}
    >
      <span
        className="text-[55px] md:text-[130px] lg:text-[245px] font-bold"
        style={{ letterSpacing: "0.1em" }} // Adjust this value for more or less spacing
      >
       Pinterest
      </span>
    </div>
    <style>{`
          .masked-text {
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}</style>
  </motion.div>
);

Footer.BottomSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: false, amount: 0.1 }}
    className="flex justify-center items-center border-t border-gray-700 bg-[#2F2F2F] text-white lg:p-4 lg:rounded-[20px] rounded-[10px] px-2 py-1 text-[14px] md:text-[16px] lg:px-10 lg:text-[19px]"
  >
    <p className="relative inline-block transition-transform duration-300 font-bold  ease-in-out hover:scale-110">
      © Straight From Pinterest 2025
    </p>
  </motion.div>
);

export default Footer;