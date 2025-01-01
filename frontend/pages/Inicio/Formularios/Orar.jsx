import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const Orar = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900 text-white">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md text-gray-900">
        <h1 className="text-2xl font-bold text-center text-blue-900 mb-6">
          ¡No estás solo, estamos junto a ti!
        </h1>
        <p className="text-center text-blue-900 mb-4">
          Déjanos tu petición de oración y tus datos, queremos conocerte y mantenernos en contacto contigo.
        </p>
        <Form
          name="prayer_request"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="grid grid-cols-1 gap-4"
        >
          <Form.Item
            label="Petición de oración..."
            name="prayerRequest"
            rules={[{ required: true, message: 'Por favor, ingresa tu petición de oración.' }]}
            className="col-span-1"
          >
            <Input.TextArea placeholder="Escribe tu petición aquí..." rows={4} />
          </Form.Item>

          <Form.Item
            label="Nombre completo"
            name="name"
            rules={[{ required: true, message: 'Por favor, ingresa tu nombre completo.' }]}
            className="col-span-1"
          >
            <Input placeholder="Nombre completo" />
          </Form.Item>

          <Form.Item
            label="Correo Electrónico"
            name="email"
            rules={[{ required: true, type: 'email', message: 'Por favor, ingresa un correo válido.' }]}
            className="col-span-1"
          >
            <Input placeholder="ejemplo@correo.com" />
          </Form.Item>

          <Form.Item
            label="Teléfono"
            name="phone"
            rules={[{ required: true, message: 'Por favor, ingresa tu número de teléfono.' }]}
            className="col-span-1"
          >
            <Input placeholder="Número de teléfono" />
          </Form.Item>

          <Form.Item
            name="consent"
            valuePropName="checked"
            rules={[{ required: true, message: 'Debes aceptar para continuar.' }]}
            className="col-span-2"
          >
            <Checkbox>
              Doy consentimiento para que la Iglesia de Cristo Ebenezer obtenga mis datos para poder ponerse en contacto conmigo.
            </Checkbox>
          </Form.Item>

          <Form.Item className="col-span-2">
            <Button type="primary" htmlType="submit" className="w-full bg-blue-900 hover:bg-blue-700">
              Enviar Petición
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Orar;
