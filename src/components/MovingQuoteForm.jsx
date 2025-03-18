import { useEffect, useState } from "react";
import { sendEmail } from "../services/emailService"; // 🔹 Importamos el servicio

export default function MovingQuoteForm({ setShowForm }) {
  const [formData, setFormData] = useState({
    housing_type: "",
    move_in_date: "",
    client_name: "",
    phone_number: "",
    email: "",
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await sendEmail(formData); // 🔹 Llamamos al servicio de EmailJS

    if (result.success) {
      alert("Quote request sent successfully!");
      setShowForm(false);
    } else {
      alert("Failed to send quote request.");
    }
  };

  return (
    <div className="font-[Open_Sans] fixed inset-0 flex items-center justify-center z-[99999] bg-white/10 backdrop-blur-sm">
      <div className="relative w-80 min-h-[500px] bg-white p-6 rounded-lg shadow-lg z-[100000]">
        <button
          onClick={() => setShowForm(false)}
          className="absolute top-2 right-2 text-[#003B73] hover:text-[#002F5F] text-xs"
        >
          X
        </button>
        <h2 className="font-[Libre_Baskerville] text-base">Moving quote</h2>
        <p className="text-gray-600 text-xs mb-2">We ship within 2 working days</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <label className="block text-xs">
            Housing type:
            <select name="housing_type" value={formData.housing_type} onChange={handleChange} className="w-full p-2 border rounded mt-1 text-xs">
              <option value="">Select</option>
              <option value="Apartment">Apartment</option>
              <option value="Home">Home</option>
            </select>
          </label>
          <label className="block text-xs">
            Move-in Date:
            <input type="date" name="move_in_date" value={formData.move_in_date} onChange={handleChange} className="w-full p-2 border rounded mt-1 text-xs" />
          </label>
          <label className="block text-xs">
            Client name:
            <input type="text" name="client_name" value={formData.client_name} onChange={handleChange} className="w-full p-2 border rounded mt-1 text-xs" placeholder="Name" />
          </label>
          <label className="block text-xs">
            Phone number:
            <input type="tel" name="phone_number" value={formData.phone_number} onChange={handleChange} className="w-full p-2 border rounded mt-1 text-xs" placeholder="+1" />
          </label>
          <label className="block text-xs">
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded mt-1 text-xs" placeholder="email@example.com" />
          </label>
          <button type="submit" className="w-full bg-[#003B73] text-white py-2 rounded mt-2 hover:bg-[#002F5F] text-xs">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
