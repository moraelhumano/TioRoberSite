import React, { Component } from 'react';
import HeroHome from '../components/Hero';
import Services from '../components/Services';
import Profile from '../components/Profile';
import Projects from '../components/Projects'
import Movie from '../components/Movie';




class Home extends Component{
    render() {
        return (
        <>
            <HeroHome />  
            <Movie />
            <Profile />
            <Services />
            <Projects />
        </>

        )
    }
}
export default Home;


