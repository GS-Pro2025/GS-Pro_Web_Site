import '../App.css';
import React from 'react';
import Values from '../components/Values';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const ValuesPage = () => {
    return(
        <>
            <Navbar/>
            <Values/>
            <Footer/>
        </>
    );
}   

export default ValuesPage