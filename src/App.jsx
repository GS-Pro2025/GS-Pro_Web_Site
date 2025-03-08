import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Mision from './components/Mision';
import Vision from './components/Vision';
import Servicios from './components/Servicios';
import VisionMisionCarousel from './components/VisionMisionCarousel';
import Team from './components/Team'

function App() {
  return (
    <>
      <Navbar/>
      <Servicios/>
      <Team/>
      <VisionMisionCarousel/>
      <Footer/>
    </>
  );
} 
export default App;

