import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Importing social media icons

const Footer = () => {
  return (
    <div className="bg-black text-white py-8 mt-16">
      <div className="w-4/5 mx-auto flex justify-between items-center">
        {/* Social Media Links */}
        <div className="flex gap-6">
          <a href="https://github.com/FaizanKureshi" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-red-500 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/faizan-kureshi/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-600 transition duration-300" />
          </a>
          <a href="https://twitter.com/FaizanKureshi" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-400 transition duration-300" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-gray-400">
          <p>&copy; 2025 Faizan Kureshi. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
