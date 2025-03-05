import { useState } from "react";
import logo from "../assets/logo.webp";
import buttonContactUs1 from "../assets/buttonContactUs1.webp";
import buttonContactUs2 from "../assets/buttonContactUs2.webp";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [contactImage, setContactImage] = useState(buttonContactUs1);

    return (
        <nav className="fixed z-50 w-full flex items-center p-2.5 bg-gradient-to-r from-[#0458AB] to-[#4E5AB1] fixed top-0 left-0 z-50">
            <div className="max-w-[1100px] mx-auto px-4 flex items-center justify-between w-full h-full">
                {/* Logo */}
                <div className="logo-container">
                    <img src={logo} id="logo" alt="Logo" className="h-12 w-auto max-w-50" />
                </div>
                {/**Libre baskerville */}
                {/* Contact button mobile*/}
                <button
                    className="h-8 w-30 flex items-center justify-center gap-2 transition-all duration-300 ml-5 mr-5 bg-transparent border-none md:hidden"
                    onMouseEnter={() => setContactImage(buttonContactUs2)}
                    onMouseLeave={() => setContactImage(buttonContactUs1)}
                >
                    <img src={contactImage} alt="Contáctenos" className="h-full w-auto" />
                </button>

                {/* Menu button for mobile*/}
                <button
                    className="text-white text-2xl bg-transparent border-none cursor-pointer pr-10 md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                {/* Menu navbar for desktop*/}
                <div
                    className={`md:flex md:items-center md:space-x-4 ${menuOpen ? "flex" : "hidden"
                        } flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-gradient-to-r from-[#0458AB] to-[#4E5AB1] md:bg-none p-2.5 md:p-0`}
                >
                    <button className="text-white text-base font-medium bg-transparent border-none rounded-lg px-4 py-2 hover:bg-white/20 hover:scale-105 transition-all duration-300 h-12">
                        Mision
                    </button>
                    <button className="text-white text-base font-medium bg-transparent border-none rounded-lg px-4 py-2 hover:bg-white/20 hover:scale-105 transition-all duration-300 h-12">
                        Values
                    </button>
                    <button className="text-white text-base font-medium bg-transparent border-none rounded-lg px-4 py-2 hover:bg-white/20 hover:scale-105 transition-all duration-300 h-12">
                        Services
                    </button>

                    {/* contact button desktop*/}
                    <button
                        className="h-8 w-30 hidden md:flex items-center justify-center gap-2 transition-all duration-300 ml-5 bg-transparent border-none"
                        onMouseEnter={() => setContactImage(buttonContactUs2)}
                        onMouseLeave={() => setContactImage(buttonContactUs1)}
                    >
                        <img src={contactImage} alt="Contáctenos" className="h-full w-auto" />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;