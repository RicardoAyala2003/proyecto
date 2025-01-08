import React from "react";

const images = [
  {
    src: "/Resources/Gallery/1.jpg",
    alt: "Image 1",
  },
  {
    src: "/Resources/Gallery/2.jpg",
    alt: "Image 2",
  },
  {
    src: "/Resources/Gallery/3.jpg",
    alt: "Image 3",
  },
  {
    src: "/Resources/Gallery/4.jpg",
    alt: "Image 4",
  },
  {
    src: "/Resources/Gallery/5.jpg",
    alt: "Image 5",
  },
];

const MinisterioGallery = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="grid grid-cols-3 grid-rows-2 gap-4 h-full w-full max-w-screen-lg">
        {/* Left Top */}
        <div className="flex items-end justify-end transform transition-transform duration-300 hover:scale-105">
          <img
            src={images[1].src}
            alt={images[1].alt}
            className="w-8/12 h-full max-w-[150px] max-h-[150px] md:max-w-[200px] md:max-h-[200px] lg:max-w-[300px] lg:max-h-[300px] object-cover rounded-2xl shadow-md"
          />
        </div>
        {/* Center Vertical */}
        <div className="row-span-2 flex justify-center transform transition-transform duration-300 hover:scale-105">
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="w-full h-full  object-cover rounded-2xl shadow-md "
          />
        </div>
        {/* Right Top */}
        <div className="flex items-end transform transition-transform duration-300 hover:scale-105">
          <img
            src={images[2].src}
            alt={images[2].alt}
            className="w-full h-full max-w-[150px] max-h-[150px] md:max-w-[200px] md:max-h-[200px] lg:max-w-[300px] lg:max-h-[300px] object-cover rounded-2xl shadow-md"
          />
        </div>
        {/* Left Bottom */}
        <div className="flex items-start justify-end transform transition-transform duration-300 hover:scale-105">
          <img
            src={images[3].src}
            alt={images[3].alt}
            className="w-full h-full max-w-[150px] max-h-[150px] md:max-w-[200px] md:max-h-[200px] lg:max-w-[300px] lg:max-h-[300px] object-cover rounded-2xl shadow-md"
          />
        </div>
        {/* Right Bottom */}
        <div className="flex items-start transform transition-transform duration-300 hover:scale-105">
          <img
            src={images[4].src}
            alt={images[4].alt}
            className="w-9/12 h-full max-w-[150px] max-h-[150px] md:max-w-[200px] md:max-h-[200px] lg:max-w-[300px] lg:max-h-[300px] object-cover rounded-2xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default MinisterioGallery;
