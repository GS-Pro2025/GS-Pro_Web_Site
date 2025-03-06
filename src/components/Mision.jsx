import React from "react";
import CirclesSVG from "/src/assets/blue_circles.webp"; 

const Vision = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center max-w-[90vw] mx-auto">
      {/* Decorative circles*/}
      <img
        src={CirclesSVG}
        alt="Círculos decorativos"
        className="z-[-1] max-w-60 max-h-40 md:max-w-70 md:max-h-70 -translate-x-30 
          translate-y-70 md:translate-x-210 md:translate-y-10" 
      />
  
      {/* middle-round container */}
      <div className="overflow-hidden w-full flex justify-end h-80 md:h-150 pt-10 md:pt-30 md:pr-0">
        {/* Blue circle */}
        <div
          className="absolute rigth-0 flex flex-col items-center justify-center w-[100vw] sm:w-[60vw] max-w-[30rem] 
            h-[100vw] sm:h-[60vw] max-h-[30rem] aspect-square
            bg-gradient-to-r from-[#0458AB] to-[#60A3D9] rounded-full p-10 sm:p-6 text-white text-center
            translate-x-15 sm:translate-x-17.2 -translate-y-40"
        >
          <h2 className="text-5xl font-['Libre_Baskerville'] text-[#60A3D9] mb-4 mr-20">Misión</h2>
          <p className="text-xs px-2 text-justify p-0 mr-10">
            At GS PRO-MASTER MOVING LLC, our mission is to provide a comprehensive moving service that stands out
            for its quality, efficiency, and customer care. We are committed to handling every move with the utmost care 
            and professionalism, supported by a highly trained team. We believe in the importance of a personalized approach, 
            adapting to the unique needs of each client, from packing and wrapping to protecting their belongings during transport.
            Our goal is to make every move a smooth and stress-free experience, becoming a reliable ally at every stage of the process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
