import React from "react";
import logo from "../assets/footerLogo.webp";
import phone from "../assets/phone.svg";
import email from "../assets/mail.svg";
import bgImage from "../assets/footerRectangleBig.webp";
import logoContainer from "../assets/logoContainer.webp";
import {FaFacebookF, FaInstagram} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="flex flex-col w-full font-sans leading-normal font-normal text-white/87 bg-[#242424] antialiased">
            <div className="flex w-full min-h-[400px] m-0 p-0 box-border flex-col md:flex-row">
                {/* Left footer */}
                <div className="w-full md:w-[30%] bg-gradient-to-r from-[#4E5AB1] to-[#0458AB] p-8 flex flex-col justify-center items-center text-justify">
                    <img src={logo} alt="Logo" className="w-[500px] h-auto" />
                    <p className="max-w-full mb-4">
                        Our company was founded in 2018 to provide a moving service primarily for homes,
                        understanding that each household has stories, memories,
                        and belongings that deserve the utmost care.
                        GS PRO MASTER MOVING aims to make the moving process as easy and stress-free as possible.
                    </p>
                    <p>You can find us at:</p>
                    <div className="flex gap-4 text-xl">
                        <a href="https://www.instagram.com/gspromaster?igsh=MTN0enpjbHV5Zm9zNg==">
                            <FaInstagram className="hover:text-pink-600 transition-colors duration-300" />
                        </a>
                        <a href="https://www.facebook.com/share/19qdmwewfe/?mibextid=wwXIfr">
                            <FaFacebookF className="hover:text-blue-700 transition-colors duration-300" />
                        </a>
                        <a href="https://www.facebook.com/share/18NJGVT2KN/?mibextid=wwXIfr ">
                            <FaFacebookF className="hover:text-blue-700 transition-colors duration-300" />
                        </a>
                    </div>
                </div>
                {/* Right Footer */}
                <div
                    className="w-full md:w-[70%] bg-cover bg-center bg-no-repeat p-8 flex flex-col justify-center items-center text-center"
                    style={{ backgroundImage: `url(${bgImage})` }}
                >
                    <h2 className="text-2xl font-roboto">CONTACT</h2>
                    <p>Contact us now</p>
                    <div className="flex justify-center gap-8 w-full md:w-[80%] my-5 flex-col md:flex-row">
                        {/* Contact info - phone*/}
                        <div className="flex items-center justify-start bg-white/10 p-4 rounded-lg w-full md:w-[270px] gap-4 flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 bg-contain bg-no-repeat bg-center flex-shrink-0"
                                style={{ backgroundImage: `url(${logoContainer})` }}>
                                <img src={phone} alt="Teléfono" className="w-8 h-8 object-contain" />
                            </div>
                            <div className="flex flex-col text-left">
                                <strong className="text-sm text-white">Phone:</strong>
                                <p className="text-xs text-white whitespace-normal">475-343-9497</p>
                            </div>
                        </div>

                        {/* Contact info - Email */}
                        <div className="flex items-center justify-start bg-white/10 p-4 rounded-lg w-full md:w-[270px] gap-4 flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 bg-contain bg-no-repeat bg-center flex-shrink-0"
                                style={{ backgroundImage: `url(${logoContainer})` }}>

                                <img src={email} alt="Email" className="w-8 h-8 object-contain" />
                            </div>
                            <div className="flex flex-col text-left">
                                <strong className="text-sm text-white">E-mail:</strong>
                                <p className="text-xs text-white whitespace-normal break-all">
                                    generalmanager@gspromastermoving.com
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer links */}
                    <div className="flex gap-4 mt-2.5">
                        <a href="#" className="font-medium text-[#646cff] hover:text-[#535bf2]">Mision</a>
                        <a href="#" className="font-medium text-[#646cff] hover:text-[#535bf2]">Values</a>
                        <a href="#" className="font-medium text-[#646cff] hover:text-[#535bf2]">Services</a>
                    </div>

                    {/* Footer legal links */}
                    <div className="flex gap-4 mt-2.5">
                        <a href="#" className="font-medium text-[#646cff] hover:text-[#535bf2]">Terms and Conditions</a>
                        <a href="#" className="font-medium text-[#646cff] hover:text-[#535bf2]">Privacy Policy</a>
                    </div>
                </div>
            </div>

            {/* Bottom footer */}
            <div className="flex justify-between items-center w-full px-10 py-2.5 bg-[#1B1550] text-white text-sm">
                <p className="font-roboto">Copyright © 2025. All rights reserved.</p>
                <p className="font-roboto">1545 Gladewater Rd Kissimmee, FL 34744</p>
            </div>
        </footer>
    );
};

export default Footer;