import React from "react";
import { useNavigate } from "react-router-dom";

import ImagesBanner from "../../components/ImagesBanner/ImagesBanner";
import HomeGallery from "../../components/MasonryGallery/HomeGallery";

import {
  UserAddOutlined,
  UserSwitchOutlined,
  MailOutlined,
} from "@ant-design/icons";

const Inicio = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/registro");
  };

  const handlePrayerClick = () => {
    navigate("/orar"); // Asegúrate de que esta ruta esté configurada correctamente en tu router
  };

  const handleContactClick = () => {
    navigate("/contacto"); // Asegúrate de que esta ruta esté configurada correctamente en tu router
  };

  return (
    <div>
      <ImagesBanner
        title="¡Bienvenido!"
        image="/Covers/inicio2.jpg"
        overlayMargin={300}>
        <div className="w-screen  justify-center items-center z-10">
          <div className="flex justify-center items-center z-10">
            <div style={{ marginTop: "100px" }}>
              <HomeGallery />
            </div>
          </div>
        </div>
      </ImagesBanner>
      {/* Componente de Cards */}

      <div style={{ paddingBottom: "50px" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/400x200" // Sustituye con la URL de tu imagen
              alt="Registro"
              className="w-full h-40 object-cover"
            />
            <div className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <span className="bg-[#002140] p-3 rounded-full">
                  <UserAddOutlined className="text-white text-2xl" />
                </span>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-[#002140]">
                ¿Eres nuevo?
              </h2>
              <p className="text-gray-700 mb-4">
                Te invitamos a registrarte con nosotros y así formar parte de
                nuestra comunidad de manera presencial o en línea.
              </p>
              <button
                className="bg-[#002140] text-white px-4 py-2 rounded hover:bg-[#004080] transition"
                onClick={handleRegisterClick}>
                Regístrate
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/400x200" // Sustituye con la URL de tu imagen
              alt="Oración"
              className="w-full h-40 object-cover"
            />
            <div className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <span className="bg-[#002140] p-3 rounded-full">
                  <UserSwitchOutlined className="text-white text-2xl" />
                </span>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-[#002140]">
                ¿Oramos por ti?
              </h2>
              <p className="text-gray-700 mb-4">
                Si tienes alguna petición, puedes enviarnos un mensaje de manera
                confidencial y con gusto estaremos orando por ti.
              </p>
              <button
                className="bg-[#002140] text-white px-4 py-2 rounded hover:bg-[#004080] transition"
                onClick={handlePrayerClick}>
                Orar por mí
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/400x200" // Sustituye con la URL de tu imagen
              alt="Contacto"
              className="w-full h-40 object-cover"
            />
            <div className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <span className="bg-[#002140] p-3 rounded-full">
                  <MailOutlined className="text-white text-2xl" />
                </span>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-[#002140]">
                Contáctanos
              </h2>
              <p className="text-gray-700 mb-4">
                ¿Tienes alguna pregunta o quieres contactarte con nosotros?
                Envíanos un mensaje y un miembro de nuestro equipo te
                responderá.
              </p>
              <button
                className="bg-[#002140] text-white px-4 py-2 rounded hover:bg-[#004080] transition"
                onClick={handleContactClick}>
                Contáctanos
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Inicio;
