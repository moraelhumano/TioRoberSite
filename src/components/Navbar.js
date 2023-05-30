import React, { useState, useEffect } from 'react';
import LogoRober from '../../src/logo-flower.svg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const closeMenu = () => {
      setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('click', closeMenu);
    }

    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [isOpen]);

  return (
    <>
    <nav className='w-full'>
      <div className=" flex sm:hidden md:flex lg:flex w-full z-20 bg-transparent px-12 md:px-20 mx-auto py-2 justify-center md:justify-between self-start" style={{ paddingTop: "70px" }}>
        <div className="flex w-full items-center justify-between display-none-s">
          <Link to="/" className="toggleColour flex text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
            <img className="h-12 items-center" src={LogoRober} alt="" />
          </Link>
          <div className='flex justify-end'>
            <Link to="/calendario" className="toggleColour flex text-white no-underline hover:no-underline font-bold mr-8">
              <h2 className="text-base lg:text-lg">FECHAS</h2>
            </Link>
            <Link to="/calendario" className="toggleColour flex text-white no-underline hover:no-underline font-bold mr-8">
              <h2 className="text-base lg:text-lg">TIENDA</h2>
            </Link>
            <Link to="/calendario" className="toggleColour flex text-white no-underline hover:no-underline font-bold mr-8">
              <h2 className="text-base lg:text-lg">PRENSA</h2>
            </Link>
            <Link to="/calendario" className="toggleColour flex text-white no-underline hover:no-underline font-bold ">
              <h2 className="text-base lg:text-lg">CONTENIDO</h2>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative">
        <button
          className="block lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                d="M4.293 6.293a1 1 0 0 1 1.414-1.414L12 10.586l6.293-6.293a1 1 0 1 1 1.414 1.414L13.414 12l6.293 6.293a1 1 0 1 1-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 1 1-1.414-1.414L10.586 12 4.293 5.707a1 1 0 0 1 0-1.414z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 6a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1z"
              />
            )}
          </svg>
        </button>
        {isOpen && (
          <div className="md:hidden lg:hidden fixed top-0 left-0 h-screen w-full bg-black bg-opacity-75">
            <ul className="p-4">
              <li className="py-2">
                <a href="#" className="text-gray-700 hover:text-gray-900">Inicio</a>
              </li>
              <li className="py-2">
                <a href="#" className="text-gray-700 hover:text-gray-900">Acerca de</a>
              </li>
              <li className="py-2">
                <a href="#" className="text-gray-700 hover:text-gray-900">Servicios</a>
              </li>
              <li className="py-2">
                <a href="#" className="text-gray-700 hover:text-gray-900">Contacto</a>
              </li>
            </ul>
          </div>
        )}
      </div>
      </nav>
    </>
  );
};

export default NavBar;
