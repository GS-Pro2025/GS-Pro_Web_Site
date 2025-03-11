import '../App.css';
import React from 'react';
import VisionMisionCarousel from '../components/VisionMisionCarousel'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Values from '../components/Values';
const AboutUsPage = () => {
    return(
        <>
            <Navbar/>
            <VisionMisionCarousel/>
            <Values/>
            <Footer/>
        </>
    );
}   

export default AboutUsPage;