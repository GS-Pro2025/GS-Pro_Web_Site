import '../App.css';
import React from 'react';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../components/Home';

const HomePage = () => {
    return (
        <>
            <Navbar/>
            <Home/>
            <Footer/>
        </>
    );
}   

export default HomePage;