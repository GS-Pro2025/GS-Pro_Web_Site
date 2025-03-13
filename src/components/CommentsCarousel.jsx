import React, { useState, useEffect, useRef } from "react";
import Comment from "./Comment";

const CommentsCarousel = ({ comments }) => {
    const [currentIndex, setCurrentIndex] = useState(2); // El centro
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const intervalRef = useRef(null);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);

        startAutoSlide();
        return () => {
            stopAutoSlide();
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const startAutoSlide = () => {
        stopAutoSlide();
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % comments.length);
        }, 3000);
    };

    const stopAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const handleCardClick = (index) => {
        stopAutoSlide();
        setCurrentIndex(index); 
        startAutoSlide(); 
    };

    return (
        <div
            className="relative flex justify-center items-center w-full max-w-6xl mx-auto mt-10 h-80 overflow-hidden min-h-[500px]"
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
        >
            {comments.map((comment, index) => {
                const position = index - currentIndex;
                let translateXValue = position * (isMobile ? 100 : 120);
                let scaleValue = position === 0 ? 1.2 : 0.9;

                let styles = {
                    transform: `translateX(${translateXValue}%) scale(${scaleValue})`,
                    opacity: position === 0 ? 1 : 0.5,
                    transition: "transform 0.8s ease, opacity 0.8s ease",
                    zIndex: position === 0 ? 10 : 5,
                    cursor: "pointer",
                };

                return (
                    <div 
                        key={index} 
                        className="absolute w-64" 
                        style={styles}
                        onClick={() => handleCardClick(index)}
                    >
                        <Comment {...comment} />
                    </div>
                );
            })}
        </div>
    );
};

export default CommentsCarousel;
