import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <img
              src="/logo.png" // Replace with your logo path
              alt="Logo"
              className="h-8 w-8"
            />
            <span className="text-lg font-semibold">Faizan</span>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-6">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Faizan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
