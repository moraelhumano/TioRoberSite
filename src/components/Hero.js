import React, { Component } from 'react';
import 'reactjs-popup/dist/index.css';
import Fade from 'react-reveal/Fade';
import NavBar from './Navbar';



import OKEsta from '../../src/okestabien.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Zoom';

import BgTioHome from '../../src/TioHomeHero.jpg'

class HeroHome extends Component {
  render() {
    return (
      <>
        <Fade>
          <section className="hero-home h-screen grid justify-items-start">
            <NavBar className="justify-self-start fixed" />
            <div className="w-full flex flex-col align-center sm:text-center lg:pl-20 md:pl-20">
              <div className="text-center md: text-left lg:text-left">
                <p className="text-4xl tracking-tight font-extrabold text-white sm:text-3xl md:text-3xl text-shadow-1">Roberto Andrade</p>
                <p className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl text-shadow-1">EL TÍO ROBER</p>
              </div>
              <div className="w-full mt-5 justify-center sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="w-full md:4/6 lg:4/6 flex justify-center md:justify-start rounded-md shadow bg-transparent">
                  <Link className="w-4/6 md:w-64 flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-blue md:py-4 md:text-lg md:px-10" to="/calendario">Encuentra tus boletos</Link>
                </div>
              </div>
            </div>
          </section>
        </Fade>
      </>
    );

  }
}
export default HeroHome;

