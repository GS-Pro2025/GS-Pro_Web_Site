import { useState, useEffect } from "react";
import { Link } from "react-router-dom";  
import logo from "../assets/logo.webp";
import buttonContactUs1 from "../assets/buttonContactUs1.webp";
import buttonContactUs2 from "../assets/buttonContactUs2.webp";
import logoazul from "../assets/logoazul.webp";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [contactImage, setContactImage] = useState(buttonContactUs1);
    const [navbarBg,] = useState("bg-transparent shadow-md");
    const [currentLogo, setCurrentLogo] = useState(logo);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setCurrentLogo(logoazul);
            } else {
                setCurrentLogo(logo);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed z-50 w-full flex items-center p-3 transition-all duration-300 ${navbarBg} top-0 left-0`}>
            <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between w-full h-full">
                {/* Logo */}
                <Link to="/">
                    <img src={currentLogo} alt="Logo" className="h-16 w-auto md:h-24" />
                </Link>

                {/* Movile burguer menu*/}
                <button 
                    className="text-[#0458AB] text-3xl md:hidden" 
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? "✖" : "☰"}
                </button>

                {/* Nav - menu*/}
                <div className={`absolute top-20 left-0 w-full bg-white md:static md:bg-transparent md:flex md:items-center md:space-x-10 md:justify-end ${menuOpen ? "block" : "hidden"}`}>
                    <div className="flex flex-col md:flex-row md:items-center w-full md:w-auto text-[#0458AB]">
                        <Link to="/aboutUs" className="text-[#0458AB] text-xl font-semibold cursor-pointer px-6 py-3 block md:inline">About us</Link>
                        <Link to="/team" className="text-[#0458AB] text-xl font-semibold cursor-pointer px-6 py-3 block md:inline">Team</Link>
                        <Link to="/vacancies" className="text-[#0458AB] text-xl font-semibold cursor-pointer px-6 py-3 block md:inline">Vacancies</Link>
                    </div>
                </div>

                {/* Contact button */}
                <Link
                to="/contactUs"
                className="relative flex items-center px-10 py-1 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
                >
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"></span>
                <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                    Contact us
                </span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
