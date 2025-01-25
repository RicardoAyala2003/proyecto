import React, { useState } from "react";
import Masonry from "react-masonry-css";
import { Button } from "antd";

const imageData = [
  {
    src: "/Images/img (1).jpeg",
    description: "A beautiful sunrise over the mountains.",
  },
  {
    src: "/Images/img (2).jpeg",
    description: "A serene beach with crystal clear water.",
  },
  {
    src: "/Images/img (3).jpeg",
    description: "A bustling cityscape at night.",
  },
  {
    src: "/Images/img (4).jpeg",
    description: "A tranquil forest pathway.",
  },
  {
    src: "/Images/img (5).jpeg",
    description: "A vibrant field of tulips in spring.",
  },
  {
    src: "/Images/img (6).jpeg",
    description: "A majestic waterfall cascading down.",
  },
];

const MasonryImageGrid = () => {
  const [showDescriptions, setShowDescriptions] = useState(false);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div className="p-6">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto"
        columnClassName="masonry-column">
        {imageData.map((image, index) => (
          <div
            key={index}
            className="relative group mb-6 bg-black rounded-lg overflow-hidden">
            <img
              src={image.src}
              alt="Gallery item"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <p className="text-white text-center px-4">{image.description}</p>
            </div>
          </div>
        ))}
        {/* Add black cards to fill the remaining space */}
        {Array.from({ length: 6 - (imageData.length % 3) }).map((_, idx) => (
          <div key={`empty-${idx}`} className="h-48 bg-black rounded-lg"></div>
        ))}
      </Masonry>
      {/* Mobile button to toggle descriptions */}
      <div className="mt-4 text-center md:hidden">
        <Button
          type="primary"
          className="bg-blue-800 hover:bg-blue-900 text-white"
          onClick={() => setShowDescriptions(!showDescriptions)}>
          {showDescriptions ? "Hide Details" : "Show Details"}
        </Button>
        {showDescriptions && (
          <div className="mt-4">
            {imageData.map((image, index) => (
              <p key={index} className="text-gray-700 mb-2">
                {image.description}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MasonryImageGrid;
