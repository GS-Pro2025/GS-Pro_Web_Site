import '../App.css';
import React from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/logoazul.webp"
const inConstruction = () => {
    return (
        <div className="bg-[#d9d9d9] flex flex-col items-center justify-center h-screen text-center">
            <img src={logo} className="max-w-80 sm:max-w-90 md:max-w-100"></img>
            <h1 className="text-4xl font-bold text-red-500">Page Under Construction</h1>
            <p className="text-lg text-gray-600 mt-2">Sorry for the inconvenience. We're working on this page.</p>
            <Link to="/" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">
            Volver al inicio
            </Link>
        </div>
    );
}   

export default inConstruction;