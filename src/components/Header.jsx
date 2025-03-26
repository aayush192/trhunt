import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg py-4 px-8 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <NavLink to="/" className="text-4xl font-extrabold text-white tracking-wide hover:text-gray-200 transition-all duration-300">
          Trhunt
        </NavLink>
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-6 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full shadow-md">
        <NavLink
          to=""
          className={({ isActive }) =>
            `relative text-lg font-medium px-4 py-2 rounded-full transition-all duration-300 ${
              isActive
                ? "text-white bg-white/20 shadow-md"
                : "text-gray-200 hover:text-white hover:bg-white/20"
            }`
          }
        >
          Game Type
        </NavLink>
        
        <NavLink
          to="clueDisplay"
          className={({ isActive }) =>
            `relative text-lg font-medium px-4 py-2 rounded-full transition-all duration-300 ${
              isActive
                ? "text-white bg-white/20 shadow-md"
                : "text-gray-200 hover:text-white hover:bg-white/20"
            }`
          }
        >
          Show Clue
        </NavLink>
      </nav>

      {/* Search Icon */}
      <div className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 cursor-pointer">
        <FaSearch size={20} className="text-white" />
      </div>
    </header>
  );
};

export default Header;
