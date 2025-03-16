import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/lg-negro.png";
import MovingQuoteForm from "./MovingQuoteForm";

export default function AboutUs() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="font-[Open_Sans] flex flex-col items-center px-4 relative pt-10">
      {/* Fondo desenfocado cuando el modal está activo */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-40"></div>
      )}

      {/* Sección Principal */}
      <div className="max-w-5xl flex flex-col md:flex-row items-center gap-6 p-4 z-10">
        <img
          src={logo}
          alt="Logo"
          className="w-1/2 md:w-1/3 max-w-xs rounded-lg shadow-lg transition-all duration-500 hover:scale-105"
        />
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl text-[#0458AB]">🌟ABOUT US</h2>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">
          Our company was born in 2018 to offer a moving service mainly for houses, 
          understanding that each home has stories, memories and belongings that deserve the utmost care. 
          GS PRO MASTER MOVING aims to make the moving process as easy and stress-free as possible.
          </p>
          <div className="bg-gray-100 text-center p-3 mt-3 rounded-lg shadow-lg border-l-4 border-blue-500">
            <p className="text-gray-700">
            We know what it means to move in with children, pets, and a lifetime of memories, 
            that's why we're committed to providing you with a personalized and reliable service. 
            We believe that moving home should be a positive experience for the whole family and we're pleased as a company to be a part of this process.
            </p>
          </div>
        </div>
      </div>

      {/* Contenedor formulario */}
      <div className="w-screen bg-[#0458AB] py-13 md:h-64.5 z-10">
        <div className="max-w-lg mx-auto px-4">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl mb-4">Moving Quote on Demand:</h2>

            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex flex-col items-start">
                <label className="text-xs md:text-sm mb-1">From:</label>
                <input
                  type="text"
                  placeholder="Zip code"
                  className="w-full p-2 rounded-md bg-[#003B73] text-white placeholder-blue-200 text-xs border border-[#60A3D9] focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>

              <div className="flex flex-col items-start">
                <label className="text-xs md:text-sm mb-1">To:</label>
                <input
                  type="text"
                  placeholder="Zip code"
                  className="w-full p-2 rounded-md bg-[#003B73] text-white placeholder-blue-200 text-xs border border-[#60A3D9] focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
            </div>

            <button
              className="bg-[#003B73] hover:bg-[#60A3D9] text-white py-1.5 px-5 rounded-lg mt-4 text-xs transition-colors duration-300"
              onClick={() => setShowForm(true)}
            >
              Get Your Free Quote
            </button>
          </motion.div>
        </div>
      </div>

      {/* Modal con el formulario */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-96 relative">
            {/* Botón para cerrar el modal */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-lg"
            >
              ✖
            </button>

            {/* Contenido del formulario */}
            {showForm && (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-xl w-96 relative">
      {/* Pasar setShowForm como prop */}
      <MovingQuoteForm setShowForm={setShowForm} />
    </div>
  </div>
)}

          </div>
        </div>
      )}
    </div>
  );
}
