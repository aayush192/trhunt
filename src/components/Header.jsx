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
       <NavLink to={'searchClue'} className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ?"text-orange-700 border-b-3 border-blue-400":"text-gray-600" } font-bold  hover:text-orange-800  lg:p-0`
                                    }>Search Clue</NavLink>
  
  <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                          Account  
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                    </div>
    </div>
  );
};

export default Header;
