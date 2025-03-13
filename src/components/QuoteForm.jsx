import { useState } from "react";
import MovingQuoteForm from "./MovingQuoteForm";

const QuoteForm = ({ setShowForm }) => {
  return (
    <div className="bg-[#0458AB]/90 p-3 text-white w-full max-w-xs md:w-80 md:h-80 border-2 border-[#1a237e] rounded-4xl translate-y-60 md:translate-x-20 md:translate-y-[-10px] mx-auto md:mx-0">
      <h3 className="text-lg md:text-xl font-bold mb-2 text-center md:text-left">Cotización de mudanzas</h3>
      <p className="text-sm mb-4 text-center md:text-left">We ship within 2 working days</p>

      <div className="mb-4">
        <label className="block mb-1">From:</label>
        <input type="text" placeholder="Zip code" className="w-full p-2 rounded text-black bg-white" />
      </div>

      <div className="mb-6">
        <label className="block mb-1">To:</label>
        <input type="text" placeholder="Zip code" className="w-full p-2 rounded text-black bg-white" />
      </div>

      <button
        className="w-full bg-[#051537] hover:bg-[#003D7A] text-white py-3 rounded font-bold transition-colors"
        onClick={() => setShowForm(true)}
      >
        Quote here
      </button>
    </div>
  );
};

export default QuoteForm;

