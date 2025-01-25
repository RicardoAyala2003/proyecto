import React from "react";
import { Construction } from "lucide-react";

const EnVivo = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-blue-300 to-white">
      <div className="text-center p-6">
        <Construction className="h-20 w-20 text-blue-700 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800">En Construcción</h1>
        <p className="text-gray-600 mt-2 text-lg">
          Estamos trabajando para traerte algo increíble. ¡Vuelve pronto!
        </p>
      </div>
    </div>
  );
};

export default EnVivo;


{/*

        
        <div className="flex flex-col items-center">
          <div className="relative w-full max-h-[85vh] pt-14 aspect-video mb-4">
            <iframe
              className="w-full h-full rounded-lg"
              src={videos[currentVideoIndex]}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </div>

          
          <div className="flex justify-between items-center w-full md:w-auto">
            
            <button
              onClick={prevVideo}
              className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-600 transition-all duration-200">
              <span className="mr-2">&#8592;</span>
              <span className="text-sm md:text-base font-bold">Anterior</span>
            </button>

            
            <button
              onClick={nextVideo}
              className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-600 transition-all duration-200 ml-4">
              <span className="text-sm md:text-base font-bold">Siguiente</span>
              <span className="ml-2">&#8594;</span>
            </button>
          </div>
        </div>

        
        <div className="flex justify-center space-x-2 mt-4">
          {videos.map((_, index) => (
            <div
              key={index}
              className={h-3 w-3 rounded-full ${
                index === currentVideoIndex ? "bg-gray-800" : "bg-gray-400"
              }}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnVivo;
*/}