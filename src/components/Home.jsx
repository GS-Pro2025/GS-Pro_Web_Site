import { useEffect, useRef } from "react";
import logo from "../assets/GS-PRO-Blanco.webp";
import whatsappIcon from "../assets/whatsapp.webp";
import backgroundImage from "../assets/azul-537.webp";
import QuoteForm from "./QuoteForm";

const Home = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const logoRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    let scrollAnimationFrame;

    const handleScroll = () => {
      if (scrollAnimationFrame) return;
      scrollAnimationFrame = requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        // Opacidad y desplazamiento del contenedor
        if (containerRef.current) {
          const opacityValue = Math.max(0.2, 1 - scrollY / 300);
          containerRef.current.style.opacity = opacityValue;
        }

        // Movimiento y opacidad del texto
        if (textRef.current) {
          textRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
          textRef.current.style.opacity = Math.max(0, 1 - scrollY / 200);
        }

        // Transformación del logo
        if (logoRef.current) {
          logoRef.current.style.transform = `scale(${Math.max(0.8, 1 - scrollY / 800)})`;
          logoRef.current.style.opacity = Math.max(0, 1 - scrollY / 250);
        }

        // Opacidad del formulario
        if (formRef.current) {
          formRef.current.style.opacity = Math.max(0, 1 - scrollY / 200);
        }

        scrollAnimationFrame = null;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollAnimationFrame) cancelAnimationFrame(scrollAnimationFrame);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen font-[Libre_Baskerville] grid grid-cols-1 md:grid-cols-2 items-center px-4 md:px-10 overflow-hidden mb-20 transition-opacity duration-300 ease-out"
    >
      {/* Imagen de fondo fija */}
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Contenido principal */}
      <div
        ref={textRef}
        className="relative z-10 mt-16 flex flex-col items-center md:items-start text-white text-center md:text-left w-full"
      >
        <h2 className="text-xl md:text-4xl font-bold text-center">
          Welcome to <br /> <span className="text-[#0458AB]">GS-PRO MASTER MOVING LLC</span> <br />
          <span className="text-lg md:text-xl font-light">
            We take care of your move, you enjoy the change.
          </span>
        </h2>

        {/* Logo animado */}
        <div className="mt-8 flex justify-center w-full">
          <img
            ref={logoRef}
            src={logo}
            alt="GS PRO Logo"
            className="w-48 md:w-72 transition-transform duration-300 ease-out hover:scale-105"
          />
        </div>
      </div>

      {/* Formulario de cotización */}
      <div ref={formRef} className="top-1/4 right-8 md:right-12 z-10">
        <QuoteForm />
      </div>

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/123456789"
        className="fixed bottom-4 right-8 rounded-full shadow-lg transition-transform duration-300 ease-out transform z-10 hover:scale-110"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="w-12 h-12" />
      </a>
    </div>
  );
};

export default Home;
