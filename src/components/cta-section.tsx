import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container">
        <div className="mx-auto max-w-[58rem] text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            今日から新しい学びを始めましょう
          </h2>
          <p className="mb-8 md:text-xl/relaxed">
            無料トライアルで、質の高い学習体験をお試しください。 クレジットカードは必要ありません。
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Link href="/signup" passHref>
              <Button
                size="lg"
                className="h-12 px-6 font-medium bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                無料で始める
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/courses" passHref>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-6 font-medium bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                コースを見る
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70">
            *登録はたった1分で完了します。すぐに学習を始めることができます。
          </p>
        </div>
      </div>
    </section>
  );
}
