import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';
import { Carousel } from 'react-responsive-carousel';


import LaHoraPepsiCenter from '../../src/LHFRPC.jpg';




class PepsiCenterBanner extends Component {
    render() {
        return (
            <>
                <a className='relative z-10' href="https://www.eticket.mx/masinformacion.aspx?IdEvento=30710" target="_blank">
                    <div className="bg-blue-pepsi flex items-center justify-center">
                        <img className="logo-rey w-1/4" src={LaHoraPepsiCenter} />
                    </div>
                </a>
            </>

        )
    }
}
export default PepsiCenterBanner;
