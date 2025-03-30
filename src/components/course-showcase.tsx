import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, Star, Users } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export function CourseShowcase() {
  const categories = ['ビジネススキル', 'プログラミング', 'デザイン', 'マーケティング', '語学', '資格対策'];

  const courses = [
    {
      id: 1,
      title: 'Webデザイン入門：HTML & CSS',
      category: 'プログラミング',
      image: '/placeholder.svg?height=200&width=360',
      duration: '20時間',
      level: '初級',
      rating: 4.8,
      students: 2450,
      tags: ['HTML', 'CSS', 'レスポンシブ'],
    },
    {
      id: 2,
      title: 'ビジネス英語マスター',
      category: '語学',
      image: '/placeholder.svg?height=200&width=360',
      duration: '30時間',
      level: '中級',
      rating: 4.6,
      students: 1280,
      tags: ['ビジネス', '英語', 'コミュニケーション'],
    },
    {
      id: 3,
      title: 'データ分析の基礎',
      category: 'ビジネススキル',
      image: '/placeholder.svg?height=200&width=360',
      duration: '25時間',
      level: '中級',
      rating: 4.9,
      students: 3670,
      tags: ['Excel', 'データ分析', 'ビジネス'],
    },
    {
      id: 4,
      title: 'UIデザインの原則',
      category: 'デザイン',
      image: '/placeholder.svg?height=200&width=360',
      duration: '18時間',
      level: '初級',
      rating: 4.7,
      students: 2140,
      tags: ['UI', 'UX', 'デザイン'],
    },
    {
      id: 5,
      title: 'デジタルマーケティング実践',
      category: 'マーケティング',
      image: '/placeholder.svg?height=200&width=360',
      duration: '32時間',
      level: '上級',
      rating: 4.8,
      students: 1890,
      tags: ['SNS', 'SEO', '広告運用'],
    },
    {
      id: 6,
      title: '簿記3級対策講座',
      category: '資格対策',
      image: '/placeholder.svg?height=200&width=360',
      duration: '15時間',
      level: '初級',
      rating: 4.9,
      students: 4230,
      tags: ['簿記', '資格', '会計'],
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-[1280px] px-4">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">人気のコース</h2>
            <p className="mt-2 text-muted-foreground md:text-lg">実践的なスキルが身につく、厳選された高品質コース</p>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/courses" className="text-sm font-medium hover:underline">
              すべてのコースを見る
            </Link>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>

        <div className="mt-8 flex items-center justify-start gap-2 overflow-x-auto pb-4">
          <Button variant="outline" className="rounded-full" size="sm">
            すべて
          </Button>
          {categories.map((category, index) => (
            <Button key={index} variant="ghost" className="rounded-full" size="sm">
              {category}
            </Button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden transition-all hover:shadow-md">
              <div className="aspect-[16/9] relative">
                <Image src={course.image || '/placeholder.svg'} alt={course.title} fill className="object-cover" />
                <div className="absolute top-2 left-2">
                  <Badge className="bg-primary">{course.category}</Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {course.duration}
                  </div>
                  <span>•</span>
                  <div>{course.level}</div>
                  <span>•</span>
                  <div className="flex items-center">
                    <Star className="mr-1 h-4 w-4 text-yellow-500" />
                    {course.rating}
                  </div>
                  <span>•</span>
                  <div className="flex items-center">
                    <Users className="mr-1 h-4 w-4" />
                    {course.students}人
                  </div>
                </div>
                <h3 className="text-lg font-semibold">{course.title}</h3>
                <div className="mt-3 flex flex-wrap gap-1">
                  {course.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between border-t p-4">
                <div className="font-medium">無料で学ぶ</div>
                <Button size="sm">詳細を見る</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
