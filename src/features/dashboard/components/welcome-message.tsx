import { CalendarClock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface WelcomeMessageProps {
  name: string;
  lastLogin: string;
}

export function WelcomeMessage({ name, lastLogin }: WelcomeMessageProps) {
  // Get current time to display appropriate greeting
  const currentHour = new Date().getHours();
  let greeting = 'こんにちは';

  if (currentHour < 12) {
    greeting = 'おはようございます';
  } else if (currentHour >= 17) {
    greeting = 'こんばんは';
  }

  return (
    <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-none">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
              {greeting}、{name}さん
            </h1>
            <p className="text-muted-foreground">今日も学習を続けましょう。あなたの学習の旅をサポートします。</p>
          </div>
          <div className="mt-4 flex items-center text-sm text-muted-foreground md:mt-0">
            <CalendarClock className="mr-1 h-4 w-4" />
            <span>最終ログイン: {lastLogin}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
