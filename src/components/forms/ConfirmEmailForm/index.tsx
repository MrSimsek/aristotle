import React from 'react';
import { Form, Input, Button } from 'antd';

import useConfirmEmailFormStyles from './useConfirmEmailFormStyles';
import { ConfirmEmailFormTypes } from '../../../types/forms';

type ConfirmEmailFormProps = {
  handleSubmit: (values: ConfirmEmailFormTypes) => void;
  loading?: boolean;
};

export default function ConfirmEmailForm(props: ConfirmEmailFormProps) {
  const { handleSubmit, loading } = props;

  const classes = useConfirmEmailFormStyles();

  const [form] = Form.useForm<ConfirmEmailFormTypes>();

  const onFinish = (values: ConfirmEmailFormTypes) => {
    handleSubmit(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
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
        label="Verification Code"
        name="verificationCode"
        rules={[
          { required: true, message: 'Please enter the verification code.' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Confirm
        </Button>
      </Form.Item>
    </Form>
  );
}

ConfirmEmailForm.defaultProps = {
  loading: false,
};
