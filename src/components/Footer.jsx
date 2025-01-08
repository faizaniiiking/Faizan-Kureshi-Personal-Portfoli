import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 sm:p-8 md:p-20">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mb-8 sm:mb-0">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'text-red-500' : 'text-white')}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'text-red-500' : 'text-white')}
          >
            About
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? 'text-red-500' : 'text-white')}
          >
            Projects
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? 'text-red-500' : 'text-white')}
          >
            Services
          </NavLink>
          <NavLink
            to="/contactme"
            className={({ isActive }) => (isActive ? 'text-red-500' : 'text-white')}
          >
            Contact Me
          </NavLink>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-6 mt-4 sm:mt-0">
          <a href="https://github.com/faizaniiiking" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-gray-500 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/faizan-khan-b68964245/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-700 transition duration-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-400 transition duration-300" />
          </a>
          <a href="https://www.instagram.com/fffaizankhan/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-600 transition duration-300" />
          </a>
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-center mt-4">
        <p>&copy; 2025 Faizan .K. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
