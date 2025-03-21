import React from 'react';
import { NavLink,Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="header flex justify-evenly">
    
      <NavLink to={''} className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ?"text-orange-700 border-b-3 border-blue-400":"text-gray-600" } font-bold  hover:text-orange-800  lg:p-0`
                                    }>Game Type</NavLink>
      <NavLink to={'clueDisplay'} className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ?"text-orange-700 border-b-3 border-blue-400":"text-gray-600" } font-bold  hover:text-orange-800  lg:p-0`
                                    }>Show Clue</NavLink>
     </div>
  );
};

export default Header;
