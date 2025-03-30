import type React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.05]" />
      <div className="container relative max-w-screen-xl mx-auto md:px-12 xl:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900 px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-300">
              新しい学びの形
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              あなたの学習体験を
              <br />
              革新する
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              いつでも、どこでも、自分のペースで学べるオンライン学習プラットフォーム。効率的なスキルアップと知識の習得を支援します。
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/auth/login" passHref>
                <Button size="lg" className="h-12 px-6 font-medium">
                  今すぐ始める
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/courses" passHref>
                <Button variant="outline" size="lg" className="h-12 px-6 font-medium">
                  コースを見る
                </Button>
              </Link>
            </div>
            <div className="flex items-center pt-4 text-sm text-muted-foreground">
              <CheckIcon className="mr-2 h-4 w-4" />
              <span>無料トライアル 14日間</span>
              <span className="mx-2">•</span>
              <CheckIcon className="mr-2 h-4 w-4" />
              <span>登録は1分で完了</span>
              <span className="mx-2">•</span>
              <CheckIcon className="mr-2 h-4 w-4" />
              <span>クレジットカード不要</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[500px] md:ml-auto">
            <div className="relative h-[380px] w-full overflow-hidden rounded-lg border bg-background shadow-xl md:h-[420px] lg:h-[500px]">
              <Image
                src="/placeholder.svg?height=500&width=500"
                width={500}
                height={500}
                alt="学習ダッシュボード"
                priority
                className="object-cover"
              />
              <div className="absolute top-0 left-0 right-0 flex items-center justify-start gap-2 bg-background/90 backdrop-blur-sm p-3 text-sm">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <div className="ml-2 font-medium">学習ダッシュボード</div>
              </div>
            </div>
            <div className="absolute -right-12 -bottom-10 hidden h-48 w-60 rotate-6 rounded-lg border bg-background p-4 shadow-lg md:block">
              <div className="mb-2 text-sm font-medium">学習進捗</div>
              <div className="space-y-2">
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span>Webデザイン基礎</span>
                    <span className="font-medium">75%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[75%] rounded-full bg-blue-500" />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span>プログラミング入門</span>
                    <span className="font-medium">45%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[45%] rounded-full bg-green-500" />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span>ビジネス英語</span>
                    <span className="font-medium">30%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[30%] rounded-full bg-purple-500" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -left-8 top-16 hidden h-36 w-56 -rotate-6 rounded-lg border bg-background p-4 shadow-lg md:block">
              <div className="mb-2 text-sm font-medium">次のレッスン</div>
              <div className="rounded-md border p-2">
                <div className="text-xs text-muted-foreground">Webデザイン基礎</div>
                <div className="text-sm font-medium">レスポンシブレイアウト</div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="text-xs text-muted-foreground">残り 30分</div>
                  <Button variant="secondary" size="sm" className="h-7 px-2 text-xs">
                    続ける
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
