import React from 'react';
import { Form, Input, Button, Select } from 'antd';

import styles from './signupForm.styles.css';

export default function SignupForm() {
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
        name="region"
        label="Region"
        rules={[{ required: true, message: 'Please select your region.' }]}
      >
        <Select
          placeholder="Select your region"
          onChange={onRegionChange}
          allowClear
        >
          <Select.Option value="male">male</Select.Option>
          <Select.Option value="female">female</Select.Option>
          <Select.Option value="other">other</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Invitation Code"
        name="invitationCode"
        rules={[
          { required: true, message: 'Please enter your invitation code.' },
        ]}
      >
        <Input />
      </Form.Item>

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

      <Form.Item
        label="Confirm Password"
        name="confirmPassword"
        rules={[{ required: true, message: 'Please confirm your password.' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
