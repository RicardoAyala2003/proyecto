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
        title="Bienvenido"
        image="/Covers/inicio2.jpg"
        overlayMargin={48}>
        <div className="w-screen px-10 justify-center items-center z-10">
          <div className="flex justify-center items-center z-10">
            <HomeGallery />
          </div>
        </div>
      </ImagesBanner>
      <div style={{ marginBottom: "100px" }}>
        <h1 className="text-3xl font-bold text-center">
          Bienvenido a la Página de Inicio
        </h1>
        <p className="text-center text-lg mt-4">
          Esta es la página de inicio de nuestro proyecto.
        </p>

        <div>
          {/* Card 1: ¿Eres nuevo? */}
          <div className="flex justify-center mt-8">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-3xl flex items-center max-w-full overflow-hidden">
              <img
                src="/Covers/img.jpg"
                alt="Eres nuevo"
                className="w-40 h-40 object-cover rounded-lg flex-shrink-0"
              />
              <div className="w-px bg-gray-300 mx-8 h-full"></div>
              <div className="text-left overflow-hidden">
                <h2 className="text-2xl font-semibold mb-4 text-[#002140] truncate">
                  ¿Eres nuevo?
                </h2>
                <p className="mb-4 text-gray-700 line-clamp-3">
                  Te invitamos a registrarte con nosotros y así formar parte de
                  nuestra comunidad de manera presencial o en línea.
                </p>
                <button
                  className="bg-[#002140] text-white px-6 py-3 rounded hover:bg-[#004080] transition"
                  onClick={handleRegisterClick}>
                  Regístrate
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: ¿Oramos por ti? */}
          <div className="flex justify-center mt-8">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-3xl flex items-center max-w-full overflow-hidden">
              <img
                src="/Covers/img.jpg"
                alt="Oramos por ti"
                className="w-40 h-40 object-cover rounded-lg flex-shrink-0"
              />
              <div className="w-px bg-gray-300 mx-8 h-full"></div>
              <div className="text-left overflow-hidden">
                <h2 className="text-2xl font-semibold mb-4 text-[#002140] truncate">
                  ¿Oramos por ti?
                </h2>
                <p className="mb-4 text-gray-700 line-clamp-3">
                  Si tienes alguna petición, puedes enviarnos un mensaje de
                  manera confidencial y con gusto estaremos orando por ti.
                </p>
                <button
                  className="bg-[#002140] text-white px-6 py-3 rounded hover:bg-[#004080] transition"
                  onClick={handlePrayerClick}>
                  Orar por mí
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Contáctanos */}
          <div className="flex justify-center mt-8">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-3xl flex items-center max-w-full overflow-hidden">
              <img
                src="/Covers/img.jpg"
                alt="Contáctanos"
                className="w-40 h-40 object-cover rounded-lg flex-shrink-0"
              />
              <div className="w-px bg-gray-300 mx-8 h-full"></div>
              <div className="text-left overflow-hidden">
                <h2 className="text-2xl font-semibold mb-4 text-[#002140] truncate">
                  Contáctanos
                </h2>
                <p className="mb-4 text-gray-700 line-clamp-3">
                  ¿Tienes alguna pregunta o quieres contactarte con nosotros?
                  Envíanos un mensaje y un miembro de nuestro equipo te
                  responderá.
                </p>
                <button
                  className="bg-[#002140] text-white px-6 py-3 rounded hover:bg-[#004080] transition"
                  onClick={handleContactClick}>
                  Contáctanos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
