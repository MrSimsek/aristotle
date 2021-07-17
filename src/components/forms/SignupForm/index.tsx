import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Select, Popover } from 'antd';
import { Link } from 'react-router-dom';

import useSignupFormStyles from './useSignupFormStyles';
import countryOptions from '../../../constants/countryOptions';
import { fetchClientRegion } from '../../../helpers/location';
import { SignupFormTypes } from '../../../types/forms';

type SignupFormProps = {
  handleSubmit: (values: SignupFormTypes) => void;
  loading?: boolean;
};

export default function SignupForm(props: SignupFormProps) {
  const { handleSubmit, loading } = props;

  const classes = useSignupFormStyles();

  const [form] = Form.useForm<SignupFormTypes>();

  useEffect(() => {
    fetchClientRegion()
      .then((response) => form.setFieldsValue({ region: response.countryCode }))
      .catch(() => {
        // TODO: Handle region request failure
      });
  }, [form]);

  const onFinish = (values: SignupFormTypes) => {
    handleSubmit(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onRegionChange = (value: string) => {
    console.log(value);
  };

  const passwordPolicyMarkup = (
    <>
      <h4>Your password should contain: </h4>
      <ul>
        <li>Minimum length of 8 characters</li>
        <li>Numerical characters (0-9)</li>
        <li>Special characters</li>
        <li>Uppercase letter</li>
        <li>Lowercase letter</li>
      </ul>
    </>
  );

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

      <Popover
        placement="right"
        title="Password Policy"
        content={passwordPolicyMarkup}
        trigger="focus"
      >
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please enter your password.' }]}
        >
          <Input.Password />
        </Form.Item>
      </Popover>

      <Form.Item
        label="Confirm Password"
        name="confirmPassword"
        dependencies={['password']}
        hasFeedback
        rules={[
          { required: true, message: 'Please confirm your password.' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error('The two passwords that you entered do not match!')
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Sign Up
        </Button>{' '}
        or <Link to="/">Login</Link>
      </Form.Item>
    </Form>
  );
}

SignupForm.defaultProps = {
  loading: false,
};
