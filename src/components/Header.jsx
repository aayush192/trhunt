import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white shadow-md border-b border-gray-300 py-4 px-8 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <NavLink to="/" className="text-4xl font-bold text-orange-600 tracking-wide hover:text-orange-700 transition-colors duration-200">
          Trhunt
        </NavLink>
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-6">
        <NavLink
          to=""
          className={({ isActive }) =>
            `relative text-lg font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
              isActive
                ? "text-orange-600 after:absolute after:w-full after:h-1 after:bg-orange-600 after:bottom-0 after:left-0"
                : "text-gray-700 hover:text-orange-600 hover:bg-orange-100"
            }`
          }
        >
          Game Type
        </NavLink>
        
        <NavLink
          to="clueDisplay"
          className={({ isActive }) =>
            `relative text-lg font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
              isActive
                ? "text-orange-600 after:absolute after:w-full after:h-1 after:bg-orange-600 after:bottom-0 after:left-0"
                : "text-gray-700 hover:text-orange-600 hover:bg-orange-100"
            }`
          }
        >
          Show Clue
        </NavLink>
      </nav>

      {/* Search Icon */}
      <div className="text-gray-600 hover:text-orange-600 cursor-pointer transition-all duration-200">
        <FaSearch size={20} />
      </div>
    </header>
  );
};

export default Header;
