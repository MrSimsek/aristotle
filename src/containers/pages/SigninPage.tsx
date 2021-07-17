import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import { notification } from 'antd';

import SigninForm from '../../components/forms/SigninForm';
import AuthLayout from '../../layouts/AuthLayout';
import UserPool from '../../aws/UserPool';
import { NOTIFICATION_DURATION } from '../../constants';
import { SigninFormTypes } from '../../types/forms';

export default function SigninPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [redirect, setRedirect] = useState<boolean>(false);

  const handleSigninFormSubmit = (values: SigninFormTypes) => {
    const { email, password } = values;

    const authenticationData = {
      Username: email,
      Password: password,
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const userData = {
      Username: email,
      Pool: UserPool,
    };
    const cognitoUser = new CognitoUser(userData);

    setLoading(true);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        setLoading(false);
        setRedirect(true);

        const accessToken = result.getAccessToken().getJwtToken();
        console.log(accessToken);
      },

      onFailure: (err) => {
        setLoading(false);

        notification.error({
          message: 'Error when trying to login',
          description: err.message || JSON.stringify(err),
          placement: 'topRight',
          duration: NOTIFICATION_DURATION,
          onClose: () => null,
        });
      },
    });
  };

  return (
    <AuthLayout>
      <SigninForm handleSubmit={handleSigninFormSubmit} loading={loading} />
      {redirect && (
        <Redirect
          to={{
            pathname: '/dashboard',
          }}
        />
      )}
    </AuthLayout>
  );
}
