import React from "react";

const GridGallery = () => {
  const images = [
    {
      src: "/Images/img (1).jpeg",
      alt: "Image 1",
    },
    {
      src: "/Images/img (2).jpeg",
      alt: "Image 2",
    },
    {
      src: "/Images/img (3).jpeg",
      alt: "Image 3",
    },
    {
      src: "/Images/img (4).jpeg",
      alt: "Image 4",
    },
    {
      src: "/Images/img (5).jpeg",
      alt: "Image 5",
    },
    {
      src: "/Images/img (6).jpeg",
      alt: "Image 6",
    },
    {
      src: "/Images/img (7).jpeg",
      alt: "Image 7",
    },
    {
      src: "/Images/img (8).jpeg",
      alt: "Image 8",
    },

    // Agrega más URLs de imágenes
  ];

  return (
    <div className="grid-gallery">
      <div className="grid grid-cols-5 grid-rows-5 gap-4">
        <div className="col-span-3 row-span-3">
          {<img src={images[0].src} alt={images[0].alt} />}
        </div>

        <div className="col-span-2 row-span-2 col-start-1 row-start-4">
          {<img src={images[1].src} alt={images[1].alt} />}
        </div>
        <div className="row-span-2 col-start-3 row-start-4">
          {<img src={images[2].src} alt={images[2].alt} />}
        </div>
        <div className="row-span-2 col-start-4 row-start-1">
          {<img src={images[3].src} alt={images[3].alt} />}
        </div>
        <div className="row-span-2 col-start-5 row-start-1">
          {<img src={images[4].src} alt={images[4].alt} />}
        </div>
        <div className="row-span-3 col-start-4 row-start-3">
          {<img src={images[5].src} alt={images[5].alt} />}
        </div>
        <div className="row-span-3 col-start-5 row-start-3">
          {<img src={images[6].src} alt={images[6].alt} />}
        </div>
      </div>
    </div>
  );
};

export default GridGallery;
