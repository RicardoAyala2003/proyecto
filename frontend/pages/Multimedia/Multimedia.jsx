import React from "react";
import ImagesBanner from "../../components/ImagesBanner/ImagesBanner";

import MasonryGallery from "../../components/MasonryGallery/MasonryGallery";

import ImagesCarousel from "../../components/Carousels/ImagesCarousel";

import VideosCarousel from "../../components/Carousels/VideosCarousel";

import GridGallery from "../../components/Grid/GridGallery";

import { Divider } from "antd";

const Multimedia = () => {
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

  const videos = [
    "https://www.youtube.com/embed/-pl3VFsjcrI",
    "https://www.youtube.com/embed/Roo4uEQzJms",
    "https://www.youtube.com/embed/Z5UiBleDnhY",
  ];

  const dominantColor = "#193753"; // Color principal

  return (
    <div>
      <ImagesBanner
        title="Multimedia"
        image="/Covers/multimedia.jpg"></ImagesBanner>

      {/* <GridGallery /> */}

      <div style={{ padding: "20px" }}>
        <MasonryGallery images={images} />
      </div>

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

      <VideosCarousel videos={videos} />
    </div>
  );
};

export default Multimedia;
