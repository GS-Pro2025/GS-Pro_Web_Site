const Home = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center bg-[url('./assets/azul-537.webp')] grid grid-cols-1 md:grid-cols-2 font-roboto">

      {/* Mensaje de Bienvenida - Aparece primero en móviles */}
      <div className="p-6 md:p-10 flex flex-col justify-center text-white text-center md:text-left md:order-last translate-y-10 md:translate-y-[-90px]">

        <div className="flex justify-center md:justify-start">
          <img 
            src="src/assets/GS-PRO-Blanco.webp" 
            alt="GS PRO Logo" 
            className="w-45 sm:w-50 md:w-65 translate-y-10 md:translate-x-50"

          />
        </div>
        <h2 className="text-lg md:text-xl mt-6 md:mt-2 text-center">
          Welcome to GS-PRO MASTER <br />
          We take care of your move, you enjoy the change.
        </h2>
      </div>

      {/* Formulario de Cotización */}
      <div className="relative flex items-center justify-center md:block">
  <div className="bg-white p-6 m-10 rounded-lg shadow-xl w-[90%] max-w-[350px] min-h-[350px] border-2 border-[#2E1EA5] 
    mx-auto md:fixed md:top-1/10 md:left-9">
    <h2 className="text-xl md:text-2xl font-bold">Moving Quote</h2>
    <p className="text-gray-600">We ship within 2 working days</p>

    <label className="block text-sm font-semibold mt-3 flex">From:</label>
    <input type="text" placeholder="Zip code" className="w-full border p-2 mt-2 rounded-md" />

    <label className="block text-sm font-semibold mt-3 flex">To:</label>
    <input type="text" placeholder="Zip code" className="w-full border p-2 mt-2 rounded-md" />
    
    <button className="bg-[#2E1EA5] text-white w-full mt-4 py-2 rounded-lg hover:bg-blue-800">
      Get a quote here 
    </button>
  </div>
</div>


      {/* Botón flotante de WhatsApp */}
      <a href="https://wa.me/123456789" className="fixed bottom-4 right-12 rounded-full shadow-lg">
        <img src="src/assets/whatsapp.webp" alt="WhatsApp" className="w-12 h-12" />
      </a>

    </div>
  );
};

export default Home;
