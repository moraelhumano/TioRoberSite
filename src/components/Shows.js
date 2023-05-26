import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import { Carousel } from 'react-responsive-carousel';



import show01 from '../../src/PDP09062023V2.jpeg';
import show02 from '../../src/PDP10062023V2.jpeg';
import show03 from '../../src/PDP26082023V2.jpeg';


class Shows extends Component{
    render() {
        return (
        <>
           <section className="max-w-4xl mt-20 bg-white rounded-2xl p-6 mx-auto container-services flex-col">
            <Zoom>
                <div className="title-section">
                    <h3 className="text-2xl md:text-3xl text-gray-600 text-center text-white font-bold leading-none">
                        PRÓXIMAS FECHAS
                    </h3>
                </div>
            </Zoom>  
            <section className="container w-full max-w-5xl mx-auto  mt-6 flex flex-col md:flex-row wrap-own">
            <Bounce right>
            <div  className=" flex justify-center md:justify-end mt-4 md:mt-0">
                <Carousel className="carousel-fan h-full " interval={3000} autoPlay  dynamicHeight infiniteLoop width  >
                    <div className="flex">
                        <img className="img-carousel-shows" src={show01} />
                    </div>
                    <div className="flex">
                        <img className="img-carousel-shows" src={show02} />
                    </div>
                    <div className="flex">
                        <img className="img-carousel-shows" src={show03} />
                    </div>
                    <div className="flex">
                        <img className="img-carousel-shows" src={show03} />
                    </div>
                    <div className="flex">
                        <img className="img-carousel-shows" src={show03} />
                    </div>
                    

                </Carousel>                       
            </div>
            </Bounce>
            <Bounce left>
            <div className="w-full mt-8 md:mt-0 text-gray-600 mb-8 md:mb-0 text-lg md:text-right">
                <div className=" text-center md:text-right ">
                    <p className="text-gray-600 text-xl font-bold">FORO DE PRUEBA</p>
                    <p className="text-gray-600 text-xl font-bold">10 DE SEPTIEMBRE / 21:00 HRS</p>
                    <a className="self-center mt-12" target="_blank" href="">
                        <button class="mx-auto lg:mx-0 py-2 text-white font-bold bg-blue  px-4 border button-home content-center mt-4 rounded">
                            COMPRA TUS BOLETOS
                        </button>
                    </a>
                </div>
                <div className="mt-8 text-center md:text-right">
                    <p className="text-gray-600 font-bold text-xl">FORO DE PRUEBA</p>
                    <p className="text-gray-600 font-bold text-xl">8 DE OCTUBRE / 21:00 HRS</p>
                    <a className="self-center mt-12" target="_blank" href="">
                        <button class="mx-auto lg:mx-0 py-2 text-white font-bold mt-4 bg-blue px-4 border button-home content-center rounded">
                            COMPRA TUS BOLETOS
                        </button>   
                    </a>
                </div>
                <div className="mt-8 text-center md:text-right">
                    <a className="self-center mt-12" target="_blank" href="">
                    <p className="text-gray-600 font-bold text-xl">FORO DE PRUEBA</p>
                    <p className="text-gray-600 font-bold text-xl">9 DE OCTUBRE / 21:00 HRS</p>
                        <button class="mx-auto lg:mx-0 py-2 text-white font-bold bg-blue mt-4 px-4 border button-home content-center rounded">
                            COMPRA TUS BOLETOS
                        </button>
                    </a>
                </div>
            </div>
            </Bounce>
        </section>
       
        </section>
        </>

        )
    }
}
export default Shows;

