import React from 'react';

import SignupForm from '../../components/forms/SignupForm';
import AuthLayout from '../../layouts/AuthLayout';

export default function SignupPage() {
  return (
    <AuthLayout>
      <SignupForm />
    </AuthLayout>
  );
}
