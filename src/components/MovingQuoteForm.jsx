import { useEffect } from "react";

export default function MovingQuoteForm({ setShowForm }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[99999] bg-white/10 backdrop-blur-sm">
      <div className="relative w-80 min-h-[500px] bg-white p-6 rounded-lg shadow-lg z-[100000]">
        <button
          onClick={() => setShowForm(false)}
          className="absolute top-2 right-2 text-[#003B73] hover:text-[#002F5F] text-xs"
        >
          X
        </button>
        <h2 className="text-base font-bold">Moving quote</h2>
        <p className="text-gray-600 text-xs mb-2">We ship within 2 working days</p>
        <form className="space-y-4">
          <label className="block text-xs">
            Housing type:
            <select className="w-full p-2 border rounded mt-1 text-xs">
              <option>Select</option>
              <option>Apartment</option>
              <option>Home</option>
            </select>
          </label>
          <label className="block text-xs">
            Move-in Date:
            <input type="date" className="w-full p-2 border rounded mt-1 text-xs" />
          </label>
          <label className="block text-xs">
            Client name:
            <input type="text" className="w-full p-2 border rounded mt-1 text-xs" placeholder="Name" />
          </label>
          <label className="block text-xs">
            Phone number:
            <input type="tel" className="w-full p-2 border rounded mt-1 text-xs" placeholder="+1" />
          </label>
          <label className="block text-xs">
            Email:
            <input type="email" className="w-full p-2 border rounded mt-1 text-xs" placeholder="correo@example.com" />
          </label>
          <button className="w-full bg-[#003B73] text-white py-2 rounded mt-2 hover:bg-[#002F5F] text-xs">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
