import React from "react";
import "./styles.css";
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

const HomeGallery = () => {
  return (
    <div className="flex justify-center w-full  items-center">
      <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full w-full ">
        {/* Left Top */}
        <div className="mt-12 flex items-end justify-end transform transition-transform duration-300 hover:scale-105">
          <img
            src={images[1].src}
            alt={images[1].alt}
            className="w-full h-full max-w-[300px] max-h-[150px] md:max-w-[350px] md:max-h-[200px] lg:max-w-[450px] lg:max-h-[300px] object-fit rounded-2xl shadow-lg"
          />
        </div>
        {/* Right Top */}
        <div className="mb-12 flex items-end transform transition-transform duration-300 hover:scale-105">
          <img
            src={images[2].src}
            alt={images[2].alt}
            className="w-full h-full max-w-[150px] max-h-[150px] md:max-w-[200px] md:max-h-[200px] lg:max-w-[300px] lg:max-h-[300px] object-cover rounded-2xl shadow-lg"
          />
        </div>
        {/* Left Bottom */}
        <div className="flex items-start justify-end transform transition-transform duration-300 hover:scale-105">
          <img
            src={images[3].src}
            alt={images[3].alt}
            className="w-full h-full max-w-[150px] max-h-[150px] md:max-w-[200px] md:max-h-[200px] lg:max-w-[300px] lg:max-h-[300px] object-cover rounded-2xl shadow-lg"
          />
        </div>
        {/* Right Bottom */}
        <div className="mb-12 -mt-12 flex items-start transform transition-transform duration-300 hover:scale-105">
          <img
            src={images[4].src}
            alt={images[4].alt}
            className="w-full h-full max-w-[280px] max-h-[150px] md:max-w-[330px] md:max-h-[200px] lg:max-w-[430px] lg:max-h-[300px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
