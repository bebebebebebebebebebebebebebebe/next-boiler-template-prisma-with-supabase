import UserGlobalHeaderNav from '@/features/users/types/components/user-global-header-nav';
import React from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <UserGlobalHeaderNav />
      <div className="container px-8">{children}</div>
    </div>
  );
};

export default DashboardLayout;
