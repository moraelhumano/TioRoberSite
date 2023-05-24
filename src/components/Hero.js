import React, { Component } from 'react';
import 'reactjs-popup/dist/index.css';
import Fade from 'react-reveal/Fade';
import RubberBand from 'react-reveal/RubberBand';


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
                    <section className="md:pt-24 hero-home h-screen flex-col flex justify-center pl-20">
                        <div className="sm:text-center ">
                            <div className="text-center lg:text-left">
                                <p className="text-4xl tracking-tight font-extrabold text-white sm:text-3xl md:text-3xl text-shadow-lg">Roberto Andrade</p>
                                <p className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl text-shadow-lg">EL TÍO ROBER</p>
                            </div>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <Link className="w-full flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-blue  md:py-4 md:text-lg md:px-10" to="/calendario">Encuentra tus boletos</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </Fade>
            </>

        )
    }
}
export default HeroHome;

