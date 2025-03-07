
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Mision from './components/Mision';
import Vision from './components/Vision';
import VisionMisionCarousel from './components/VisionMisionCarousel';

function App() {
  return (
    <>
      <Navbar/>
      <VisionMisionCarousel/>
      <Footer/>
    </>
  );
} 
export default App;

