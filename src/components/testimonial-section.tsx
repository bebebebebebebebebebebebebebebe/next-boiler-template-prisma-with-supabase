import Image from 'next/image';
import { Star } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

export function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: '佐藤健太',
      role: 'マーケティングマネージャー',
      avatar: '/placeholder.svg?height=100&width=100',
      rating: 5,
      content:
        'このプラットフォームで学ぶことで、私のマーケティングスキルは劇的に向上しました。実践的なコンテンツと柔軟な学習スタイルのおかげで、短期間で成果を出すことができました。',
    },
    {
      id: 2,
      name: '田中美咲',
      role: 'Webデザイナー',
      avatar: '/placeholder.svg?height=100&width=100',
      rating: 5,
      content:
        'UIデザインのコースは本当に素晴らしかったです。理論だけでなく実践的なプロジェクトを通じて学べるので、すぐに仕事に活かすことができました。講師の説明もわかりやすく、質問にも丁寧に答えてくれました。',
    },
    {
      id: 3,
      name: '山田直樹',
      role: 'IT企業経営者',
      avatar: '/placeholder.svg?height=100&width=100',
      rating: 4,
      content:
        '当社の社員教育にこのプラットフォームを導入して大正解でした。チーム全体のスキルアップに繋がり、生産性が向上しました。管理機能も充実していて、学習の進捗を簡単に確認できるのが良いです。',
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-[1280px] px-4">
        <div className="mx-auto max-w-[58rem] text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">利用者の声</h2>
          <p className="text-muted-foreground md:text-xl/relaxed">
            私たちのプラットフォームを利用している方々からのリアルな感想をご紹介します。
          </p>
        </div>

        <div className="mx-auto mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="relative overflow-hidden border bg-background p-6 transition-all hover:shadow-md"
            >
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={testimonial.avatar || '/placeholder.svg'}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-medium">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted'}`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center rounded-full border bg-background px-4 py-1.5 text-sm font-medium">
            <span className="text-green-500 mr-1">+4,000</span> 件以上の高評価レビュー
          </div>
        </div>
      </div>
    </section>
  );
}
