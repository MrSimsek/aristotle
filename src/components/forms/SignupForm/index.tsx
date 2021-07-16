import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { Link } from 'react-router-dom';

import useSignupFormStyles from './useSignupFormStyles';
import countryOptions from '../../../constants/countryOptions';
import { fetchClientRegion } from '../../../helpers/location';

type SignupFormProps = {
  handleSubmit: () => void;
};

export default function SignupForm(props: SignupFormProps) {
  const { handleSubmit } = props;

  const classes = useSignupFormStyles();

  const [form] = Form.useForm();

  useEffect(() => {
    fetchClientRegion()
      .then((response) => form.setFieldsValue({ region: response.countryCode }))
      .catch(() => {
        // TODO: Handle region request failure
      });
  }, [form]);

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
      className={classes.formContainer}
      name="basic"
      layout="vertical"
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
          {countryOptions.map((option) => (
            <Select.Option key={option.value} value={option.value}>
              {option.label}
            </Select.Option>
          ))}
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
        rules={[
          {
            required: true,
            type: 'email',
            message: 'Please enter your email.',
          },
        ]}
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
          Sign Up
        </Button>{' '}
        or <Link to="/">Login</Link>
      </Form.Item>
    </Form>
  );
}
