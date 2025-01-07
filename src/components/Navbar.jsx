import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full flex items-center justify-between bg-black text-white p-4 border-b-2 border-gray-600 relative">
      {/* Logo */}
      <div>
        <h1 className="font-bold text-2xl">Faizan .K</h1>
      </div>

      {/* Menu Icon */}
      <div className="lg:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation List */}
      <ul
        className={`lg:flex lg:items-center lg:gap-6 absolute lg:static top-16 left-0 w-full bg-black lg:bg-transparent lg:w-auto transition-all duration-300 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <li className="py-2 px-4 lg:py-0 lg:px-0 border-b border-gray-700 lg:border-none">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'text-red-500' : 'text-white')}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li className="py-2 px-4 lg:py-0 lg:px-0 border-b border-gray-700 lg:border-none">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'text-red-500' : 'text-white')}
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
        </li>
        <li className="py-2 px-4 lg:py-0 lg:px-0">
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? 'text-red-500' : 'text-white')}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
