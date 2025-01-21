import React from "react";
import "./styles.css";

const HomePage = (props) => {
  return (
    <>
<<<<<<< Updated upstream
      <div>
        <div className="homepage">
          {/* Sección inicial con imagen de fondo */}

          <div
            className="hero-section lg:max-h-screen md:max-h-screen lg:min-h-3.5 md:min-h-3.5"
=======
      <div className="homepage">
        {/* Sección inicial con imagen de fondo */}
        <div className="lg:max-h-screen md:max-h-screen ">
          <div
            className="hero-section"
>>>>>>> Stashed changes
            style={{ backgroundImage: `url(${props.image})` }}>
            <div className="hero-content z-10">
              <h1 className="text-white text-6xl font-bold">{props.title}</h1>
            </div>
            {/* Degradado transparente */}
            <div className="gradient-overlay"></div>
            {/* Triángulo rectángulo */}
            <div className="triangle-overlay"></div>
          </div>
          {/* Nuevo overlay para componentes dinámicos */}
        </div>
      </div>
      <div
        className={`dynamic-overlay`}
        style={{
          // position: "relative",
          marginTop: `-${props.overlayMargin}px`,
        }}>
        {props.children}
      </div>
    </>
  );
};

export default HomePage;
