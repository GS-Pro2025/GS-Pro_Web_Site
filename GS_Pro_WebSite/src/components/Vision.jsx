import React from "react";
import CirclesSVG from "/src/assets/blue_circles.webp"; 

const Vision = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center max-w-[90vw] mx-auto">
      {/* blue_circles */}
      <img
        src={CirclesSVG}
        alt="Círculos decorativos"
        className="absolute w-[45vw] md:w-[35vw] max-w-[300px] h-auto
        top-[45%] md:top-[50%] left-[35%] md:left-[70%] lg:left-[55%] 
        transform -translate-x-1/8 -translate-y-1/4 z-[-1]"
      />

      {/* middle-round container */}
      <div className="overflow-hidden w-full flex justify-end pr-0 md:pr-0">
        {/* Blue circle */}
        <div
          className="flex flex-col items-center justify-center w-[70vw] sm:w-[60vw] max-w-[30rem] 
          h-[70vw] sm:h-[60vw] max-h-[30rem] aspect-square
          bg-gradient-to-r from-[#0458AB] to-[#60A3D9] rounded-full p-8 sm:p-6 text-white text-center"
        >
          <h2 className="text-5xl font-Roboto text-[#60A3D9] mb-4 mr-50">Visión</h2>
          <p className="text-sm px-6 text-justify">
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
