import React from "react";
import "./footer.css";
import logo from "../assets/footerLogo.svg";
import phone from "../assets/footerPhone.svg"
import email from "../assets/footerEmail.svg"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-container">
            <div className="footer-left">
                <img src={logo} alt="Logo" className="footer-logo" />
                <p>
                    Nuestra empresa nace desde el 2018 para ofrecer un servicio de
                    mudanzas principalmente de casas, entendiendo que cada hogar tiene
                    historias, recuerdos y pertenencias que merecen el máximo cuidado.
                </p>
                <p>
                    GS PRO MASTER MOVING tiene como objetivo hacer que el proceso de
                    mudanza sea lo más fácil y libre de estrés.
                </p>
                <div className="social-icons">
                    <FaFacebookF />
                    <FaInstagram />
                    <FaTwitter />
                    <FaYoutube />
                </div>
            </div>
            <div className="footer-right">
                <h2>CONTACTO</h2>
                <p>Contáctanos hoy mismo.</p>
                <div className="contact-info">
                    <div className="contact-item">
                        <img src={phone} alt="Teléfono" />
                        <div className="contact-text">
                            <strong>Por teléfono:</strong>
                            <p>475-343-9497</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <img src={email} alt="E-mail" />
                        <div className="contact-text">
                            <strong>Por e-mail:</strong>
                            <p>email@gspromastermoving.com</p>
                        </div>
                    </div>
                </div>
                <div className="footer-links">
                    <a href="#">Misión</a>
                    <a href="#">Valores</a>
                    <a href="#">Servicios</a>
                </div>
                <div className="legal-links">
                    <a href="#">Términos y condiciones</a>
                    <a href="#">Política de privacidad</a>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>Copyright © 2025. Todos los derechos reservados.</p>
            <p>1545 Gladewater Rd Kissimmee, FL 34744</p>
        </div>
        </footer>
    );
};

export default Footer;
