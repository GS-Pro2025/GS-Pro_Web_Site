
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Mision from './components/Mision';
import Vision from './components/Vision';
import VisionMisionCarousel from './components/VisionMisionCarousel';
import Values from './components/Values';

function App() {
  return (
    <>
      <Navbar/>
      <VisionMisionCarousel/>
      <Values/>
      <Footer/>
    </>
  );
} 
export default App;

