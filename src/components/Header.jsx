import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <div className="header flex justify-evenly">
      <NavLink to={''} className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ?"text-orange-700":"text-gray-600" } font-bold lg:border-0 hover:text-orange-900 lg:p-0`
                                    }>Game Type</NavLink>
      <NavLink to={'searchClue'} className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ?"text-orange-700":"text-gray-600" } font-bold lg:border-0 hover:text-orange-900 lg:p-0`
                                    }>Search Clue</NavLink>
      <NavLink to={'clueDisplay'} className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ?"text-orange-700":"text-gray-600" } font-bold lg:border-0 hover:text-orange-900 lg:p-0`
                                    }>Show Clue</NavLink>
    </div>
  );
};

export default Header;
