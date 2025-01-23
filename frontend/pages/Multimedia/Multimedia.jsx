import React from "react";
import ImagesBanner from "../../components/ImagesBanner/ImagesBanner";

import MasonryGallery from "../../components/MasonryGallery/MasonryGallery";

import ImagesCarousel from "../../components/Carousels/ImagesCarousel";

import { Divider } from "antd";

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

  const dominantColor = "#193753"; // Color principal

  return (
    <div>
      {/* <ImagesBanner title="Multimedia" image="/Covers/multimedia.jpg">
        <MasonryGallery images={images} />
      </ImagesBanner> */}

      <ImagesBanner
        title="Multimedia"
        image="/Covers/multimedia.jpg"></ImagesBanner>
      <Divider
        style={{
          borderColor: dominantColor,
        }}>
        Imagenes
      </Divider>

      <ImagesCarousel images={images} />

      <Divider
        style={{
          borderColor: dominantColor,
        }}>
        Videos
      </Divider>
    </div>
  );
};

export default Multimedia;
