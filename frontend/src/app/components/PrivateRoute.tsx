'use client';

import { redirect } from 'next/navigation';
import { authService } from '@/app/services/authService';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const token = authService.getCurrentToken();
  if (!token) {
    redirect('/login');
  }
  return <>{children}</>;
};

export default PrivateRoute; 