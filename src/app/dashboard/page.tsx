import type { Metadata } from 'next';
import { DashboardHeader } from '@/components/dashboard-header';
import { DashboardShell } from '@/components/dashboard-shell';
import { CourseList } from '@/components/course-list';
import { ProgressOverview } from '@/components/progress-overview';
import { RecentActivity } from '@/components/recent-activity';
import { UpcomingDeadlines } from '@/components/upcoming-deadlines';
import { WelcomeMessage } from '@/components/welcome-message';
import { PerformanceAnalytics } from '@/components/performance-analytics';

export const metadata: Metadata = {
  title: 'Dashboard | E-Learning Platform',
  description: 'Manage your learning progress and course information',
};

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div className="space-y-6">
        <WelcomeMessage name="山田太郎" lastLogin="2023年11月28日 09:45" />

        <DashboardHeader heading="学習の概要" text="あなたの学習進捗状況の概要" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <ProgressOverview />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <CourseList className="lg:col-span-2" />
          <div className="space-y-6">
            <RecentActivity />
            <UpcomingDeadlines />
          </div>
        </div>
        <PerformanceAnalytics />
      </div>
    </DashboardShell>
  );
}
