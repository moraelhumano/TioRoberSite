import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import { Carousel } from 'react-responsive-carousel';



import Clases from '../../src/clasesrober.jpeg';
import showSeptiembre from '../../src/septiembre10.jpeg';
import showOctubre01 from '../../src/octubre8.jpeg';
import showOctubre02 from '../../src/octubre9.jpeg';

class Services extends Component{
    render() {
        return (
        <>
        <section className="bg-white">
            <div className="container max-w-5xl mx-auto mx-8">
                <Zoom>
                <div className="container-services">
                    <div className="flex flex-wrap sm-justify-center items-center container-services">
                    <div className="w-full  sm:w-1/2 p-6 text-gray-600 mb-8 text-lg">
                            <img className="" src={Clases} alt="" />
                        </div>
                        <div id="capacitacion" className="w-6/6 sm:w-1/2 p-6 sm-text-center">
                            <h3 className="text-4xl text-gray-800 font-bold leading-none mb-3">
                                Aprende a escribir comedia
                            </h3>
                            <ul className="text-gray-600 mb-8 text-lg">
                                <li className="text-gray-600 text-2xl">* Asesorias personales</li>
                                <li className="text-gray-600 text-2xl">* Biografía digital</li>
                                <li className="text-gray-600 text-2xl">* Show de graduación</li>
                                <li className="text-gray-600 text-2xl">* El mejor puede ir entrar a <b>La Guerra de Escuelas</b></li>
                                <li className="text-gray-600 text-2xl underline">* <a href="https://goo.gl/maps/RzsvSDm5eoVA4XF86" target="_blank">Ubicación: El 139, La esquina de la comedia</a></li>
                                <li>
                                    <a className="self-center" target="_blank" href="https://wa.link/nzkni2">
                                        <button class="mx-auto lg:mx-0 font-bold py-2 px-4 border button-home content-center mt-8 rounded">
                                            MÁS INFORMES
                                        </button>
                                    </a>
                                </li>
                            </ul>
                         </div>
                    </div>
                </div>
                <div className="flex flex-wrap flex-col-reverse sm:flex-row container-services mt-14">
                <div className="w-full sm:w-1/2 p-6 mt-6 sm-text-center">
                    <div className="align-middle">
                        <h3 className="text-4xl text-gray-800 font-bold leading-none mb-3">
                            Próximas funciones
                        </h3>
                        <div className="mt-8">
                        <p className="text-gray-600 text-xl font-bold">TEATRO GALERIAS, GUADALAJARA</p>
                        <p className="text-gray-600 text-xl font-bold">10 DE SEPTIEMBRE / 21:00 HRS</p>
                        <a className="self-center mt-12" target="_blank" href="https://cutt.ly/2QV2J45">
                            <button class="mx-auto lg:mx-0 font-bold  px-4 border button-home content-center mt-4 rounded">
                                COMPRA TUS BOLETOS
                            </button>
                        </a>
                        </div>
                        <div className="mt-8">
                        <a className="self-center mt-12" target="_blank" href="https://arema.mx/e/7184">
                        <p className="text-gray-600 font-bold text-xl">TEATRO SAN FRANCISCO, PACHUCA</p>
                        <p className="text-gray-600 font-bold text-xl">8 DE OCTUBRE / 21:00 HRS</p>
                            <button class="mx-auto lg:mx-0 font-bold mt-4 px-4 border button-home content-center rounded">
                                COMPRA TUS BOLETOS
                            </button>
                        </a>
                        </div>
                        <div className="mt-8">
                        <a className="self-center mt-12" target="_blank" href="https://bit.ly/2WC7gJZ">
                        <p className="text-gray-600 font-bold text-xl">TEATRO OCAMPO, CUERNAVACA</p>
                        <p className="text-gray-600 font-bold text-xl">9 DE OCTUBRE / 21:00 HRS</p>
                            <button class="mx-auto lg:mx-0 font-bold mt-4 px-4 border button-home content-center rounded">
                                COMPRA TUS BOLETOS
                            </button>
                        </a>
                        </div>
 
                    </div>
                </div>
                <Carousel className="carousel-fan h-full" interval={3000} autoPlay swipeable dynamicHeight infiniteLoop width  >
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
                </Zoom>
            </div>
        </section>
        </>

        )
    }
}
export default Services;

