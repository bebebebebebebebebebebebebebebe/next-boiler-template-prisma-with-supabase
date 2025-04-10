'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Clock, Award, BookMarked } from 'lucide-react';

export function ProgressOverview() {
  const stats = [
    {
      title: '完了コース',
      value: '5',
      icon: <Award className="h-5 w-5 text-blue-500" />,
      description: '全12コース中',
      progress: 42,
      color: 'bg-blue-500',
    },
    {
      title: '受講中',
      value: '3',
      icon: <BookOpen className="h-5 w-5 text-green-500" />,
      description: '進行中のコース',
      progress: 25,
      color: 'bg-green-500',
    },
    {
      title: '学習時間',
      value: '48時間',
      icon: <Clock className="h-5 w-5 text-orange-500" />,
      description: '今月の学習時間',
      progress: 80,
      color: 'bg-orange-500',
    },
    {
      title: '予定コース',
      value: '4',
      icon: <BookMarked className="h-5 w-5 text-purple-500" />,
      description: '今後の予定',
      progress: 0,
      color: 'bg-purple-500',
    },
  ];

  return (
    <>
      {stats.map((stat, index) => (
        <Card key={index} className="overflow-hidden">
          <div className={`h-1 w-full ${stat.color}`}></div>
          <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4 space-y-0">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <div className="rounded-full bg-muted p-1">{stat.icon}</div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
            <div className="mt-3">
              <div className="flex items-center justify-between text-xs mb-1">
                <span>進捗</span>
                <span className="font-medium">{stat.progress}%</span>
              </div>
              <Progress
                value={stat.progress}
                className="h-2"
                indicatorClassName={stat.color}
                aria-label={`${stat.progress}% 完了`}
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
