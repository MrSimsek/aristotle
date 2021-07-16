import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { Link } from 'react-router-dom';

import styles from './signinForm.styles.css';

type SigninFormProps = {
  handleSubmit: () => void;
};

export default function SigninForm(props: SigninFormProps) {
  const { handleSubmit } = props;

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onRegionChange = (value: string) => {
    console.log(value);
  };

  return (
    <Form
      form={form}
      className={styles.formContainer}
      name="basic"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please enter your email.' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please enter your password.' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>{' '}
        or <Link to="/signup">Register</Link>
      </Form.Item>
    </Form>
  );
}
