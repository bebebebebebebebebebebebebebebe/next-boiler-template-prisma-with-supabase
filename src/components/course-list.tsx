'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CourseCard } from '@/components/course-card';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

interface CourseListProps {
  className?: string;
}

export function CourseList({ className }: CourseListProps) {
  const [activeTab, setActiveTab] = useState('in-progress');

  const inProgressCourses = [
    {
      id: 1,
      title: 'Webデザインの基礎',
      description: 'HTML、CSS、JavaScriptの基本を学びます',
      progress: 75,
      image: '/placeholder.svg?height=100&width=200',
      lastAccessed: '2時間前',
      instructor: '佐藤先生',
      nextLesson: 'レスポンシブデザイン',
    },
    {
      id: 2,
      title: 'データ分析入門',
      description: 'Pythonを使ったデータ分析の基礎を学びます',
      progress: 45,
      image: '/placeholder.svg?height=100&width=200',
      lastAccessed: '昨日',
      instructor: '鈴木先生',
      nextLesson: 'Pandasライブラリの活用',
    },
    {
      id: 3,
      title: 'ビジネス英語',
      description: 'ビジネスシーンで使える英語表現を学びます',
      progress: 30,
      image: '/placeholder.svg?height=100&width=200',
      lastAccessed: '3日前',
      instructor: '田中先生',
      nextLesson: 'プレゼンテーションの英語表現',
    },
  ];

  const completedCourses = [
    {
      id: 4,
      title: 'プロジェクト管理入門',
      description: 'プロジェクト管理の基本的な手法を学びます',
      progress: 100,
      image: '/placeholder.svg?height=100&width=200',
      completedDate: '2023年10月15日',
      instructor: '高橋先生',
      certificate: true,
    },
    {
      id: 5,
      title: 'マーケティング基礎',
      description: 'マーケティングの基本概念と戦略を学びます',
      progress: 100,
      image: '/placeholder.svg?height=100&width=200',
      completedDate: '2023年9月5日',
      instructor: '伊藤先生',
      certificate: true,
    },
  ];

  const upcomingCourses = [
    {
      id: 6,
      title: 'AIと機械学習',
      description: '人工知能と機械学習の基礎を学びます',
      startDate: '2023年12月1日',
      image: '/placeholder.svg?height=100&width=200',
      instructor: '渡辺先生',
      duration: '8週間',
    },
    {
      id: 7,
      title: 'リーダーシップ研修',
      description: '効果的なリーダーシップスキルを身につけます',
      startDate: '2024年1月15日',
      image: '/placeholder.svg?height=100&width=200',
      instructor: '中村先生',
      duration: '6週間',
    },
  ];

  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <div>
          <CardTitle>コース</CardTitle>
          <CardDescription className="mt-1">あなたのコース一覧と進捗状況</CardDescription>
        </div>
        <Button size="sm" className="h-8">
          <PlusCircle className="mr-2 h-4 w-4" />
          コースを探す
        </Button>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="in-progress" onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-3 p-1 bg-muted/30">
            <TabsTrigger
              value="in-progress"
              className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800 dark:data-[state=active]:bg-blue-900 dark:data-[state=active]:text-blue-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bottom-auto h-0.5 w-full bg-blue-500 opacity-0 data-[state=active]:opacity-100" />
              受講中
            </TabsTrigger>
            <TabsTrigger
              value="completed"
              className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800 dark:data-[state=active]:bg-green-900 dark:data-[state=active]:text-green-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bottom-auto h-0.5 w-full bg-green-500 opacity-0 data-[state=active]:opacity-100" />
              完了
            </TabsTrigger>
            <TabsTrigger
              value="upcoming"
              className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800 dark:data-[state=active]:bg-purple-900 dark:data-[state=active]:text-purple-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bottom-auto h-0.5 w-full bg-purple-500 opacity-0 data-[state=active]:opacity-100" />
              予定
            </TabsTrigger>
          </TabsList>
          <TabsContent value="in-progress" className="space-y-4">
            {inProgressCourses.map((course) => (
              <CourseCard key={course.id} course={course} type="in-progress" />
            ))}
          </TabsContent>
          <TabsContent value="completed" className="space-y-4">
            {completedCourses.map((course) => (
              <CourseCard key={course.id} course={course} type="completed" />
            ))}
          </TabsContent>
          <TabsContent value="upcoming" className="space-y-4">
            {upcomingCourses.map((course) => (
              <CourseCard key={course.id} course={course} type="upcoming" />
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
