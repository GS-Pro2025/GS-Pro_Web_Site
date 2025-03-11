import { useState, useEffect } from "react";

const slides = [
    {
        title: "Mission",
        description: `At GS PRO-MASTER MOVING LLC, our mission is to provide a comprehensive moving service that stands out
            for its quality, efficiency, and customer care. We are committed to handling every move with the utmost care 
            and professionalism, supported by a highly trained team. We believe in the importance of a personalized approach, 
            adapting to the unique needs of each client, from packing and wrapping to protecting their belongings during transport.
            Our goal is to make every move a smooth and stress-free experience, becoming a reliable ally at every stage of the process.`,
        bgColor: "#0458AB",
    },
    {
        title: "Vision",
        description: `Our vision is to become the leading company in the moving industry, recognized for our innovation, 
            excellence in service, and commitment to customer satisfaction.  
            We aim to expand our operations nationally and internationally, continuously improving our 
            services to enhance the customer experience and build a reputation based on trust, safety, and quality.`,
        bgColor: "#505cb4",
    },
];

const VisionMisionCarousel = () => {
    const [hovered, setHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    {/** This code check if is mobile */}
    useEffect(() => {
        const checkIsMobile = () => {
            const mobileBreakpoint = 768; {/** Resolution 768 for mobile */}
            setIsMobile(window.innerWidth <= mobileBreakpoint);
        };

        // Verificar al cargar el componente
        checkIsMobile();

        // Escuchar cambios en el tamaño de la pantalla
        window.addEventListener("resize", checkIsMobile);

        // Limpiar el event listener al desmontar el componente
        return () => window.removeEventListener("resize", checkIsMobile);
    }, []);

    // Manejar el hover o clic dependiendo del dispositivo
    const handleInteraction = () => {
        if (isMobile) {
            setHovered((prev) => !prev); // Alternar entre Misión y Visión en móviles
        }
    };

    return (
        <div className="relative w-full h-screen flex justify-center items-center">
            {/* Texto que aparece en el lado izquierdo */}
            <div className="absolute hidden md:block left-5 md:left-20 top-1/2 transform -translate-y-1/2 text-4xl md:text-8xl font-bold text-gray-700 font-['Libre_Baskerville'] z-0">
                {hovered ? "VISION" : "MISSION"}
            </div>

            {/* Contenedor de las cartas */}
            <div
                className="relative w-4/5 md:w-2/5 h-3/5 flex justify-end items-center md:ml-auto md:mr-15 rounded-xl shadow-lg"
                onMouseEnter={!isMobile ? () => setHovered(true) : undefined}
                onMouseLeave={!isMobile ? () => setHovered(false) : undefined}
                onClick={isMobile ? handleInteraction : undefined}
            >
                {slides.map((slide, index) => {
                    const isFront = hovered ? index === 1 : index === 0;
                    return (
                        <div
                            key={index}
                            className={`absolute w-full h-full rounded-lg shadow-lg 
                                flex flex-col justify-center items-center text-white  
                                p-5 md:p-10 transition-all duration-500 transform
                            ${isFront ? "scale-100 z-10" : "scale-90 sm:scale-75 z-0 opacity-70 sm:opacity-50 translate-x-10 sm:translate-x-25"}
                            `}
                            style={{ backgroundColor: slide.bgColor }}
                        >
                            <h2 className="text-2xl md:text-3xl font-['Libre_Baskerville']">{slide.title}</h2>
                            <p className="text-xs md:text-base font-['Roboto'] mt-2 text-left justify-center p-2 md:p-0">
                                {slide.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default VisionMisionCarousel;