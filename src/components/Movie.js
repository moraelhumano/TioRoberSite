import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';

import ArielNominado from '../../src/arielnominaciones.jpeg'


import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


class Movie extends Component{
    render() {
        return (
        <>
        <Bounce right>
            <div className="title-section">
                <h3 className="text-3xl text-center text-gray-800 font-bold leading-none">
                    OK, ESTÁ BIEN
                </h3>
            </div>
        </Bounce>
        <section className="bg-white w-full flex justify-center mt-12">
            <Zoom>
                <div className="flex flex-col items-center">
                    <img className="w-full" src={ArielNominado} />
                    <div className="flex justify-center  w-2/3  h-96 flex-col">
                    <div className="title-section">
                    <p className="text-3xl  mt-8 text-center text-gray-800 pb-2">Trailer</p>
                    </div>
                    <iframe className="mt-8 self-center h-full sm:w-2/3"  src="https://www.youtube.com/embed/rMZgZydvg1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                    </div>
                </div>
            </Zoom>
        </section>
        </>
        )
    }
}
export default Movie;

