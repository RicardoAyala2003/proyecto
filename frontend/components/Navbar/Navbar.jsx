import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "antd";

const { Header, Content } = Layout;

const Navbar = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Navbar */}
      <Header
        className={`fixed top-0 left-0 w-full z-10 shadow-md transition-all duration-300 ${
          scrolled ? "h-8" : "h-32"
        }  `}
        style={{
          // backgroundColor: "transparent",
          backgroundColor: scrolled ? "rgba(0, 33, 64, 0.8)" : "transparent", // Color dinámico
          // borderBottom: "1px solid black", // Línea negra en la parte inferior
        }}>
        <div className="container mx-auto flex items-center justify-between h-full">
          {/* Menú Izquierdo */}
          <nav className="flex items-center text-white font-medium text-lg space-x-6">
            <Link
              to="/"
              className="hover:text-gray-300"
              style={{ textShadow: "1px 1px 2px black" }}>
              Inicio
            </Link>
            <Link
              to="/ministerio"
              className="hover:text-gray-300"
              style={{ textShadow: "1px 1px 2px black" }}>
              Ministerio
            </Link>
            <Link
              to="/multimedia"
              className="hover:text-gray-300"
              style={{ textShadow: "1px 1px 2px black" }}>
              Multimedia
            </Link>
          </nav>

          {/* Logo Centrado */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="flex items-center">
              <img
                src="/Resources/logo.png"
                alt="Brand Logo"
                className={`transition-all duration-300 ${
                  scrolled ? "h-6" : "h-20"
                } w-auto`}
              />
            </Link>
          </div>

          {/* Menú Derecho */}
          <nav className="flex items-center text-white font-medium text-lg space-x-6">
            <Link
              to="/aportaciones"
              className="hover:text-gray-300"
              style={{ textShadow: "1px 1px 2px black" }}>
              Aportaciones
            </Link>
            <Link
              to="/envivo"
              className="hover:text-gray-300"
              style={{ textShadow: "1px 1px 2px black" }}>
              En Vivo
            </Link>
          </nav>
        </div>
      </Header>

      {/* Contenido */}
      <Content style={{ marginTop: 120, padding: "20px" }}>{children}</Content>
    </Layout>
  );
};

export default Navbar;
