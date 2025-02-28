import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Image } from "antd";

const ImageCarousel = ({ images }) => {
  const CustomArrow = ({ onClick, direction }) => (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: direction === "left" ? 0 : "unset",
        right: direction === "right" ? 0 : "unset",
        width: "10%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `linear-gradient(${
          direction === "left" ? "to right" : "to left"
        }, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))`,
        zIndex: 2,
        cursor: "pointer",
      }}>
      <span
        style={{
          fontSize: "72px",
          color: "black",
          userSelect: "none",
        }}>
        {direction === "left" ? "‹" : "›"}
      </span>
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
  };

  return (
    <div
      style={{
        width: "100%",
        margin: "0 auto",
        position: "relative",
      }}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div
            key={index}
            style={{
              className:
                "overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105",
              width: "100%",
              height: "auto",
              //   backgroundColor: "blue",
              //   padding: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}>
            <div
              style={{
                width: "100%",
                height: "auto",
                padding: "10px",
                // backgroundColor: "red",
              }}>
              <Image
                src={img.src}
                alt={`Image ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "8px",

                  // padding: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
