// import React from "react";
// import ImagesBanner from "../../components/ImagesBanner/ImagesBanner";

// const Aportaciones = () => {
//   return (
//     <div>
//       <ImagesBanner
//         title="Aportaciones"
//         image="/Covers/aportaciones.jpg"
//         overlayMargin={48}></ImagesBanner>
//     </div>
//   );
// };

import React from "react";
import CollageQR from "../../components/CollageQR/CollageQR";
import { Card, Col, Row, Typography, Button, message, Divider } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import "./Aportaciones.css"; // Archivo CSS opcional para estilos adicionales

const { Title, Paragraph } = Typography;
const Aportaciones = () => {
  // Lista de cuentas bancarias con sus detalles
  const cuentasBancariasHonduras = [
    {
      banco: "Banco Nacional",
      cuenta: "1234-5678-9012",
      imagen:
        "https://www.ebenezer.hn/themes/ebenehon/assets/img/ot-img/banpais.png",
    },
    {
      banco: "Banco Internacional",
      cuenta: "9876-5432-1098",
      imagen:
        "https://www.ebenezer.hn/themes/ebenehon/assets/img/ot-img/ficohsa.png",
    },
    {
      banco: "Banco Local",
      cuenta: "1122-3344-5566",
      imagen:
        "https://www.ebenezer.hn/themes/ebenehon/assets/img/ot-img/banhcafe.png",
    },
    {
      banco: "Banco Local",
      cuenta: "1122-3344-5566",
      imagen:
        "https://www.ebenezer.hn/themes/ebenehon/assets/img/ot-img/banrural.png",
    },
    {
      banco: "Banco Local",
      cuenta: "1122-3344-5566",
      imagen:
        "https://www.ebenezer.hn/themes/ebenehon/assets/img/ot-img/bac.png",
    },
  ];

  const cuentasBancariasEstadosUnidos = [
    {
      banco: "Banco Nacional",
      cuenta: "1234-5678-9012",
      imagen:
        "https://www.ebenezer.hn/themes/ebenehon/assets/img/ot-img/bankAmerica.png",
    },
  ];

  const handleCopy = (cuenta) => {
    navigator.clipboard.writeText(cuenta);
    message.success(`Número de cuenta ${cuenta} copiado al portapapeles.`);
  };

  const dominantColor = "#193753"; // Color principal

  //
  return (
    <div>
      <div className="w-full bg-gradient-to-b from-blue-500 to-transparent">
        {/* Collage de imágenes con QR */}
        {/* <div className="mt-32"> */}
        <div className="p-16"></div>

        <CollageQR />
        <div className="p-4"></div>
      </div>
      <div style={{ padding: "20px" }}>
        {/* ===================================================================================== */}
        <Divider
          style={{
            borderColor: dominantColor,
          }}>
          Cuentas bancarias HONDURAS
        </Divider>
        {/* ===================================================================================== */}
        {/* Cards con cuentas bancarias */}
        <Row
          style={{ marginBottom: "100px" }}
          gutter={[16, 16]}
          justify="center">
          {cuentasBancariasHonduras.map((cuenta, index) => (
            <Col key={index} xs={12} sm={8} md={6}>
              <Card
                hoverable
                style={{
                  borderRadius: "8px",
                  position: "relative",
                  padding: "10px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "180px", // Altura mínima para evitar superposición
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Sombra suave
                  backgroundColor: "#fff", // Asegura que la tarjeta tenga un fondo blanco
                }}>
                {/* Imagen */}
                <img
                  alt={cuenta.banco}
                  src={cuenta.imagen}
                  style={{
                    height: "60px",
                    objectFit: "contain",
                    marginBottom: "10px",
                  }}
                />
                {/* Contenido */}
                <Card.Meta
                  title={<b style={{ fontSize: "14px" }}>{cuenta.banco}</b>}
                  description={
                    <span style={{ fontSize: "12px" }}>
                      Número: {cuenta.cuenta}
                    </span>
                  }
                />
                {/* Botón */}
                <Button
                  type="text"
                  style={{
                    position: "absolute", // Posiciona el botón relativo a la tarjeta
                    bottom: "-10px", // Sobresale 10px de la tarjeta
                    left: "50%", // Centra horizontalmente
                    transform: "translateX(-50%)", // Ajusta la posición para centrar
                    backgroundColor: "#FFFACD",
                    borderRadius: "5px",
                    fontSize: "12px",
                  }}
                  icon={<CopyOutlined />}
                  onClick={() => handleCopy(cuenta.cuenta)}>
                  Copiar
                </Button>
              </Card>
            </Col>
          ))}
        </Row>

        {/* ===================================================================================== */}
        <Divider
          style={{
            borderColor: dominantColor,
          }}>
          Cuentas bancarias Estados Unidos
        </Divider>
        {/* ===================================================================================== */}
        <Row
          style={{ marginBottom: "100px" }}
          gutter={[16, 16]}
          justify="center">
          {cuentasBancariasEstadosUnidos.map((cuenta, index) => (
            <Col key={index} xs={12} sm={8} md={6}>
              <Card
                hoverable
                style={{
                  borderRadius: "8px",
                  position: "relative",
                  padding: "10px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "180px", // Altura mínima para evitar superposición
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Sombra suave
                  backgroundColor: "#fff", // Asegura que la tarjeta tenga un fondo blanco
                }}>
                {/* Imagen */}
                <img
                  alt={cuenta.banco}
                  src={cuenta.imagen}
                  style={{
                    height: "60px",
                    objectFit: "contain",
                    marginBottom: "10px",
                  }}
                />
                {/* Contenido */}
                <Card.Meta
                  title={<b style={{ fontSize: "14px" }}>{cuenta.banco}</b>}
                  description={
                    <span style={{ fontSize: "12px" }}>
                      Número: {cuenta.cuenta}
                    </span>
                  }
                />
                {/* Botón */}
                <Button
                  type="text"
                  style={{
                    position: "absolute", // Posiciona el botón relativo a la tarjeta
                    bottom: "-10px", // Sobresale 10px de la tarjeta
                    left: "50%", // Centra horizontalmente
                    transform: "translateX(-50%)", // Ajusta la posición para centrar
                    backgroundColor: "#FFFACD",
                    borderRadius: "5px",
                    fontSize: "12px",
                  }}
                  icon={<CopyOutlined />}
                  onClick={() => handleCopy(cuenta.cuenta)}>
                  Copiar
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Aportaciones;

//  {/* Descripción inicial
//       <div style={{ backgroundColor: dominantColor }}>
//         <div
//           style={{
//             textAlign: "center",
//             marginBottom: "20px",
//             marginTop: "100px",
//           }}>
//           <Title level={3} style={{ marginTop: "20px", color: "white" }}>
//             Así usamos tus aportaciones
//           </Title>
//           <Paragraph>
//             Tus donativos son utilizados para apoyar causas importantes, como
//             educación, salud y ayuda humanitaria. ¡Gracias por tu generosidad y
//             confianza!
//           </Paragraph>
//         </div>
//       </div> */}
