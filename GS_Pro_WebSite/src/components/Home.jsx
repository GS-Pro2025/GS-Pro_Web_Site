const Home = () => {
    return (
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/camion-fondo.jpg')" }}
      >
        <div className="absolute inset-0 flex">
          {/* Div Izquierdo - Mensaje de Bienvenida y Cuadro de Texto */}
          <div className="w-1/2 p-10 flex flex-col justify-center">
            <div className="text-white mb-6">
              <h1 className="text-4xl font-bold">¡Bienvenido a GS Pro Moving!</h1>
              <p className="text-lg mt-2">
                Tu mejor opción para mudanzas seguras y rápidas.
              </p>
            </div>
          </div>
  
          {/* Div Derecho - Formulario de Cotización */}
          <div className="w-1/2 p-10 flex items-center justify-center  ">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full border-2 border-red-500">
              <h2 className="text-xl font-bold">Cotización de mudanzas</h2>
              <p className="text-gray-600">We ship within 2 working days</p>
              <input
                type="text"
                placeholder="Desde: Código postal"
                className="w-full border p-2 mt-2 rounded-md"
              />
              <input
                type="text"
                placeholder="Hasta: Código postal"
                className="w-full border p-2 mt-2 rounded-md"
              />
              <button className="bg-blue-600 text-white w-full mt-4 py-2 rounded-lg hover:bg-blue-800">
                Cotiza aquí
              </button>
            </div>
          </div>
        </div>
  
        {/* Botón flotante de WhatsApp */}
        <a
          href="https://wa.me/123456789"
          className="fixed bottom-5 right-5 bg-green-500 p-3 rounded-full shadow-lg"
        >
          <img src="/assets/whatsapp.png" alt="WhatsApp" className="w-10" />
        </a>
      </div>
    );
  };
  
  export default Home;