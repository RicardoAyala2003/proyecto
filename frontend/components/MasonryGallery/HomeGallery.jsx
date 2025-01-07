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
    <div className="flex justify-center w-screen max-w-screen-lg items-center">
      <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full w-full bg-green-500">
        {/* Left Top */}
        <div className="mt-12 flex items-end justify-end transform transition-transform duration-300 hover:scale-105">
          <img
            src={images[1].src}
            alt={images[1].alt}
            className="w-full h-full max-w-[300px] max-h-[150px] md:max-w-[350px] md:max-h-[200px] lg:max-w-[450px] lg:max-h-[300px] object-cover rounded-2xl shadow-lg"
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
