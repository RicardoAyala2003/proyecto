import React from "react";
import "./styles.css";

const HomePage = (props) => {
  return (
    <>
      <div>
        <div className="homepage">
          {/* Sección inicial con imagen de fondo */}

          <div
            className="hero-section lg:max-h-screen md:max-h-screen lg:min-h-3.5 md:min-h-3.5"
            style={{ backgroundImage: `url(${props.image})` }}>
            {/* Blue Overlay */}
            <div className="blue-overlay"></div>

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
          marginTop: `${
            window.innerWidth <= 640 && props.overlayMargin != null
              ? -256
              : -props.overlayMargin
          }px`,
        }}>
        <div className="w-screen justify-center items-center z-10">
          <div className="flex justify-center items-center z-10">
            <div className="flex flex-col  h-full w-full">
              <div className="mb-32">
                <div className="hero-content z-10 ">
                  <h1 className="text-white text-6xl font-bold text-center">
                    {props.title}
                  </h1>
                </div>

                <h4 className="mt-2 text-white font-bold text-center">
                  {props.description}
                </h4>
              </div>
              <div className=" w-full">{props.children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
