import { useState, useEffect } from "react";
import { Link } from "react-router-dom";  
import logo from "../assets/logo.webp";
import buttonContactUs1 from "../assets/buttonContactUs1.webp";
import buttonContactUs2 from "../assets/buttonContactUs2.webp";
import logoazul from "../assets/logoazul.webp";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [contactImage, setContactImage] = useState(buttonContactUs1);
    const [navbarBg, setNavbarBg] = useState("bg-white/20 shadow-md");
    const [currentLogo, setCurrentLogo] = useState(logo);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavbarBg("bg-white shadow-lg");
                setCurrentLogo(logoazul);
            } else {
                setNavbarBg("bg-white/20 shadow-md");
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
                        <div className="relative group px-6 py-3 md:p-0">
                            <button 
                                className="text-[#0458AB] text-xl font-semibold cursor-pointer block md:inline"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                aria-expanded={dropdownOpen}
                            >
                                About us
                            </button>
                            <div className={`absolute left-0 mt-2 w-48 bg-white rounded-lg p-2 md:group-hover:block ${dropdownOpen ? "block" : "hidden"}`}>
                                <Link to="#" className="block px-4 py-2 text-[#0458AB] hover:bg-gray-100">Who we are</Link>
                                <Link to="/vision_mission" className="block px-4 py-2 text-[#0458AB] hover:bg-gray-100">Mission</Link>
                                <Link to="/vision_mission" className="block px-4 py-2 text-[#0458AB] hover:bg-gray-100">Vision</Link>
                            </div>
                        </div>
                        <Link to="/ethos" className="text-[#0458AB] text-xl font-semibold cursor-pointer px-6 py-3 block md:inline">Ethos</Link>
                        <Link to="/services" className="text-[#0458AB] text-xl font-semibold cursor-pointer px-6 py-3 block md:inline">Services</Link>
                        <Link to="/team" className="text-[#0458AB] text-xl font-semibold cursor-pointer px-6 py-3 block md:inline">Team</Link>
                        <Link to="/comments" className="text-[#0458AB] text-xl font-semibold cursor-pointer px-6 py-3 block md:inline">Comments</Link>
                    </div>
                </div>

                {/* Contact button */}
                <button
                    className="hidden md:flex h-12 w-40 items-center justify-center transition-all duration-300 ml-6 border-2 border-[#0458AB] shadow-md rounded-lg"
                    onMouseEnter={() => setContactImage(buttonContactUs2)}
                    onMouseLeave={() => setContactImage(buttonContactUs1)}
                >
                    <img src={contactImage} alt="Contáctenos" className="h-full w-auto" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
