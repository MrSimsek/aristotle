import React from 'react';

import SignupForm from '../../components/forms/SignupForm';
import AuthLayout from '../../layouts/AuthLayout';

export default function SignupPage() {
  const handleSignupFormSubmit = () => {
    console.log('Signup form submitted.');
  };

  return (
    <AuthLayout>
      <SignupForm handleSubmit={handleSignupFormSubmit} />
    </AuthLayout>
  );
}
