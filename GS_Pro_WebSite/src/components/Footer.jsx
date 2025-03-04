import React from "react";
import logo from "../assets/footerLogo.svg";
import phone from "../assets/footerPhone.svg";
import email from "../assets/footerEmail.svg";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="flex flex-col w-full font-sans leading-normal font-normal text-white/87 bg-[#242424] antialiased">
            <div className="flex w-full min-h-[400px] m-0 p-0 box-border flex-col md:flex-row">
                {/* Left footer */}
                <div className="w-full md:w-[30%] bg-gradient-to-r from-[#4E5AB1] to-[#0458AB] p-8 flex flex-col justify-center items-center text-justify">
                    <img src={logo} alt="Logo" className="w-[500px] h-auto" />
                    <p className="max-w-full mb-4">
                        Nuestra empresa nace desde el 2018 para ofrecer un servicio de
                        mudanzas principalmente de casas, entendiendo que cada hogar tiene
                        historias, recuerdos y pertenencias que merecen el máximo cuidado.
                        GS PRO MASTER MOVING tiene como objetivo hacer que el proceso de
                        mudanza sea lo más fácil y libre de estrés.
                    </p>
                    <p>Puedes encontrarnos en:</p>
                    <div className="flex gap-4 text-xl">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                        <FaYoutube />
                    </div>
                </div>

                {/* Right Footer */}
                <div
                    className="w-full md:w-[70%] bg-[url('src/assets/footerRectangleBig.svg')] bg-cover bg-center bg-no-repeat p-8 flex flex-col justify-center items-center text-center"
                >
                    <h2 className="text-2xl font-bold">CONTACTO</h2>
                    <p>Contáctanos hoy mismo.</p>
                    <div className="flex justify-center gap-8 w-full md:w-[80%] my-5 flex-col md:flex-row">
                        {/* Información de contacto - Teléfono */}
                        <div className="flex items-center justify-start bg-white/10 p-4 rounded-lg w-full md:w-[270px] gap-4 flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 bg-[url('/src/assets/logoContainer.svg')] bg-contain bg-no-repeat bg-center flex-shrink-0">
                                <img src={phone} alt="Teléfono" className="w-8 h-8 object-contain" />
                            </div>
                            <div className="flex flex-col text-left">
                                <strong className="text-sm text-white">Por teléfono:</strong>
                                <p className="text-xs text-white whitespace-normal">475-343-9497</p>
                            </div>
                        </div>

                        {/* Información de contacto - Email */}
                        <div className="flex items-center justify-start bg-white/10 p-4 rounded-lg w-full md:w-[270px] gap-4 flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 bg-[url('/src/assets/logoContainer.svg')] bg-contain bg-no-repeat bg-center flex-shrink-0">
                                <img src={email} alt="Email" className="w-8 h-8 object-contain" />
                            </div>
                            <div className="flex flex-col text-left">
                                <strong className="text-sm text-white">Por e-mail:</strong>
                                <p className="text-xs text-white whitespace-normal break-words">
                                    generalmanager@gspromastermoving.com
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer links */}
                    <div className="flex gap-4 mt-2.5">
                        <a href="#" className="font-medium text-[#646cff] hover:text-[#535bf2]">Misión</a>
                        <a href="#" className="font-medium text-[#646cff] hover:text-[#535bf2]">Valores</a>
                        <a href="#" className="font-medium text-[#646cff] hover:text-[#535bf2]">Servicios</a>
                    </div>

                    {/* Footer legal links */}
                    <div className="flex gap-4 mt-2.5">
                        <a href="#" className="font-medium text-[#646cff] hover:text-[#535bf2]">Términos y condiciones</a>
                        <a href="#" className="font-medium text-[#646cff] hover:text-[#535bf2]">Política de privacidad</a>
                    </div>
                </div>
            </div>

            {/* Bottom footer */}
            <div className="flex justify-between items-center w-full px-10 py-2.5 bg-[#1B1550] text-white text-sm">
                <p className="font-roboto">Copyright © 2025. Todos los derechos reservados.</p>
                <p className="font-roboto">1545 Gladewater Rd Kissimmee, FL 34744</p>
            </div>
        </footer>
    );
};

export default Footer;