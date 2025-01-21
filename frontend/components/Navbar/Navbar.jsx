import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Importa useLocation
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
  const location = useLocation(); // Hook para obtener la ubicación actual

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

  // Efecto para hacer scroll hacia arriba al cambiar de ruta
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const toggleDrawer = () => setDrawerVisible(!drawerVisible);

  const menuItems = [
    { label: "Inicio", to: "/", icon: <HomeOutlined /> },
    { label: "Ministerio", to: "/ministerio", icon: <TeamOutlined /> },
    { label: "Multimedia", to: "/multimedia", icon: <VideoCameraOutlined /> },
    { label: "Aportaciones", to: "/aportaciones", icon: <DollarOutlined /> },
    { label: "En Vivo", to: "/envivo", icon: <PlayCircleOutlined /> },
  ];

  return (
    <Layout
      className="bg-purple-500"
      style={{ minHeight: "100vh", maxWidth: "100%" }}>
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
              <MenuOutlined
                onClick={toggleDrawer}
                style={{
                  fontSize: "24px",
                  color: "white",
                  cursor: "pointer",
                }}
              />
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
        closeIcon={<span style={{ color: "white", fontSize: "16px" }}>×</span>}>
        <Menu
          mode="vertical"
          style={{
            background: "transparent",
            border: "none",
            color: "blue",
          }}>
          {menuItems.map((item) => (
            <Menu.Item
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
                userSelect: "none",
              }}>
              <Link
                className="no-hover"
                to={item.to}
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  outline: "none",
                }}>
                {item.label}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Drawer>

      <div className="bg-green-500">
        <Content>{children}</Content>
      </div>
    </Layout>
  );
};

export default Navbar;
