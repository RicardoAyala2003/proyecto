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

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900 text-white">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md text-gray-900">
        <h1 className="text-2xl font-bold text-center text-blue-900 mb-6">
          ¡Tenemos un lugar para ti!
        </h1>
        <p className="text-center text-blue-900 mb-4">
          Queremos darte la bienvenida a la familia de Dios y a Ebenezer Honduras.
        </p>
        <Form
          name="registration"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <Form.Item
            label="¿Cuál es tu nombre?"
            name="name"
            rules={[{ required: true, message: 'Por favor, ingresa tu nombre.' }]}
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
          >
            <Input placeholder="Número de teléfono" />
          </Form.Item>

          <Form.Item
            label="¿De dónde te conectaste con nosotros?"
            name="location"
            rules={[{ required: true, message: 'Por favor, selecciona tu ubicación.' }]}
          >
            <Select placeholder="Selecciona una opción">
              <Option value="iglesia">Desde la iglesia</Option>
              <Option value="online">En línea</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="¿De qué país eres?"
            name="country"
            rules={[{ required: true, message: 'Por favor, ingresa tu país.' }]}
          >
            <Input placeholder="País" />
          </Form.Item>

          <Form.Item
            label="Sexo"
            name="gender"
            rules={[{ required: true, message: 'Por favor, selecciona tu sexo.' }]}
          >
            <Select placeholder="Selecciona una opción">
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
            <Select placeholder="Selecciona una opción">
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
            <DatePicker className="w-full" placeholder="dd/mm/aaaa" format="DD/MM/YYYY" />
          </Form.Item>

          <Form.Item
            name="consent"
            valuePropName="checked"
            rules={[{ required: true, message: 'Debes aceptar para continuar.' }]}
            className="col-span-2"
          >
            <Checkbox>
              Doy consentimiento para que la Iglesia de Cristo Ebenezer obtenga mis datos para ponerse en contacto conmigo.
            </Checkbox>
          </Form.Item>

          <Form.Item className="col-span-2">
            <Button type="primary" htmlType="submit" className="w-full bg-blue-900 hover:bg-blue-700">
              Registrarme
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RegistrationPage;
