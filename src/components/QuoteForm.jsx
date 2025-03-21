const QuoteForm = ({ setShowForm }) => {
  return (
    <div className="font-[Open_Sans] bg-[#0458AB]/90 p-3 text-white w-full max-w-xs md:w-70 md:h-70 border-2 border-[#1a237e] rounded-4xl translate-y-60 md:translate-x-20 md:translate-y-[-10px] mx-auto md:mx-0">
      <h3 className="font-[Libre_Baskerville] text-lg md:text-xl mb-2 text-center md:text-center">Moving quote</h3>
      <p className="text-sm mb-4 text-center md:text-left">We ship within 2 working days</p>

      <div className="mb-4">
        <label className="block mb-1 flex">From:</label>
        <input type="text" placeholder="Zip code" className="w-full p-1 rounded text-black bg-white" />
      </div>

      <div className="mb-6">
        <label className="block mb-1 flex">To:</label>
        <input type="text" placeholder="Zip code" className="w-full p-1 rounded text-black bg-white" />
      </div>

      <button
        className="w-50 bg-[#051537] hover:bg-[#003D7A] text-white py-2 rounded transition-colors md:-mt-20"
        onClick={() => setShowForm(true)}
      >
        Quote here
      </button>
    </div>
  );
};

export default QuoteForm;

