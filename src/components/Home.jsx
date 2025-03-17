import { useEffect, useRef, useState } from "react";
import whatsappIcon from "../assets/whatsapp.webp";
import backgroundImage from "../assets/Fondo_web.svg";
import QuoteForm from "./QuoteForm";
import MovingQuoteForm from "./MovingQuoteForm"; // Importamos el modal

const Home = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const logoRef = useRef(null);
  const formRef = useRef(null);
  const [showForm, setShowForm] = useState(false); // Estado para mostrar el modal

  useEffect(() => {
    let scrollAnimationFrame;

    const handleScroll = () => {
      if (showForm) return; 

      if (scrollAnimationFrame) return;
      scrollAnimationFrame = requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        if (textRef.current) {
          textRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
          textRef.current.style.opacity = Math.max(0, 1 - scrollY / 200);
        }

        if (logoRef.current) {
          logoRef.current.style.transform = `scale(${Math.max(0.8, 1 - scrollY / 800)})`;
          logoRef.current.style.opacity = Math.max(0, 1 - scrollY / 250);
        }

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
  }, [showForm]); 

  return (
    <div
      ref={containerRef}
      className="font-[Open_Sans] relative min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-4 md:px-10 overflow-hidden mb-20 transition-opacity duration-300 ease-out"
    >
      {/* Imagen de fondo */}
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Formulario de cotización */}
      <div ref={formRef} className="-mt-20 md:-mt-48 top-1/4 right-8 md:right-20 z-10">
        <QuoteForm setShowForm={setShowForm} />
      </div>

      {/* Contenido principal */}
      <div
  ref={textRef}
  className={`relative z-10 -mt-190 md:-mt-100 md:-ml-50  flex flex-col items-center md:items-start text-white text-center md:text-left w-full transition-all duration-300 ${
    showForm ? "opacity-0 pointer-events-none" : "opacity-100"
  }`}
>
  <h2 className="text-xl md:text-4xl">
    Welcome to <br />
    <span className="text-white font-[Libre_Baskerville]">GS-PRO MASTER MOVING LLC</span>
    <br />
    <span className="text-lg md:text-xl">
      We take care of your move, you enjoy the change.
    </span>
  </h2>
</div>





      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/123456789"
        className="fixed bottom-4 right-8 rounded-full shadow-lg transition-transform duration-300 ease-out transform z-10 hover:scale-110"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="w-12 h-12" />
      </a>

      {/* Modal fuera del flujo del contenido */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <MovingQuoteForm setShowForm={setShowForm} />
        </div>
      )}
    </div>
  );
};

export default Home;
  