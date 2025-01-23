import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./CollageQR.css";

const CollageQR = () => {
  const images = [
    "/Images/img (1).jpeg",
    "/Images/img (2).jpeg",
    "/Images/img (3).jpeg",
    "/Images/img (4).jpeg",
    "/Images/img (5).jpeg",
    "/Images/img (6).jpeg",
    "/Images/img (7).jpeg",
  ];

  const imagesBottom = [
    "/Images/img (7).jpeg",
    "/Images/img (6).jpeg",
    "/Images/img (5).jpeg",
    "/Images/img (4).jpeg",
    "/Images/img (3).jpeg",
    "/Images/img (2).jpeg",
    "/Images/img (1).jpeg",
  ];

  return (
    <div className="collage-container">
      <div className="collage-scroll">
        <div className="collage-items">
          {images.map((src, index) => (
            <div key={`a-${index}`} className="collage-item">
              <img src={src} alt={`Collage ${index}`} loading="lazy" />
            </div>
          ))}
          {images.map((src, index) => (
            <div key={`b-${index}`} className="collage-item">
              <img
                src={src}
                alt={`Collage duplicated ${index}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-5"></div>

      <div className="-mx-12">
        <div className="collage-scroll">
          <div className="collage-items">
            {imagesBottom.map((src, index) => (
              <div key={`a-${index}`} className="collage-item">
                <img src={src} alt={`Collage ${index}`} loading="lazy" />
              </div>
            ))}
            {imagesBottom.map((src, index) => (
              <div key={`b-${index}`} className="collage-item">
                <img
                  src={src}
                  alt={`Collage duplicated ${index}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Código QR superpuesto */}
      <div className="qr-overlay">
        <QRCodeCanvas
          value="https://tusdonaciones.org"
          size={200}
          bgColor="#ffffff"
          fgColor="#000000"
          level="Q"
        />
        <p>Escanea para donar</p>
      </div>
    </div>
  );
};

export default CollageQR;
