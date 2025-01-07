import React from "react";
import ImagesBanner from "../../components/ImagesBanner/ImagesBanner";

import MinisterioGallery from "../../components/MasonryGallery/MinisterioGallery";

const Ministerio = () => {
  return (
    <div>
      <ImagesBanner title="Ministerio" image="/Covers/ministerio.jpg">
        <div className="w-screen justify-center items-center z-10">
          <div className="flex justify-center items-center z-10">
            <MinisterioGallery />
          </div>
        </div>
      </ImagesBanner>
      <h1>Ministerio</h1>
      <p>Bienvenido a la página del Ministerio.</p>
    </div>
  );
};

export default Ministerio;
