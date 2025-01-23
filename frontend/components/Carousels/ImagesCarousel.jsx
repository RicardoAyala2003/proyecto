import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = ({ images }) => {
  // Componente para flechas personalizadas
  const CustomArrow = ({ onClick, direction }) => (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        width: "10%", // Ocupa un 10% del ancho del componente
        height: "100%", // Ocupa toda la altura del componente
        display: "flex",
        justifyContent: direction === "left" ? "flex-start" : "flex-end",
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
          margin: direction === "left" ? "0 10px 0 0" : "0 0 0 10px",
        }}>
        {direction === "left" ? "‹" : "›"}
      </span>
    </div>
  );

  const settings = {
    dots: false, // Sin puntos de navegación
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
    nextArrow: <CustomArrow direction="right" />, // Flecha derecha personalizada
    prevArrow: <CustomArrow direction="left" />, // Flecha izquierda personalizada
    // arrows: true, // Habilitamos las flechas personalizadas
  };

  return (
    <div style={{ width: "100%", margin: "0 auto", padding: "20px" }}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img.src}
              alt={`Image ${index + 1}`}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
