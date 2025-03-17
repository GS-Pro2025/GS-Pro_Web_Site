import React, { useState, useEffect } from "react";
import step1 from "../assets/HouseElement.svg";
import step2 from "../assets/Chest.svg";
import step3 from "../assets/Thinking.svg";
import step4 from "../assets/Quotize.svg";
import rightArrow from "../assets/right_arrows.svg";
import downArrow from "../assets/down_arrows.svg";

function QuoteFlow() {
    const [isMobile, setIsMobile] = useState(false);
    const [activeTooltip, setActiveTooltip] = useState(null);

    // Returns screensize config
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1025);
        handleResize(); // Ejecutar en el inicio
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const steps = [
        { id: 1, title: "REQUEST A QUOTE", text: "The first step is to contact us for a quote. You can do this through our website or by phone. We will only need basic information about the type of move you require.", img: step4 },
        { id: 2, title: "PROVIDE DETAILS", text: "Once you request a quote, we will ask you to provide additional details about your move. This includes the origin and destination addresses, the volume of your belongings, access to locations (elevators, stairs, etc.), and any other relevant information that may affect the time and complexity of the move.", img: step1 },
        { id: 3, title: "SPECIAL ITEMS", text: "If you have delicate or high-value items (such as antique furniture, musical instruments, or electronic equipment), it is important to mention them at this stage. This allows us to prepare the necessary materials and equipment to ensure their safety during transport.", img: step2 },
        { id: 4, title: "MOVING COST", text: "With all the provided information, we will send you a detailed quote including the cost of the move. The price is based on details such as distance, volume, and special care items.", img: step3 }
    ];

    // tooltip active or not
    const toggleTooltip = (id) => {
        setActiveTooltip(activeTooltip === id ? null : id);
    };

    return (
        <div className={`font-[Open_Sans] flex ${isMobile ? "flex-col items-center" : "flex-wrap justify-center items-center gap-6"}`}>
            {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                    <div className="relative flex flex-col items-center text-center">
                        <img src={step.img} alt={step.text} className="w-40 h-40 rounded-lg shadow-lg" />

                        {/*tooltip buttom */}
                        <button
                            className="font-[Libre_Baskerville] bg-[#0458AB] text-white text-lg py-2 px-6 mt-4 rounded-lg relative group"
                            onClick={isMobile ? () => toggleTooltip(step.id) : undefined}
                        >
                            {step.title}

                            {/* Tooltip: Hover on PC, Click on Mobile */}
                            {((isMobile && activeTooltip === step.id) || (!isMobile && (
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[300px] text-white text-sm bg-[#0458AB] rounded-md py-3 px-6 shadow-lg z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="h-0 w-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-[#0458AB] mx-auto"></div>
                                    <p className="whitespace-normal break-words">{step.text}</p>
                                </div>
                            )))}
                        </button>
                        {isMobile && activeTooltip === step.id && (
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[300px] text-white text-sm bg-[#0458AB] rounded-md py-3 px-6 shadow-lg z-50">
                                <div className="h-0 w-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-[#0458AB] mx-auto"></div>
                                <p className="whitespace-normal break-words">{step.text}</p>
                            </div>
                        )}
                    </div>
                    {index < steps.length - 1 && (
                        <img src={isMobile ? downArrow : rightArrow} alt="Next step" className="w-10 h-10 mt-4" />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}

export default QuoteFlow;
