import { useState } from "react";

const slides = [
    {
        title: "Mision",
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

const TailwindCarousel = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative w-80 max-w-md h-160 md:h-160 m-10 mt-10 md:m-0 md:w-100 md:m-25 md:ml-auto flex justify-center items-center md:p-5"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => setHovered((prev) => !prev)} 
        >{/* It changes to onClick for mobile */}
            {slides.map((slide, index) => {
                const isFront = hovered ? index === 1 : index === 0;

                return (
                    <div
                        key={index}
                        className={`absolute w-full md:w-5/6 md:w-full h-6/7 md:h-full rounded-lg shadow-lg 
                            flex flex-col justify-start items-center md:justify-center md:items-center text-white  
                            p-5 md:p-5 transition-all duration-500 right-0 transform
                        ${isFront ? "scale-100 z-10" : "scale-90 sm:scale-75 z-0 opacity-70 sm:opacity-50 translate-x-10 sm:translate-x-25"}
                        `}
                        style={{ backgroundColor: slide.bgColor }}
                    >
                        <h2 className="text-3xl md:text-3xl font-['Libre_Baskerville']">{slide.title}</h2>
                        <p className="text-base md:text-xl font-['Roboto'] mt-2 text-left justify-center p-2 md:p-0">{slide.description}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default TailwindCarousel;
