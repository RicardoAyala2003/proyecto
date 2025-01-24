import React from "react";
import ImagesBanner from "../../components/ImagesBanner/ImagesBanner";
import MinisterioGallery from "../../components/MasonryGallery/MinisterioGallery";

import WebsiteData from "../../aData.js";

const ComponentData = {
  mapsUrl: WebsiteData.churchInfo.mapsUrl,
  embededMapsUrl: WebsiteData.churchInfo.mapsUrlEmbeded,
};

const Ministerio = () => {
  return (
    <div>
      {/* Banner con título e imagen */}
      <ImagesBanner
        title="Ministerio"
        image="/Covers/ministerio.jpg"
        overlayMargin={48}>
        <div className="w-screen justify-center items-center z-10">
          <div className="flex justify-center items-center z-10">
            <MinisterioGallery />
          </div>
        </div>
      </ImagesBanner>

      {/* Información del Ministerio */}
      <div className="bg-gray-100">
        <div className="w-full align-center mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Somos la Iglesia de Cristo Ebenezer Honduras
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 w-full">
            {/* Imágenes flotantes */}
            <div>
              <div className="flex justify-center items-center gap-4 flex-wrap">
                <img
                  src="/Resources/Gallery/1.jpg"
                  alt="Imagen 1"
                  className="w-full max-w-[30%] h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="/Resources/Gallery/2.jpg"
                  alt="Imagen 2"
                  className="w-full max-w-[30%] h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="/Resources/Gallery/3.jpg"
                  alt="Imagen 3"
                  className="w-full max-w-[30%] h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Descripción */}
            <div className="p-8">
              <div className="text-gray-900 text-opacity-65 text-base font-semibold w-full">
                <p className="mb-4">
                  Un hogar prosperado por la Palabra, que comprende la bendición
                  de dar y de ayudarnos unos a otros en momentos de necesidad,
                  dando siempre de gracia lo que de gracia hemos recibido.
                </p>
                <p className="mb-4">
                  Somos una iglesia que procura la responsabilidad generacional,
                  por lo tanto, amamos ver familias transformadas por Cristo.
                </p>
                <p className="mb-4">
                  Sabemos que Jesús es Dios e impulsados por el Espíritu Santo
                  anhelamos llevar el evangelio y el impacto de una relación
                  genuina con el Señor de generación a generación.
                </p>
              </div>
            </div>
          </div>

          {/* Nueva sección para el pastor y fotos */}
          <div className="bg-white py-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Nuestros Pastores
            </h2>

            <div className="relative flex flex-wrap px-4 justify-center items-center max-w-4xl mx-auto gap-y-8">
              {/* Asistente 1 - Izquierda */}
              <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300 md:absolute md:top-0 md:left-0 md:translate-x-[-20%]">
                <img
                  src="/Resources/Gallery/pastor4.png"
                  alt="Asistente 1"
                  className="w-36 h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full shadow-lg object-cover"
                />
                <h3 className="font-semibold text-gray-800 mt-2 text-center text-lg">
                  German R. Ponce
                </h3>
                <p className="text-center text-gray-600 mt-2 text-base">
                  el papá
                </p>
              </div>

              {/* Círculo con la imagen del Pastor */}
              <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                {/* Círculo de fondo */}
                <div
                  className="absolute w-[18rem] h-[18rem] md:w-[20rem] md:h-[20rem] lg:w-[23rem] lg:h-[23rem] rounded-full"
                  style={{ backgroundColor: "#466a88" }}></div>
                {/* Imagen del pastor */}
                <img
                  src="/Resources/Gallery/pastor3.png"
                  alt="Foto del Pastor"
                  className="w-56 h-auto md:w-64 lg:w-72 shadow-none relative z-10"
                />
                <h3 className="text-2xl font-semibold text-gray-800 mt-6 text-center">
                  Pastores Marvin Yovani & Jovita Delcid
                </h3>
                <p className="text-gray-600 text-center max-w-md mt-4 text-base">
                  Los pastores lideran con amor y dedicación, guiando a la
                  congregación en el propósito de Dios, edificando familias y
                  promoviendo el crecimiento espiritual.
                </p>
              </div>

              {/* Asistente 2 - Derecha */}
              <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300 md:absolute md:top-0 md:right-0 md:translate-x-[20%]">
                <img
                  src="/Resources/Gallery/pastor5.png"
                  alt="Asistente 2"
                  className="w-36 h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full shadow-lg object-cover"
                />
                <h3 className="font-semibold text-gray-800 mt-2 text-center text-lg">
                  German A. Ponce
                </h3>
                <p className="text-center text-gray-600 mt-2 text-base">
                  el hijo
                </p>
              </div>
            </div>
          </div>

          {/* Vista previa de Google Maps */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-gray-800">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
              Encuéntranos
            </h2>
            <div className="w-full h-96 mb-4">
              <iframe
                title="Ubicación Ministerio"
                src={ComponentData.embededMapsUrl}
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                className="rounded-lg shadow-lg"></iframe>
            </div>
            <div className="text-center">
              <a
                href={ComponentData.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-lg font-semibold">
                Ver en Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ministerio;
