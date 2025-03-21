import React from 'react';
import { NavLink,Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="header flex justify-center gap-8 bg-gray-100 py-4 shadow-md">
  <NavLink
    to={''}
    className={({ isActive }) =>
      `relative block py-2 px-4 text-lg font-bold duration-200 rounded-md transition-all ${
        isActive
          ? "text-orange-700 after:absolute after:w-full after:h-[3px] after:bg-blue-400 after:bottom-0 after:left-0"
          : "text-gray-600 hover:text-orange-800"
      }`
    }
  >
    Game Type
  </NavLink>
  
  <NavLink
    to={'clueDisplay'}
    className={({ isActive }) =>
      `relative block py-2 px-4 text-lg font-bold duration-200 rounded-md transition-all ${
        isActive
          ? "text-orange-700 after:absolute after:w-full after:h-[3px] after:bg-blue-400 after:bottom-0 after:left-0"
          : "text-gray-600 hover:text-orange-800"
      }`
    }
  >
    Show Clue
  </NavLink>
</div>

  );
};

export default Header;
