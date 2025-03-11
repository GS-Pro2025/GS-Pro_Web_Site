import '../App.css';
import React from 'react';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Servicios from '../components/Servicios';

const HomePage = () => {
    return (
        <>
            <Navbar/>
            <Home/>
            <Servicios/>
            <Footer/>
        </>
    );
}   

export default HomePage;