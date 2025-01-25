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
        overlayMargin={424}>
        <div className="w-full justify-center items-center z-10">
          <div className="flex justify-center items-center z-10 w-full">
            <MinisterioGallery />
          </div>
        </div>
        {/* Información del Ministerio */}
        <div className="bg-gray-100">
          <div className="w-full align-center mx-auto">
            <div className="mb-8"></div> {/* Espacio agregado antes del título */}
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
                    Un hogar prosperado por la Palabra, que comprende la
                    bendición de dar y de ayudarnos unos a otros en momentos de
                    necesidad, dando siempre de gracia lo que de gracia hemos
                    recibido.
                  </p>
                  <p className="mb-4">
                    Somos una iglesia que procura la responsabilidad
                    generacional, por lo tanto, amamos ver familias
                    transformadas por Cristo.
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

              <div className="relative grid grid-cols-1 md:grid-cols-3 items-start gap-8 px-4 max-w-6xl mx-auto">
  {/* German R. Ponce */}
  <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
    <img
      src="/Resources/Gallery/pastor4.png"
      alt="German R. Ponce"
      className="w-36 h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full shadow-lg object-cover select-none pointer-events-none"
    />
    <h3 className="font-semibold text-gray-800 mt-4 text-center text-lg">
      German R. Ponce
    </h3>
    <p className="text-center text-gray-600 mt-2 text-base w-60 md:w-64 lg:w-72">
    Pastor hondureño reconocido por su liderazgo en la Iglesia de Cristo Ebenezer y sus profundas enseñanzas bíblicas. Es una figura influyente en la comunidad cristiana, guiando con sabiduría y amor a su congregación.
    </p>
  </div>

  {/* Marvin Yovani & Jovita Delcid */}
  <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
    <div
      className="absolute w-[18rem] h-[18rem] md:w-[20rem] md:h-[20rem] lg:w-[23rem] lg:h-[23rem] rounded-full"
      style={{ backgroundColor: "#466a88" }}></div>
    <img
      src="/Resources/Gallery/pastor3.png"
      alt="Marvin Yovani & Jovita Delcid"
      className="w-56 h-auto md:w-64 lg:w-72 shadow-none relative z-10 select-none pointer-events-none"
    />
    <h3 className="text-2xl font-semibold text-gray-800 mt-6 text-center">
      Pastores Marvin Yovani & Jovita Delcid
    </h3>
    <p className="text-gray-600 text-center max-w-md mt-4 text-base">
      Los pastores lideran con amor y dedicación, guiando a la congregación en el propósito de Dios, edificando familias y promoviendo el crecimiento espiritual.
    </p>
  </div>

  {/* German A. Ponce */}
  <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
    <img
      src="/Resources/Gallery/pastor5.png"
      alt="German A. Ponce"
      className="w-36 h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full shadow-lg object-cover select-none pointer-events-none"
    />
    <h3 className="font-semibold text-gray-800 mt-4 text-center text-lg">
      German A. Ponce
    </h3>
    <p className="text-center text-gray-600 mt-2 text-base w-60 md:w-64 lg:w-72">
    Hijo de German R. Ponce, también pastor en la Iglesia de Cristo Ebenezer. Es conocido por su pasión por el evangelio y su compromiso con las nuevas generaciones, llevando un mensaje renovador y relevante.
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
        </div>{" "}
      </ImagesBanner>
    </div>
  );
};

export default Ministerio;
