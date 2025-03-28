'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, CheckCircle, MessageSquare, Trophy } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: 'lesson-completed',
      course: 'Webデザインの基礎',
      lesson: 'CSSレイアウト',
      time: '2時間前',
      icon: <CheckCircle className="h-4 w-4 text-green-500" />,
      color: 'border-l-green-500',
    },
    {
      id: 2,
      type: 'quiz-completed',
      course: 'データ分析入門',
      score: '85%',
      time: '昨日',
      icon: <Trophy className="h-4 w-4 text-yellow-500" />,
      color: 'border-l-yellow-500',
    },
    {
      id: 3,
      type: 'forum-post',
      course: 'ビジネス英語',
      topic: 'プレゼンテーションのコツ',
      time: '2日前',
      icon: <MessageSquare className="h-4 w-4 text-blue-500" />,
      color: 'border-l-blue-500',
    },
    {
      id: 4,
      type: 'course-started',
      course: 'ビジネス英語',
      time: '3日前',
      icon: <BookOpen className="h-4 w-4 text-purple-500" />,
      color: 'border-l-purple-500',
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>最近のアクティビティ</CardTitle>
        <CardDescription>あなたの最近の学習活動</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[280px] pr-4">
          <div className="space-y-4">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className={`flex items-start space-x-3 rounded-md border-l-4 ${activity.color} bg-muted/30 p-3`}
              >
                <div className="mt-0.5 rounded-full bg-background p-1">{activity.icon}</div>
                <div className="space-y-1">
                  {activity.type === 'lesson-completed' && (
                    <>
                      <p className="text-sm font-medium">レッスン完了: {activity.lesson}</p>
                      <p className="text-xs text-muted-foreground">
                        {activity.course} • {activity.time}
                      </p>
                    </>
                  )}
                  {activity.type === 'quiz-completed' && (
                    <>
                      <p className="text-sm font-medium">クイズ完了: スコア {activity.score}</p>
                      <p className="text-xs text-muted-foreground">
                        {activity.course} • {activity.time}
                      </p>
                    </>
                  )}
                  {activity.type === 'forum-post' && (
                    <>
                      <p className="text-sm font-medium">フォーラム投稿: {activity.topic}</p>
                      <p className="text-xs text-muted-foreground">
                        {activity.course} • {activity.time}
                      </p>
                    </>
                  )}
                  {activity.type === 'course-started' && (
                    <>
                      <p className="text-sm font-medium">コース開始: {activity.course}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
