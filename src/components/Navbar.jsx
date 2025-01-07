import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between bg-black text-white p-4 border-b-2 border-gray-600">
      <div className="img"><h1 className="font-bold text-2xl">Faizan .K</h1></div>
      
      {/* Navigation List */}
      <ul className="flex items-center gap-6">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'text-red-500' : 'text-white'}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'text-red-500' : 'text-white'}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/portfolio" 
            className={({ isActive }) => isActive ? 'text-red-500' : 'text-white'}
          >
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
