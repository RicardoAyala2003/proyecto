import React from "react";
import { useNavigate } from "react-router-dom";

import ImagesBanner from "../../components/ImagesBanner/ImagesBanner";
import HomeGallery from "../../components/MasonryGallery/HomeGallery";

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
        overlayMargin={48}>
        <div className="w-screen  justify-center items-center z-10">
          <div className="flex justify-center items-center z-10">
            <div style={{ marginTop: "100px" }}>
              <HomeGallery />
            </div>
          </div>
        </div>
      </ImagesBanner>

      <h1 className="text-3xl font-bold text-center">
        Bienvenido a la Página de Inicio
      </h1>
      <p className="text-center text-lg mt-4">
        Esta es la página de inicio de nuestro proyecto.
      </p>
      <div className="flex justify-center mt-8">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl text-center">
          <h2 className="text-xl font-semibold mb-4 text-[#002140]">
            ¿Eres nuevo?
          </h2>
          <p className="mb-4 text-gray-700">
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
      <div className="flex justify-center mt-8">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl text-center">
          <h2 className="text-xl font-semibold mb-4 text-[#002140]">
            ¿Oramos por ti?
          </h2>
          <p className="mb-4 text-gray-700">
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
      <div className="flex justify-center mt-8">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl text-center">
          <h2 className="text-xl font-semibold mb-4 text-[#002140]">
            Contáctanos
          </h2>
          <p className="mb-4 text-gray-700">
            ¿Tienes alguna pregunta o quieres contactarte con nosotros? Envíanos
            un mensaje y un miembro de nuestro equipo te responderá.
          </p>
          <button
            className="bg-[#002140] text-white px-4 py-2 rounded hover:bg-[#004080] transition"
            onClick={handleContactClick}>
            Contáctanos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
