import { MobileNav } from '@/components/mobile-nav';
import { NotificationNav } from '@/components/notification-nav';
import { ThemeToggle } from '@/components/theme-toggle';
import { UserNav } from '@/components/user-nav';
import React from 'react';

const UserGlobalHeaderNav = () => {
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="px-16 container flex h-16 items-center justify-between py-4 mx-auto">
        <div className="flex items-center gap-2 md:gap-4">
          <MobileNav />
          <span className="hidden font-bold md:inline-block">E-Learning Platform</span>
        </div>
        <div className="flex items-center gap-2">
          <NotificationNav />
          <ThemeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
};

export default UserGlobalHeaderNav;
