import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import  Bounce  from 'react-reveal/Zoom';
import { Carousel } from 'react-responsive-carousel';
 
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


import Rober01 from '../../src/rober01.png';
import Rober02 from '../../src/rober02.png';




class Profile extends Component{
    render() {
        return (
        <>
        <section className="bg-white mt-12 flex items-center flex-col">
        <Bounce right>
                    <div className="title-section">
                        <h3 className="text-3xl text-center text-gray-800 font-bold leading-none">
                            STAND UP
                        </h3>
                    </div>
                </Bounce>
            <Zoom>
                <section className="max-w-5xl mt-4 md:mt-12 mx-auto mx-8 container-services">
                    <section className="flex justify-between flex-wrap">
                        <div className="sm:w-1/2 p-6 md:pl-0 sm-text-center">
                            <h3 className="text-5xl text-gray-800 font-bold leading-none">
                                ¡Ma po favo!
                            </h3>
                            <p className="text-2xl text-gray-600 mt-4">
                               <b> El INMAMABLE</b> comediante de <b>LA HORA FELIZ</b> y <b>PUR DE PATOS</b>. Y que escribió y actuó la película <b>OK, ESTÁ BIEN</b>.
                                Y que anda de gira. Y que parece un maniquí.
                            </p>
                        </div>
                        <Carousel className="carousel-fan h-full w-full sm:w-1/2" interval={3000} autoPlay swipeable dynamicHeight infiniteLoop width  >
                            <div className="flex">
                                <img className="img-carousel" src={Rober01} />
                            </div>
                            <div className="flex">
                                <img className="img-carousel" src={Rober02} />
                            </div>
                        </Carousel>
                    </section>
                </section>
            </Zoom>
        </section>
        </>

        )
    }
}
export default Profile;

