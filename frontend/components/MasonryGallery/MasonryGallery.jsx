import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { Image as AntImage } from "antd";

import "./styles.css";

const SingleImageCardComponent = ({ Img_DATA }) => {
  if (!Img_DATA) return null;

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Create a native Image object to get the natural dimensions
    const img = document.createElement("img");
    img.src = Img_DATA;

    img.onload = () => {
      setDimensions({ width: img.naturalWidth, height: img.naturalHeight });
    };

    return () => {
      // Clean up the image object
      img.onload = null;
    };
  }, [Img_DATA]);

  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          width: "100%", // Responsive width
          aspectRatio: `${dimensions.width} / ${dimensions.height}`, // Maintains original aspect ratio
          position: "relative",
        }}>
        <AntImage.PreviewGroup
          items={[
            "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
            "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
            "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
          ]}>
          <AntImage
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={Img_DATA}
          />
        </AntImage.PreviewGroup>
      </div>
    </div>
  );
};
const MasonryGallery = ({ images }) => {
  console.log("TESTING");

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      console.log("Window width:", window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div
        style={{
          width: "100%",
        }}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{
            350: 2,
            450: 2,
            750: 3,
            900: 4,
            1000: 5,
            1200: 6,
          }}>
          <Masonry>
            {images.map((image, index) => (
              <SingleImageCardComponent Img_DATA={image.src} />
              // <img style={{ width: "64px", height: "64px" }} src={image.src} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default MasonryGallery;
