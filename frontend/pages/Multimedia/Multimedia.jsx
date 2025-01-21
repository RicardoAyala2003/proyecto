import React from "react";
import ImagesBanner from "../../components/ImagesBanner/ImagesBanner";

import MasonryGallery from "../../components/MasonryGallery/MasonryGallery";

const Multimedia = () => {
  const images = [
    {
      src: "/Covers/multimedia.jpg",
      alt: "Image 1",
    },
    {
      src: "/Covers/inicio.jpg",
      alt: "Image 2",
    },
    {
      src: "/Covers/inicio2.jpg",
      alt: "Image 3",
    },
    {
      src: "/Covers/ministerio.jpg",
      alt: "Image 4",
    },
    {
      src: "/Covers/orando.jpg",
      alt: "Image 5",
    },
    {
      src: "/Covers/registro.jpg",
      alt: "Image 6",
    },
    {
      src: "/Covers/inicio.jpg",
      alt: "Image 7",
    },
    {
      src: "/Covers/multimedia.jpg",
      alt: "Image 8",
    },

    // Agrega más URLs de imágenes
  ];
  return (
    <div>
      <ImagesBanner title="Multimedia" image="/Covers/multimedia.jpg">
        <MasonryGallery images={images} />
      </ImagesBanner>
      <h1>Multimedia Page</h1>
      <p>Welcome to the multimedia page!</p>
    </div>
  );
};

export default Multimedia;
