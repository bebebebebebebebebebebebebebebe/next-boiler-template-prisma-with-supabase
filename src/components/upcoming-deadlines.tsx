'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, Calendar, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

export function UpcomingDeadlines() {
  const deadlines = [
    {
      id: 1,
      title: '課題提出: Webデザイン最終プロジェクト',
      course: 'Webデザインの基礎',
      dueDate: '2023年11月30日',
      daysLeft: 2,
      urgent: true,
    },
    {
      id: 2,
      title: 'クイズ: Pythonデータ構造',
      course: 'データ分析入門',
      dueDate: '2023年12月5日',
      daysLeft: 7,
      urgent: false,
    },
    {
      id: 3,
      title: 'グループディスカッション参加',
      course: 'ビジネス英語',
      dueDate: '2023年12月10日',
      daysLeft: 12,
      urgent: false,
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>今後の締め切り</CardTitle>
            <CardDescription className="mt-1">近日中の課題とテスト</CardDescription>
          </div>
          <Button variant="ghost" size="sm" className="h-8 gap-1">
            すべて表示
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[220px] pr-4">
          <div className="space-y-4">
            {deadlines.map((deadline) => (
              <div
                key={deadline.id}
                className={`flex items-start space-x-3 rounded-md border p-3 ${
                  deadline.urgent ? 'border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/50' : ''
                }`}
              >
                <div
                  className={`mt-0.5 rounded-full ${deadline.urgent ? 'bg-red-100 dark:bg-red-900' : 'bg-blue-100 dark:bg-blue-900'} p-1`}
                >
                  {deadline.urgent ? (
                    <AlertCircle className="h-4 w-4 text-red-500 dark:text-red-400" />
                  ) : (
                    <Calendar className="h-4 w-4 text-blue-500 dark:text-blue-400" />
                  )}
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">{deadline.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {deadline.course} • 期限: {deadline.dueDate}
                  </p>
                  <div
                    className={`text-xs font-medium ${
                      deadline.urgent ? 'text-red-500 dark:text-red-400' : 'text-blue-500 dark:text-blue-400'
                    }`}
                  >
                    残り{deadline.daysLeft}日
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
