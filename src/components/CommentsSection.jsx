import React from "react";
import CommentsCarousel from "./CommentsCarousel";

const comments = [
    { 
        name: "Juan Pérez", 
        charge: "Excellent service", 
        comment: "I loved the speed and the attention. From the very moment I placed my order, the process was smooth and hassle-free. I will definitely order again.", 
        rating: 5 
    },
    { 
        name: "Ana Gómez", 
        charge: "Highly recommended", 
        comment: "Everything arrived in perfect condition. I was worried there might be some issues with the delivery, but the packaging was secure and the product impeccable.", 
        rating: 4 
    },
    { 
        name: "Carlos Ramírez", 
        charge: "Good price", 
        comment: "The cost was fair and the service efficient. Compared to other market options, I found a value-for-money ratio that's hard to beat.", 
        rating: 5 
    },
    { 
        name: "María Fernández", 
        charge: "Satisfactory", 
        comment: "It met my expectations, but could be improved. Although the product arrived on time, I wish there were more customization options.", 
        rating: 3 
    },
    { 
        name: "Luis Torres", 
        charge: "Incredible service", 
        comment: "The staff was very friendly and attentive. They took the time to explain every detail of the product and answered all my questions without rush.", 
        rating: 5 
    },
    { 
        name: "Luis Messi", 
        charge: "Recommended", 
        comment: "Excellent service. I have tried many similar companies, but this one stands out for its speed and professionalism in delivery.", 
        rating: 5 
    },
    { 
        name: "Sofía López", 
        charge: "Very satisfied", 
        comment: "The product exceeded my expectations. The quality of the materials and the attention to detail made my purchase completely worthwhile.", 
        rating: 5 
    },
    { 
        name: "Ricardo Gómez", 
        charge: "Fast delivery", 
        comment: "I didn't expect the shipping to be so fast. I received my order even before the estimated time, and that left me very surprised and happy.", 
        rating: 4 
    },
    { 
        name: "Valentina Ríos", 
        charge: "Quality guaranteed", 
        comment: "From the very first moment, it is evident that the products are of high quality. You can feel the difference in the materials and in the durability of the item.", 
        rating: 5 
    },
    { 
        name: "Fernando Castillo", 
        charge: "Exceptional customer service", 
        comment: "I had a small issue with my order and the support team solved it within minutes. It was a very positive experience that made me trust the company even more.", 
        rating: 5 
    }
];

const CommentsSection = () => {
    return (
        <>
            <h3 className="font-open-sans text-2xl text-[#0458AB]">People say about us</h3>
            <h2 className="font-open-sans text-5xl text-[#0458AB]">Feedback from you</h2>
            <CommentsCarousel comments={comments} />
        </>
    );
};

export default CommentsSection;
