"use client";

import { useState, useEffect } from "react";

const servicesData = [
  { 
    id: 1, 
    title: "Home Moving.", 
    description: "We offer a service with high standards of quality in all areas of your home, carefully packing your belongings and managing the entire moving process, ensuring that everything arrives at its destination safely, on time, and without issues.", 
    image: new URL("../assets/s1.jpg", import.meta.url).href 
  },
  { id: 2, title: "Special Items Moving.", description: "We provide an exclusive service for your most precious belongings that require greater care and logistics.", image: new URL("../assets/s2.jpg", import.meta.url).href },
  { id: 3, title: "Commercial Moving.", description: "We offer an efficient and safe service protecting your company's assets by providing a complete and seamless specialized transfer.", image: new URL("../assets/s3.jpg", import.meta.url).href },
];

const Servicios = () => {
  const [services, setServices] = useState(servicesData);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setServices((prev) => {
          const newServices = [...prev];
          newServices.push(newServices.shift());
          return newServices;
        });
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-white relative overflow-hidden transition-all duration-700 px-4 md:px-0"
      style={{
        backgroundImage: `url(${services[0].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Título */}
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center relative z-10 md:translate-y-[-80px] md:translate-x-100 -translate-y-30 sm:translate-y-0">Services</h2>

      <div className="relative w-full max-w-6xl flex items-center justify-center overflow-visible z-10">
      {/* Descripción */}
<div className="absolute left-4 md:left-8 top-[90%] md:top-[50%] transform -translate-y-1/2 p-4 md:p-5 rounded-lg shadow-lg w-64 md:w-80">
  <h3 className="text-xl md:text-3xl font-bold">{services[0].title}</h3>
  <p className="text-sm md:text-lg">{services[0].description}</p>
</div>


        {/* Carrusel */}
        <div className="relative flex gap-3 md:gap-4 h-autoz min-h-48 md:h-60 items-center justify-center md:translate-x-90 -translate-y-30 sm:translate-y-0 ">
          {services.map((service, index) => {
            const isFirst = index === 0;

            return (
              <div
                key={service.id}
                className={`relative w-20 h-29 md:w-44 md:h-60 transition-transform duration-700 
                            rounded-3xl overflow-hidden shadow-lg cursor-pointer flex-shrink-0 
                            ${isFirst ? "scale-160 md:scale-175 opacity-100 z-10" : "scale-100 opacity-80"}`}
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover rounded-3xl " 
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Servicios;
