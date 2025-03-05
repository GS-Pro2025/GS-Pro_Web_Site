import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react'
import Footer from './components/Footer'
import Vision from './components/Vision'

function App() {
  return (
    <>
      <Navbar/>
      <Vision/>
      <Footer/>
    </>
  );
} 
export default App;
