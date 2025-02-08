import React from "react";
import ImagesBanner from "../../components/ImagesBanner/ImagesBanner";

import MasonryGallery from "../../components/MasonryGallery/MasonryGallery";

import ImagesCarousel from "../../components/Carousels/ImagesCarousel";

import VideosCarousel from "../../components/Carousels/VideosCarousel";

import GridGallery from "../../components/Grid/GridGallery";

import SocialMediaCards from "../../components/SocialMediaCards/SocialMediaCards";

import VideoCard from "../../components/VideoCard/VideoCard";

import { Divider, Card } from "antd";

const Multimedia = () => {
  const images = [
    // {
    //   src: "/Images/img (1).jpeg",
    //   alt: "Image 1",
    // },
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
    // {
    //   src: "/Images/img (6).jpeg",
    //   alt: "Image 6",
    // },
    // {
    //   src: "/Images/img (7).jpeg",
    //   alt: "Image 7",
    // },
    // {
    //   src: "/Images/img (8).jpeg",
    //   alt: "Image 8",
    // },
    // Agrega más URLs de imágenes
  ];

  const images2 = [
    {
      src: "/Images/img (1).jpeg",
      alt: "Image 1",
    },
    // {
    //   src: "/Images/img (2).jpeg",
    //   alt: "Image 2",
    // },
    // {
    //   src: "/Images/img (3).jpeg",
    //   alt: "Image 3",
    // },
    // {
    //   src: "/Images/img (4).jpeg",
    //   alt: "Image 4",
    // },
    // {
    //   src: "/Images/img (5).jpeg",
    //   alt: "Image 5",
    // },
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

  const MasonryCategory = ({ title, images }) => {
    return (
      <div className="bg-black bg-opacity-30 rounded-2xl p-4 mb-8">
        <h2 className="text-white text-xl font-semibold mb-4">{title}</h2>
        <MasonryGallery images={images} />
      </div>
    );
  };

  const GalleryPage = () => {
    return (
      <div className="bg-gradient-to-b from-transparent to-blue-600 md:px-1 sm:px-1 lg:px-32 py-16">
        {/* <MasonryCategory title="Categoría 1" images={images} />
         */}
        <MasonryGallery images={images} />
        <div className="mb-32" />
        <MasonryCategory title="Nuestras Primeras Reuniones" images={images2} />
      </div>
    );
  };

  return (
    <div>
      <ImagesBanner
        title="Multimedia"
        image="/Covers/multimedia.jpg"
        overlayMargin={424}>
        {/* <Divider
          style={{
            borderColor: dominantColor,
          }}>
          Imagenes
        </Divider>
        <ImagesCarousel images={images} /> */}
        <div className="w-full">
          {/* <GridGallery /> */}
          <div className="sm:px-12">
            <VideoCard />
          </div>
          {/* <div className="bg-gradient-to-b from-transparent to-blue-600 md:px-1 sm:px-1 lg:px-32 py-16">
            <MasonryGallery images={images} />

            <MasonryGallery images={images2} />
          </div> */}
          <GalleryPage />

          {/* <div style={{ padding: "20px" }}>
            <MasonryGallery images={images} />
          </div> */}
          {/* <Divider
            style={{
              borderColor: dominantColor,
            }}>
            Videos
          </Divider>
          <VideosCarousel videos={videos} />{" "} */}
          <div className="bg-blue-100 md:px-1 sm:px-1 lg:px-16 py-16 ">
            <SocialMediaCards />
          </div>
        </div>
      </ImagesBanner>
    </div>
  );
};

export default Multimedia;
