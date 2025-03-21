"use client";

import React, { useState } from "react";
import { Mail, MapPin, Phone, Instagram, Facebook } from "lucide-react";
import ContactImage from "../assets/Contact_us.webp";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", content: "", newsletter: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({ ...prev, newsletter: e.target.checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="font-[Open_Sans] flex justify-center items-center min-h-screen p-4 pt-18 md:pt-0">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-lg border border-gray-300 overflow-hidden">
        
        {/* Sección izquierda (formulario) */}
        <div className="bg-blue-600 p-8 text-white flex flex-col justify-between rounded-l-2xl">
          <div>
            <h2 className="text-3xl mb-6">Get in touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full p-3 rounded bg-white border border-blue-400 text-gray-800" required />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-3 rounded bg-white border border-blue-400 text-gray-800" required />
              <textarea name="content" placeholder="Content" value={formData.content} onChange={handleChange} rows={3} className="w-full p-3 rounded bg-white border border-blue-400 text-gray-800" required />
              
              <div className="flex items-center">
                <input type="checkbox" id="newsletter" name="newsletter" checked={formData.newsletter} onChange={handleCheckboxChange} className="h-4 w-4" />
                <label htmlFor="newsletter" className="ml-2 text-sm">I would like to receive the newsletter.</label>
              </div>
              {/* Botón alineado a la izquierda en escritorio y centrado en móvil */}
              <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-full mx-auto md:mx-0 flex">Submit</button>
            </form>
          </div>
        </div>
{/* Sección derecha (texto e imagen) */}
<div className="bg-white p-8 flex flex-col justify-between rounded-r-2xl">
  {/* Contenedor principal */}
  <div className="flex flex-col md:flex-row items-start">
    <div className="w-full md:w-2/3">
      <h2 className="text-2xl  text-blue-600 mb-3">Need Help?</h2>
      <p className="text-gray-600 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
      </p>

      {/* Imagen en móvil justo debajo del párrafo */}
      <img src={ContactImage} alt="Contact" className="max-w-xs md:max-w-sm h-80 object-cover rounded-lg mx-auto md:ml-auto md:mb-0 mb-4 block md:hidden" />

      {/* Información de contacto con margen para separarlo */}
      <div className="space-y-3 text-blue-600 mt-6 md:mt-16">
        <div className="flex items-center"><MapPin className="h-5 w-5 mr-2" /> NYC, United States</div>
        <div className="flex items-center"><Phone className="h-5 w-5 mr-2" /> 0001-222-333</div>
        <div className="flex items-center"><Mail className="h-5 w-5 mr-2" /> somebody@gmail.com</div>
      </div>
    </div>  
    {/* Imagen en escritorio a la derecha */}
      <img src={ContactImage} alt="Contact" className="max-w-xs md:max-w-sm h-80 object-cover rounded-lg mx-auto md:ml-auto md:mb-0 mb-4 hidden md:block" />
    </div>
  {/* Iconos de redes sociales alineados a la derecha */}
  <div className="flex justify-center md:justify-end mt-4 space-x-4 text-blue-600">
    <Instagram className="h-6 w-6 cursor-pointer" />
    <Facebook className="h-6 w-6 cursor-pointer" />
  </div>
</div>


      </div>
    </div>
  );
}
