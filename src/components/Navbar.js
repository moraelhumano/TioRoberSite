import React, { Component } from 'react';
import LogoRober from '../../src/logosite.png'

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
        <nav id="header" className="fixed w-full z-30 top-0 text-white shadow-navbar pl-20">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
            <div className="pl-4 flex items-center">
            <Link to="/" className="toggleColour flex text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                <img className="h-12 items-center" src={LogoRober} alt="" />
            </Link>
            </div>
        </div>
        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
        </nav>
        </>

        )
    }
}
export default NavBar;

