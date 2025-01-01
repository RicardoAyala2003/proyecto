import React, { useState } from "react";

const EnVivo = () => {
  // State to track the current video index
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Array of video URLs
  const videos = [
    "https://www.youtube.com/embed/iiYmbRvMylw?si=iRyzDHaLpi-yNWXl",
    "https://www.youtube.com/embed/6KpvuUS4U8w?si=EpmVLItbHsNjLezp",
    "https://www.youtube.com/embed/TE7buxmJPqk?si=HNWs8ewtd5_lT7Rx",
  ];

  // Function to go to the next video
  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous video
  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-7xl w-full">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">Últimos Videos</h2>

        {/* Arrows outside the video container */}
        <div className="flex justify-between items-center">
          {/* Left Arrow Button */}
          <button
            onClick={prevVideo}
            className="text-white bg-black rounded-full p-2 shadow-lg hover:bg-gray-700"
          >
            &#60;
          </button>

          {/* Video iframe */}
          <div className="overflow-hidden rounded-lg bg-black w-full">
            <iframe
              className="w-full h-96 sm:h-[500px] lg:h-[600px]" // Increased height for a bigger video
              src={videos[currentVideoIndex]}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={nextVideo}
            className="text-white bg-black rounded-full p-2 shadow-lg hover:bg-gray-700"
          >
            &#62;
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnVivo;
