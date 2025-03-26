import LoginForm from '@/features/auth/components/login/login-form';
import { auth } from '@/lib/auth/auth';
import React from 'react';

const LoginPage = async () => {
  const session = await auth();
  console.log(session);
  return <LoginForm />;
};

export default LoginPage;
