import '../App.css';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import VisionMisionCarousel from '../components/VisionMisionCarousel';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Values from '../components/Values';
import About_us from '../components/About_us';

const AboutUsPage = () => {
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
            <div id="about_us">
                <About_us />
            </div>
            <div id="visionMision">
                <VisionMisionCarousel />
            </div>
            <div id="values">
                <Values />
            </div>
            <Footer />
        </>
    );
}

export default AboutUsPage;
