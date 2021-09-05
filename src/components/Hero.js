import React, { Component } from 'react';
import 'reactjs-popup/dist/index.css';
import Fade from 'react-reveal/Fade';

import OKEsta from '../../src/okestabien.png';

class HeroHome extends Component{
    render() {
        return (
        <>
        <Fade>
        <div className="md:pt-24 hero-home md:h-screen flex-col">
            <div className="container p-10 md:h-full px-3 mx-auto flex flex-col background-rober justify-center">
                <div className="flex flex-col justify-center md:justify-left text-center md:text-left w-full md:w-8/12">
                    <p className="uppercase text-4xl md:text-5xl tracking-loose md:pl-4 text-center md:text-left" 
                    style={{  fontWeight: '900',
                                textShadow: '-3px 2px black',
                                }}
                    >Nominada al Ariel</p>
                <div className="w-full flex justify-center md:justify-left">
                <img className="w-3/4 mt-4 md:mt-0" src={OKEsta} />  
                </div>
                </div>
                <a className="self-center" target="_blank" href="https://player.vimeo.com/video/569135029">
                    <button class="mx-auto lg:mx-0 font-bold py-2 px-4 border button-home content-center mt-2 rounded">
                        MÍRALA EN VIMEO
                    </button>
                </a>
            </div>
        </div>
        </Fade>
        </>

        )
    }
}
export default HeroHome;

