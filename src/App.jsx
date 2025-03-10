import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Mision from './components/Mision';
import Vision from './components/Vision';
import Home from './components/Home';
import Servicios from './components/Servicios';
import VisionMisionCarousel from './components/VisionMisionCarousel';
import About_us from './components/About_us';


function App() {
  return (
    <>

    

      <Navbar/>
      <Home/>
    
      <Servicios/>
      <Team/>
    <About_us/>
      <VisionMisionCarousel/>
      <Footer/>

    </>
  );
} 
export default App;

