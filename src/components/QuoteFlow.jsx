import React from "react";
import step1 from "../assets/houseElement.svg";
import step2 from "../assets/Chest.svg";
import step3 from "../assets/Thinking.svg";
import step4 from "../assets/Quotize.svg";
import arrows from "../assets/right_arrows.svg";

function QuoteFlow() {
    const steps = [
        { id: 1, title: "SOLICITAR COTIZACIÓN", text: "El primer paso es contactarnos para solicitar cotización. Puedes hacerlo a través de nuestro página web o por teléfono. Solo necesitaremos darnos información básica sobre el tipo de mudanza que necesitas.", img: step1 },
        { id: 2, title: "PROPORCIONAR DETALLES", text: "Una vez solicitada la cotización, te pediremos que nos brindes detalles adicionales sobre tu mudanza. Esto incluye la dirección de origen y destino, el volumen de tus pertenencias, el acceso a los lugares (elevadores, escaleras, etc.) y cualquier otra información relevante que pueda afectar el tiempo y la complejidad de la mudanza.", img: step2 },
        { id: 3, title: "ARTÍCULOS ESPECIALES", text: "Si tienes objetos delicados o de gran valor (como muebles antiguos, instrumentos musicales, equipos electrónicos, etc.), es importante mencionarlo en esta etapa. Esto nos permitirá preparar los materiales y el equipo adecuados para garantizar su seguridad durante el traslado.", img: step3 },
        { id: 4, title: "COSTO DE MUDANZA", text: "Con toda la información proporcionada, te enviaremos una cotización detallada que incluirá el costo de la mudanza. Este precio estará basado en los detalles que nos diste, como la distancia, el volumen de la mudanza y si hay artículos especiales que necesiten un cuidado adicional.", img: step4 }
    ];

    return (
        <div className="flex flex-wrap justify-center items-center gap-6">
            {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                    <div className="relative group flex flex-col items-center">
                        <img src={step.img} alt={step.text} className="w-40 h-40 rounded-lg shadow-lg" />
                        <button className="group relative inline-flex items-center 
                        justify-center p-0.5 mt-2 text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br 
                        from-[#051537] to-[#60A3D9] group-hover:from-[#04247C] group-hover:to-[#000000] hover:text-white 
                        dark:text-white focus:ring-4 focus:outline-none focus:ring-black-200 dark:focus:ring-black-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#0458AB] 
                            dark:bg-[#0458AB] rounded-md group-hover:bg-opacity-0">
                                {step.title}
                            </span>
                            <div className="z-50 hidden group-hover:block absolute top-full left-1/2 transform -translate-x-1/2 mt-2">
                            <div className="h-0 w-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-[#0458AB] mx-auto"></div>
                                <div className="bg-[#0458AB] text-white text-sm text-center rounded-md py-3 px-6 max-w-lg w-[300px] shadow-lg">
                                    <p className="whitespace-normal break-words">{step.text}</p>
                                </div>
                            </div>
                        </button>
                    </div>
                    {index < steps.length - 1 && (
                        <img src={arrows} alt="Next step" className="w-30 h-30" />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}

export default QuoteFlow;
