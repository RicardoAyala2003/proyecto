import React, { useState } from "react";

const EnVivo = () => {
  // State to track the current video index
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Array of video URLs
  const videos = [
    "https://www.youtube.com/embed/6KpvuUS4",
    "https://www.youtube.com/embed/6KpvuUS4U8w?si=EpmVLItbHsNjLezp",

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
    <div className="flex justify-center items-center -mt-10 min-h-screen bg-gray-100" style={{ marginTop: "100px" }}>
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-7xl w-full">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">Últimos Videos</h2>

        {/* Arrows and Video container */}
        <div className="flex justify-center items-center space-x-8"> {/* Increased space between the arrows */}
          {/* Left Arrow Button */}
          <button
            onClick={prevVideo}
            className="text-white bg-black rounded-full p-4 shadow-lg hover:bg-gray-700"
          >
            &#60;
          </button>

          {/* Video iframe (increased width) */}
          <div className="overflow-hidden rounded-lg bg-black w-full sm:w-[750px] md:w-[900px] lg:w-[1200px]">
            <iframe
              className="w-full h-96 sm:h-[400px] lg:h-[600px]" // Increased height for a bigger video
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
            className="text-white bg-black rounded-full p-4 shadow-lg hover:bg-gray-700"
          >
            &#62;
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default EnVivo;
