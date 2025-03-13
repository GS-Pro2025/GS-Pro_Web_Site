import React from 'react';

const Comment = ({ name, charge, comment, rating }) => {
    return (
        <div className="w-full h-auto p-6 bg-[#003B73] border border-gray-200 rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105 relative group flex flex-col justify-between min-h-[200px] md:min-h-[250px]">
            {/* Background Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white opacity-0 transition-opacity duration-500 group-hover:opacity-30 blur-md"></div>

            {/* Content */}
            <div className="relative z-10 flex-grow flex flex-col gap-4">
                {/* Rating */}
                <div className="flex justify-start">
                    {Array.from({ length: 5 }, (_, i) => (
                        <svg
                            key={i}
                            className={`w-6 h-6 ${i < rating ? "text-yellow-500" : "text-gray-300"}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                    ))}
                </div>

                {/* Comment */}
                <p className="font-open-sans text-white text-base md:text-lg">{comment}</p>
            </div>

            {/* Name and Charge */}
            <div className="relative z-10 pt-4 border-t border-gray-300 text-white">
                <p className="font-open-sans text-sm md:text-lg font-semibold">{name}</p>
                <p className="font-open-sans text-base md:text-2xl font-bold">{charge}</p>
            </div>
        </div>
    );
};

export default Comment;
