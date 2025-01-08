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

      {/* Image Banner 2 */}
      <div style={{ marginTop: "100px", marginBottom: "100px" }}>
        <div
          className="hero-section h-5/6 flex items-center justify-center text-center"
          style={{ backgroundImage: `url(/Covers/ministerio.jpg)` }}>
          <div className="hero-content z-10">
            <h1 className="text-white text-3xl md:text-5xl font-bold leading-snug">
              ¡<span className="text-4xl md:text-6xl">Somos</span> una Iglesia
              <span className="text-4xl md:text-6xl"> Generacional</span>
              ,
              <br />
              <span className="text-4xl md:text-6xl">Prosperados</span> por la
              <span className="text-4xl md:text-6xl "> Palabra</span>!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ministerio;
