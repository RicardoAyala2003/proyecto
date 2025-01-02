import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contactenos = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-700 to-purple-600 text-white p-8">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-white">Contáctanos</h1>
      <p className="text-center text-lg mb-8">
        Si tienes alguna pregunta o deseas ponerte en contacto con nosotros, ¡estamos aquí para ayudarte!
      </p>

      {/* Información de contacto */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800 mb-8">
        <h2 className="text-2xl font-semibold text-[#002140]">Información de Contacto</h2>
        <p className="text-lg text-gray-700 mt-2">Dirección: Calle Ficticia 123, Barrio Inventado, Ciudad Ejemplo, País Imaginario</p>
        <p className="text-lg text-gray-700 mt-2">Teléfono: (123) 456-7890</p>
        <p className="text-lg text-gray-700 mt-2">Correo Electrónico: contacto@ejemplo.com</p>
        <p className="text-lg text-gray-700 mt-2">Horarios de atención: Lunes a Viernes - 9:00 AM a 5:00 PM</p>
      </div>

      {/* Google Maps */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800 mb-8">
        <h2 className="text-2xl font-semibold text-[#002140]">Encuéntranos en Google Maps</h2>
        <p className="text-lg text-gray-700 mt-2">Puedes llegar fácilmente a nuestra ubicación utilizando el siguiente enlace:</p>
        <a
          href="https://maps.google.com/?q=Calle+Ficticia+123,+Barrio+Inventado,+Ciudad+Ejemplo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          Ver en Google Maps
        </a>
      </div>

      {/* Redes sociales */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-center text-gray-800">
        <h2 className="text-2xl font-semibold text-[#002140] mb-4">Síguenos en redes sociales</h2>
        <div className="flex justify-center space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <FaFacebook size={40} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
            <FaTwitter size={40} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
            <FaInstagram size={40} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
            <FaLinkedin size={40} />
          </a>
        </div>
      </div>

      {/* Mensaje final */}
      <div className="text-center mt-8">
        <h3 className="text-2xl font-semibold text-white">¡Esperamos tu mensaje!</h3>
        <p className="text-lg text-white mt-2">Si tienes alguna consulta o deseas más información, no dudes en enviarnos un mensaje.</p>
      </div>
    </div>
  );
};

export default Contactenos;
