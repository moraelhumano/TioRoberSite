import React, { useState, useEffect } from 'react';
import LogoRober from '../../src/logo-flower.svg';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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
            <img className="h-15 items-center" src={LogoRober} alt="" />
          </Link>
          <div className='flex'>
          {/*<Link to="/" className="toggleColour flex text-white no-underline hover:no-underline font-bold mr-8">
                <h2 className="text-base lg:text-lg">TIENDA</h2>
              </Link>
              <Link to="/" className="toggleColour flex text-white no-underline hover:no-underline font-bold mr-8">
                <h2 className="text-base lg:text-lg">PRENSA</h2>
              </Link>
              <Link to="/" className="toggleColour flex text-white no-underline hover:no-underline font-bold mr-8">
                <h2 className="text-base lg:text-lg">CONTENIDO</h2>
  </Link>*/}
          { location.pathname !== "/shows" &&
            <div className='flex justify-end'>
              <Link to="/calendario" className="toggleColour flex text-white no-underline hover:no-underline font-bold mr-8">
                <h2 className="text-base lg:text-lg">FECHAS</h2>
              </Link>
            </div>
          }
          </div>
        </div>
      </div>

      <div className="flex fixed justify-between	 relative md:hidden">
      <Link to="/" className="toggleColour flex text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
            <img className="h-20 items-center" src={LogoRober} alt="" />
          </Link>
        <button
          className="inline-block justify-self-end	 lg:hidden p-2 rounded-md text-white focus:outline-none focus:text-white"
          onClick={toggleMenu}
        >
          <svg
            className="h-10 w-10 fill-current  text-white"
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
          <div className="md:hidden lg:hidden flex flex-col text-center fixed top-16 left-0 h-screen w-full bg-black ">
            <div className="p-4 pt-8 flex items-center flex-col text-white list-none">
            <Link to="/" className="py-2 flex text-white font-bold">
              <h2 className="">INICIO</h2>
            </Link>
            <Link to="/shows" className="py-2 flex text-white font-bold">
              <h2 className="">FECHAS</h2>
            </Link>
          {/*  <Link to="/calendario" className="py-2 flex text-white font-bold">
              <h2 className="">TIENDA</h2>
            </Link>
            <Link to="/calendario" className="py-2 flex text-white font-bold">
              <h2 className="">PRENSA</h2>
            </Link>
            <Link to="/calendario" className="py-2 flex text-white font-bold">
              <h2 className="">PROGRAMAS</h2>
        </Link>*/}
            </div>
          </div>
        )}
      </div>
      </nav>
    </>
  );
};

export default NavBar;
