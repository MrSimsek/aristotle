import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { CognitoUser, ICognitoUserData } from 'amazon-cognito-identity-js';
import { notification } from 'antd';

import UserPool from '../../aws/UserPool';
import ConfirmEmailForm from '../../components/forms/ConfirmEmailForm';
import useQuery from '../../hooks/useQuery';
import AuthLayout from '../../layouts/AuthLayout';
import { NOTIFICATION_DURATION } from '../../constants';
import { ConfirmEmailFormTypes } from '../../types/forms';

export default function ConfirmEmailPage() {
  const query = useQuery();
  const userEmail = query.get('email') || '';

  const [loading, setLoading] = useState<boolean>(false);
  const [redirect, setRedirect] = useState<boolean>(false);

  const handleConfirmEmailFormSubmit = (values: ConfirmEmailFormTypes) => {
    const { verificationCode } = values;

    const userData: ICognitoUserData = {
      Username: userEmail,
      Pool: UserPool,
    };

    const cognitoUser = new CognitoUser(userData);

    setLoading(true);

    cognitoUser.confirmRegistration(verificationCode, true, (err, data) => {
      setLoading(false);

      if (err) {
        notification.error({
          message: 'Account Verification Error',
          description: err.message || JSON.stringify(err),
          placement: 'topRight',
          duration: NOTIFICATION_DURATION,
          onClose: () => null,
        });
      }

      if (data) {
        setRedirect(true);

        notification.success({
          message: 'Succesfully verified account!',
          description:
            'Your email is verified! You can login to your account now.',
          placement: 'topRight',
          duration: NOTIFICATION_DURATION,
          onClose: () => null,
        });
      }
    });
  };

  return (
    <AuthLayout>
      <ConfirmEmailForm
        handleSubmit={handleConfirmEmailFormSubmit}
        loading={loading}
      />
      {redirect && (
        <Redirect
          to={{
            pathname: '/signin',
          }}
        />
      )}
    </AuthLayout>
  );
}
