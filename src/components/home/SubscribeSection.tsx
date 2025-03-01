import { useState } from "react";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setEmail("");
  };

  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center py-10 bg-white px-4">
      <h2 className="text-4xl font-bold text-[#ca0606] mb-4">Subscribe</h2>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center w-full md:w-2/3 gap-3">
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#ca0606] w-full md:w-2/3"
          required
        />
        <button
          type="submit"
          className="w-full md:w-1/3 px-5 py-2 bg-white text-[#ca0606] border-2 border-[#ca0606] rounded-full font-bold shadow-md hover:bg-red-700 hover:text-white transition"
        >
          JOIN OUR FAMILY OF CLIENTS
        </button>
      </form>
    </div>
  );
}
