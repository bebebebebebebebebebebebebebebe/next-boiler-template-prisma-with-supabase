import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function FaqSection() {
  const faqs = [
    {
      question: 'どのようなコースが提供されていますか？',
      answer:
        'ビジネススキル、プログラミング、デザイン、マーケティング、語学、資格対策など、様々なカテゴリのコースを提供しています。初心者から上級者まで、レベルに合わせて学習を進めることができます。',
    },
    {
      question: 'コースの受講期限はありますか？',
      answer:
        '一度登録したコースは、無期限でアクセスが可能です。自分のペースで学習を進めることができるので、時間的な制約を気にする必要はありません。',
    },
    {
      question: 'モバイルデバイスでも学習できますか？',
      answer:
        'はい、当プラットフォームはレスポンシブデザインを採用しており、スマートフォンやタブレットなど様々なデバイスに対応しています。また、専用のモバイルアプリもご用意していますので、オフライン環境でも学習を継続できます。',
    },
    {
      question: '修了証は発行されますか？',
      answer:
        'はい、コースを完了するとデジタル修了証が発行されます。この修了証はLinkedInなどのプロフィールに掲載することができ、スキルの証明として活用できます。一部のコースでは、業界で認められた公式認定証も取得可能です。',
    },
    {
      question: 'コミュニティ機能はどのように利用できますか？',
      answer:
        '各コースにはディスカッションフォーラムがあり、同じコースを受講している仲間や講師とコミュニケーションを取ることができます。また、グループ学習機能を使って、仲間と一緒に学習を進めることも可能です。',
    },
    {
      question: '学習の進捗はどのように追跡できますか？',
      answer:
        '直感的なダッシュボードで、コースの進捗状況、完了したレッスン、獲得したスキルなどを一目で確認できます。また、学習時間の統計や目標達成度なども視覚的に表示されるので、モチベーション維持にも役立ちます。',
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-8 mx-auto">
        <div className="mx-auto max-w-[58rem] text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">よくある質問</h2>
          <p className="text-muted-foreground md:text-xl/relaxed">
            皆様からよくいただくご質問にお答えします。 さらに詳しい情報は、サポートセンターをご利用ください。
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3x">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">まだ疑問がありますか？お気軽にお問い合わせください。</p>
          <div className="inline-flex items-center rounded-full border bg-background px-4 py-1.5 text-sm font-medium">
            support@elearning.jp
          </div>
        </div>
      </div>
    </section>
  );
}
