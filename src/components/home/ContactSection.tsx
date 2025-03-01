import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { sendEmail } from "../../services/emailService"; // Import email service

export default function ContactSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      await sendEmail({
        to_name: "SkyRise Contracting Ltd",
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
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-100 p-6 md:p-10 relative">
      <div className="w-full md:w-1/2 flex flex-col justify-evenly items-start">
        <h1 className="text-4xl md:text-5xl font-bold text-[#ca0606]">Contact Us</h1>
        <hr className="w-16 border-t-4 border-gray-300 mt-4 mb-6" />
        <p className="text-lg font-semibold text-gray-900">Better yet, meet us in person!</p>
        <p className="mt-2 text-gray-600">
          We love our relationships with clients. Please consider scheduling a time where we can get started.
        </p>
        <div className="mt-6">
          <p className="font-bold text-gray-900">SkyRise Contracting Ltd</p>
          <p className="text-gray-700">35 Taralake Gdns NE, Calgary AB T3J 0A8</p>
          <p className="text-[#ca0606] font-semibold"> skyrisecontractingltd@gmail.com</p>
        </div>

        <div className="mt-4">
          <p className="font-semibold text-gray-900 cursor-pointer flex items-center" onClick={() => setIsOpen(!isOpen)}>
            Hours:
            <span className="ml-2 text-red-600 font-bold">{isOpen ? "▲" : "▼"}</span>
          </p>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2 text-gray-700"
            >
              <p>Mon - Thu: 08:00 AM - 05:00 PM</p>
              <p>Fri: 08:00 AM - 03:00 PM</p>
              <p>Sat - Sun: By Appointment</p>
            </motion.div>
          )}
        </div>

        <button
          className="mt-6 px-6 py-3 bg-white text-[#1a2230] border-2 border-[#1a2230] rounded-full font-bold shadow-md hover:bg-[#1a2230] hover:text-white transition"
          onClick={() => setShowForm(true)}
        >
          CONNECT WITH US!
        </button>
      </div>

      <div className="w-full md:w-1/2 mt-6 md:mt-0">
        <iframe
          className="w-full h-64 md:h-full rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25135.68296167438!2d-113.9412928!3d51.1222421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371655a63d3c6ff%3A0x9a8d695ddf8c5c38!2s35%20Taralake%20Gdns%20NE%2C%20Calgary%2C%20AB%20T3J%200A8%2C%20Canada!5e0!3m2!1sen!2sus!4v1709314523534!5m2!1sen!2sus"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {showForm && (
        <motion.div 
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          className="absolute inset-0 flex items-center bg-white p-6 md:p-10 shadow-lg w-full md:w-1/3"
        >
          <div className="w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
              onClick={() => setShowForm(false)}
            >
              <X />
            </button>

            <h2 className="text-2xl font-bold text-[#ca0606]">Connect with Us!</h2>
            <hr className="w-16 border-t-4 border-gray-300 mt-2 mb-4" />

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone*"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <textarea
                name="message"
                placeholder="Message*"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md h-20"
              ></textarea>

              <div className="flex justify-between mt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2 bg-white hover:bg-[#1a2230] text-[#1a2230] border-2 border-[#1a2230] hover:text-white rounded-full shadow-md"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
                <button
                  type="button"
                  className="px-6 py-2 text-[#1a2230] underline rounded-full"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>

              {responseMessage && <p className="text-sm text-center mt-2 text-green-600">{responseMessage}</p>}
            </form>
          </div>
        </motion.div>
      )}
    </div>
  );
}
