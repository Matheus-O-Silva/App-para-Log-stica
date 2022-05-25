import React from 'react';
import { AuthProvider } from './AuthProvider';
import Routes  from './routes';

export const Providers = ({}) => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};