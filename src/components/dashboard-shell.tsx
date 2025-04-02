import type { ReactNode } from 'react';
import { DashboardNav } from '@/components/dashboard-nav';
import { PerformanceAnalytics } from '@/components/performance-analytics';

interface DashboardShellProps {
  children: ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container grid flex-1 gap-12 md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <aside className="hidden w-full flex-col md:flex">
          <DashboardNav />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden py-6">{children}</main>
      </div>
    </div>
  );
}
