import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';





class Projects extends Component{
    render() {
        return (
        <>
        <section className="bg-white border-b md:mt-14">
        <Bounce right>
                    <div className="title-section">
                        <h3 className="text-3xl text-center text-gray-800 font-bold leading-none">
                            PROYECTOS Y COLABORACIONES
                        </h3>
                    </div>
                </Bounce>
            <div className="container max-w-5xl mx-auto m-8 pt-4 pb-12 ">
                <section className="flex justify-between flex-wrap">
                    <Zoom>
                    <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink shadow px-6 ">
                        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden">
                            <p className="w-full text-gray-600 text-xs md:text-sm">
                            PODCAST 
                            </p>
                            <p className="w-full font-bold text-xl text-gray-800">
                                ESCUPIR EN EL TIEMPO
                            </p>
                        </div>
                        <div className="flex flex-col justify-center flex-none  rounded-b rounded-t-none overflow-hidden mt-8">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/J_YPGPCSOfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                            <a className="flex flex-col justify-center" target="_blank" href="https://open.spotify.com/show/7fDMJdd3eQtcKyPrtioKx3">
                                <button class="mx-auto lg:mx-0 font-bold py-2 px-4 border button-home content-center mt-8 rounded">
                                    ESCÚCHALO EN SPOTIFY
                                </button>
                            </a>
                        </div>

                    </div>
                    <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink shadow px-6 ">
                        <div className="flex-1 bg-white flex flex-col rounded-t rounded-b-none overflow-hidden">
                            <p className="w-full text-gray-600 text-xs md:text-sm">
                            PODCAST 
                            </p>
                            <p className="w-full font-bold text-xl text-gray-800">
                                LA HORA FELIZ
                            </p>
                        </div>
                        <div className="flex-none bg-white rounded-b rounded-t-none overflow-hidden mt-8 text-center md:text-left">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/HmSOJQPiA9E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <a className="flex flex-col justify-center" target="_blank" href="https://open.spotify.com/show/0u8dE1kc9CkFn8bONEq0hE">
                            <button class="mx-auto lg:mx-0 font-bold py-2 px-4 border button-home content-center mt-8 rounded">
                                ESCÚCHALO EN SPOTIFY
                            </button>
                        </a>
                    </div>

                    </div>
                    </Zoom>
                </section>
            </div>
        </section>
        </>

        )
    }
}
export default Projects;

