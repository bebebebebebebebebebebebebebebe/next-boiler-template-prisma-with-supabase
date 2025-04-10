import DashBoardMainContent from '@/features/dashboard/components/layouts/dashboard-main-content';
import { DashboardShell } from '@/features/dashboard/components/layouts/dashboard-shell';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard | E-Learning Platform',
  description: 'Manage your learning progress and course information',
};

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashBoardMainContent />
    </DashboardShell>
  );
}
