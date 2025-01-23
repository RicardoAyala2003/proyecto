import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

const Contactenos = () => {
  const dominantColor = "#193753"; // Color dominante

  return (
    <div
      className=" min-h-screen pt-32 "
      style={{
        // background: `linear-gradient(to bottom, white, ${dominantColor})`,
        color: "white",

        backgroundColor: dominantColor,
      }}>
      {/* Título y descripción */}

      <div>
        <h1
          className="text-4xl font-extrabold text-center mb-6"
          style={{ color: "white" }}>
          Contáctanos
        </h1>
        <p className="text-center text-lg mb-8" style={{ color: "white" }}>
          Si tienes alguna pregunta o deseas ponerte en contacto con nosotros,
          ¡estamos aquí para ayudarte!
        </p>
      </div>

      <div className="p-4 grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
        {/* Información de contacto */}
        <div className="col-span-2 lg:col-span-1 md:col-span-1 bg-white p-6 rounded-lg shadow-lg text-gray-800 mb-8">
          <h2
            className="text-2xl font-semibold flex items-center gap-2"
            style={{ color: dominantColor }}>
            Información de Contacto
          </h2>
          <div className="flex items-center mt-4 gap-2">
            <EnvironmentOutlined className="text-lg text-gray-600" />
            <p className="text-lg text-gray-700">
              <span className="font-bold">Dirección:</span> Calle Ficticia 123,
              Barrio Inventado, Ciudad Ejemplo, País Imaginario
            </p>
          </div>
          <div className="flex items-center mt-4 gap-2">
            <PhoneOutlined className="text-lg text-gray-600" />
            <p className="text-lg text-gray-700">
              <span className="font-bold">Teléfono:</span> (123) 456-7890
            </p>
          </div>
          <div className="flex items-center mt-4 gap-2">
            <MailOutlined className="text-lg text-gray-600" />
            <p className="text-lg text-gray-700">
              <span className="font-bold">Correo Electrónico:</span>{" "}
              contacto@ejemplo.com
            </p>
          </div>
          <div className="flex items-center mt-4 gap-2">
            <ClockCircleOutlined className="text-lg text-gray-600" />
            <p className="text-lg text-gray-700">
              <span className="font-bold">Horarios de atención:</span> Lunes a
              Viernes - 9:00 AM a 5:00 PM
            </p>
          </div>
        </div>

        {/* Google Maps */}
        <div className="col-span-2 lg:col-span-1 md:col-span-1 bg-white p-6 rounded-lg shadow-lg text-gray-800 mb-8">
          <h2
            className="text-2xl font-semibold"
            style={{ color: dominantColor }}>
            Encuéntranos en Google Maps
          </h2>
          <p className="text-lg text-gray-700 mt-2">
            Puedes llegar fácilmente a nuestra ubicación utilizando el siguiente
            enlace:
          </p>
          <a
            href="https://maps.google.com/?q=Calle+Ficticia+123,+Barrio+Inventado,+Ciudad+Ejemplo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800">
            Ver en Google Maps
          </a>

          <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
              Encuéntranos
            </h2>
            <div className="w-full h-64 mb-4">
              <iframe
                title="Ubicación Ministerio"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238133.72094687868!2d-87.24141984468834!3d14.072275363363887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fa9933ff1c85f%3A0xe43e8f61b0b5e8c!2sTegucigalpa!5e0!3m2!1sen!2shn!4v1692991999412!5m2!1sen!2shn"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                className="rounded-lg shadow-lg"></iframe>
            </div>
            <div className="text-center">
              <a
                href="https://maps.google.com/?q=Tegucigalpa,Honduras"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-lg font-semibold">
                Ver en Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-lg text-center text-gray-800">
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ color: dominantColor }}>
            Síguenos en redes sociales
          </h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800">
              <FaFacebook size={40} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600">
              <FaTwitter size={40} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-800">
              <FaInstagram size={40} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900">
              <FaLinkedin size={40} />
            </a>
          </div>
        </div>

        {/* Mensaje final */}
        <div className=" col-span-2 text-center mt-8">
          <h3 className="text-2xl font-semibold">¡Esperamos tu mensaje!</h3>
          <p className="text-lg mt-2">
            Si tienes alguna consulta o deseas más información, no dudes en
            enviarnos un mensaje.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contactenos;
