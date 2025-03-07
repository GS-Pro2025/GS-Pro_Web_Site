"use client";

import { useState, useEffect } from "react";

const services = [
  { id: 1, title: "Servicio 1a", image: new URL("../assets/s1.jpg", import.meta.url).href },
  { id: 2, title: "Servicio 2", image: new URL("../assets/s2.jpg", import.meta.url).href },
  { id: 3, title: "Servicio 3", image: new URL("../assets/s3.jpg", import.meta.url).href },
];

const Servicios = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const nextSlide = () => setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(nextSlide, 2000);
      return () => clearInterval(interval);
    }
  }, [isHovering]);

  return (
    <div className="bg-blue-100 py-12 px-4 md:px-100 lg:px-110">
      <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">Servicios</h2>

      <div
        className="max-w-4xl mx-auto relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="overflow-hidden rounded-lg shadow-lg relative">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {services.map((service) => (
              <div key={service.id} className="w-full flex-shrink-0 relative">
                <div className="relative group">
                  <img src={service.image} alt={service.title} className="w-full h-64 object-cover" />
                  
                  {/* Tarjeta deslizante */}
                  <div className="absolute bottom-0 left-0 right-0 bg-blue-900 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-sm mt-1">Información  del {service.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botones de navegación */}
        <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-90 rounded-full p-2 transition-all duration-300">
          ◀
        </button>
        <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-90 rounded-full p-2 transition-all duration-300">
          ▶
        </button>

        {/* Indicadores */}
        <div className="flex justify-center mt-4">
          {services.map((_, index) => (
            <div
              key={index}
              onMouseEnter={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 cursor-pointer transition-all duration-300 ${index === currentIndex ? "bg-blue-600" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicios;
