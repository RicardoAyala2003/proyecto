import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const MasonryGallery = ({ images }) => {
  return (
    <div
      className="w-screen z-10"
      style={{ marginTop: "calc( - 64px)" }}
      align="center">
      <div className="w-10/12">
        <ResponsiveMasonry
          columnsCountBreakPoints={{
            350: 1,
            450: 2,
            750: 3,
            900: 4,
            1000: 5,
            1200: 5,
          }}>
          <Masonry gutter="16px" sequential={true}>
            {images.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover "
                />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default MasonryGallery;
