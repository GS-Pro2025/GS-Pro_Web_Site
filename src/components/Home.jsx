import { motion, useScroll, useTransform } from "framer-motion";
import logo from "../assets/GS-PRO-Blanco.webp";
import whatsappIcon from "../assets/whatsapp.webp";
import backgroundImage from "../assets/azul-537.webp";

const Home = () => {
  const { scrollY } = useScroll();

  // Background animation based on scroll position
  const backgroundScale = useTransform(scrollY, [0, 500], [1, 0.8]);
  const backgroundOpacity = useTransform(scrollY, [0, 500], [1, 0.8]);

  // Text animation based on scroll position
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0.8]);
  const textTranslate = useTransform(scrollY, [0, 400], [0, -10]);

  return (
    <motion.div className="relative min-h-screen font-[Libre_Baskerville] grid grid-cols-1 md:grid-cols-2 items-center px-4 md:px-10">
      
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 w-full h-full -z-10"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          scale: backgroundScale,
          opacity: backgroundOpacity,
        }}
      />

      {/* Quote Form */}
      <motion.div
        className="relative flex items-center justify-center md:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="bg-white p-6 m-20 rounded-lg shadow-xl w-[90%] max-w-[350px] min-h-[350px] border-2 border-[#2E1EA5] mx-auto md:fixed md:top-1/10 md:left-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-xl md:text-2xl font-bold">Moving Quote</h2>
          <p className="text-gray-600">We ship within 2 working days</p>
          <label className="block text-sm font-semibold mt-3 flex">From:</label>
          <input type="text" placeholder="Zip code" className="w-full border p-2 mt-2 rounded-md" />
          <label className="block text-sm font-semibold mt-3 flex">To:</label>
          <input type="text" placeholder="Zip code" className="w-full border p-2 mt-2 rounded-md" />
          <button className="bg-[#2E1EA5] text-white w-full mt-4 py-2 rounded-lg hover:bg-blue-800">
            Get a quote here
          </button>
        </motion.div>
      </motion.div>

      {/* Welcome message and centered logo */}
      <motion.div
        className="mt-6 flex flex-col items-center md:items-start text-white text-center md:text-left w-full"
        style={{ opacity: textOpacity, transform: `translateY(${textTranslate}px)` }}
      >
        {/* Welcome message */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center"
        >
          Welcome to <span className="text-[#0458AB]">GS-PRO MASTER</span> <br />
          <span className="text-lg md:text-2xl font-light">
            We take care of your move, you enjoy the change.
          </span>
        </motion.h2>

        {/* Centered logo below the message */}
        <motion.div className="mt-6 flex justify-center w-full">
          <motion.img
            src={logo}
            alt="GS PRO Logo"
            className="w-48 md:w-72" // Increased logo size
          />
        </motion.div>
      </motion.div>

      {/* Floating WhatsApp button */}
      <motion.a
        href="https://wa.me/123456789"
        className="fixed bottom-4 right-8 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src={whatsappIcon}
          alt="WhatsApp"
          className="w-12 h-12"
        />
      </motion.a>
    </motion.div>
  );
};

export default Home;
