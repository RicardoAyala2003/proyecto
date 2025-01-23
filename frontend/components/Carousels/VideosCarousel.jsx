import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoCarousel = ({ videos }) => {
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
        {videos.map((video, index) => (
          <div
            key={index}
            style={{
              padding: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
            }}>
            <div style={{ width: "100%", height: "50%", padding: "10px" }}>
              <iframe
                src={video}
                title={`Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  width: "100%",
                  height: "315px",
                  borderRadius: "8px",
                }}></iframe>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoCarousel;
