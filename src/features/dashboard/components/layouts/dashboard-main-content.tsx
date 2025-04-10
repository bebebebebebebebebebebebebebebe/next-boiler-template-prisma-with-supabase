import React from 'react';
import { DashboardHeader } from './dashboard-header';
import { WelcomeMessage } from '../welcome-message';
import { ProgressOverview } from '../progress-overview';
import { CourseList } from '../course-list';
import { RecentActivity } from '../recent-activity';
import { UpcomingDeadlines } from '../upcoming-deadlines';
import { PerformanceAnalytics } from '../performance-analytics';

const DashBoardMainContent = () => {
  return (
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
  );
};

export default DashBoardMainContent;
