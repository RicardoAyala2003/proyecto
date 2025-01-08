import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout, Drawer, Menu } from "antd";
import {
  HomeOutlined,
  TeamOutlined,
  VideoCameraOutlined,
  DollarOutlined,
  PlayCircleOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import "./styles.css";

const { Header, Content } = Layout;

const Navbar = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDrawer = () => setDrawerVisible(!drawerVisible);

  const menuItems = [
    { label: "Inicio", to: "/", icon: <HomeOutlined /> },
    { label: "Ministerio", to: "/ministerio", icon: <TeamOutlined /> },
    { label: "Multimedia", to: "/multimedia", icon: <VideoCameraOutlined /> },
    { label: "Aportaciones", to: "/aportaciones", icon: <DollarOutlined /> },
    { label: "En Vivo", to: "/envivo", icon: <PlayCircleOutlined /> },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
          scrolled ? "h-8" : "h-32"
        }`}
        style={{
          background: scrolled
            ? "rgba(0, 33, 64, 0.8)"
            : "linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 0))",
        }}>
        <div className="container mx-auto flex items-center justify-between h-full">
          {isMobile ? (
            <>
              {/* Icono del menú hamburguesa */}
              <MenuOutlined
                onClick={toggleDrawer}
                style={{
                  fontSize: "24px",
                  color: "white",
                  cursor: "pointer",
                }}
              />
              {/* Logo Centrado */}
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <Link to="/">
                  <img
                    src={
                      scrolled ? "/Resources/logo3.png" : "/Resources/logo2.png"
                    }
                    alt="Brand Logo"
                    className={`transition-all duration-300 ${
                      scrolled ? "h-6" : "h-20"
                    } w-auto`}
                  />
                </Link>
              </div>
            </>
          ) : (
            <>
              {/* Menú izquierdo */}
              <nav className="flex items-center text-white font-medium text-lg space-x-6">
                {menuItems.slice(0, 3).map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="hover:text-gray-300"
                    style={{ textShadow: "1px 1px 2px black" }}>
                    {item.label}
                  </Link>
                ))}
              </nav>
              {/* Logo Centrado */}
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <Link to="/">
                  <img
                    src={
                      scrolled ? "/Resources/logo3.png" : "/Resources/logo2.png"
                    }
                    alt="Brand Logo"
                    className={`transition-all duration-300 ${
                      scrolled ? "h-6" : "h-20"
                    } w-auto`}
                  />
                </Link>
              </div>
              {/* Menú Derecho */}
              <nav className="flex items-center text-white font-medium text-lg space-x-6">
                {menuItems.slice(3).map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="hover:text-gray-300"
                    style={{ textShadow: "1px 1px 2px black" }}>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </>
          )}
        </div>
      </Header>

      {/* Drawer para el menú en móviles */}
      <Drawer
        title={
          <span
            style={{ fontSize: "24px", fontWeight: "bold", color: "white" }}>
            Menú
          </span>
        }
        placement="left"
        onClose={toggleDrawer}
        visible={drawerVisible}
        bodyStyle={{ padding: 0 }}
        drawerStyle={{
          background:
            "linear-gradient(to bottom, rgba(0, 33, 64, 0.9), rgba(0, 33, 64, 0.8))",
          color: "white",
        }}
        closeIcon={<span style={{ color: "white", fontSize: "16px" }}>×</span>} // Cambiar el color del icono de cerrar
      >
        <Menu
          mode="vertical"
          style={{
            background: "transparent",
            border: "none",
            color: "blue",
          }}>
          {menuItems.map((item) => (
            <Menu.Item
              itemActiveBg="red"
              key={item.label}
              icon={item.icon}
              className="text-2xl no-hover"
              onClick={toggleDrawer}
              style={{
                width: "100%",
                margin: 0,
                padding: "34px 24px",
                color: "white",
                backgroundColor: "transparent",
                userSelect: "none", // Evitar la selección de texto
              }}>
              <Link
                className="no-hover"
                to={item.to}
                style={{
                  color: "inherit",
                  textDecoration: "none", // Evitar subrayado
                  outline: "none", // Eliminar el borde de selección
                }}>
                {item.label}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Drawer>

      {/* Contenido */}
      <Content>{children}</Content>
    </Layout>
  );
};

export default Navbar;
