import { useState } from "react";
import { sendEmail } from "../services/emailService";

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e : any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");
    
    try {
      await sendEmail({
        to_name: "Red Ruddy Group Incorporated",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "Not Provided",
        project_type: "Not Specified",
        message: formData.message
      });
      setResponseMessage("Thank you! Your message has been sent.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setResponseMessage("Error sending message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full bg-[#1a2230] hover:bg-[#1a2230] flex items-center justify-center text-white shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
            <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 md:w-96 bg-white border shadow-lg rounded-lg overflow-hidden z-50 animate-slideUp">
          <div className="bg-[#101622] text-white p-4 flex justify-between items-center">
            <h3 className="text-lg font-bold">Red Ruddy Group Incorporated</h3>
            <button onClick={() => setIsOpen(false)} className="text-white">✕</button>
          </div>

          <div className="bg-[#1a2230] p-3 text-sm text-white">
            Hi! Let us know how we can help and we’ll respond shortly.
          </div>

          <div className="p-4">
            <form onSubmit={handleSubmit} className="space-y-2">
              <input type="text" name="name" placeholder="Name*" value={formData.name} onChange={handleChange} required className="w-full border p-2 rounded-md" />
              <input type="email" name="email" placeholder="Email*" value={formData.email} onChange={handleChange} required className="w-full border p-2 rounded-md" />
              <input type="tel" name="phone" placeholder="Phone*" value={formData.phone} onChange={handleChange} className="w-full border p-2 rounded-md" />
              <textarea name="message" placeholder="How can we help?*" value={formData.message} onChange={handleChange} required className="w-full border p-2 rounded-md h-20"></textarea>
              <button type="submit" disabled={loading} className="w-full py-2 bg-white hover:bg-[#1a2230] text-[#1a2230] border-2 border-[#1a2230] hover:text-white rounded-full shadow-md">
                {loading ? "Sending..." : "Send"}
              </button>
              {responseMessage && <p className="text-sm text-center mt-2 text-green-600">{responseMessage}</p>}
            </form>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .animate-slideUp {
            animation: slideUp 0.3s ease-out;
          }
        `}
      </style>
    </>
  );
}
