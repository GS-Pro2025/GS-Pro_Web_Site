import '../App.css';
import React from 'react';
import VisionMisionCarousel from '../components/VisionMisionCarousel'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Vision_MissionPage = () => {
    return(
        <>
            <Navbar/>
            <VisionMisionCarousel/>
            <Footer/>
        </>
    );
}   

export default Vision_MissionPage;