import React, { useState, useEffect, useRef } from "react";
import Comment from "./Comment";

const CommentsCarousel = ({ comments }) => {
    const [currentIndex, setCurrentIndex] = useState(2); // El centro
    const intervalRef = useRef(null);

    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide();
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

    return (
        <div
            className="relative flex justify-center items-center w-full max-w-6xl mx-auto mt-10 h-80 overflow-hidden min-h-[500px]"
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
        >
            {comments.map((comment, index) => {
                const position = index - currentIndex;
                let translateXValue = position * (window.innerWidth < 768 ? 100 : 120); // En móviles usa 100%
                let scaleValue = position === 0 ? 1.2 : 0.9;

                let styles = {
                    transform: `translateX(${translateXValue}%) scale(${scaleValue})`,
                    opacity: position === 0 ? 1 : 0.5,
                    transition: "transform 0.8s ease, opacity 0.8s ease",
                    zIndex: position === 0 ? 10 : 5,
                };


                return (
                    <div key={index} className="absolute w-64" style={styles}>
                        <Comment {...comment} />
                    </div>
                );
            })}
        </div>
    );
};

export default CommentsCarousel;
