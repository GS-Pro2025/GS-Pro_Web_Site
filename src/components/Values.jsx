import React, { useState } from "react";
import securityGear from "../assets/securityGear.svg"; 
import securityGearText from "../assets/securityGearText.svg"; 
import punctualityGear from "../assets/punctualityGear.svg"; 
import punctualityGearText from "../assets/punctualityGearText.svg"; 
import compromiseGear from "../assets/compromiseGear.svg"; 
import compromiseGearText from "../assets/compromiseGearText.svg"; 
import responsabilityGear from "../assets/responsabilityGear.svg"; 
import responsabilityGearText from "../assets/responsabilityGearText.svg"; 

const Values = () => {
    // Estados para cada engranaje
    const [showCompromise, setShowCompromise] = useState(false);
    const [showPunctuality, setShowPunctuality] = useState(false);
    const [showResponsibility, setShowResponsibility] = useState(false);
    const [showSecurity, setShowSecurity] = useState(false);

    return (
        <>
            <h2 className="md:ml-10 md:text-5xl font-['Libre_Baskerville'] text-start text-[#60A3D9]">
                Corporate values
            </h2>
            <div className="flex gap-x-4 md:gap-x-0 items-center justify-start md:ml-10">
                {/** Compromise gears group */}
                <div 
                    className="relative group w-32 h-32 md:w-80 md:h-80 -mt-40 md:-mr-50"
                    onClick={() => setShowCompromise(!showCompromise)}
                >
                    <img 
                        src={showCompromise ? compromiseGearText : compromiseGear} 
                        alt="Compromise Gear" 
                        className="absolute inset-0 w-full h-full transition-opacity duration-500 md:group-hover:opacity-0 max-md:block" 
                    />
                    <img 
                        src={compromiseGearText} 
                        alt="Compromise Gear Text" 
                        className={`absolute inset-0 w-full h-full transition-opacity duration-500 md:group-hover:opacity-100 ${
                            showCompromise ? "opacity-100" : "opacity-0"
                        }`} 
                    />
                </div>

                {/** Punctuality gears group */}
                <div 
                    className="relative group w-32 h-32 md:w-90 md:h-90 mt-40 md:-mr-50"
                    onClick={() => setShowPunctuality(!showPunctuality)}
                >
                    <img 
                        src={showPunctuality ? punctualityGearText : punctualityGear} 
                        alt="Punctuality Gear" 
                        className="absolute inset-0 w-full h-full transition-opacity duration-500 md:group-hover:opacity-0 max-md:block" 
                    />
                    <img 
                        src={punctualityGearText} 
                        alt="Punctuality Gear Text" 
                        className={`absolute inset-0 w-full h-full transition-opacity duration-500 md:group-hover:opacity-100 ${
                            showPunctuality ? "opacity-100" : "opacity-0"
                        }`} 
                    />
                </div>

                {/** Responsibility gears group */}
                <div 
                    className="relative group w-32 h-32 md:w-100 md:h-100 -mt-50 md:-mr-60"
                    onClick={() => setShowResponsibility(!showResponsibility)}
                >
                    <img 
                        src={showResponsibility ? responsabilityGearText : responsabilityGear} 
                        alt="Responsibility Gear" 
                        className="absolute inset-0 w-full h-full transition-opacity duration-500 md:group-hover:opacity-0 max-md:block" 
                    />
                    <img 
                        src={responsabilityGearText} 
                        alt="Responsibility Gear Text" 
                        className={`absolute inset-0 w-full h-full transition-opacity duration-500 md:group-hover:opacity-100 ${
                            showResponsibility ? "opacity-100" : "opacity-0"
                        }`} 
                    />
                </div>

                {/** Security gears group */}
                <div 
                    className="relative group w-32 h-32 md:w-120 md:h-120 mt-50"
                    onClick={() => setShowSecurity(!showSecurity)}
                >
                    <img 
                        src={showSecurity ? securityGearText : securityGear} 
                        alt="Security Gear" 
                        className="absolute inset-0 w-full h-full transition-opacity duration-500 md:group-hover:opacity-0 max-md:block" 
                    />
                    <img 
                        src={securityGearText} 
                        alt="Security Gear Text" 
                        className={`absolute inset-0 w-full h-full transition-opacity duration-500 md:group-hover:opacity-100 ${
                            showSecurity ? "opacity-100" : "opacity-0"
                        }`} 
                    />
                </div>
            </div>
        </>
    );
};

export default Values;
