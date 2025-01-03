import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const Orar = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const dominantColor = "#193753"; // Color dominante en HEX

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: dominantColor }}>
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-xl">
        <h1
          className="text-3xl font-extrabold text-center mb-4"
          style={{ color: dominantColor }}
        >
          ¡No estás solo, estamos junto a ti!
        </h1>
        <p className="text-center mb-6" style={{ color: dominantColor }}>
          Déjanos tu petición de oración y tus datos, queremos conocerte y mantenernos en contacto contigo.
        </p>
        <Form
          name="prayer_request"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="grid grid-cols-1 gap-6"
        >
          <Form.Item
            label="Petición de oración"
            name="prayerRequest"
            rules={[{ required: true, message: 'Por favor, ingresa tu petición de oración.' }]}
          >
            <Input.TextArea
              placeholder="Escribe tu petición aquí..."
              rows={4}
              className="rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </Form.Item>

          <Form.Item
            label="Nombre completo"
            name="name"
            rules={[{ required: true, message: 'Por favor, ingresa tu nombre completo.' }]}
          >
            <Input
              placeholder="Nombre completo"
              className="rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </Form.Item>

          <Form.Item
            label="Correo Electrónico"
            name="email"
            rules={[{ required: true, type: 'email', message: 'Por favor, ingresa un correo válido.' }]}
          >
            <Input
              placeholder="ejemplo@correo.com"
              className="rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </Form.Item>

          <Form.Item
            label="Teléfono"
            name="phone"
            rules={[{ required: true, message: 'Por favor, ingresa tu número de teléfono.' }]}
          >
            <Input
              placeholder="Número de teléfono"
              className="rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </Form.Item>

          <Form.Item
            name="consent"
            valuePropName="checked"
            rules={[{ required: true, message: 'Debes aceptar para continuar.' }]}
          >
            <Checkbox style={{ color: dominantColor }}>
              Doy consentimiento para que la Iglesia de Cristo Ebenezer obtenga mis datos para poder ponerse en contacto conmigo.
            </Checkbox>
          </Form.Item>

          <Form.Item>
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
  );
};

export default Orar;
