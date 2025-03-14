import React from "react";
import CommentsCarousel from "./CommentsCarousel";

const comments = [
    { 
        name: "Juan Pérez", 
        charge: "Excelente servicio", 
        comment: "Me encantó la rapidez y la atención. Desde el primer momento en que realicé mi pedido, el proceso fue fluido y sin complicaciones. Sin duda, repetiré mi compra.", 
        rating: 5 
    },
    { 
        name: "Ana Gómez", 
        charge: "Muy recomendable", 
        comment: "Todo llegó en perfecto estado. Me preocupaba que pudiera haber algún inconveniente con la entrega, pero el embalaje fue seguro y el producto impecable.", 
        rating: 4 
    },
    { 
        name: "Carlos Ramírez", 
        charge: "Buen precio", 
        comment: "El costo fue justo y el servicio eficiente. Comparado con otras opciones del mercado, encontré aquí una relación calidad-precio difícil de superar.", 
        rating: 5 
    },
    { 
        name: "María Fernández", 
        charge: "Satisfactorio", 
        comment: "Cumplió con mis expectativas, pero podría mejorar. Aunque el producto llegó a tiempo, me gustaría que tuvieran más opciones de personalización.", 
        rating: 3 
    },
    { 
        name: "Luis Torres", 
        charge: "Increíble atención", 
        comment: "El personal fue muy amable y atento. Se tomaron el tiempo de explicarme cada detalle del producto y resolvieron todas mis dudas sin apuro.", 
        rating: 5 
    },
    { 
        name: "Luis Messi", 
        charge: "Recomendado", 
        comment: "Excelente servicio. He probado muchas empresas similares, pero esta destaca por su rapidez y profesionalismo en la entrega.", 
        rating: 5 
    },
    { 
        name: "Sofía López", 
        charge: "Muy satisfecha", 
        comment: "El producto superó mis expectativas. La calidad de los materiales y la atención al detalle hicieron que mi compra valiera totalmente la pena.", 
        rating: 5 
    },
    { 
        name: "Ricardo Gómez", 
        charge: "Entrega rápida", 
        comment: "No esperaba que el envío fuera tan veloz. Recibí mi pedido incluso antes del tiempo estimado, y eso me dejó muy sorprendido y feliz.", 
        rating: 4 
    },
    { 
        name: "Valentina Ríos", 
        charge: "Calidad garantizada", 
        comment: "Desde el primer momento se nota que los productos son de calidad. Se siente la diferencia en los materiales y en la durabilidad del artículo.", 
        rating: 5 
    },
    { 
        name: "Fernando Castillo", 
        charge: "Atención al cliente excepcional", 
        comment: "Tuve un pequeño problema con mi orden y el equipo de soporte lo solucionó en minutos. Fue una experiencia muy positiva que me hizo confiar más en la empresa.", 
        rating: 5 
    }
];


const CommentsSection = () => {
    return(
    <>
        <h3 className="font-open-sans text-2xl text-[#0458AB]">People say about us</h3>
        <h2 className="font-open-sans text-5xl text-[#0458AB]">Feedback from you</h2>
        <CommentsCarousel comments={comments} />
    </> 
    );
};

export default CommentsSection;
