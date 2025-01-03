import React from 'react';
import { Form, Input, Select, DatePicker, Button, Checkbox } from 'antd';

const { Option } = Select;

const RegistrationPage = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const dominantColor = "#193753"; // Converted RGB to HEX

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: dominantColor }}>
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-xl">
        <h1
          className="text-3xl font-extrabold text-center mb-4"
          style={{ color: dominantColor }}
        >
          ¡Tenemos un lugar para ti!
        </h1>
        <p className="text-center mb-6" style={{ color: dominantColor }}>
          Queremos darte la bienvenida a la familia de Dios y a Ebenezer Honduras.
        </p>
        <Form
          name="registration"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {[
            { label: "¿Cuál es tu nombre?", name: "name", placeholder: "Nombre completo" },
            { label: "Correo Electrónico", name: "email", placeholder: "ejemplo@correo.com", type: "email" },
            { label: "Teléfono", name: "phone", placeholder: "Número de teléfono" },
            { label: "¿De qué país eres?", name: "country", placeholder: "País" },
          ].map(({ label, name, placeholder, type }) => (
            <Form.Item
              key={name}
              label={label}
              name={name}
              rules={[{ required: true, message: `Por favor, ingresa ${label.toLowerCase()}.` }]}
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
            rules={[{ required: true, message: 'Por favor, selecciona tu ubicación.' }]}
          >
            <Select placeholder="Selecciona una opción" className="rounded-md">
              <Option value="iglesia">Desde la iglesia</Option>
              <Option value="online">En línea</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Sexo"
            name="gender"
            rules={[{ required: true, message: 'Por favor, selecciona tu sexo.' }]}
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
            rules={[{ required: true, message: 'Por favor, selecciona tu estado civil.' }]}
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
            rules={[{ required: true, message: 'Por favor, ingresa tu fecha de nacimiento.' }]}
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
            rules={[{ required: true, message: 'Debes aceptar para continuar.' }]}
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
  );
};

export default RegistrationPage;
