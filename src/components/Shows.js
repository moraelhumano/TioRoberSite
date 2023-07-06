import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import { Carousel } from 'react-responsive-carousel';



import show01 from '../../src/PDP09062023V2.jpeg';
import show02 from '../../src/PDP10062023V2.jpeg';
import show03 from '../../src/PDP26052023V2.jpeg';
import show04 from '../../src/LHF20062023V2.jpeg';
import show05 from '../../src/LHF22062023V2.jpeg';
import show06 from '../../src/LHF23062023V2.jpeg';
import show07 from '../../src/LHF25062023V2.jpeg';
import show08 from '../../src/LHF26062023V2.jpeg';
import show09 from '../../src/LHF27062023V2.jpeg';
import show10 from '../../src/LHF29062023V2.jpeg';
import show11 from '../../src/LHF03072023V2.jpeg';
import show12 from '../../src/PDP04082023.jpeg';
import show13 from '../../src/LHF10082023V2.jpeg';


const eventos = [
    { id: 1, fecha: '9 de Junio', ubicacion: 'Mexicali, B.C.N', lugar: 'Teatro del IMSS', boletosLink:'https://arema.mx/e/10029', hora:"21:00 HRS" },
    { id: 2, fecha: '10 de Junio', ubicacion: 'Tijuana, B.C.N', lugar: 'Espacio Creativo', boletosLink:'https://arema.mx/e/10031', hora:"21:00 HRS"  },
    { id: 3, fecha: '14 de Junio', ubicacion: 'CDMX, MX', lugar: 'Marketeatro Roma', boletosLink:'https://arema.mx/@purdepatos', hora:"21:00 HRS"  },
    { id: 4, fecha: '20 de Junio', ubicacion: 'Madrid, ESP', lugar: 'Teatro Soho',boletosLink:'https://www.eventbrite.ie/e/esta-mal-reirse-de-esto-stand-up-comedy-espanol-tickets-527474870537', hora:"22:00 HRS"  },
    { id: 6, fecha: '22 de Junio', ubicacion: 'Barcelona, ESP', lugar: 'The Comedy Club House',boletosLink:'https://www.eventbrite.ie/e/esta-mal-reirse-de-esto-stand-up-comedy-espanol-tickets-631715236277', hora:"22:00 HRS"  },
    { id: 7, fecha: '23 de Junio', ubicacion: 'París, FRN', lugar: 'Apollo Theater' ,boletosLink:'https://www.apollotheatre.fr/esta-mal-reirse-de-esto-lo3413.html', hora:"20:00 HRS"  },
    { id: 8, fecha: '25 de Junio', ubicacion: 'Berlín, ALE', lugar: 'Cosmic Comedy Club' ,boletosLink:'https://comedyclubberlin.com/event/tio-rober-y-cojo-feliz-esta-mal-reirse-de-esto-comedia-en-espanol/', hora:"20:00 HRS"  },
    { id: 9, fecha: '26 de Junio', ubicacion: 'Múnich, ALE', lugar: 'Substanz Club', boletosLink:'https://tickets.muenchenticket.net/shop?shopid=209&wes=24430eea209&query_pos=0&query_rows=1000&set_query_pos=0&houseid=890&performanceid=393516&state=3&nextstate=4', hora:"22:00 HRS"  },
    { id: 10, fecha: '27 de Junio', ubicacion: 'Ámsterdam, HOL', lugar: 'Boom Chicago',boletosLink:'https://fareharbor.com/embeds/book/boomchicago/items/439992/availability/1134941906/book/?full-items=yes', hora:"20:00 HRS"  },
    { id: 11, fecha: '29 de Junio', ubicacion: 'Dublín, IE', lugar: 'Kalabasa Market',boletosLink:'https://www.eventbrite.ie/e/esta-mal-reirse-de-esto-stand-up-comedy-espanol-tickets-631721244247', hora:"20:30 HRS"  },
    { id: 12, fecha: '3 de Julio', ubicacion: 'Londres, ING', lugar: 'Up The Creek',boletosLink:'https://www.eventbrite.ie/e/esta-mal-reirse-de-esto-stand-up-comedy-espanol-tickets-544693983367', hora:"20:30 HRS"  },
    { id: 13, fecha: '4 de Agosto', ubicacion: 'Puebla, MX', lugar: 'Teatro Principal', boletosLink:'https://arema.mx/evento/10357', hora:"21:00 HRS"  },
    { id: 14, fecha: '10 de Agosto', ubicacion: 'CDMX, MX', lugar: 'Pepsi Center', boletosLink:'https://www.eticket.mx/masinformacion.aspx?IdEvento=30710', hora:"21:00 HRS"  },
    { id: 15, fecha: '26 de Agosto', ubicacion: 'Guadalajara, JAL', lugar: '',boletosLink:'', hora:""  },


];


class Shows extends Component {
    render() {
        return (
            <>
                <section className="bg-black pt-10 text-white md:pb-6 pb-20 mx-auto text-white container-services flex-col">
                    <Zoom>
                        <div className="title-section">
                            <h3 className="text-2xl md:text-3xl text-white text-center text-white font-bold leading-none">
                                PRÓXIMAS FECHAS
                            </h3>
                        </div>
                    </Zoom>
                    <section className="container w-full max-w-5xl mx-auto  mt-14 inline-flex flex-col-reverse items-center	md:items-start	 md:flex-row wrap-own">
                        <Bounce left>
                            <div className="w-11/12 mt-8 md:mt-0 text-white mb-8 md:mb-0 text-lg text-center md:text-right">
                                <div>{eventos.map(evento => (
                                    <div className=" text-center md:text-left mb-4"  key={evento.id}>
                                        <div className='flex'>
                                            <p className=" text-xl font-bold"> {evento.nombre}</p>
                                            <p className='font-medium'>
                                              <b> {evento.fecha}</b> - {evento.ubicacion} - {evento.lugar}  -  21:00 HRS
                                            </p>
                                        </div>
                                        <a className="contents" target="_blank" href={evento.boletosLink} >
                                            <button class="inline-flex  flex inline-flex justify-center align-center lg:mx-0 mt-2   px-4 border button-home content-center ">
                                                COMPRA TUS BOLETOS 
                                            </button>
                                        </a>
                                    </div>
                                ))}   
                                </div>
                              
                                </div>

                        </Bounce>
                        <Bounce right>
                            <div className="w-full px-4  md:w-1/2 h-3/4 flex justify-center md:justify-end mt-4 md:mt-0">
                                <Carousel className="carousel-fan h-auto" interval={3000} autoPlay dynamicHeight infiniteLoop width>
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
                                        <img className="img-carousel-shows" src={show04} />
                                    </div>
                                    <div className="flex">
                                        <img className="img-carousel-shows" src={show05} />
                                    </div>
                                    <div className="flex">
                                        <img className="img-carousel-shows" src={show06} />
                                    </div>
                                    <div className="flex">
                                        <img className="img-carousel-shows" src={show07} />
                                    </div>
                                    <div className="flex">
                                        <img className="img-carousel-shows" src={show08} />
                                    </div>
                                    <div className="flex">
                                        <img className="img-carousel-shows" src={show09} />
                                    </div>
                                    <div className="flex">
                                        <img className="img-carousel-shows" src={show10} />
                                    </div>
                                    <div className="flex">
                                        <img className="img-carousel-shows" src={show11} />
                                    </div>
                                    <div className="flex">
                                        <img className="img-carousel-shows" src={show12} />
                                    </div>
                                    <div className="flex">
                                        <img className="img-carousel-shows" src={show13} />
                                    </div>
                                </Carousel>
                            </div>
                        </Bounce>
                    </section>
                </section>
            </>
        )
    }
}

export default Shows;

