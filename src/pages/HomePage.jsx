import '../App.css';
import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Servicios from '../components/Servicios';

const HomePage = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [hash]);

    return (
        <>
            <Navbar />
            <div id="home">
                <Home />
            </div>
            <div id="services">
                <Servicios />
            </div>
            <Footer />
        </>
    );
}

export default HomePage;
