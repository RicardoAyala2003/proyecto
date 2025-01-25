import React from "react";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const socialMediaData = [
  {
    name: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    color: "bg-gradient-to-r from-[#1877F2] to-[#08489C]",
    description: "Manténgase conectado con amigos y familiares en Facebook.",
    backgroundImage: "/Images/img (1).jpeg",
  },
  {
    name: "Twitter",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg",
    color: "bg-gradient-to-r from-[#1DA1F2] to-[#0D74AE]",
    description: "Siga las últimas tendencias y actualizaciones en Twitter.",
    backgroundImage: "/Images/img (2).jpeg",
  },
  {
    name: "Instagram",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
    color: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045]",
    description: "Comparte y explora imágenes impresionantes en Instagram.",
    backgroundImage: "/Images/img (3).jpeg",
  },
  {
    name: "LinkedIn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    color: "bg-gradient-to-r from-[#0077B5] to-[#004182]",
    description: "Conéctese con profesionales en LinkedIn.",
    backgroundImage: "/Images/img (4).jpeg",
  },
];

const dominantColor = "#193753"; // Color principal

const SocialMediaCards = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      {/* Sticky title and description */}
      <div className="md:w-1/3 ">
        <div className="sticky top-12">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ color: dominantColor }}>
            ¡Únete a nuestras Redes Sociales!
          </h1>
          <p className="text-gray-500  font-bold text-1xl">
            Conéctese con nosotros en nuestras plataformas de redes sociales
            para mantenerse actualizado con las últimas noticias y
            actualizaciones. Haga clic en "Ver Pagina" para visitar nuestras
            páginas.
          </p>
        </div>
      </div>

      {/* Social media cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {socialMediaData.map((social) => (
          <div
            key={social.name}
            className="flex flex-col items-center justify-between rounded-2xl shadow-lg border border-gray-300 p-4 bg-gray-100 h-full">
            <div className="w-full h-full rounded-xl bg-gray-200 p-4">
              <div
                className={`relative w-full h-40 ${social.color} rounded-xl flex items-center justify-center mb-4 overflow-hidden`}>
                <img
                  src={social.backgroundImage}
                  alt="Background"
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
                />
                <img
                  src={social.logo}
                  alt={`${social.name} logo`}
                  className="relative w-16 h-16"
                />
              </div>
              <p className="text-gray-700 text-center mb-4">
                {social.description}
              </p>
              <div className="flex justify-end">
                <Button
                  type="primary"
                  className="bg-blue-800 hover:bg-blue-900 text-white flex items-center gap-2"
                  size="large"
                  icon={<ArrowRightOutlined />}>
                  Ver Pagina
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaCards;
