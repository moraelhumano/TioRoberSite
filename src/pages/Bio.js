import React, { Component } from 'react';


class Bio extends Component{
    render() {
        return (
        <>
           <div className="pt-24">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="w-full h-content-links md:w-3/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 flex text-center flex-col bg-white rounded-t rounded-b-none overflow-hidden shadow px-6">
              <div className="mt-6 w-full font-bold text-xl text-gray-800">
                LA BIO
              </div>
              <p className="text-gray-800 text-base">
                Aquí vas a encontrar mis proyectos y recomendaciones que te hago 🤓
              </p>
              <div className="sm-button-content flex flex-col">
                <a href="index.html" className="w-full" target="_blak">
                  <button className="mx-auto lg:mx-0 w-10/12 gradient text-white font-bold rounded-full my-4 py-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                      Portafolio
                  </button>
                </a>
                  <a href="https://www.youtube.com/channel/UCy5QvAqlwMpHGS_FsBM1MQQ" className="w-full" target="_blak">
                    <button className="mx-auto lg:mx-0 w-10/12 gradient text-white font-bold rounded-full my-4 py-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        Mis lives
                    </button>
                  </a>
                  <a href="techref.html" className="w-full">
                    <button className="mx-auto lg:mx-0 w-10/12 gradient text-white font-bold rounded-full my-4 py-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        Recursos Tech
                    </button>
                  </a>
                  <a href="ingrec.html" className="w-full">
                    <button className="mx-auto lg:mx-0 w-10/12 gradient text-white font-bold rounded-full my-4 py-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        Recursos Inglés
                    </button>
                  </a>
              </div>
          </div>
        </div>
      </div>
    </div>
        </>

        )
    }
}
export default Bio;


