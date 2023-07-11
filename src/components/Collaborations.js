import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';
import NavBar from './Navbar';


class Collaborations extends Component {
    render() {
        const collaborations = [
            {
                videoUrl: "https://www.youtube.com/embed/auMsslWAens",
                title: "La Cotorrisa",
                description: "Dale click para ver como en compañía de Slobosky y Ricardo Pérez el Tío Rober le da nacimiento a su grito de guerra... Ma Po Favo!"
            },
            {
                videoUrl: "https://www.youtube.com/embed/ootgZunmtbQ",
                title: "Leyendas Legendarias",
                description: "En esta primer y única colaboración con Leyendas Legendarias el Tío Rober habla de todo menos de Paco pacorro, de los locutores el rorro y también el más cotorro."
            },
            {
                videoUrl: "https://www.youtube.com/embed/8-vwewHMHhc",
                title: "¿Verdad o shot?",
                description: "En este cápitulo con Alex Quiróz el Tío Rober cuenta sus más oscuros secretos con unos mezcales encima."            },
            {
                videoUrl: "https://www.youtube.com/embed/6sXpr8e9fYc",
                title: "Chochenteros",
                description: "¿Cómo es la vida del comediante? ¿Cómo sobrevivir a las nuevas épocas? Todo eso y más en Chochenteros con Marcario Brujo y Checo Mejorado"
            },
            {
                videoUrl: "https://www.youtube.com/embed/hi8sJi4FRMI",
                title: "Tirando bola",
                description: "En este épisodio con El Diablo Escamilla el Tío Rober cuenta su mítica anecdota de cuando le cayó un ray en el CCH."
            },
            {
                videoUrl: "https://www.youtube.com/embed/xNcjA9XGZIg",
                title: "Temas de Nicho",
                description: "Muchas risas y mucha reflexión con Nicho Peñavera con los temas de nicho en donde se abordó el tema de la depesión"
            },
            {
                videoUrl: "https://www.youtube.com/embed/kjdBaI3d5UA",
                title: "Tenemos que hablar",
                description: "El Tío invade el estudio de Inés Palacios para hablar sobre su película y otros temas incómodos."
            },

            // Agrega más objetos de colaboración aquí...
        ];

        return (
            
            <section className="bg-black  text-white md:pb-6 pb-20 mx-auto text-white container-services flex-col">
                <NavBar/>

                <Bounce right>
                    <div className="title-section">
                        <h3 className="text-3xl text-center text-white font-bold leading-none">
                            COLABORACIONES
                        </h3>
                    </div>
                </Bounce>
                {collaborations.map((collaboration, index) => (
                    <section key={index} className="container w-full max-w-5xl mx-auto mt-10 bg-black text-gray-600 rounded-2xl p-8 mx-auto container-services flex-col md:flex-row  justify-between">
                        <Bounce right>
                            <div className="flex text-gray-600 w-full md:w-1/2 flex justify-between">
                                <div className="pr-0 md:pr-2 sm-text-center text-white text-center md:text-left flex flex-col">
                                    <h3 className="text-lg md:text-2xl text-white mt-4">
                                        <b>{collaboration.title}</b>
                                    </h3>
                                    <p className="text-lg md:text-2xl text-white mt-2">
                                        {collaboration.description}
                                    </p>
                                </div>
                            </div>
                        </Bounce>
                        <Bounce left>
                            <div className="flex w-46 justify-center md:justify-end mt-4 md:mt-0">
                                <iframe className="h-80 w-full" src={collaboration.videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </Bounce>
                    </section>
                ))}
            </section>
        );
    }
}

export default Collaborations;
