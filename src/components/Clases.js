import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import { Carousel } from 'react-responsive-carousel';



import ClasesP from '../../src/clasesrober.jpeg';


class Clases extends Component{
    render() {
        return (
        <>
        <Zoom>
            <section className='bg-white mt-12 flex items-center flex-col'>
        <section className="max-w-5xl mt-4 mx-auto mx-8 container-services  md:mt-0">
                <div className="flex flex-wrap flex-row-reverse items-center ">
                    <div id="capacitacion" className="w-6/6 sm:w-1/2 p-6 md:pr-0">
                        <h3 className="text-4xl text-gray-800 font-bold leading-none mb-3">
                            Aprende a escribir comedia
                        </h3>
                        <ul className="text-gray-600 mb-8 text-lg">
                            <li className="text-gray-600 text-2xl"><b>Al ingresar al curso obtendrás todo este contenido: </b></li>
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
                    <div className="w-full sm:w-1/2 p-6 text-gray-600 mb-8 text-lg">
                        <img className="" src={ClasesP} alt="" />
                    </div>
                </div>
            </section>
            </section>
        </Zoom>
        </>

        )
    }
}
export default Clases;

