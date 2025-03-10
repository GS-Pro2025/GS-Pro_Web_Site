import { motion } from "framer-motion";
import logo from "../assets/lg-negro.png";

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center px-4">
      {/* Sección Principal */}
      <div className="max-w-5xl flex flex-col md:flex-row items-center gap-6 p-4">
        <img
          src={logo}
          alt="Logo"
          className="w-1/2 md:w-1/3 max-w-xs rounded-lg shadow-lg transition-all duration-500 hover:scale-105"
        />
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl font-bold text-[#0458AB]">🌟 SOBRE NOSOTROS</h2>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">
            Nuestra empresa nace desde el 2018 para ofrecer un servicio de mudanzas principalmente de casas, 
            entendiendo que cada hogar tiene historias, recuerdos y pertenencias que merecen el máximo cuidado. 
            GS PRO MASTER MOVING tiene como objetivo hacer que el proceso de mudanza sea lo más fácil y libre de estrés.
          </p>
          <div className="bg-gray-100 text-center p-3 mt-3 rounded-lg shadow-lg border-l-4 border-blue-500">
            <p className="text-gray-700 text-sm font-medium">
              Sabemos lo que significa mudarse con niños, mascotas y toda una vida de recuerdos, 
              por eso nos comprometemos a brindarte un servicio personalizado y confiable. 
              Creemos que el cambio de hogar debe ser una experiencia positiva para toda la familia 
              y nos complace como empresa ser parte de este proceso. Contamos con personal capacitado 
              y vehículos adecuados, adaptándonos siempre a las necesidades de cada familia.
            </p>
          </div>
        </div>
      </div>

{/* Contenedor formulario */}
<div className="w-screen bg-[#0458AB] py-13 md:h-64.5">
  <div className="max-w-lg mx-auto px-4">
  <motion.div
    className="text-center text-white"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-xl md:text-2xl font-semibold mb-4">Moving Quote on Demand:</h2>

    <div className="grid md:grid-cols-2 gap-3">
      <div className="flex flex-col items-start">
        <label className="text-xs md:text-sm mb-1 font-light">From:</label>
        <input
          type="text"
          placeholder="Zip code"
          className="w-full p-2 rounded-md bg-[#003B73] text-white placeholder-blue-200 text-xs border border-[#60A3D9] focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      <div className="flex flex-col items-start">
        <label className="text-xs md:text-sm mb-1 font-light">To:</label>
        <input
          type="text"
          placeholder="Zip code"
          className="w-full p-2 rounded-md bg-[#003B73] text-white placeholder-blue-200 text-xs border border-[#60A3D9] focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>
    </div>

    <button className="bg-[#003B73] hover:bg-[#60A3D9] text-white font-bold py-1.5 px-5 rounded-lg mt-4 text-xs transition-colors duration-300">
      Get Your Free Quote
    </button>
  </motion.div>
</div>
</div>

    </div>
  );
}
