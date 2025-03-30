import { ArrowRight, BookOpen, CheckCircle, Lightbulb, Rocket, Trophy, Users } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function LearningJourney() {
  const steps = [
    {
      icon: <BookOpen className="h-10 w-10 text-blue-500" />,
      title: '1. コースを選ぶ',
      description:
        '豊富なカテゴリーから、あなたの目標に合ったコースを選びましょう。初心者向けから上級者向けまで幅広く取り揃えています。',
    },
    {
      icon: <Rocket className="h-10 w-10 text-green-500" />,
      title: '2. 自分のペースで学ぶ',
      description:
        'いつでもどこでも、自分の都合に合わせて学習を進めることができます。モバイルデバイスにも対応しているので、通勤中や休憩時間にも学べます。',
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-yellow-500" />,
      title: '3. インタラクティブに実践',
      description:
        '動画講義だけでなく、実践的な演習やクイズで理解を深めます。実際に手を動かすことで、知識が定着します。',
    },
    {
      icon: <Users className="h-10 w-10 text-purple-500" />,
      title: '4. コミュニティで学び合う',
      description: '同じ目標を持つ仲間とディスカッションしたり、質問したりすることで、より深い理解が得られます。',
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-red-500" />,
      title: '5. 進捗を追跡',
      description: '直感的なダッシュボードで学習の進捗を可視化。目標達成に向けた最適な学習計画を立てられます。',
    },
    {
      icon: <Trophy className="h-10 w-10 text-indigo-500" />,
      title: '6. スキルを証明',
      description: 'コース修了時に取得できる認定証で、あなたのスキルを証明し、キャリアアップに活かせます。',
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50 dark:from-background dark:to-gray-900 overflow-hidden">
      <div className="container relative">
        <div className="mx-auto max-w-[58rem] text-center">
          <div className="mb-4 inline-block rounded-lg bg-blue-100 dark:bg-blue-900 px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-300">
            学習プロセス
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">あなたの学習の旅</h2>
          <p className="text-muted-foreground md:text-xl/relaxed">
            当プラットフォームでの学習体験は、単なる動画視聴ではありません。
            インタラクティブな学習環境で、実践的なスキルを効率的に身につけることができます。
          </p>
        </div>

        {/* 背景の装飾要素 */}
        <div className="absolute -left-16 top-1/4 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl dark:bg-blue-900/20"></div>
        <div className="absolute -right-16 bottom-1/4 h-64 w-64 rounded-full bg-purple-100/50 blur-3xl dark:bg-purple-900/20"></div>

        <div className="relative mt-20">
          {/* デスクトップ表示用のタイムライン中央線 */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-indigo-200 -translate-x-1/2 hidden lg:block dark:from-blue-800 dark:via-purple-800 dark:to-indigo-800"></div>

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative ${index % 2 === 0 ? 'lg:ml-[calc(50%-24rem)]' : 'lg:mr-[calc(50%-24rem)]'}`}
              >
                <div
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
                >
                  {/* タイムラインノード（デスクトップ） */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden lg:block">
                    <div className="relative">
                      <div className="h-12 w-12 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-blue-100 dark:border-blue-800 dark:bg-gray-800 z-10">
                        <span className="text-lg font-bold text-primary">{index + 1}</span>
                      </div>
                      {/* 接続線 */}
                      <div
                        className={`absolute top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 w-16 ${index % 2 === 0 ? 'right-full' : 'left-full'}`}
                      ></div>
                    </div>
                  </div>

                  {/* コンテンツカード */}
                  <div
                    className={`w-full lg:w-[24rem] bg-white dark:bg-gray-800 rounded-xl border shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}
                  >
                    {/* モバイル表示用のステップ番号 */}
                    <div className="flex items-center gap-4 mb-4 lg:hidden">
                      <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <span className="text-lg font-bold text-blue-600 dark:text-blue-300">{index + 1}</span>
                      </div>
                      <h3 className="text-xl font-semibold">{step.title.split('. ')[1]}</h3>
                    </div>

                    {/* デスクトップ表示用のタイトル */}
                    <h3 className="text-xl font-semibold mb-4 hidden lg:block">{step.title.split('. ')[1]}</h3>

                    <div className="mb-4">{step.icon}</div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="h-12 px-6 font-medium bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white"
          >
            学習を始める
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
