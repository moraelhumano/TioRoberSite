import React, { Component } from 'react';
import HeroHome from '../components/Hero';
import Shows from '../components/Shows';
import Profile from '../components/Profile';
import Projects from '../components/Projects'
import Movie from '../components/Movie';
import Clases from '../components/Clases';




class Home extends Component {
    render() {
        return (
            <>
                <HeroHome />
                <Shows />
                <Movie />
                <Profile />
                <Clases />
                <Projects />
            </>
        )
    }
}
export default Home;


