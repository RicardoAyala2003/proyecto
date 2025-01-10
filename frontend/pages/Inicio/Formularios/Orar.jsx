import React from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import ImagesBanner from "../../../components/ImagesBanner/ImagesBanner";
import emailjs from 'emailjs-com'; // Importa EmailJS

const Orar = () => {
  const onFinish = (values) => {
    console.log("Success:", values); // Manteniendo tu console.log original.

    // Prepara los datos para enviar por EmailJS
    const formData = {
      prayerRequest: values.prayerRequest,
      name: values.name,
      email: values.email,
      phone: values.phone,
    };

    // Enviar el correo usando EmailJS
    emailjs
      .send(
        "service_obtrgew",  // Reemplaza con tu Service ID de EmailJS
        "template_xfmsw9i", // Reemplaza con tu Template ID de EmailJS
        formData,           // Datos del formulario
        "n5qQRXbDPKrostj0M" // Reemplaza con tu Public Key de EmailJS
      )
      .then(
        (response) => {
          message.success("¡Petición enviada con éxito! Nos pondremos en contacto contigo pronto.");
          console.log("Correo enviado con éxito:", response); // Mensaje adicional para depuración.
        },
        (error) => {
          message.error("Hubo un error al enviar tu petición: " + error.text);
          console.error("Error al enviar correo:", error); // Mensaje adicional para depuración.
        }
      );
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Por favor, completa todos los campos requeridos.");
  };

  const dominantColor = "#193753"; // Color dominante

  return (
    <>
      <ImagesBanner
        title="Estamos aquí para ti"
        image="/Covers/orando.jpg"
        overlayMargin={300}
      >
        <div className="w-screen justify-center items-center z-10">
          <div className="flex justify-center items-center z-10">
            <div style={{ marginTop: "100px" }}></div>
          </div>
        </div>
      </ImagesBanner>
      <div
        className="p-8"
        style={{ paddingTop: "300px", paddingBottom: "200px" }}
      >
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-xl">
            <h1
              className="text-3xl font-extrabold text-center mb-4"
              style={{ color: dominantColor }}
            >
              ¡No estás solo, estamos junto a ti!
            </h1>
            <p className="text-center mb-6" style={{ color: dominantColor }}>
              Déjanos tu petición de oración y tus datos. Queremos conocerte y
              mantenernos en contacto contigo.
            </p>
            <Form
              name="prayer_request"
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Campo de petición */}
              <Form.Item
                label="Petición de oración"
                name="prayerRequest"
                rules={[
                  {
                    required: true,
                    message: "Por favor, ingresa tu petición de oración.",
                  },
                ]}
                className="col-span-2"
              >
                <Input.TextArea
                  placeholder="Escribe tu petición aquí..."
                  rows={4}
                  className="rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 transition duration-200"
                />
              </Form.Item>

              {/* Campo de nombre */}
              <Form.Item
                label="Nombre completo"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Por favor, ingresa tu nombre completo.",
                  },
                ]}
              >
                <Input
                  placeholder="Nombre completo"
                  className="rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 transition duration-200"
                />
              </Form.Item>

              {/* Campo de correo */}
              <Form.Item
                label="Correo Electrónico"
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Por favor, ingresa un correo válido.",
                  },
                ]}
              >
                <Input
                  placeholder="ejemplo@correo.com"
                  className="rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 transition duration-200"
                />
              </Form.Item>

              {/* Campo de teléfono */}
              <Form.Item
                label="Teléfono"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Por favor, ingresa tu número de teléfono.",
                  },
                ]}
              >
                <Input
                  placeholder="Número de teléfono"
                  className="rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 transition duration-200"
                />
              </Form.Item>

              {/* Consentimiento */}
              <Form.Item
                name="consent"
                valuePropName="checked"
                rules={[
                  { required: true, message: "Debes aceptar para continuar." },
                ]}
                className="col-span-2"
              >
                <Checkbox style={{ color: dominantColor }}>
                  Doy consentimiento para que la Iglesia de Cristo Ebenezer
                  obtenga mis datos para ponerse en contacto conmigo.
                </Checkbox>
              </Form.Item>

              {/* Botón de enviar */}
              <Form.Item className="col-span-2">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full text-white rounded-md py-2 shadow-md hover:shadow-lg transition duration-300"
                  style={{
                    backgroundColor: dominantColor,
                    borderColor: dominantColor,
                  }}
                >
                  Enviar Petición
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orar;
