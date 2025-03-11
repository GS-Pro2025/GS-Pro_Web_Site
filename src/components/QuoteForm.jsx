const QuoteForm = () => {
    return (
      <div className="opacity-80 bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-[350px] min-h-[350px] border-2 border-[#2E1EA5] mx-auto transition-opacity duration-[1500ms] ease-out hover:opacity-90">
        <h2 className="text-xl md:text-2xl font-bold">Moving Quote</h2>
        <p className="text-gray-600">We ship within 2 working days</p>
        <label className=" text-sm font-semibold mt-3 flex">From:</label>
        <input type="text" placeholder="Zip code" className="w-full border p-2 mt-2 rounded-md" />
        <label className=" text-sm font-semibold mt-3 flex">To:</label>
        <input type="text" placeholder="Zip code" className="w-full border p-2 mt-2 rounded-md" />
        <button className="bg-[#2E1EA5] text-white w-full mt-4 py-2 rounded-lg hover:bg-blue-800">
          Get a quote here
        </button>
      </div>
    );
  };
  
  export default QuoteForm;
  