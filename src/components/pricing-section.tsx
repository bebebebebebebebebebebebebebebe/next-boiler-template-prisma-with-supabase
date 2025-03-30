import { Check } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export function PricingSection() {
  const plans = [
    {
      name: '無料プラン',
      price: '¥0',
      description: '基本的な機能を無料で利用できます',
      billing: '',
      features: [
        '厳選された無料コースへのアクセス',
        '基本的な学習進捗の追跡',
        'コミュニティへの限定アクセス',
        'モバイルデバイス対応',
      ],
      cta: '無料で始める',
      ctaVariant: 'outline' as const,
      highlight: false,
    },
    {
      name: 'スタンダードプラン',
      price: '¥1,980',
      description: '個人の学習に最適なプラン',
      billing: '月額',
      features: [
        'すべてのコースへのアクセス',
        '詳細な学習進捗の追跡',
        'コミュニティへの完全アクセス',
        'すべてのデバイス対応',
        'コース修了証の発行',
        '講師への質問（月5回まで）',
      ],
      cta: '今すぐ始める',
      ctaVariant: 'default' as const,
      highlight: true,
    },
    {
      name: 'プロフェッショナルプラン',
      price: '¥4,980',
      description: 'プロフェッショナルな学習体験',
      billing: '月額',
      features: [
        'スタンダードプランのすべての機能',
        '講師への無制限の質問',
        'カスタマイズされた学習プラン',
        'グループ学習の作成と管理',
        '1対1のメンタリングセッション（月2回）',
        '就職・転職サポート',
      ],
      cta: 'アップグレード',
      ctaVariant: 'outline' as const,
      highlight: false,
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-[58rem] text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">シンプルな料金プラン</h2>
          <p className="text-muted-foreground md:text-xl/relaxed">
            あなたの学習ニーズに合わせて選べる、透明性のある料金体系
          </p>
        </div>

        <div className="mx-auto mt-12 grid gap-8 md:grid-cols-3 lg:max-w-4xl">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col ${
                plan.highlight ? 'border-2 border-primary shadow-lg relative' : 'border bg-background/60'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  最も人気
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <div className="mt-4 flex items-baseline text-3xl font-bold">
                  {plan.price}
                  {plan.billing && (
                    <span className="ml-1 text-sm font-medium text-muted-foreground">/{plan.billing}</span>
                  )}
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <ul className="space-y-2 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/signup" className="w-full">
                  <Button variant={plan.ctaVariant} className="w-full" size="lg">
                    {plan.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-[58rem] text-center">
          <h3 className="text-xl font-medium">法人・団体プラン</h3>
          <p className="mt-2 text-muted-foreground">
            5名以上のチーム向けの特別割引プランをご用意しています。
            社員研修や教育機関向けのカスタマイズもお気軽にご相談ください。
          </p>
          <Link href="/enterprise" className="mt-4 inline-block">
            <Button variant="outline">詳細を見る</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
