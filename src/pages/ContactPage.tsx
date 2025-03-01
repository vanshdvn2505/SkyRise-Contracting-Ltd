import { useState } from "react";
import { sendEmail } from "../services/emailService";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      await sendEmail({
        to_name: "Skyrise Contracting Ltd",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "Not Provided",
        project_type: formData.projectType || "Not Specified",
        message: formData.message,
      });

      setResponseMessage("Thank you for contacting us! We will get back to you soon.");
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });
    } catch (error) {
      setResponseMessage("An error occurred while sending the message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto px-4 py-16 mt-20">
      <h1 className="text-4xl text-[#ca0606] font-bold mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone (Optional)</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label htmlFor="projectType" className="block text-sm font-medium mb-1">Project Type (Optional)</label>
              <select
                id="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="">Select a project type</option>
                <option value="office">Office Building</option>
                <option value="retail">Retail Strip Center</option>
                <option value="medical">Medical Facility</option>
                <option value="restaurant">Restaurant</option>
                <option value="storage">Self-Storage</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-[#ca0606] transition-colors"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {responseMessage && (
              <p className={`text-sm mt-4 ${responseMessage.includes("error") ? "text-red-600" : "text-green-600"}`}>
                {responseMessage}
              </p>
            )}
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="bg-gray-100 p-8 rounded-lg">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p>35 Taralake Gdns NE</p>
              <p>Calgary AB T3J 0A8</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-red-600 font-bold">778-325-3540</p>
              <p className="text-red-600 font-bold">604-720-2407</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p>skyrisecontractingltd@gmail.com</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
              <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p>Saturday: By appointment</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
