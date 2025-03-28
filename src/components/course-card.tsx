'use client';

import Image from 'next/image';
import { Award, Calendar, ChevronRight, Clock, Play, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface CourseCardProps {
  course: any;
  type: 'in-progress' | 'completed' | 'upcoming';
}

export function CourseCard({ course, type }: CourseCardProps) {
  // Define badge styles based on course type
  const badgeVariants = {
    'in-progress': {
      variant: 'secondary' as const,
      className: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 border-blue-200 dark:border-blue-800',
      text: `${course.progress}% 完了`,
    },
    completed: {
      variant: 'secondary' as const,
      className:
        'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 border-green-200 dark:border-green-800',
      text: '完了',
    },
    upcoming: {
      variant: 'secondary' as const,
      className:
        'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 border-purple-200 dark:border-purple-800',
      text: '予定',
    },
  };

  // Define progress bar color based on progress
  const getProgressColor = (progress: number) => {
    if (progress < 30) return 'bg-red-500';
    if (progress < 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="flex flex-col sm:flex-row">
        <div className="relative h-[120px] w-full sm:w-[200px]">
          <Image src={course.image || '/placeholder.svg'} alt={course.title} fill className="object-cover" />
          {type === 'in-progress' && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
              <div className="flex items-center text-xs text-white">
                <Clock className="mr-1 h-3 w-3" />
                {course.lastAccessed}
              </div>
            </div>
          )}
        </div>
        <div className="flex-1 p-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold">{course.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{course.description}</p>
            </div>
            <Badge variant={badgeVariants[type].variant} className={badgeVariants[type].className}>
              {badgeVariants[type].text}
            </Badge>
          </div>

          {type === 'in-progress' && (
            <>
              <div className="mt-4">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span>進捗</span>
                  <span className="font-medium">{course.progress}%</span>
                </div>
                <Progress
                  value={course.progress}
                  className="h-2"
                  indicatorClassName={getProgressColor(course.progress)}
                  aria-label={`${course.progress}% 完了`}
                />
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                <div className="flex items-center">
                  <User className="mr-1 h-3 w-3" />
                  {course.instructor}
                </div>
                <div className="flex items-center">
                  <Play className="mr-1 h-3 w-3" />
                  次回: {course.nextLesson}
                </div>
              </div>
            </>
          )}

          {type === 'completed' && (
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
              <div className="flex items-center">
                <User className="mr-1 h-3 w-3" />
                {course.instructor}
              </div>
              <div className="flex items-center">
                <Calendar className="mr-1 h-3 w-3" />
                {course.completedDate}に完了
              </div>
              {course.certificate && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center text-green-600 dark:text-green-400">
                        <Award className="mr-1 h-3 w-3" />
                        修了証
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>修了証をダウンロードできます</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
          )}

          {type === 'upcoming' && (
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
              <div className="flex items-center">
                <User className="mr-1 h-3 w-3" />
                {course.instructor}
              </div>
              <div className="flex items-center">
                <Calendar className="mr-1 h-3 w-3" />
                {course.startDate}開始
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-3 w-3" />
                期間: {course.duration}
              </div>
            </div>
          )}
        </div>
      </div>
      <CardFooter className="bg-muted/50 p-3 flex justify-end">
        {type === 'in-progress' && (
          <Button size="sm">
            <Play className="mr-2 h-4 w-4" />
            続きから学習
          </Button>
        )}
        {type === 'completed' && (
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Award className="mr-2 h-4 w-4" />
              修了証
            </Button>
            <Button variant="secondary" size="sm">
              <Play className="mr-2 h-4 w-4" />
              復習する
            </Button>
          </div>
        )}
        {type === 'upcoming' && (
          <Button variant="outline" size="sm">
            詳細を見る
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
