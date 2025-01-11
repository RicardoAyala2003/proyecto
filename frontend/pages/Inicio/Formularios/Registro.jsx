import React from "react";
import { Form, Input, Select, DatePicker, Button, Checkbox, message } from "antd";
import emailjs from "emailjs-com"; // Importa emailjs
import ImagesBanner from "../../../components/ImagesBanner/ImagesBanner";
const { Option } = Select;

const RegistrationPage = () => {
  // Crea la referencia al formulario
  const [form] = Form.useForm(); // Nueva línea para obtener la instancia del formulario

  // Configura la función que se ejecutará cuando se envíe el formulario
  const onFinish = (values) => {
    // Prepara los datos del formulario
    if (!values.consent) {
      message.error("Debes aceptar los términos para continuar.");
      return; // No enviamos el correo si el consentimiento no está marcado
    }

    const formData = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      country: values.country,
      location: values.location,
      gender: values.gender,
      maritalStatus: values.maritalStatus,
      dob: values.dob.format("DD/MM/YYYY"), // Convierte la fecha de nacimiento a formato de cadena
    };

    // Envía los datos del formulario a través de EmailJS
    emailjs
      .send(
        "service_obtrgew",  // Reemplaza con tu Service ID de EmailJS
        "template_ludl0w4",  // Reemplaza con tu Template ID de EmailJS
        formData,            // Datos del formulario
        "n5qQRXbDPKrostj0M"       // Reemplaza con tu User ID de EmailJS
      )
      .then(
        (response) => {
          message.success("¡Formulario enviado con éxito!"); // Muestra mensaje de éxito
          form.resetFields(); // Resetea los campos del formulario después de enviarlo con éxito
        },
        (error) => {
          message.error("Hubo un error al enviar el formulario: " + error.text); // Muestra mensaje de error
        }
      );
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Por favor, completa los campos requeridos."); // Muestra mensaje de error si falla la validación
  };

  const dominantColor = "#193753"; // Color principal

  return (
    <>
      <ImagesBanner
        title="Se parte de una gran familia"
        image="/Covers/registro.jpg"
        overlayMargin={300}>
        <div className="w-screen  justify-center items-center z-10">
          <div className="flex justify-center items-center z-10">
            <div style={{ marginTop: "100px" }}></div>
          </div>
        </div>
      </ImagesBanner>
      <div className="p-8" style={{ paddingTop: "300px", paddingBottom: "200px" }}>
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-xl">
            <h1 className="text-3xl font-extrabold text-center mb-4" style={{ color: dominantColor }}>
              ¡Tenemos un lugar para ti!
            </h1>
            <p className="text-center mb-6" style={{ color: dominantColor }}>
              Queremos darte la bienvenida a la familia de Dios y a Ebenezer Honduras.
            </p>
            <Form
              form={form} // Asocia la referencia del formulario
              name="registration"
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {[ 
                {
                  label: "¿Cuál es tu nombre?",
                  name: "name",
                  placeholder: "Nombre completo",
                },
                {
                  label: "Correo Electrónico",
                  name: "email",
                  placeholder: "ejemplo@correo.com",
                  type: "email",
                },
                {
                  label: "Teléfono",
                  name: "phone",
                  placeholder: "Número de teléfono",
                },
                {
                  label: "¿De qué país eres?",
                  name: "country",
                  placeholder: "País",
                },
              ].map(({ label, name, placeholder, type }) => (
                <Form.Item
                  key={name}
                  label={label}
                  name={name}
                  rules={[{
                    required: true,
                    message: `Por favor, ingresa ${label.toLowerCase()}.`,
                  }]}
                >
                  <Input
                    type={type}
                    placeholder={placeholder}
                    className="rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 transition duration-200"
                  />
                </Form.Item>
              ))}

              <Form.Item
                label="¿De dónde te conectaste con nosotros?"
                name="location"
                rules={[{
                  required: true,
                  message: "Por favor, selecciona tu ubicación.",
                }]}
              >
                <Select placeholder="Selecciona una opción" className="rounded-md">
                  <Option value="iglesia">Desde la iglesia</Option>
                  <Option value="online">En línea</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Sexo"
                name="gender"
                rules={[{ required: true, message: "Por favor, selecciona tu sexo." }]}
              >
                <Select placeholder="Selecciona una opción" className="rounded-md">
                  <Option value="male">Masculino</Option>
                  <Option value="female">Femenino</Option>
                  <Option value="other">Otro</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="¿Cuál es tu estado civil?"
                name="maritalStatus"
                rules={[{
                  required: true,
                  message: "Por favor, selecciona tu estado civil.",
                }]}
              >
                <Select placeholder="Selecciona una opción" className="rounded-md">
                  <Option value="single">Soltero</Option>
                  <Option value="married">Casado</Option>
                  <Option value="other">Otro</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Fecha de Nacimiento"
                name="dob"
                rules={[{
                  required: true,
                  message: "Por favor, ingresa tu fecha de nacimiento.",
                }]}
                className="col-span-2"
              >
                <DatePicker
                  className="w-full rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 transition duration-200"
                  placeholder="dd/mm/aaaa"
                  format="DD/MM/YYYY"
                />
              </Form.Item>

              <Form.Item
                name="consent"
                valuePropName="checked"
                rules={[{
                  required: true,
                  message: "Debes aceptar para continuar.",
                }]}
                className="col-span-2"
              >
                <Checkbox style={{ color: dominantColor }}>
                  Doy consentimiento para que la Iglesia de Cristo Ebenezer obtenga mis datos para ponerse en contacto conmigo.
                </Checkbox>
              </Form.Item>

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
                  Registrarme
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
