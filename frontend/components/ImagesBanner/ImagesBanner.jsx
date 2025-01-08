import React from "react";
import "./styles.css";

const HomePage = (props) => {
  return (
    <div className="homepage">
      {/* Sección inicial con imagen de fondo */}
      <div
        className="hero-section h-screen"
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
      <div
        className={`dynamic-overlay -mt-64`}
        style={{
          position: "relative",
        }}>
        {props.children}
      </div>
    </div>
  );
};

export default HomePage;
