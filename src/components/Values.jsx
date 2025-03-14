import React, { useState } from "react";
import compromise from "../assets/compromise.svg";
import compromiseText from "../assets/compromiseText.svg";
import punctuality from "../assets/punctuality.svg";
import punctualityText from "../assets/punctualityText.svg";
import responsability from "../assets/responsability.svg";
import responsabilityText from "../assets/responsabilityText.svg";
import security from "../assets/security.svg";
import securityText from "../assets/securityText.svg";
import bg from "../assets/bg-values.webp";

const Values = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div 
            className="h-150 md:h-180 lg:h-190 xl:h-200 bg-cover bg-center"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <h2 className="mt-0 sm:mt-5 md:mt-10 lg:mt-12 xl:mt-14 text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-open-sans text-start text-[#60A3D9] mb-30">
                Corporate values
            </h2>
            
            <div className="grid grid-cols-4 gap-x-4 gap-y-4 place-items-center mt-10 md:mt-20 lg:mt-25 xl:mt-30 ml-0 md:ml-5 lg:ml-7 xl:ml-10 mr-0 md:mr-5 lg:mr-7 xl:mr-10">
                
                {/* Compromise */}
                <div 
                    className="relative group w-30 h-30 sm:w-33 sm:h-33 md:w-50 md:h-50 lg:w-55 lg:h-55 xl:w-65 xl:h-65 
                    -translate-y-23 sm:-translate-y-22 md:-translate-y-28 lg:-translate-y-30 xl:-translate-y-34 
                    translate-x-0 sm:-translate-x-2 md:-translate-x-4 lg:translate-x-10 xl:translate-x-20"
                    onClick={() => handleClick(0)}
                >
                    <img 
                        src={activeIndex === 0 ? compromiseText : compromise} 
                        alt="Compromise" 
                        className="absolute inset-0 w-full h-full transition-opacity duration-500 
                        group-hover:opacity-0 sm:opacity-100 sm:group-hover:opacity-0"
                    />
                    <img 
                        src={compromiseText} 
                        alt="Compromise Text" 
                        className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-500 
                        group-hover:opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                    />
                </div>

                {/* Punctuality */}
                <div 
                    className="relative group w-35 h-35 sm:w-40 sm:h-40 md:w-55 md:h-55 lg:w-60 lg:h-60 xl:w-75 xl:h-75 
                    translate-y-5 sm:translate-y-6 md:translate-y-10 lg:translate-y-15 xl:translate-y-20 
                    -translate-x-8 sm:-translate-x-17 md:-translate-x-20 lg:-translate-x-25 xl:-translate-x-30"
                    onClick={() => handleClick(1)}
                >
                    <img 
                        src={activeIndex === 1 ? punctualityText : punctuality} 
                        alt="Punctuality" 
                        className="absolute inset-0 w-full h-full transition-opacity duration-500 
                        group-hover:opacity-0 sm:opacity-100 sm:group-hover:opacity-0"
                    />
                    <img 
                        src={punctualityText} 
                        alt="Punctuality Text" 
                        className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-500 
                        group-hover:opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                    />
                </div>

                {/* Responsability */}
                <div 
                    className="relative group w-40 h-40 sm:w-46 sm:h-46 md:w-60 md:h-60 lg:w-70 lg:h-70 xl:w-85 xl:h-85 
                    -translate-y-23 sm:-translate-y-26 md:-translate-y-28 lg:-translate-y-34 xl:-translate-y-40 
                    -translate-x-10 sm:-translate-x-28 md:-translate-x-30 lg:-translate-x-50 xl:-translate-x-70"
                    onClick={() => handleClick(2)}
                >
                    <img 
                        src={activeIndex === 2 ? responsabilityText : responsability} 
                        alt="Responsability" 
                        className="absolute inset-0 w-full h-full transition-opacity duration-500 
                        group-hover:opacity-0 sm:opacity-100 sm:group-hover:opacity-0"
                    />
                    <img 
                        src={responsabilityText} 
                        alt="Responsability Text" 
                        className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-500 
                        group-hover:opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                    />
                </div>

                {/* Security */}
                <div 
                    className="relative group w-50 h-50 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-90 lg:h-90 xl:w-105 xl:h-105
                    translate-y-15 sm:translate-y-17 md:translate-y-25 lg:translate-y-27 xl:translate-y-30 
                    -translate-x-10 sm:-translate-x-35 md:-translate-x-33 lg:-translate-x-60 xl:-translate-x-100"
                    onClick={() => handleClick(3)}
                >
                    <img 
                        src={activeIndex === 3 ? securityText : security} 
                        alt="Security" 
                        className="absolute inset-0 w-full h-full transition-opacity duration-500 
                        group-hover:opacity-0 sm:opacity-100 sm:group-hover:opacity-0"
                    />
                    <img 
                        src={securityText} 
                        alt="Security Text" 
                        className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-500 
                        group-hover:opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                    />
                </div>

            </div>
        </div>
    );
};

export default Values;
