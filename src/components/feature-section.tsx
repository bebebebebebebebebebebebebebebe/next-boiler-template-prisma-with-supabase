import { BookOpen, CheckCircle, Clock, Globe, Target, Users } from 'lucide-react';

export function FeatureSection() {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-blue-500" />,
      title: '豊富なコース',
      description: 'ビジネススキルからプログラミングまで、幅広いカテゴリーの高品質コンテンツをご提供しています。',
    },
    {
      icon: <Target className="h-10 w-10 text-green-500" />,
      title: '学習進捗の追跡',
      description: '直感的なダッシュボードで学習の進捗を可視化。目標達成に向けた最適な学習計画を立てられます。',
    },
    {
      icon: <Clock className="h-10 w-10 text-purple-500" />,
      title: '自分のペースで学習',
      description: 'いつでもどこでもアクセス可能。自分の都合に合わせて学習を進めることができます。',
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-red-500" />,
      title: '認定証の取得',
      description: 'コース修了時に取得できる認定証で、あなたのスキルを証明し、キャリアアップに活かせます。',
    },
    {
      icon: <Users className="h-10 w-10 text-yellow-500" />,
      title: 'コミュニティ学習',
      description: '同じ目標を持つ仲間とつながり、ディスカッションやグループ学習で理解を深めることができます。',
    },
    {
      icon: <Globe className="h-10 w-10 text-indigo-500" />,
      title: 'グローバル対応',
      description: '多言語対応と字幕機能で、言語の壁を越えて世界中の知識にアクセスできます。',
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-[68rem]">
        <div className="mx-auto max-w-[58rem] text-center">
          <div className="mb-4 inline-block rounded-lg bg-muted px-3 py-1 text-sm">なぜ選ばれるのか</div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">効率的な学習を実現する機能</h2>
          <p className="text-muted-foreground md:text-xl/relaxed">
            当プラットフォームは、あなたの学習体験を最適化するための機能が満載です。
            自分のペースで学び、スキルを磨き、目標を達成しましょう。
          </p>
        </div>
        <div className="mx-auto mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg border bg-background p-6 transition-all hover:shadow-md"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
