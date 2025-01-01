import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState("");

  // Actualiza la hora cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const day = now.toLocaleDateString("es-ES", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      const time = now.toLocaleTimeString("es-ES");
      setCurrentTime(`${day}, ${time}`);
    }, 1000);

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonte
  }, []);

  return (
    <nav className="bg-[#002140] text-white shadow-md fixed w-full z-10">
      <div className="container mx-auto flex flex-col items-center justify-center h-20">
        {/* Logo */}
        <div className="mb-2">
          <Link to="/" className="text-2xl font-bold text-white">
            <img
              src="/ProyectImages/Resources/logo.png"
              alt="Brand Logo"
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Navegación */}
        <Menu
          mode="horizontal"
          theme="dark"
          className="bg-[#002140] text-white"
          selectable={false}>
          <Menu.Item key="1">
            <Link to="/">Inicio</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/ministerio">Ministerio</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/multimedia">Multimedia</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/aportaciones">Aportaciones</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/envivo">En Vivo</Link>
          </Menu.Item>
        </Menu>

        {/* Reloj */}
        <div className="text-sm text-white mt-2">{currentTime}</div>
      </div>
    </nav>
  );
};

export default Navbar;
