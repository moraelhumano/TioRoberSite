import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Fade from 'react-reveal/Fade';

import OKEsta from '../../src/okestabien.png';




class HeroHome extends Component{
    render() {
        return (
        <>
        <div className="pt-24 hero-home flex-col">
            <Fade>
                <div className="container px-3 mx-auto flex flex-wrap flex-col background-mora justify-center">
                    <div className="flex flex-col justify-left md:text-left w-8/12">
                    <p className="uppercase text-5xl tracking-loose" 
                        style={{  fontWeight: '900',
                                  textShadow: '-3px 2px black',
                                  paddingLeft:'2rem',}}
                         
                    >Nominada al Ariel</p>
                    <img className="w-3/4" src={OKEsta} />
                    </div>
                    <a className="self-center" target="_blank" href="https://player.vimeo.com/video/569135029">
                        <button class="mx-auto lg:mx-0 font-bold py-2 px-4 border button-home content-center mt-2 rounded">
                            MÍRALA EN VIMEO
                        </button>
                    </a>
                </div>
            </Fade>
            
            
        </div>
        
        </>

        )
    }
}
export default HeroHome;

