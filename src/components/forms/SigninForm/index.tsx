import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { Link } from 'react-router-dom';

import useSigninFormStyles from './useSigninFormStyles';
import { SigninFormTypes } from '../../../types/forms';

type SigninFormProps = {
  handleSubmit: (values: SigninFormTypes) => void;
  loading?: boolean;
};

export default function SigninForm(props: SigninFormProps) {
  const { handleSubmit, loading } = props;

  const classes = useSigninFormStyles();

  const [form] = Form.useForm<SigninFormTypes>();

  const onFinish = (values: SigninFormTypes) => {
    handleSubmit(values);
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
      className={classes.formContainer}
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
        <Button type="primary" htmlType="submit" loading={loading}>
          Sign In
        </Button>{' '}
        or <Link to="/signup">Register</Link>
      </Form.Item>
    </Form>
  );
}

SigninForm.defaultProps = {
  loading: false,
};
