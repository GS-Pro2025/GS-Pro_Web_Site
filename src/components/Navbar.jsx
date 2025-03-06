import { useState, useEffect } from "react";
import logo from "../assets/logo.webp";
import buttonContactUs1 from "../assets/buttonContactUs1.webp";
import buttonContactUs2 from "../assets/buttonContactUs2.webp";
import logoazul from "../assets/logoazul.webp";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [contactImage, setContactImage] = useState(buttonContactUs1);
    const [navbarBg, setNavbarBg] = useState("bg-white/20");
    const [currentLogo, setCurrentLogo] = useState(logo);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavbarBg("bg-white shadow-md");
                setCurrentLogo(logoazul);
            } else {
                setNavbarBg("bg-white/20");
                setCurrentLogo(logo);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed z-50 w-full flex items-center p-2 md:p-3 transition-all duration-300 ${navbarBg} top-0 left-0`}>
            <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between w-full h-full">
                {/* Logo */}
                <div className="logo-container">
                    <img src={currentLogo} id="logo" alt="Logo"
                        className="h-16 w-auto max-w-60 transition-all duration-300 md:h-24 md:max-w-72" />
                </div>

                {/* Contact button mobile*/}
                <button
                    className="h-10 w-32 flex items-center justify-center gap-2 transition-all duration-300 ml-5 mr-5 bg-transparent border-none md:hidden"
                    onMouseEnter={() => setContactImage(buttonContactUs2)}
                    onMouseLeave={() => setContactImage(buttonContactUs1)}
                >
                    <img src={contactImage} alt="Contáctenos" className="h-full w-auto" />
                </button>

                {/* Menu button for mobile */}
                <button
                    className="text-black text-3xl bg-transparent border-none cursor-pointer pr-10 md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                {/* Enlaces del Navbar */}
                <div className={`md:flex md:items-center md:space-x-10 ${menuOpen ? "flex flex-col" : "hidden md:flex"}`}>
                    {/* Menú desplegable Nosotros */}
                    <div className="relative group">
                        <span
                            className="text-black text-xl font-semibold cursor-pointer px-6 py-3 transition-all duration-300 border-b-2 border-transparent group-hover:border-black"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            Nosotros
                        </span>
                        {/* Opciones desplegables */}
                        <div className={`absolute left-0 mt-2 w-48 bg-white shadow-md rounded-lg p-2 ${dropdownOpen ? "block" : "hidden"} group-hover:block`}>
                            <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">Quiénes Somos</a>
                            <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">Misión</a>
                            <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">Visión</a>
                        </div>
                    </div>

                    <span className="text-black text-xl font-semibold cursor-pointer px-6 py-3 transition-all duration-300 border-b-2 border-transparent hover:border-black">
                        Valores
                    </span>
                    <span className="text-black text-xl font-semibold cursor-pointer px-6 py-3 transition-all duration-300 border-b-2 border-transparent hover:border-black">
                        Servicios
                    </span>

                    {/* Contact button desktop */}
                    <button
                        className="h-12 w-40 hidden md:flex items-center justify-center gap-2 transition-all duration-300 ml-6 bg-transparent border-none"
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

