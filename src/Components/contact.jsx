import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [privacyAccepted, setPrivacyAccepted] = useState(false); 

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePrivacyChange = (e) => {
    setPrivacyAccepted(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!privacyAccepted) {
      alert("Debes aceptar la política de privacidad.");
      return;
    }

    try {
      const response = await fetch("./contacto.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setPrivacyAccepted(false);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error al enviar:", error);
      setStatus("error");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-transparent text-white font-dm-sans p-6 rounded-lg ">
      <h2 className="lg:text-7xl text-5xl font-bold mb-4 text-center">Contact</h2>
      <p className="pb-4 lg:text-2xl">Let's chat! If you want to know more about what I do, send me a message.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"/>
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"/>
        </div>
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Write your message here"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500">

          </textarea>
        </div>

        <input type="checkbox" name="privacy" checked={privacyAccepted} onChange={handlePrivacyChange} required className="mr-2" />
        <label className="text-sm text-gray-500">
          I Accept the privacy policy.
        </label>
          <div className="text-sm text-gray-500">
            <p>By sending this form, I accept that my data will be used to respond to my inquiry. According to the 
              <Link to="/privacy-policy" className="text-blue-600 underline"><strong>  Data treatment policies</strong></Link>
        
            </p>
        
        
          </div>

        <button type="submit" disabled={!privacyAccepted} className={`px-6 py-2 rounded-md transition duration-300 ${privacyAccepted ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-400 text-gray-700 cursor-not-allowed"}`}>Send</button>
      </form>

      {/* Mensaje de estado */}
      {status === "success" && (
        <p className="mt-4 text-green-600 text-center">✅ Your message has been send!</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-600 text-center">❌ There was an error, please later.</p>
      )}
    </div>
  );
}
