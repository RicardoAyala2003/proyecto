import React, { useState } from "react";
import { Button, Image } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

const items = [
  {
    title: "Paisaje Montañoso",
    description: "Una vista impresionante de las montañas al amanecer.",
    image: "/Covers/multimedia.jpg", // URL de la imagen
  },
  {
    title: "Inspiración Azul",
    description: "Una breve reflexión sobre el poder del color azul.",
  },
  {
    title: "Ciudad Nocturna",
    description: "Las luces de la ciudad iluminan la noche oscura.",
    image: "/Covers/inicio.jpg", // URL de la imagen
  },
];
const ImageCard = ({ title, description, image }) => {
  const [isBlurred, setIsBlurred] = useState(false);

  return (
    <div className="relative group bg-[#193753] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Imagen con funcionalidad de visualización en pantalla completa */}
      <Image.PreviewGroup>
        <div
          className={`absolute inset-0 h-full w-full bg-cover bg-center transition duration-500 ${
            isBlurred ? "opacity-30 blur-md" : "opacity-100 blur-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}></div>
        {/* Invisible para PreviewGroup, pero permite abrir la imagen en fullscreen */}
        <Image
          src={image}
          alt={title}
          preview={true}
          className="absolute inset-0 h-0 w-0"
        />
      </Image.PreviewGroup>

      {/* Contenido del texto */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-[#193753] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 text-white">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>

      {/* Botón para alternar blur */}
      <Button
        shape="circle"
        icon={isBlurred ? <EyeOutlined /> : <EyeInvisibleOutlined />}
        onClick={() => setIsBlurred(!isBlurred)}
        className="absolute top-4 right-4 bg-white shadow-md hover:shadow-lg transition duration-300"
      />
    </div>
  );
};

const ImageCardGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-[#193753] min-h-screen">
      {items.map((item, index) => (
        <ImageCard
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default ImageCardGrid;
