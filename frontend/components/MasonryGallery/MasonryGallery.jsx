import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { X, Info } from "lucide-react";
import { isMobile } from "react-device-detect";
import "./styles.css";

const ResponsiveGallery = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      {/* Masonry Grid */}
      <ResponsiveMasonry
        columnsCountBreakPoints={{
          350: 2,
          450: 2,
          750: 3,
          900: 4,
          1000: 4,
          1200: 4,
        }}>
        <Masonry>
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                padding: "8px",
                borderRadius: "12px",
                overflow: "hidden",
              }}
              onClick={() => openModal(image.src)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}>
              <img
                src={image.src}
                alt={image.alt || `Image ${index}`}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  transition: "filter 0.3s ease",
                  filter:
                    hoveredIndex === index
                      ? "brightness(50%)"
                      : "brightness(100%)",
                }}
              />
              {hoveredIndex === index && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "bold",
                    textShadow: "0px 2px 4px rgba(0, 0, 0, 0.8)",
                  }}>
                  {image.description || "No description available"}
                </div>
              )}
              {/* {window.innerWidth <= 768 && (
                <button
                  onClick={() => setHoveredIndex(index)}
                  style={{
                    position: "absolute",
                    bottom: "8px",
                    right: "8px",
                    background: "rgba(0, 0, 0, 0.6)",
                    border: "none",
                    borderRadius: "50%",
                    padding: "8px",
                    cursor: "pointer",
                    color: "white",
                    zIndex: 10,
                  }}
                  aria-label="Show description">
                  <Info size={20} />
                </button>
              )} */}
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="justify-center items-center flex flex-center"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={closeModal}>
          <div
            className="justify-center items-center flex flex-center"
            style={{
              // position: "relative",
              height: "80%",
              width: "auto",
            }}>
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "30px",
                right: 0,
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "white",
                fontSize: "24px",
              }}
              aria-label="Close">
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Preview"
              style={{
                width: `${isMobile ? "80%" : "auto"}`,
                height: `${isMobile ? "auto" : "100%"}`,
                borderRadius: "12px",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponsiveGallery;

//       {/* Modal */}
//       {isModalOpen && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100vw",
//             height: "100vh",
//             backgroundColor: "rgba(0, 0, 0, 0.8)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 1000,
//           }}>
//           <div
//             style={{
//               position: "relative",
//               maxWidth: "90%",
//               maxHeight: "90%",
//             }}>
//             <button
//               onClick={closeModal}
//               style={{
//                 position: "absolute",
//                 top: "-40px",
//                 right: 0,
//                 background: "none",
//                 border: "none",
//                 cursor: "pointer",
//                 color: "white",
//                 fontSize: "24px",
//               }}
//               aria-label="Close">
//               <X size={32} />
//             </button>
//             <img
//               src={selectedImage}
//               alt="Preview"
//               style={{
//                 width: "auto",
//                 height: "auto",
//                 maxWidth: "100%",
//                 maxHeight: "100%",
//                 borderRadius: "12px",
//                 boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
//               }}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ResponsiveGallery;
