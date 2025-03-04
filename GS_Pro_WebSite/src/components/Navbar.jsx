import { useState } from 'react';
import './navbar.css';
import logo from "../assets/logo.png";
import buttonContactUs1 from "../assets/buttonContactUs1.png";
import buttonContactUs2 from "../assets/buttonContactUs2.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [contactImage, setContactImage] = useState(buttonContactUs1);

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo-container">
                    <img src={logo} id="logo" alt="Logo"/>
                </div>

                {/* Botón de menú para móviles */}
                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>

                {/* Menú de opciones */}
                <div className={`nav-elements ${menuOpen ? 'active' : ''}`}>
                    <button className="HeaderOptions">Misión</button>
                    <button className="HeaderOptions">Visión</button>
                    <button className="HeaderOptions">Servicios</button>
                    
                    {/* Botón de Contacto con efecto hover */}
                    <button className="contact-button"
                        onMouseEnter={() => setContactImage(buttonContactUs2)}
                        onMouseLeave={() => setContactImage(buttonContactUs1)}
                    >
                        <img src={contactImage} alt="Contáctenos" />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
