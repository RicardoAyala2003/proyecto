import React from "react";
import ImagesBanner from "../../components/ImagesBanner/ImagesBanner";
import MinisterioGallery from "../../components/MasonryGallery/MinisterioGallery";

const Ministerio = () => {
  return (
    <div>
      {/* Banner con título e imagen */}
      <ImagesBanner
        title="Ministerio"
        image="/Covers/ministerio.jpg"
        overlayMargin={200}>
        <div className="w-screen justify-center items-center z-10">
          <div className="flex justify-center items-center z-10">
            <MinisterioGallery />
          </div>
        </div>
      </ImagesBanner>

      {/* Información del Ministerio */}
      <div className=" bg-gray-100 ">
        <div className="p-8">
          <div className="w-10/12 align-center mx-auto">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Somos la Iglesia de Cristo Ebenezer Honduras
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Imágenes flotantes */}
              <div className="flex justify-center items-center space-x-4">
                <img
                  src="/Resources/Gallery/1.jpg"
                  alt="Imagen 1"
                  className="w-48 h-32 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="/Resources/Gallery/2.jpg"
                  alt="Imagen 2"
                  className="w-48 h-32 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="/Resources/Gallery/3.jpg"
                  alt="Imagen 3"
                  className="w-48 h-32 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Descripción */}
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
          {/* Vista previa de Google Maps */}
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
          {/*  */}
        </div>
        {/* Image Banner 2 */}
        <div style={{ marginTop: "100px", marginBottom: "100px" }}>
          <div
            className="sub-section flex items-center justify-center text-center"
            style={{ backgroundImage: `url(/Covers/ministerio.jpg)` }}>
            <div className="hero-content z-10">
              <h1 className="text-white text-3xl md:text-5xl font-bold leading-snug">
                ¡<span className="text-4xl md:text-6xl">Somos</span> una Iglesia
                <span className="text-4xl md:text-6xl"> Generacional</span>
                ,
                <br />
                <span className="text-4xl md:text-6xl">Prosperados</span> por la
                <span className="text-4xl md:text-6xl "> Palabra</span>!
              </h1>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Ministerio;
