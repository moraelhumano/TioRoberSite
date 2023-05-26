import React, { Component } from 'react';
import LogoRober from '../../src/logo-flower.svg'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";




class NavBar extends Component{
    render() {
        return (
        <>
        <nav className="w-full z-20 bg-transparent px-12 md:px-20 mx-auto flex py-2 justify-center md:justify-between self-start">
            <div className="flex w-full items-center justify-between">
                <Link to="/" className="toggleColour flex text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                    <img className="h-12 items-center" src={LogoRober} alt="" />
                </Link>
                <Link to="/calendario" className="toggleColour flex text-white no-underline hover:no-underline font-bold">
                    <h2 className="text-base lg:text-lg">FECHAS</h2>
                </Link>
            </div>
        </nav>
        </>

        )
    }
}
export default NavBar;

