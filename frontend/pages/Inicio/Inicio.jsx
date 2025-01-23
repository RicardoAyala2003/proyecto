import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";

import ImagesBanner from "../../components/ImagesBanner/ImagesBanner";
import HomeGallery from "../../components/MasonryGallery/HomeGallery";

const Inicio = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/registro");
  };

  const handlePrayerClick = () => {
    navigate("/orar");
  };

  const handleContactClick = () => {
    navigate("/contacto");
  };

  // Variants for animations
  const cardVariants = {
    hiddenLeft: { opacity: 0, x: -100 },
    hiddenRight: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -100 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  // Ref and in-view hook for lazy-triggered animations
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  const isInView1 = useInView(ref1, { triggerOnce: true, threshold: 1 });
  const isInView2 = useInView(ref2, { triggerOnce: true, threshold: 1 });
  const isInView3 = useInView(ref3, { triggerOnce: true, threshold: 1 });
  const isInView4 = useInView(ref4, { triggerOnce: true, threshold: 1 });
  const isInView5 = useInView(ref5, { triggerOnce: true, threshold: 1 });

  return (
    <div className="overflow-hidden">
      <div>
        {/* Animated Banner */}
        <motion.div
          ref={ref1}
          initial={{ opacity: 0 }}
          animate={isInView1 ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}>
          <ImagesBanner
            title="Bienvenido"
            image="/Covers/inicio2.jpg"
            overlayMargin={48}>
            <div className="w-screen px-10 justify-center items-center z-10">
              <div className="flex justify-center items-center z-10">
                <HomeGallery />
              </div>
            </div>
          </ImagesBanner>
        </motion.div>

        {/* Cards Area */}
        <div
          style={{ marginBottom: "100px" }}
          align="center"
          className=" bg-green-500">
          {/* Animated Header */}
          <motion.h1
            className="text-3xl font-bold text-center"
            ref={ref2}
            initial={{ opacity: 0, y: -20 }}
            animate={isInView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}>
            Bienvenido a la Página de Inicio
          </motion.h1>
          <motion.p
            className="text-center text-lg mt-4"
            ref={ref2}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}>
            Esta es la página de inicio de nuestro proyecto.
          </motion.p>

          <div className="bg-red-500 max-w-7xl">
            {/* Card 1: ¿Eres nuevo? */}
            <motion.div
              className="flex justify-center mt-8"
              ref={ref3}
              initial="hiddenLeft"
              animate={isInView3 ? "visible" : "hiddenLeft"}
              variants={cardVariants}
              transition={{ duration: 0.8 }}>
              <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-3xl flex items-center max-w-full overflow-hidden">
                <motion.img
                  src="/Covers/img.jpg"
                  alt="Eres nuevo"
                  className="w-40 h-40 object-cover rounded-lg flex-shrink-0"
                  initial="hidden"
                  animate={isInView3 ? "visible" : "hidden"}
                  variants={imageVariants}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                <div className="w-px bg-gray-300 mx-8 h-full"></div>
                <div className="text-left overflow-hidden">
                  <h2 className="text-2xl font-semibold mb-4 text-[#002140] truncate">
                    ¿Eres nuevo?
                  </h2>
                  <p className="mb-4 text-gray-700 line-clamp-3">
                    Te invitamos a registrarte con nosotros y así formar parte
                    de nuestra comunidad de manera presencial o en línea.
                  </p>
                  <motion.button
                    className="bg-[#002140] text-white px-6 py-3 rounded hover:bg-[#004080] transition"
                    onClick={handleRegisterClick}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap">
                    Regístrate
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Card 2: ¿Oramos por ti? */}
            <motion.div
              className="flex justify-center mt-8"
              ref={ref4}
              initial="hiddenRight"
              animate={isInView4 ? "visible" : "hiddenRight"}
              variants={cardVariants}
              transition={{ duration: 0.8 }}>
              <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-3xl flex items-center max-w-full overflow-hidden">
                <motion.img
                  src="/Covers/img.jpg"
                  alt="Oramos por ti"
                  className="w-40 h-40 object-cover rounded-lg flex-shrink-0"
                  initial="hidden"
                  animate={isInView4 ? "visible" : "hidden"}
                  variants={imageVariants}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                <div className="w-px bg-gray-300 mx-8 h-full"></div>
                <div className="text-left overflow-hidden">
                  <h2 className="text-2xl font-semibold mb-4 text-[#002140] truncate">
                    ¿Oramos por ti?
                  </h2>
                  <p className="mb-4 text-gray-700 line-clamp-3">
                    Si tienes alguna petición, puedes enviarnos un mensaje de
                    manera confidencial y con gusto estaremos orando por ti.
                  </p>
                  <motion.button
                    className="bg-[#002140] text-white px-6 py-3 rounded hover:bg-[#004080] transition"
                    onClick={handlePrayerClick}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap">
                    Orar por mí
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Contáctanos */}
            <motion.div
              className="flex justify-center mt-8"
              ref={ref5}
              initial="hiddenLeft"
              animate={isInView5 ? "visible" : "hiddenLeft"}
              variants={cardVariants}
              transition={{ duration: 0.8 }}>
              <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-3xl flex items-center max-w-full overflow-hidden">
                <motion.img
                  src="/Covers/img.jpg"
                  alt="Contáctanos"
                  className="w-40 h-40 object-cover rounded-lg flex-shrink-0"
                  initial="hidden"
                  animate={isInView5 ? "visible" : "hidden"}
                  variants={imageVariants}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                <div className="w-px bg-gray-300 mx-8 h-full"></div>
                <div className="text-left overflow-hidden">
                  <h2 className="text-2xl font-semibold mb-4 text-[#002140] truncate">
                    Contáctanos
                  </h2>
                  <p className="mb-4 text-gray-700 line-clamp-3">
                    ¿Tienes alguna pregunta o quieres contactarte con nosotros?
                    Envíanos un mensaje y un miembro de nuestro equipo te
                    responderá.
                  </p>
                  <motion.button
                    className="bg-[#002140] text-white px-6 py-3 rounded hover:bg-[#004080] transition"
                    onClick={handleContactClick}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap">
                    Contáctanos
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
