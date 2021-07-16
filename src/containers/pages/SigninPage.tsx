import React from 'react';

import SigninForm from '../../components/forms/SigninForm';
import AuthLayout from '../../layouts/AuthLayout';

export default function SigninPage() {
  const handleSigninFormSubmit = () => {
    console.log('Signin form submitted.');
  };

  return (
    <AuthLayout>
      <SigninForm handleSubmit={handleSigninFormSubmit} />
    </AuthLayout>
  );
}
