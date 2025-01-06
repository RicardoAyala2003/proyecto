import React from "react";

const images = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/firedarkpage.appspot.com/o/images%2Fjake%20mago.jpg825a0c9a-7ac4-41e5-9987-d77f1a513a95?alt=media&token=a21ce907-6ad1-4ed5-8f33-c485929d1b09",
    alt: "Image 1",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/firedarkpage.appspot.com/o/images%2Fdownload%20(26).jpg151f2922-e9dd-41b6-8cbf-bcc66e45d941?alt=media&token=66e83cbe-4d56-4d74-9e14-d6469f5b5f1a",
    alt: "Image 2",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/firedarkpage.appspot.com/o/images%2F2096210.jpg00ed0e79-a541-40af-aa4a-6ff6eafc2602?alt=media&token=ddeb49f1-0832-47ba-b990-e4751bf9ad3d",
    alt: "Image 3",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/firedarkpage.appspot.com/o/images%2F2096210.jpg00ed0e79-a541-40af-aa4a-6ff6eafc2602?alt=media&token=ddeb49f1-0832-47ba-b990-e4751bf9ad3d",
    alt: "Image 4",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/firedarkpage.appspot.com/o/images%2Fgiphy.webpde69c5c3-918c-4b27-8bae-a984f6564b0c?alt=media&token=a82f5f45-644b-43ae-9d27-7cd190ad9f0e",
    alt: "Image 5",
  },
];

const HomeGallery = () => {
  return (
    <div className="flex justify-center items-center  z-10">
      <div className="grid grid-cols-3 grid-rows-2 gap-4 h-full w-full ">
        {/* Left Top */}
        <div className="flex items-end justify-end transform transition-transform duration-300 hover:scale-105">
          <img
            src={images[1].src}
            alt={images[1].alt}
            className="w-32 h-32 object-cover rounded-lg shadow-md"
          />
        </div>
        {/* Center Vertical */}
        <div className="row-span-2 flex justify-center transform transition-transform duration-300 hover:scale-105">
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="h-full w-40 object-cover rounded-lg shadow-md"
          />
        </div>
        {/* Right Top */}
        <div className="flex items-end transform transition-transform duration-300 hover:scale-105">
          <img
            src={images[2].src}
            alt={images[2].alt}
            className="w-48 h-32 object-cover rounded-lg shadow-md"
          />
        </div>
        {/* Left Bottom */}
        <div className="flex items-start justify-end transform transition-transform duration-300 hover:scale-105">
          <img
            src={images[3].src}
            alt={images[3].alt}
            className="w-48 h-32 object-cover rounded-lg shadow-md"
          />
        </div>
        {/* Right Bottom */}
        <div className="flex items-start transform transition-transform duration-300 hover:scale-105">
          <img
            src={images[4].src}
            alt={images[4].alt}
            className="w-32 h-32 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
