import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Mision from './components/Mision';
import Vision from './components/Vision';
import Servicios from './components/Servicios';
import VisionMisionCarousel from './components/VisionMisionCarousel';


function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Servicios/>
      <VisionMisionCarousel/>
      <Footer/>
    </>
  );
} 
export default App;

