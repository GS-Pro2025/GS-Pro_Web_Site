import '../App.css';
import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Servicios from '../components/Servicios';
import QuoteFlow from '../components/QuoteFlow';
import CommentsSection from '../components/CommentsSection';

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
            <div className="mb-40" id="quoteFlow">
                <h1 className="max-w-3xl font-[Libre_Baskerville] text-3xl font-bold 
                    text-center text-[#0458AB] block mx-auto mt-20 mb-20 ">
                    NUESTRO PROCESO DE COTIZACIÓN FUNCIONA DE LA SIGUIENTE MANERA
                </h1>
                <QuoteFlow/>
            </div>
            <div id="services">
                <Servicios />
            </div>
            <div id="comments" className='mt-10 mb-10'>
                <CommentsSection/>
            </div>
            
            <Footer />
        </>
    );
}

export default HomePage;
