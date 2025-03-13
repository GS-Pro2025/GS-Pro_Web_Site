import { useState } from "react";
import { Link } from "react-router-dom";
import logoazul from "../assets/logoazul.webp";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed z-50 w-full flex items-center p-2 transition-all duration-300 bg-white/80 shadow-md top-0 left-0">
            <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between w-full h-full">
                {/* Logo */}
                <Link to="/">
                    <img src={logoazul} alt="Logo" className="h-12 w-auto md:h-16" />
                </Link>

                {/* Mobile burger menu */}
                <button
                    className="text-[#0458AB] text-3xl md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? "✖" : "☰"}
                </button>

                {/* Nav - menu */}
                <div
                    className={`absolute top-16 left-0 w-full bg-white md:static md:bg-transparent md:flex md:items-center md:space-x-10 md:justify-end ${menuOpen ? "block" : "hidden"
                        }`}
                >
                    <div className="flex flex-col md:flex-row md:items-center w-full md:w-auto text-[#0458AB]">
                        <Link
                            to="/aboutUs"
                            className="text-[#0458AB] text-xl font-semibold cursor-pointer px-6 py-3 block md:inline"
                        >
                            About us
                        </Link>
                        <Link
                            to="/team"
                            className="text-[#0458AB] text-xl font-semibold cursor-pointer px-6 py-3 block md:inline"
                        >
                            Team
                            <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#0458AB] scale-x-0 group-hover:scale-x-100 group-hover:bg-sky-500 transition-transform duration-300"></span>
                        </Link>
                        <Link
                            to="/vacancies"
                            className="text-[#0458AB] text-xl font-semibold cursor-pointer px-6 py-3 block md:inline"
                        >
                            Vacancies
                        </Link>
                        <Link
                            to="/contactUs"
                            className="bg-[#003B73] text-sky-400 border border-sky-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
                        >
                            <span className="bg-sky-400 shadow-sky-400 absolute -top-[150%] left-0 inline-flex w-80 h-[2px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                            Contact us
                        </Link>
                    </div>
                </div>

                {/* Contact button */}
            </div>
        </nav>
    );
};

export default Navbar;
