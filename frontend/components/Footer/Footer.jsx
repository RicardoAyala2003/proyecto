import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <Footer
      className="bg-[#002140] text-white py-8"
      style={{
        backgroundColor: "rgba(0, 33, 64, 0.9)", // Azul oscuro transparente
        backdropFilter: "blur(10px)",
      }}>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Sección del Logo */}
        <div className="mb-6 lg:mb-0">
          <img
            src="/Resources/logo.png"
            alt="Brand Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Información de Contacto */}
        <div className="text-center lg:text-left space-y-2">
          <p>
            <span className="font-semibold">Correo:</span>{" "}
            <a
              href="mailto:contacto@ejemplo.com"
              className="text-gray-300 hover:text-white">
              contacto@ejemplo.com
            </a>
          </p>
          <p>
            <span className="font-semibold">Teléfono:</span>{" "}
            <a
              href="tel:+1234567890"
              className="text-gray-300 hover:text-white">
              +1 (234) 567-890
            </a>
          </p>
          <p>
            <span className="font-semibold">Ubicación:</span> Avenida Siempre
            Viva #123, Ciudad, País
          </p>
        </div>

        {/* Derechos de Autor */}
        <div className="text-center mt-6 lg:mt-0 text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Nombre de la Empresa. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </Footer>
  );
};

export default CustomFooter;
