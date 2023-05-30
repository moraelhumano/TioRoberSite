import React, { Component } from 'react';
import HeroHome from '../components/Hero';
import Shows from '../components/Shows';
import Profile from '../components/Profile';
import Projects from '../components/Projects'
import Clases from '../components/Clases';
import WebContent from '../components/WebContent';




class Home extends Component {
    render() {
        return (
            <>
                <HeroHome />
                <Shows />
                <WebContent />
                {/*<Profile />
                <Clases />
        <Projects />*/}
            </>
        )
    }
}
export default Home;


