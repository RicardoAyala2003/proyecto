import React, { useRef, Suspense } from "react";
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
    hidden: { opacity: 0, scale: 0.8, y: -50 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  // Ref and in-view hook for lazy-triggered animations
  const refs = [useRef(null), useRef(null), useRef(null)];
  const inViewStates = refs.map((ref) =>
    useInView(ref, { triggerOnce: true, threshold: 0.5 })
  );

  const cardsData = [
    {
      title: "¿Eres nuevo?",
      description:
        "Te invitamos a registrarte con nosotros y así formar parte de nuestra comunidad de manera presencial o en línea.",
      buttonText: "Regístrate",
      image: "/Images/img (6) - Copy.jpeg",
      onClick: handleRegisterClick,
      animation: "hiddenLeft",
      ref: refs[0],
      inView: inViewStates[0],
    },
    {
      title: "¿Oramos por ti?",
      description:
        "Si tienes alguna petición, puedes enviarnos un mensaje de manera confidencial y con gusto estaremos orando por ti.",
      buttonText: "Orar por mí",
      image: "/Images/img (9).jpeg",
      onClick: handlePrayerClick,
      animation: "hiddenRight",
      ref: refs[1],
      inView: inViewStates[1],
    },
    {
      title: "Contáctanos",
      description:
        "¿Tienes alguna pregunta o quieres contactarte con nosotros? Envíanos un mensaje y un miembro de nuestro equipo te responderá.",
      buttonText: "Contáctanos",
      image: "/Images/img (4).jpeg",
      onClick: handleContactClick,
      animation: "hiddenLeft",
      ref: refs[2],
      inView: inViewStates[2],
    },
  ];

  return (
    <Suspense fallback={<h1>Loading..</h1>}>
      <div className="overflow-hidden">
        <div>
          {/* Animated Banner */}
          {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}> */}
          <ImagesBanner
            title="Bienvenido"
            description="¡Nos alegra que estés aquí!"
            image="/Covers/inicio2.jpg"
            overlayMargin={424}>
            <HomeGallery />

            {/* </motion.div> */}

            {/* Cards Area */}
            <div className="mb-24 px-4">
              <motion.h1
                className="text-3xl font-bold text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}>
                Bienvenido a la Página de Inicio
              </motion.h1>
              <motion.p
                className="text-center text-lg mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}>
                Esta es la página de inicio de nuestro proyecto.
              </motion.p>

              <div className="max-w-7xl mx-auto">
                {cardsData.map((card, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col md:flex-row items-center mt-8 bg-white shadow-md rounded-lg p-6 md:p-8 max-w-full overflow-hidden"
                    ref={card.ref}
                    initial={card.animation}
                    animate={card.inView ? "visible" : card.animation}
                    variants={cardVariants}
                    transition={{ duration: 0.8 }}>
                    <motion.img
                      src={card.image}
                      alt={card.title}
                      className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg flex-shrink-0"
                      initial="hidden"
                      animate={card.inView ? "visible" : "hidden"}
                      variants={imageVariants}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                    <div className="w-full md:ml-8 mt-4 md:mt-0 text-center md:text-left">
                      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#002140]">
                        {card.title}
                      </h2>
                      <p className="mb-4 text-gray-700">{card.description}</p>
                      <motion.button
                        className="bg-[#002140] text-white px-4 py-2 md:px-6 md:py-3 rounded hover:bg-[#004080] transition"
                        onClick={card.onClick}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap">
                        {card.buttonText}
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ImagesBanner>
        </div>
      </div>
    </Suspense>
  );
};

export default Inicio;
