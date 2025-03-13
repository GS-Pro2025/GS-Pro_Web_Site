import '../App.css';
import React from 'react';
import Contact_us from '../components/Contact_us'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const ContactUsPage = () => {
    return(
        <>
        <Navbar />
        <div id="contact_us">
        <Contact_us/>
        </div>
        <Footer />
        </>
    );
}   

export default ContactUsPage;