import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "antd";

const { Header, Content } = Layout;

const Navbar = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Navbar */}
      <Header
        className="fixed top-0 left-0 w-full z-10 shadow-md"
        style={{
          backgroundColor: "rgba(0, 33, 64, 0.9)", // Azul oscuro transparente
          backdropFilter: "blur(10px)",
        }}>
        <div className="container mx-auto flex items-center justify-center h-16">
          {/* Menú */}
          <nav className="flex items-center text-white font-medium text-lg space-x-6">
            <Link to="/" className="hover:text-gray-300">
              Inicio
            </Link>
            <Link to="/ministerio" className="hover:text-gray-300">
              Ministerio
            </Link>
            <Link to="/multimedia" className="hover:text-gray-300">
              Multimedia
            </Link>

            {/* Logo Centrado */}
            <Link to="/" className="flex items-center">
              <img
                src="/ProyectImages/Resources/logo.png"
                alt="Brand Logo"
                className="h-10 w-auto mx-4"
              />
            </Link>

            <Link to="/aportaciones" className="hover:text-gray-300">
              Aportaciones
            </Link>
            <Link to="/envivo" className="hover:text-gray-300">
              En Vivo
            </Link>
          </nav>
        </div>
      </Header>

      {/* Contenido */}
      <Content style={{ marginTop: 80, padding: "20px" }}>{children}</Content>
    </Layout>
  );
};

export default Navbar;
