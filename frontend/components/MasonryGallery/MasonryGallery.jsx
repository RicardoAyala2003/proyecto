import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { Image } from "antd";

const MasonryGallery = ({ images }) => {
  return (
    <div>
      <div>
        <ResponsiveMasonry
          columnsCountBreakPoints={{
            350: 1,
            450: 2,
            750: 3,
            900: 4,
            1000: 5,
            1200: 6,
          }}>
          <Masonry>
            {images.map((image, index) => (
              <Image
                style={{ width: "100%", height: "auto" }}
                src={image.src}
                alt={image.alt}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default MasonryGallery;
