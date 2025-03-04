import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../assets/logo.png";
import buttonContactUs1 from "../assets/buttonContactUs1.png";
import buttonContactUs2 from "../assets/buttonContactUs2.png";

const Navbar = () => {
    const [arrow, setArrow] = useState(buttonContactUs1); // Estado para la imagen

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo-container">
                    <img src={logo} id="logo" alt="Logo" />
                </div>
                <div className="nav-elements">
                    <ul>
                        <li>
                            <button className="HeaderOptions" id="mision">Misión</button>
                        </li>
                        <li>
                            <button className="HeaderOptions" id="vision">Visión</button>
                        </li>
                        <li>
                            <button className="HeaderOptions" id="servicios">Servicios</button>
                        </li>
                        <li>
                            <button 
                                className="HeaderOptions contact-button"
                                onMouseEnter={() => setArrow(buttonContactUs2)}
                                onMouseLeave={() => setArrow(buttonContactUs1)}
                            >
                                <img src={arrow} alt="Contáctenos" className="arrow-icon" />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
