import React, { useState } from "react";

const EnVivo = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
    "https://www.youtube.com/embed/oRdxUFDoQe0?si=DRnsSALTHvxJobiS",
    "https://www.youtube.com/embed/Zi_XLOBDo_Y?si=yPE0rEIF9Ly_h6EX",
    "https://www.youtube.com/embed/h_D3VFfhvs4?si=ekoCtWN9dls8E4ik",
  ];

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-100 to-white px-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-7xl p-4 md:p-6">
        {/* Title */}
        <h2 className="text-xl md:text-3xl font-bold text-gray-800 text-center mb-4 md:mb-6">

        </h2>

        {/* Video Player */}
        <div className="flex flex-col items-center">
          <div className="relative w-full max-h-[85vh] pt-14 aspect-video mb-4">
            <iframe
              className="w-full h-full rounded-lg"
              src={videos[currentVideoIndex]}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center w-full md:w-auto">
            {/* Left Button */}
            <button
              onClick={prevVideo}
              className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-600 transition-all duration-200"
            >
              <span className="mr-2">&#8592;</span>
              <span className="text-sm md:text-base font-bold">Anterior</span>
            </button>

            {/* Right Button */}
            <button
              onClick={nextVideo}
              className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-600 transition-all duration-200 ml-4"
            >
              <span className="text-sm md:text-base font-bold">Siguiente</span>
              <span className="ml-2">&#8594;</span>
            </button>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center space-x-2 mt-4">
          {videos.map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 rounded-full ${
                index === currentVideoIndex ? "bg-gray-800" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnVivo;
