import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { notification } from 'antd';

import UserPool from '../../aws/UserPool';

import SignupForm from '../../components/forms/SignupForm';
import AuthLayout from '../../layouts/AuthLayout';
import { NOTIFICATION_DURATION } from '../../constants';
import { SignupFormTypes } from '../../types/forms';

export default function SignupPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [redirect, setRedirect] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>('');

  const handleSignupFormSubmit = (values: SignupFormTypes) => {
    const { email, password, invitationCode, region } = values;

    const attributeList: CognitoUserAttribute[] = [];

    const dataInvitationCode = {
      Name: 'custom:invitationCode',
      Value: invitationCode,
    };
    const dataRegion = {
      Name: 'custom:region',
      Value: region,
    };

    const attributeInvitationCode = new CognitoUserAttribute(
      dataInvitationCode
    );
    const attributeRegion = new CognitoUserAttribute(dataRegion);

    attributeList.push(attributeInvitationCode);
    attributeList.push(attributeRegion);

    setLoading(true);

    UserPool.signUp(email, password, attributeList, [], (err, data) => {
      setLoading(false);

      if (err) {
        notification.error({
          message: 'Error signing up user',
          description: err.message || JSON.stringify(err),
          placement: 'topRight',
          duration: NOTIFICATION_DURATION,
          onClose: () => null,
        });
      }

      if (data) {
        setUserEmail(data.user.getUsername());
        setRedirect(true);

        notification.success({
          message: 'Succesfully signed up user!',
          description:
            'Account created successfully, Redirecting you in a few!',
          placement: 'topRight',
          duration: NOTIFICATION_DURATION,
          onClose: () => null,
        });
      }
    });
  };

  return (
    <AuthLayout>
      <SignupForm handleSubmit={handleSignupFormSubmit} loading={loading} />
      {redirect && (
        <Redirect
          to={{
            pathname: '/verify-code',
            search: `?email=${userEmail}`,
          }}
        />
      )}
    </AuthLayout>
  );
}
