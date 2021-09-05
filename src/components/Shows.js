import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import { Carousel } from 'react-responsive-carousel';



import showSeptiembre from '../../src/septiembre10.jpeg';
import showOctubre01 from '../../src/octubre8.jpeg';
import showOctubre02 from '../../src/octubre9.jpeg';

class Shows extends Component{
    render() {
        return (
        <>
        <Zoom>
        <section className="container w-full max-w-5xl mx-auto md:mt-14 flex wrap-own">
            <div className="w-full sm:w-1/2 p-6 text-gray-600 mb-8 text-lg">
                <h3 className="text-4xl text-gray-800 font-bold leading-none mb-3 text-center md:text-left">
                    Próximas funciones
                </h3>
                <div className="mt-8 text-center md:text-left">
                    <p className="text-gray-600 text-xl font-bold">TEATRO GALERIAS, GUADALAJARA</p>
                    <p className="text-gray-600 text-xl font-bold">10 DE SEPTIEMBRE / 21:00 HRS</p>
                    <a className="self-center mt-12" target="_blank" href="https://cutt.ly/2QV2J45">
                        <button class="mx-auto lg:mx-0 font-bold  px-4 border button-home content-center mt-4 rounded">
                            COMPRA TUS BOLETOS
                        </button>
                    </a>
                </div>
                <div className="mt-8 text-center md:text-left">
                    <p className="text-gray-600 font-bold text-xl">TEATRO SAN FRANCISCO, PACHUCA</p>
                    <p className="text-gray-600 font-bold text-xl">8 DE OCTUBRE / 21:00 HRS</p>
                    <a className="self-center mt-12" target="_blank" href="https://arema.mx/e/7184">
                        <button class="mx-auto lg:mx-0 font-bold mt-4 px-4 border button-home content-center rounded">
                            COMPRA TUS BOLETOS
                        </button>   
                    </a>
                </div>
                <div className="mt-8 text-center md:text-left">
                    <a className="self-center mt-12" target="_blank" href="https://bit.ly/2WC7gJZ">
                    <p className="text-gray-600 font-bold text-xl">TEATRO OCAMPO, CUERNAVACA</p>
                    <p className="text-gray-600 font-bold text-xl">9 DE OCTUBRE / 21:00 HRS</p>
                        <button class="mx-auto lg:mx-0 font-bold mt-4 px-4 border button-home content-center rounded">
                            COMPRA TUS BOLETOS
                        </button>
                    </a>
                </div>
            </div>
            <div id="capacitacion" className="sm:w-1/2 md:p-6 md:justify-around sm-text-center">
                <Carousel className="carousel-fan h-full " interval={3000} autoPlay swipeable dynamicHeight infiniteLoop width  >
                    <div className="flex">
                        <img className="img-carousel-shows" src={showSeptiembre} />
                    </div>
                    <div className="flex">
                        <img className="img-carousel-shows" src={showOctubre01} />
                    </div>
                    <div className="flex">
                        <img className="img-carousel-shows" src={showOctubre02} />
                    </div>
                </Carousel>                       
            </div>
        </section>
        </Zoom>
        </>

        )
    }
}
export default Shows;

