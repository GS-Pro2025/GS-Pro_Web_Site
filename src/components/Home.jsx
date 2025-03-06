import { useEffect, useState } from "react";
import logo from "../assets/GS-PRO-Blanco.webp";
import whatsappIcon from "../assets/whatsapp.webp";
import backgroundImage from "../assets/azul-537.webp";

const Home = () => {
  const [animate, setAnimate] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Handle animation on page load
  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 200);
  }, []);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen font-roboto grid grid-cols-1 md:grid-cols-2 items-center px-4 md:px-10 transition-all duration-500">
      
      {/* Imagen de fondo con animación */}
      <div
        className="absolute inset-0 w-full h-full transition-all duration-500"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: `scale(${Math.max(1 - scrollY / 1000, 0.5)})`, // Reduce tamaño
          opacity: Math.max(1 - scrollY / 500, 0), // Se desvanece
          transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
          zIndex: -1, // Se mantiene en el fondo
        }}
      ></div>

      {/* Formulario (SIN CAMBIOS) */}
      <div className="relative flex items-center justify-center md:block">
        <div className="bg-white p-6 m-20 rounded-lg shadow-xl w-[90%] max-w-[350px] min-h-[350px] border-2 border-[#2E1EA5] 
        mx-auto md:fixed md:top-1/10 md:left-9">
          <h2 className="text-xl md:text-2xl font-bold">Moving Quote</h2>
          <p className="text-gray-600">We ship within 2 working days</p>

          <label className="block text-sm font-semibold mt-3 flex">From:</label>
          <input type="text" placeholder="Zip code" className="w-full border p-2 mt-2 rounded-md" />

          <label className="block text-sm font-semibold mt-3 flex">To:</label>
          <input type="text" placeholder="Zip code" className="w-full border p-2 mt-2 rounded-md" />

          <button className="bg-[#2E1EA5] text-white w-full mt-4 py-2 rounded-lg hover:bg-blue-800">
            Get a quote here
          </button>
        </div>
      </div>

      {/* Logo y mensaje de bienvenida */}
      <div
        className={`flex flex-col items-center md:items-start text-white text-center md:text-left transition-all duration-1000 ease-out transform ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        style={{
          opacity: Math.max(1 - scrollY / 400, 0), // Logo & mensaje desaparecen al hacer scroll
          transform: `translateY(${scrollY / 4}px)`, // Se mueve ligeramente hacia arriba
        }}
      >
        <img
          src={logo}
          alt="GS PRO Logo"
          className="w-48 md:w-60 transition-all duration-1000 ease-out"
        />

        <h2 className="mt-4 text-lg md:text-2xl font-bold font-[Libre_Baskerville]">
          Welcome to GS-PRO MASTER <br />
          <span className="text-sm md:text-lg">
            We take care of your move, you enjoy the change.
          </span>
        </h2>
      </div>

      {/* Botón flotante de WhatsApp */}
      <a href="https://wa.me/123456789" className="fixed bottom-4 right-8 rounded-full shadow-lg">
        <img src={whatsappIcon} alt="WhatsApp" className="w-12 h-12 transition-all duration-300 hover:scale-110" />
      </a>
    </div>
  );
};

export default Home;
