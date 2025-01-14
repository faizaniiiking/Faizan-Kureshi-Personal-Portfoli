import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // Importing social media icons
import { IoMdDownload } from "react-icons/io"; // Importing download icon
import { Link } from 'react-router-dom'; // Importing Link for navigation

const Home = () => {
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="flex justify-center items-center h-screen bg-black text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="w-11/12 max-w-5xl flex flex-col lg:flex-row">
        {/* Left Section - Intro */}
        <div className="lg:w-1/2 w-full sm:p-4 lg:p-8 flex flex-col justify-center text-center lg:text-left">
          <motion.h1
            className="text-4xl sm:text-3xl md:text-5xl font-bold text-yellow-400"
            variants={itemVariants}
          >
            Hi, I'm <span className="text-red-500">Faizan</span>
          </motion.h1>
          <motion.p
            className="text-base sm:text-sm md:text-lg mt-4 text-gray-400"
            variants={itemVariants}
          >
            A passionate{" "}
            <span className="font-semibold text-red-500">
              Frontend Developer
            </span>{" "}
            with a knack for creating seamless user interfaces.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            variants={itemVariants}
          >
            {/* Updated Hire Me button */}
            <Link
              to="/contactme"
              className="bg-red-500 hover:bg-red-700 text-white py-2 px-6 rounded-lg shadow-lg transition duration-300"
            >
              Hire Me
            </Link>
            <a
              href="https://drive.google.com/file/d/1NCRumplexyGJxBnEAn4FrtVzbbiLvi51/view?usp=sharing"
              download
              className="bg-gray-600 hover:bg-gray-800 text-white py-2 px-6 rounded-lg shadow-lg transition duration-300"
            >
              <IoMdDownload className="inline-block mr-2" />
              Download CV
            </a>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            className="mt-6 flex justify-center lg:justify-start gap-6"
            variants={itemVariants}
          >
            <a
              href="https://github.com/faizaniiiking"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl sm:text-3xl hover:text-red-500 transition duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/faizan-khan-b68964245/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl sm:text-3xl hover:text-blue-600 transition duration-300" />
            </a>
            <a
              href="https://www.instagram.com/fffaizankhan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl sm:text-3xl hover:text-pink-500 transition duration-300" />
            </a>
          </motion.div>
        </div>

        {/* Right Section - Image */}
        <motion.div
          className="lg:w-1/2 w-full flex justify-center mt-5 items-center sm:p-4 lg:p-8"
          variants={itemVariants}
        >
          <img
            src="/Images/f2.jpg"
            alt="Faizan"
            className="rounded-full shadow-lg w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
