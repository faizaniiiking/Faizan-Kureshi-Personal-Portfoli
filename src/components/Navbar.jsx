import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-blue-600 text-white shadow-md fixed w-full">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/logo.png" // Add your logo path here
            alt="Logo"
            className="h-8 w-8 mr-2"
          />
          <h1 className="text-xl font-bold">Faizan</h1>
        </div>

        {/* Hamburger Menu */}
        <button
          className="block lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } lg:flex lg:space-x-6 lg:block lg:items-center absolute lg:relative top-full left-0 w-full bg-blue-600 lg:w-auto`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block lg:inline hover:underline pb-1 px-4 lg:px-0 ${
                isActive ? 'border-b-2 border-red-500' : ''
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block lg:inline hover:underline pb-1 px-4 lg:px-0 ${
                isActive ? 'border-b-2 border-red-500' : ''
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>


          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `block lg:inline hover:underline pb-1 px-4 lg:px-0 ${
                isActive ? 'border-b-2 border-red-500' : ''
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </NavLink>



        </div>
      </div>
    </nav>
  );
};

export default Navbar;
