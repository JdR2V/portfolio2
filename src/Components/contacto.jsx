import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Contacto() {

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
      <h2 className="lg:text-7xl text-5xl font-bold mb-4 text-center">Contáctame</h2>
      <p className="pb-4 lg:text-2xl">¡Hablemos! Si quieres saber mas sobre lo que hago, enviame un mensaje para ponernos en contacto.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Tu nombre"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"/>
        </div>
        <div>
          <label className="block mb-1 font-medium">Correo</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Tu correo electrónico"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"/>
        </div>
        <div>
          <label className="block mb-1 font-medium">Mensaje</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Escribe tu mensaje aquí"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500">

          </textarea>
        </div>

        <input type="checkbox" name="privacy" checked={privacyAccepted} onChange={handlePrivacyChange} required className="mr-2" />
        <label className="text-sm text-gray-500">
          Acepto la política de privacidad
        </label>
        <div className="text-sm text-gray-500">
         <p>Al enviar este formulario, acepto que mis datos sean utilizados para responder a mi consulta. De acuerdo con la 

        <Link to="/politica-datos" className="text-blue-600 underline"><strong> Política de Tratamiento de Datos</strong></Link>

         </p>


        </div>
        
        <button type="submit" disabled={!privacyAccepted} className={`px-6 py-2 rounded-md transition duration-300 ${privacyAccepted ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-400 text-gray-700 cursor-not-allowed"}`}>Enviar</button>
      </form>

      {/* Mensaje de estado */}
      {status === "success" && (
        <p className="mt-4 text-green-600 text-center">✅ Tu mensaje fue enviado correctamente.</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-600 text-center">❌ Ocurrió un error al enviar el mensaje. Intenta más tarde.</p>
      )}
    </div>
  );
}
