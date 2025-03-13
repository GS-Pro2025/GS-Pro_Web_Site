import React from "react";
import CirclesSVG from "/src/assets/blue_circles.webp"; 


const Vision = () => {
  return (
        <div className="font-[Open_Sans] relative flex flex-col md:flex-row items-center justify-center max-w-[90vw] md:h-190 mx-auto">
        {/* Decorative circles*/}
        <img
          src={CirclesSVG}
          alt="Círculos decorativos"
          className="z-[-1] max-w-60 max-h-60 md:max-w-100 md:max-h-100 -translate-x-25
            translate-y-70 md:translate-x-150 md:translate-y-20" 
        />
    
        {/* middle-round container */}
        <div className="overflow-hidden w-full flex justify-end h-80 md:h-150 pt-10 md:pt-30 md:pr-0">
          {/* Blue circle */}
          <div
            className="absolute rigth-0 flex flex-col items-center justify-center w-[100vw] sm:w-[60vw] max-w-[40rem] 
              h-[100vw] sm:h-[60vw] max-h-[40rem] aspect-square
              bg-gradient-to-r from-[#0458AB] to-[#60A3D9] rounded-full p-10 sm:p-6 text-white text-center
              translate-x-15 sm:translate-x-16 -translate-y-50"
          >
            <h2 className="text-5xl sm:text-5xl font-['Libre_Baskerville'] text-[#60A3D9] mb-4 mr-20 sm:mr-60">Mission</h2>
            <p className="text-xs sm:text-lg px-2 text-justify p-0 mr-8 ml-2 sm:mr-10 sm:ml-10">
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
