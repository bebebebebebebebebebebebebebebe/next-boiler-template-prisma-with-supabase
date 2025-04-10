'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { BarChart, LineChart, PieChart, ArrowUpRight, Download, Calendar } from 'lucide-react';

// 仮のデータ - 実際の実装では、APIからデータを取得します
const performanceData = {
  courseCompletion: [
    { name: '1月', 完了率: 20 },
    { name: '2月', 完了率: 35 },
    { name: '3月', 完了率: 45 },
    { name: '4月', 完了率: 55 },
    { name: '5月', 完了率: 65 },
    { name: '6月', 完了率: 75 },
  ],
  quizScores: [
    { name: 'Webデザイン', スコア: 85 },
    { name: 'データ分析', スコア: 72 },
    { name: 'ビジネス英語', スコア: 68 },
    { name: 'プロジェクト管理', スコア: 90 },
    { name: 'マーケティング', スコア: 78 },
  ],
  timeSpent: [
    { name: 'Webデザイン', 時間: 24 },
    { name: 'データ分析', 時間: 18 },
    { name: 'ビジネス英語', 時間: 12 },
    { name: 'プロジェクト管理', 時間: 8 },
    { name: 'マーケティング', 時間: 6 },
  ],
  skillsRadar: [
    { name: '技術スキル', 値: 80 },
    { name: '分析スキル', 値: 65 },
    { name: 'コミュニケーション', 値: 70 },
    { name: 'リーダーシップ', 値: 55 },
    { name: '問題解決', 値: 75 },
  ],
};

export function PerformanceAnalytics() {
  const [activeTab, setActiveTab] = useState('progress');
  const [timeRange, setTimeRange] = useState('month');

  // グラフのレンダリング（実際の実装ではChart.jsやRechartsなどのライブラリを使用）
  const renderChart = (type: string) => {
    return (
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border bg-background p-4">
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
          <p className="text-sm">グラフデータを読み込み中...</p>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-10">
          {type === 'bar' && <BarChart className="h-full w-full" />}
          {type === 'line' && <LineChart className="h-full w-full" />}
          {type === 'pie' && <PieChart className="h-full w-full" />}
        </div>
      </div>
    );
  };

  return (
    <Card className="col-span-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <div>
          <CardTitle>パフォーマンス分析</CardTitle>
          <CardDescription className="mt-1">あなたの学習パフォーマンスと進捗状況の詳細分析</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-md border bg-background p-1 text-sm">
            <Button
              variant={timeRange === 'week' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setTimeRange('week')}
              className="h-7 px-3"
            >
              週間
            </Button>
            <Button
              variant={timeRange === 'month' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setTimeRange('month')}
              className="h-7 px-3"
            >
              月間
            </Button>
            <Button
              variant={timeRange === 'year' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setTimeRange('year')}
              className="h-7 px-3"
            >
              年間
            </Button>
          </div>
          <Button variant="outline" size="icon" className="h-8 w-8">
            <Calendar className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="progress" onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-4 p-1 bg-muted/30">
            <TabsTrigger
              value="progress"
              className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800 dark:data-[state=active]:bg-blue-900 dark:data-[state=active]:text-blue-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bottom-auto h-0.5 w-full bg-blue-500 opacity-0 data-[state=active]:opacity-100" />
              コース進捗
            </TabsTrigger>
            <TabsTrigger
              value="scores"
              className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800 dark:data-[state=active]:bg-green-900 dark:data-[state=active]:text-green-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bottom-auto h-0.5 w-full bg-green-500 opacity-0 data-[state=active]:opacity-100" />
              テストスコア
            </TabsTrigger>
            <TabsTrigger
              value="time"
              className="data-[state=active]:bg-orange-100 data-[state=active]:text-orange-800 dark:data-[state=active]:bg-orange-900 dark:data-[state=active]:text-orange-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bottom-auto h-0.5 w-full bg-orange-500 opacity-0 data-[state=active]:opacity-100" />
              学習時間
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800 dark:data-[state=active]:bg-purple-900 dark:data-[state=active]:text-purple-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bottom-auto h-0.5 w-full bg-purple-500 opacity-0 data-[state=active]:opacity-100" />
              スキル分析
            </TabsTrigger>
          </TabsList>

          <TabsContent value="progress" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">総合完了率</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">67%</div>
                  <p className="text-xs text-muted-foreground">前月比 +12%</p>
                  <div className="mt-2 flex items-center text-xs text-green-600 dark:text-green-400">
                    <ArrowUpRight className="mr-1 h-3 w-3" />
                    <span>順調に進捗中</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">完了コース数</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5/12</div>
                  <p className="text-xs text-muted-foreground">全コースの42%</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">平均学習時間</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2.5時間/日</div>
                  <p className="text-xs text-muted-foreground">先週比 +0.5時間</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">予測修了日</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2024年6月</div>
                  <p className="text-xs text-muted-foreground">予定通り進行中</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-sm font-medium">月別コース完了率</h3>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border bg-background p-4">
                  <div className="h-full w-full">
                    <svg width="100%" height="100%" viewBox="0 0 500 300" className="interactive-chart">
                      {/* X軸 */}
                      <line x1="50" y1="250" x2="450" y2="250" stroke="currentColor" strokeOpacity="0.2" />
                      {/* Y軸 */}
                      <line x1="50" y1="50" x2="50" y2="250" stroke="currentColor" strokeOpacity="0.2" />

                      {/* X軸ラベル */}
                      <text x="90" y="270" fontSize="12" fill="currentColor" textAnchor="middle">
                        1月
                      </text>
                      <text x="156" y="270" fontSize="12" fill="currentColor" textAnchor="middle">
                        2月
                      </text>
                      <text x="222" y="270" fontSize="12" fill="currentColor" textAnchor="middle">
                        3月
                      </text>
                      <text x="288" y="270" fontSize="12" fill="currentColor" textAnchor="middle">
                        4月
                      </text>
                      <text x="354" y="270" fontSize="12" fill="currentColor" textAnchor="middle">
                        5月
                      </text>
                      <text x="420" y="270" fontSize="12" fill="currentColor" textAnchor="middle">
                        6月
                      </text>

                      {/* Y軸ラベル */}
                      <text x="40" y="250" fontSize="12" fill="currentColor" textAnchor="end">
                        0%
                      </text>
                      <text x="40" y="200" fontSize="12" fill="currentColor" textAnchor="end">
                        25%
                      </text>
                      <text x="40" y="150" fontSize="12" fill="currentColor" textAnchor="end">
                        50%
                      </text>
                      <text x="40" y="100" fontSize="12" fill="currentColor" textAnchor="end">
                        75%
                      </text>
                      <text x="40" y="50" fontSize="12" fill="currentColor" textAnchor="end">
                        100%
                      </text>

                      {/* グリッドライン */}
                      <line
                        x1="50"
                        y1="200"
                        x2="450"
                        y2="200"
                        stroke="currentColor"
                        strokeOpacity="0.1"
                        strokeDasharray="5,5"
                      />
                      <line
                        x1="50"
                        y1="150"
                        x2="450"
                        y2="150"
                        stroke="currentColor"
                        strokeOpacity="0.1"
                        strokeDasharray="5,5"
                      />
                      <line
                        x1="50"
                        y1="100"
                        x2="450"
                        y2="100"
                        stroke="currentColor"
                        strokeOpacity="0.1"
                        strokeDasharray="5,5"
                      />
                      <line
                        x1="50"
                        y1="50"
                        x2="450"
                        y2="50"
                        stroke="currentColor"
                        strokeOpacity="0.1"
                        strokeDasharray="5,5"
                      />

                      {/* データポイント */}
                      <circle
                        cx="90"
                        cy="210"
                        r="5"
                        fill="#3b82f6"
                        className="chart-point"
                        data-value="20%"
                        data-month="1月"
                      />
                      <circle
                        cx="156"
                        cy="187.5"
                        r="5"
                        fill="#3b82f6"
                        className="chart-point"
                        data-value="35%"
                        data-month="2月"
                      />
                      <circle
                        cx="222"
                        cy="170"
                        r="5"
                        fill="#3b82f6"
                        className="chart-point"
                        data-value="45%"
                        data-month="3月"
                      />
                      <circle
                        cx="288"
                        cy="152.5"
                        r="5"
                        fill="#3b82f6"
                        className="chart-point"
                        data-value="55%"
                        data-month="4月"
                      />
                      <circle
                        cx="354"
                        cy="135"
                        r="5"
                        fill="#3b82f6"
                        className="chart-point"
                        data-value="65%"
                        data-month="5月"
                      />
                      <circle
                        cx="420"
                        cy="117.5"
                        r="5"
                        fill="#3b82f6"
                        className="chart-point"
                        data-value="75%"
                        data-month="6月"
                      />

                      {/* 線グラフ */}
                      <path
                        d="M90,210 L156,187.5 L222,170 L288,152.5 L354,135 L420,117.5"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="2"
                      />

                      {/* 塗りつぶしエリア */}
                      <path
                        d="M90,210 L156,187.5 L222,170 L288,152.5 L354,135 L420,117.5 L420,250 L90,250 Z"
                        fill="#3b82f6"
                        fillOpacity="0.1"
                      />

                      {/* ツールチップ（初期状態では非表示） */}
                      <g className="chart-tooltip" opacity="0" transform="translate(0,0)">
                        <rect x="-40" y="-35" width="80" height="30" rx="5" fill="white" stroke="#3b82f6" />
                        <text x="0" y="-15" fontSize="12" fill="#3b82f6" textAnchor="middle" className="tooltip-text">
                          データ
                        </text>
                      </g>
                    </svg>
                  </div>

                  {/* インタラクティブコントロール */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2">
                    <button className="rounded-md border bg-background p-1 text-xs hover:bg-muted">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <line x1="8" y1="12" x2="16" y2="12" />
                        <line x1="12" y1="8" x2="12" y2="16" />
                      </svg>
                    </button>
                    <button className="rounded-md border bg-background p-1 text-xs hover:bg-muted">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <line x1="8" y1="12" x2="16" y2="12" />
                      </svg>
                    </button>
                    <button className="rounded-md border bg-background p-1 text-xs hover:bg-muted">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <path d="M12 8v8M8 12h8" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-medium">カテゴリー別進捗状況</h3>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border bg-background p-4">
                  <div className="h-full w-full">
                    <svg width="100%" height="100%" viewBox="0 0 500 300" className="interactive-chart">
                      {/* X軸 */}
                      <line x1="50" y1="250" x2="450" y2="250" stroke="currentColor" strokeOpacity="0.2" />
                      {/* Y軸 */}
                      <line x1="50" y1="50" x2="50" y2="250" stroke="currentColor" strokeOpacity="0.2" />

                      {/* X軸ラベル */}
                      <text x="100" y="270" fontSize="12" fill="currentColor" textAnchor="middle">
                        Web
                      </text>
                      <text x="175" y="270" fontSize="12" fill="currentColor" textAnchor="middle">
                        データ
                      </text>
                      <text x="250" y="270" fontSize="12" fill="currentColor" textAnchor="middle">
                        英語
                      </text>
                      <text x="325" y="270" fontSize="12" fill="currentColor" textAnchor="middle">
                        PM
                      </text>
                      <text x="400" y="270" fontSize="12" fill="currentColor" textAnchor="middle">
                        マーケ
                      </text>

                      {/* Y軸ラベル */}
                      <text x="40" y="250" fontSize="12" fill="currentColor" textAnchor="end">
                        0%
                      </text>
                      <text x="40" y="200" fontSize="12" fill="currentColor" textAnchor="end">
                        25%
                      </text>
                      <text x="40" y="150" fontSize="12" fill="currentColor" textAnchor="end">
                        50%
                      </text>
                      <text x="40" y="100" fontSize="12" fill="currentColor" textAnchor="end">
                        75%
                      </text>
                      <text x="40" y="50" fontSize="12" fill="currentColor" textAnchor="end">
                        100%
                      </text>

                      {/* グリッドライン */}
                      <line
                        x1="50"
                        y1="200"
                        x2="450"
                        y2="200"
                        stroke="currentColor"
                        strokeOpacity="0.1"
                        strokeDasharray="5,5"
                      />
                      <line
                        x1="50"
                        y1="150"
                        x2="450"
                        y2="150"
                        stroke="currentColor"
                        strokeOpacity="0.1"
                        strokeDasharray="5,5"
                      />
                      <line
                        x1="50"
                        y1="100"
                        x2="450"
                        y2="100"
                        stroke="currentColor"
                        strokeOpacity="0.1"
                        strokeDasharray="5,5"
                      />
                      <line
                        x1="50"
                        y1="50"
                        x2="450"
                        y2="50"
                        stroke="currentColor"
                        strokeOpacity="0.1"
                        strokeDasharray="5,5"
                      />

                      {/* バーチャート */}
                      <rect
                        x="75"
                        y="125"
                        width="50"
                        height="125"
                        fill="#3b82f6"
                        className="chart-bar"
                        data-value="75%"
                        data-category="Webデザイン"
                      />
                      <rect
                        x="150"
                        y="175"
                        width="50"
                        height="75"
                        fill="#3b82f6"
                        className="chart-bar"
                        data-value="45%"
                        data-category="データ分析"
                      />
                      <rect
                        x="225"
                        y="195"
                        width="50"
                        height="55"
                        fill="#3b82f6"
                        className="chart-bar"
                        data-value="30%"
                        data-category="ビジネス英語"
                      />
                      <rect
                        x="300"
                        y="100"
                        width="50"
                        height="150"
                        fill="#3b82f6"
                        className="chart-bar"
                        data-value="100%"
                        data-category="プロジェクト管理"
                      />
                      <rect
                        x="375"
                        y="100"
                        width="50"
                        height="150"
                        fill="#3b82f6"
                        className="chart-bar"
                        data-value="100%"
                        data-category="マーケティング"
                      />

                      {/* ツールチップ（初期状態では非表示） */}
                      <g className="chart-tooltip" opacity="0" transform="translate(0,0)">
                        <rect x="-50" y="-35" width="100" height="30" rx="5" fill="white" stroke="#3b82f6" />
                        <text x="0" y="-15" fontSize="12" fill="#3b82f6" textAnchor="middle" className="tooltip-text">
                          データ
                        </text>
                      </g>
                    </svg>
                  </div>

                  {/* インタラクティブコントロール */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2">
                    <button className="rounded-md border bg-background p-1 text-xs hover:bg-muted">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 6h18M3 12h18M3 18h18" />
                      </svg>
                    </button>
                    <button className="rounded-md border bg-background p-1 text-xs hover:bg-muted">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16v16H4z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="scores" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">平均スコア</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">78.6点</div>
                  <p className="text-xs text-muted-foreground">前月比 +3.2点</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">最高スコア</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">95点</div>
                  <p className="text-xs text-muted-foreground">プロジェクト管理</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">合格率</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">92%</div>
                  <p className="text-xs text-muted-foreground">全テスト24/26回合格</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">改善が必要な分野</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">データ分析</div>
                  <p className="text-xs text-muted-foreground">平均65点</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-sm font-medium">コース別テストスコア</h3>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border bg-background p-4">
                  <div className="h-full w-full">
                    <svg width="100%" height="100%" viewBox="0 0 500 300" className="interactive-chart">
                      {/* X軸 */}
                      <line x1="50" y1="250" x2="450" y2="250" stroke="currentColor" strokeOpacity="0.2" />
                      {/* Y軸 */}
                      <line x1="50" y1="50" x2="50" y2="250" stroke="currentColor" strokeOpacity="0.2" />

                      {/* X軸ラベル */}
                      <text x="100" y="270" fontSize="12" fill="currentColor" textAnchor="middle">
                        Web
                      </text>
                      <text x="175" y="270" fontSize="12" fill="currentColor" textAnchor="middle">
                        データ
                      </text>
                      <text x="250" y="270" fontSize="12" fill="currentColor" textAnchor="middle">
                        英語
                      </text>
                      <text x="325" y="270" fontSize="12" fill="currentColor" textAnchor="middle">
                        PM
                      </text>
                      <text x="400" y="270" fontSize="12" fill="currentColor" textAnchor="middle">
                        マーケ
                      </text>

                      {/* Y軸ラベル */}
                      <text x="40" y="250" fontSize="12" fill="currentColor" textAnchor="end">
                        0
                      </text>
                      <text x="40" y="200" fontSize="12" fill="currentColor" textAnchor="end">
                        25
                      </text>
                      <text x="40" y="150" fontSize="12" fill="currentColor" textAnchor="end">
                        50
                      </text>
                      <text x="40" y="100" fontSize="12" fill="currentColor" textAnchor="end">
                        75
                      </text>
                      <text x="40" y="50" fontSize="12" fill="currentColor" textAnchor="end">
                        100
                      </text>

                      {/* グリッドライン */}
                      <line
                        x1="50"
                        y1="200"
                        x2="450"
                        y2="200"
                        stroke="currentColor"
                        strokeOpacity="0.1"
                        strokeDasharray="5,5"
                      />
                      <line
                        x1="50"
                        y1="150"
                        x2="450"
                        y2="150"
                        stroke="currentColor"
                        strokeOpacity="0.1"
                        strokeDasharray="5,5"
                      />
                      <line
                        x1="50"
                        y1="100"
                        x2="450"
                        y2="100"
                        stroke="currentColor"
                        strokeOpacity="0.1"
                        strokeDasharray="5,5"
                      />
                      <line
                        x1="50"
                        y1="50"
                        x2="450"
                        y2="50"
                        stroke="currentColor"
                        strokeOpacity="0.1"
                        strokeDasharray="5,5"
                      />

                      {/* バーチャート */}
                      <rect
                        x="75"
                        y="80"
                        width="50"
                        height="170"
                        fill="#22c55e"
                        className="chart-bar"
                        data-value="85点"
                        data-category="Webデザイン"
                      />
                      <rect
                        x="150"
                        y="120"
                        width="50"
                        height="130"
                        fill="#22c55e"
                        className="chart-bar"
                        data-value="72点"
                        data-category="データ分析"
                      />
                      <rect
                        x="225"
                        y="130"
                        width="50"
                        height="120"
                        fill="#22c55e"
                        className="chart-bar"
                        data-value="68点"
                        data-category="ビジネス英語"
                      />
                      <rect
                        x="300"
                        y="60"
                        width="50"
                        height="190"
                        fill="#22c55e"
                        className="chart-bar"
                        data-value="90点"
                        data-category="プロジェクト管理"
                      />
                      <rect
                        x="375"
                        y="95"
                        width="50"
                        height="155"
                        fill="#22c55e"
                        className="chart-bar"
                        data-value="78点"
                        data-category="マーケティング"
                      />

                      {/* ツールチップ（初期状態では非表示） */}
                      <g className="chart-tooltip" opacity="0" transform="translate(0,0)">
                        <rect x="-50" y="-35" width="100" height="30" rx="5" fill="white" stroke="#22c55e" />
                        <text x="0" y="-15" fontSize="12" fill="#22c55e" textAnchor="middle" className="tooltip-text">
                          データ
                        </text>
                      </g>
                    </svg>
                  </div>

                  {/* インタラクティブコントロール */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2">
                    <button className="rounded-md border bg-background p-1 text-xs hover:bg-muted">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 6h18M3 12h18M3 18h18" />
                      </svg>
                    </button>
                    <button className="rounded-md border bg-background p-1 text-xs hover:bg-muted">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16v16H4z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-medium">スコア分布</h3>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border bg-background p-4">
                  <div className="h-full w-full">
                    <svg width="100%" height="100%" viewBox="0 0 500 300" className="interactive-chart">
                      {/* 円グラフ */}
                      <g transform="translate(250, 150)">
                        {/* 90-100点 */}
                        <path
                          d="M0,0 L0,-100 A100,100 0 0,1 71,71 Z"
                          fill="#22c55e"
                          className="chart-pie-slice"
                          data-value="20%"
                          data-range="90-100点"
                        />

                        {/* 80-89点 */}
                        <path
                          d="M0,0 L71,71 A100,100 0 0,1 -71,71 Z"
                          fill="#3b82f6"
                          className="chart-pie-slice"
                          data-value="35%"
                          data-range="80-89点"
                        />

                        {/* 70-79点 */}
                        <path
                          d="M0,0 L-71,71 A100,100 0 0,1 -100,0 Z"
                          fill="#a855f7"
                          className="chart-pie-slice"
                          data-value="25%"
                          data-range="70-79点"
                        />

                        {/* 60-69点 */}
                        <path
                          d="M0,0 L-100,0 A100,100 0 0,1 -71,-71 Z"
                          fill="#f59e0b"
                          className="chart-pie-slice"
                          data-value="15%"
                          data-range="60-69点"
                        />

                        {/* 60点未満 */}
                        <path
                          d="M0,0 L-71,-71 A100,100 0 0,1 0,-100 Z"
                          fill="#ef4444"
                          className="chart-pie-slice"
                          data-value="5%"
                          data-range="60点未満"
                        />

                        {/* 中央の白い円 */}
                        <circle cx="0" cy="0" r="50" fill="white" />

                        {/* 中央のテキスト */}
                        <text
                          x="0"
                          y="0"
                          fontSize="24"
                          fill="currentColor"
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          78.6
                        </text>
                        <text
                          x="0"
                          y="20"
                          fontSize="12"
                          fill="currentColor"
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          平均点
                        </text>
                      </g>

                      {/* 凡例 */}
                      <g transform="translate(420, 50)">
                        <rect x="0" y="0" width="12" height="12" fill="#22c55e" />
                        <text x="20" y="10" fontSize="10" fill="currentColor">
                          90-100点
                        </text>

                        <rect x="0" y="20" width="12" height="12" fill="#3b82f6" />
                        <text x="20" y="30" fontSize="10" fill="currentColor">
                          80-89点
                        </text>

                        <rect x="0" y="40" width="12" height="12" fill="#a855f7" />
                        <text x="20" y="50" fontSize="10" fill="currentColor">
                          70-79点
                        </text>

                        <rect x="0" y="60" width="12" height="12" fill="#f59e0b" />
                        <text x="20" y="70" fontSize="10" fill="currentColor">
                          60-69点
                        </text>

                        <rect x="0" y="80" width="12" height="12" fill="#ef4444" />
                        <text x="20" y="90" fontSize="10" fill="currentColor">
                          60点未満
                        </text>
                      </g>

                      {/* ツールチップ（初期状態では非表示） */}
                      <g className="chart-tooltip" opacity="0" transform="translate(0,0)">
                        <rect x="-50" y="-35" width="100" height="30" rx="5" fill="white" stroke="#22c55e" />
                        <text x="0" y="-15" fontSize="12" fill="#22c55e" stroke="#22c55e" />
                        <text x="0" y="-15" fontSize="12" fill="#22c55e" textAnchor="middle" className="tooltip-text">
                          データ
                        </text>
                      </g>
                    </svg>
                  </div>

                  {/* インタラクティブコントロール */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2">
                    <button className="rounded-md border bg-background p-1 text-xs hover:bg-muted">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2v20M2 12h20" />
                      </svg>
                    </button>
                    <button className="rounded-md border bg-background p-1 text-xs hover:bg-muted">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v8M8 12h8" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="time" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">総学習時間</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">68時間</div>
                  <p className="text-xs text-muted-foreground">今月の学習時間</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">最も学習した日</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">水曜日</div>
                  <p className="text-xs text-muted-foreground">平均3.5時間/日</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">最も学習した時間帯</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">20:00-22:00</div>
                  <p className="text-xs text-muted-foreground">全体の35%</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">学習の連続日数</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">14日</div>
                  <p className="text-xs text-muted-foreground">自己ベスト: 21日</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-sm font-medium">コース別学習時間</h3>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border bg-background p-4">
                  <div className="h-full w-full">
                    <svg width="100%" height="100%" viewBox="0 0 500 300" className="interactive-chart">
                      {/* X軸 */}
                      <line x1="50" y1="250" x2="450" y2="250" stroke="currentColor" strokeOpacity="0.2" />
                      {/* Y軸 */}
                      <line x1="50" y1="50" x2="50" y2="250" stroke="currentColor" strokeOpacity="0.2" />

                      {/* X軸ラベル */}
                      <text x="100" y="270" fontSize="12" fill="currentColor" textAnchor="middle">
                        Web
                      </text>
                      <text x="175" y="270" fontSize="12" fill="currentColor" textAnchor="middle">
                        データ
                      </text>
                      <text x="250" y="270" fontSize="12" fill="currentColor" textAnchor="middle">
                        英語
                      </text>
                      <text x="325" y="270" fontSize="12" fill="currentColor" textAnchor="middle">
                        PM
                      </text>
                      <text x="400" y="270" fontSize="12" fill="currentColor" textAnchor="middle">
                        マーケ
                      </text>

                      {/* Y軸ラベル */}
                      <text x="40" y="250" fontSize="12" fill="currentColor" textAnchor="end">
                        0
                      </text>
                      <text x="40" y="200" fontSize="12" fill="currentColor" textAnchor="end">
                        6
                      </text>
                      <text x="40" y="150" fontSize="12" fill="currentColor" textAnchor="end">
                        12
                      </text>
                      <text x="40" y="100" fontSize="12" fill="currentColor" textAnchor="end">
                        18
                      </text>
                      <text x="40" y="50" fontSize="12" fill="currentColor" textAnchor="end">
                        24
                      </text>

                      {/* グリッドライン */}
                      <line
                        x1="50"
                        y1="200"
                        x2="450"
                        y2="200"
                        stroke="currentColor"
                        strokeOpacity="0.1"
                        strokeDasharray="5,5"
                      />
                      <line
                        x1="50"
                        y1="150"
                        x2="450"
                        y2="150"
                        stroke="currentColor"
                        strokeOpacity="0.1"
                        strokeDasharray="5,5"
                      />
                      <line
                        x1="50"
                        y1="100"
                        x2="450"
                        y2="100"
                        stroke="currentColor"
                        strokeOpacity="0.1"
                        strokeDasharray="5,5"
                      />
                      <line
                        x1="50"
                        y1="50"
                        x2="450"
                        y2="50"
                        stroke="currentColor"
                        strokeOpacity="0.1"
                        strokeDasharray="5,5"
                      />

                      {/* バーチャート */}
                      <rect
                        x="75"
                        y="50"
                        width="50"
                        height="200"
                        fill="#f97316"
                        className="chart-bar"
                        data-value="24時間"
                        data-category="Webデザイン"
                      />
                      <rect
                        x="150"
                        y="100"
                        width="50"
                        height="150"
                        fill="#f97316"
                        className="chart-bar"
                        data-value="18時間"
                        data-category="データ分析"
                      />
                      <rect
                        x="225"
                        y="150"
                        width="50"
                        height="100"
                        fill="#f97316"
                        className="chart-bar"
                        data-value="12時間"
                        data-category="ビジネス英語"
                      />
                      <rect
                        x="300"
                        y="200"
                        width="50"
                        height="50"
                        fill="#f97316"
                        className="chart-bar"
                        data-value="6時間"
                        data-category="プロジェクト管理"
                      />
                      <rect
                        x="375"
                        y="200"
                        width="50"
                        height="50"
                        fill="#f97316"
                        className="chart-bar"
                        data-value="6時間"
                        data-category="マーケティング"
                      />

                      {/* ツールチップ（初期状態では非表示） */}
                      <g className="chart-tooltip" opacity="0" transform="translate(0,0)">
                        <rect x="-50" y="-35" width="100" height="30" rx="5" fill="white" stroke="#f97316" />
                        <text x="0" y="-15" fontSize="12" fill="#f97316" textAnchor="middle" className="tooltip-text">
                          データ
                        </text>
                      </g>
                    </svg>
                  </div>

                  {/* インタラクティブコントロール */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2">
                    <button className="rounded-md border bg-background p-1 text-xs hover:bg-muted">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 6h18M3 12h18M3 18h18" />
                      </svg>
                    </button>
                    <button className="rounded-md border bg-background p-1 text-xs hover:bg-muted">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16v16H4z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-medium">日別学習時間の推移</h3>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border bg-background p-4">
                  <div className="h-full w-full">
                    <svg width="100%" height="100%" viewBox="0 0 500 300" className="interactive-chart">
                      {/* X軸 */}
                      <line x1="50" y1="250" x2="450" y2="250" stroke="currentColor" strokeOpacity="0.2" />
                      {/* Y軸 */}
                      <line x1="50" y1="50" x2="50" y2="250" stroke="currentColor" strokeOpacity="0.2" />

                      {/* X軸ラベル */}
                      <text x="90" y="270" fontSize="12" fill="currentColor" textAnchor="middle">
                        月
                      </text>
                      <text x="156" y="270" fontSize="12" fill="currentColor" textAnchor="middle">
                        火
                      </text>
                      <text x="222" y="270" fontSize="12" fill="currentColor" textAnchor="middle">
                        水
                      </text>
                      <text x="288" y="270" fontSize="12" fill="currentColor" textAnchor="middle">
                        木
                      </text>
                      <text x="354" y="270" fontSize="12" fill="currentColor" textAnchor="middle">
                        金
                      </text>
                      <text x="420" y="270" fontSize="12" fill="currentColor" textAnchor="middle">
                        土/日
                      </text>

                      {/* Y軸ラベル */}
                      <text x="40" y="250" fontSize="12" fill="currentColor" textAnchor="end">
                        0
                      </text>
                      <text x="40" y="200" fontSize="12" fill="currentColor" textAnchor="end">
                        1
                      </text>
                      <text x="40" y="150" fontSize="12" fill="currentColor" textAnchor="end">
                        2
                      </text>
                      <text x="40" y="100" fontSize="12" fill="currentColor" textAnchor="end">
                        3
                      </text>
                      <text x="40" y="50" fontSize="12" fill="currentColor" textAnchor="end">
                        4
                      </text>

                      {/* グリッドライン */}
                      <line
                        x1="50"
                        y1="200"
                        x2="450"
                        y2="200"
                        stroke="currentColor"
                        strokeOpacity="0.1"
                        strokeDasharray="5,5"
                      />
                      <line
                        x1="50"
                        y1="150"
                        x2="450"
                        y2="150"
                        stroke="currentColor"
                        strokeOpacity="0.1"
                        strokeDasharray="5,5"
                      />
                      <line
                        x1="50"
                        y1="100"
                        x2="450"
                        y2="100"
                        stroke="currentColor"
                        strokeOpacity="0.1"
                        strokeDasharray="5,5"
                      />
                      <line
                        x1="50"
                        y1="50"
                        x2="450"
                        y2="50"
                        stroke="currentColor"
                        strokeOpacity="0.1"
                        strokeDasharray="5,5"
                      />

                      {/* データポイント */}
                      <circle
                        cx="90"
                        cy="150"
                        r="5"
                        fill="#f97316"
                        className="chart-point"
                        data-value="2時間"
                        data-day="月曜日"
                      />
                      <circle
                        cx="156"
                        cy="175"
                        r="5"
                        fill="#f97316"
                        className="chart-point"
                        data-value="1.5時間"
                        data-day="火曜日"
                      />
                      <circle
                        cx="222"
                        cy="75"
                        r="5"
                        fill="#f97316"
                        className="chart-point"
                        data-value="3.5時間"
                        data-day="水曜日"
                      />
                      <circle
                        cx="288"
                        cy="125"
                        r="5"
                        fill="#f97316"
                        className="chart-point"
                        data-value="2.5時間"
                        data-day="木曜日"
                      />
                      <circle
                        cx="354"
                        cy="175"
                        r="5"
                        fill="#f97316"
                        className="chart-point"
                        data-value="1.5時間"
                        data-day="金曜日"
                      />
                      <circle
                        cx="420"
                        cy="100"
                        r="5"
                        fill="#f97316"
                        className="chart-point"
                        data-value="3時間"
                        data-day="土日"
                      />

                      {/* 線グラフ */}
                      <path
                        d="M90,150 L156,175 L222,75 L288,125 L354,175 L420,100"
                        fill="none"
                        stroke="#f97316"
                        strokeWidth="2"
                      />

                      {/* 塗りつぶしエリア */}
                      <path
                        d="M90,150 L156,175 L222,75 L288,125 L354,175 L420,100 L420,250 L90,250 Z"
                        fill="#f97316"
                        fillOpacity="0.1"
                      />

                      {/* ツールチップ（初期状態では非表示） */}
                      <g className="chart-tooltip" opacity="0" transform="translate(0,0)">
                        <rect x="-40" y="-35" width="80" height="30" rx="5" fill="white" stroke="#f97316" />
                        <text x="0" y="-15" fontSize="12" fill="#f97316" textAnchor="middle" className="tooltip-text">
                          データ
                        </text>
                      </g>
                    </svg>
                  </div>

                  {/* インタラクティブコントロール */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2">
                    <button className="rounded-md border bg-background p-1 text-xs hover:bg-muted">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <line x1="8" y1="12" x2="16" y2="12" />
                        <line x1="12" y1="8" x2="12" y2="16" />
                      </svg>
                    </button>
                    <button className="rounded-md border bg-background p-1 text-xs hover:bg-muted">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <line x1="8" y1="12" x2="16" y2="12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="skills" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">最も高いスキル</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">技術スキル</div>
                  <p className="text-xs text-muted-foreground">80/100点</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">改善中のスキル</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">リーダーシップ</div>
                  <p className="text-xs text-muted-foreground">前月比 +5点</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">バランススコア</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">69/100</div>
                  <p className="text-xs text-muted-foreground">バランスの取れた成長</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">推奨コース</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">リーダーシップ研修</div>
                  <p className="text-xs text-muted-foreground">スキル向上のため</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-sm font-medium">スキルレーダーチャート</h3>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border bg-background p-4">
                  <div className="h-full w-full">
                    <svg width="100%" height="100%" viewBox="0 0 500 300" className="interactive-chart">
                      {/* レーダーチャートの背景 */}
                      <g transform="translate(250, 150)">
                        {/* 外側の五角形 */}
                        <path
                          d="M0,-100 L95,31 L59,81 L-59,81 L-95,31 Z"
                          fill="none"
                          stroke="currentColor"
                          strokeOpacity="0.1"
                        />

                        {/* 中間の五角形 */}
                        <path
                          d="M0,-75 L71,23 L44,61 L-44,61 L-71,23 Z"
                          fill="none"
                          stroke="currentColor"
                          strokeOpacity="0.1"
                        />

                        {/* 内側の五角形 */}
                        <path
                          d="M0,-50 L48,15 L30,41 L-30,41 L-48,15 Z"
                          fill="none"
                          stroke="currentColor"
                          strokeOpacity="0.1"
                        />

                        {/* 中心から各頂点への線 */}
                        <line x1="0" y1="0" x2="0" y2="-100" stroke="currentColor" strokeOpacity="0.1" />
                        <line x1="0" y1="0" x2="95" y2="31" stroke="currentColor" strokeOpacity="0.1" />
                        <line x1="0" y1="0" x2="59" y2="81" stroke="currentColor" strokeOpacity="0.1" />
                        <line x1="0" y1="0" x2="-59" y2="81" stroke="currentColor" strokeOpacity="0.1" />
                        <line x1="0" y1="0" x2="-95" y2="31" stroke="currentColor" strokeOpacity="0.1" />

                        {/* スキルデータの五角形 */}
                        <path
                          d="M0,-80 L62,20 L41,57 L-41,57 L-62,20 Z"
                          fill="#a855f7"
                          fillOpacity="0.2"
                          stroke="#a855f7"
                          strokeWidth="2"
                          className="chart-radar"
                        />

                        {/* データポイント */}
                        <circle
                          cx="0"
                          cy="-80"
                          r="5"
                          fill="#a855f7"
                          className="chart-point"
                          data-value="80"
                          data-skill="技術スキル"
                        />
                        <circle
                          cx="62"
                          cy="20"
                          r="5"
                          fill="#a855f7"
                          className="chart-point"
                          data-value="65"
                          data-skill="分析スキル"
                        />
                        <circle
                          cx="41"
                          cy="57"
                          r="5"
                          fill="#a855f7"
                          className="chart-point"
                          data-value="70"
                          data-skill="コミュニケーション"
                        />
                        <circle
                          cx="-41"
                          cy="57"
                          r="5"
                          fill="#a855f7"
                          className="chart-point"
                          data-value="55"
                          data-skill="リーダーシップ"
                        />
                        <circle
                          cx="-62"
                          cy="20"
                          r="5"
                          fill="#a855f7"
                          className="chart-point"
                          data-value="75"
                          data-skill="問題解決"
                        />

                        {/* スキルラベル */}
                        <text x="0" y="-110" fontSize="10" fill="currentColor" textAnchor="middle">
                          技術スキル
                        </text>
                        <text x="105" y="31" fontSize="10" fill="currentColor" textAnchor="start">
                          分析スキル
                        </text>
                        <text x="65" y="95" fontSize="10" fill="currentColor" textAnchor="middle">
                          コミュニケーション
                        </text>
                        <text x="-65" y="95" fontSize="10" fill="currentColor" textAnchor="middle">
                          リーダーシップ
                        </text>
                        <text x="-105" y="31" fontSize="10" fill="currentColor" textAnchor="end">
                          問題解決
                        </text>
                      </g>

                      {/* ツールチップ（初期状態では非表示） */}
                      <g className="chart-tooltip" opacity="0" transform="translate(0,0)">
                        <rect x="-50" y="-35" width="100" height="30" rx="5" fill="white" stroke="#a855f7" />
                        <text x="0" y="-15" fontSize="12" fill="#a855f7" textAnchor="middle" className="tooltip-text">
                          データ
                        </text>
                      </g>
                    </svg>
                  </div>

                  {/* インタラクティブコントロール */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2">
                    <button className="rounded-md border bg-background p-1 text-xs hover:bg-muted">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2v20M2 12h20" />
                      </svg>
                    </button>
                    <button className="rounded-md border bg-background p-1 text-xs hover:bg-muted">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v8M8 12h8" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-medium">スキル成長の推移</h3>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border bg-background p-4">
                  <div className="h-full w-full">
                    <svg width="100%" height="100%" viewBox="0 0 500 300" className="interactive-chart">
                      {/* X軸 */}
                      <line x1="50" y1="250" x2="450" y2="250" stroke="currentColor" strokeOpacity="0.2" />
                      {/* Y軸 */}
                      <line x1="50" y1="50" x2="50" y2="250" stroke="currentColor" strokeOpacity="0.2" />

                      {/* X軸ラベル */}
                      <text x="90" y="270" fontSize="12" fill="currentColor" textAnchor="middle">
                        1月
                      </text>
                      <text x="156" y="270" fontSize="12" fill="currentColor" textAnchor="middle">
                        2月
                      </text>
                      <text x="222" y="270" fontSize="12" fill="currentColor" textAnchor="middle">
                        3月
                      </text>
                      <text x="288" y="270" fontSize="12" fill="currentColor" textAnchor="middle">
                        4月
                      </text>
                      <text x="354" y="270" fontSize="12" fill="currentColor" textAnchor="middle">
                        5月
                      </text>
                      <text x="420" y="270" fontSize="12" fill="currentColor" textAnchor="middle">
                        6月
                      </text>

                      {/* Y軸ラベル */}
                      <text x="40" y="250" fontSize="12" fill="currentColor" textAnchor="end">
                        0
                      </text>
                      <text x="40" y="200" fontSize="12" fill="currentColor" textAnchor="end">
                        25
                      </text>
                      <text x="40" y="150" fontSize="12" fill="currentColor" textAnchor="end">
                        50
                      </text>
                      <text x="40" y="100" fontSize="12" fill="currentColor" textAnchor="end">
                        75
                      </text>
                      <text x="40" y="50" fontSize="12" fill="currentColor" textAnchor="end">
                        100
                      </text>

                      {/* グリッドライン */}
                      <line
                        x1="50"
                        y1="200"
                        x2="450"
                        y2="200"
                        stroke="currentColor"
                        strokeOpacity="0.1"
                        strokeDasharray="5,5"
                      />
                      <line
                        x1="50"
                        y1="150"
                        x2="450"
                        y2="150"
                        stroke="currentColor"
                        strokeOpacity="0.1"
                        strokeDasharray="5,5"
                      />
                      <line
                        x1="50"
                        y1="100"
                        x2="450"
                        y2="100"
                        stroke="currentColor"
                        strokeOpacity="0.1"
                        strokeDasharray="5,5"
                      />
                      <line
                        x1="50"
                        y1="50"
                        x2="450"
                        y2="50"
                        stroke="currentColor"
                        strokeOpacity="0.1"
                        strokeDasharray="5,5"
                      />

                      {/* 技術スキルの線 */}
                      <path
                        d="M90,170 L156,160 L222,150 L288,140 L354,130 L420,120"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="2"
                      />
                      <circle cx="90" cy="170" r="4" fill="#3b82f6" />
                      <circle cx="156" cy="160" r="4" fill="#3b82f6" />
                      <circle cx="222" cy="150" r="4" fill="#3b82f6" />
                      <circle cx="288" cy="140" r="4" fill="#3b82f6" />
                      <circle cx="354" cy="130" r="4" fill="#3b82f6" />
                      <circle cx="420" cy="120" r="4" fill="#3b82f6" />

                      {/* リーダーシップスキルの線 */}
                      <path
                        d="M90,200 L156,195 L222,190 L288,180 L354,175 L420,165"
                        fill="none"
                        stroke="#a855f7"
                        strokeWidth="2"
                      />
                      <circle cx="90" cy="200" r="4" fill="#a855f7" />
                      <circle cx="156" cy="195" r="4" fill="#a855f7" />
                      <circle cx="222" cy="190" r="4" fill="#a855f7" />
                      <circle cx="288" cy="180" r="4" fill="#a855f7" />
                      <circle cx="354" cy="175" r="4" fill="#a855f7" />
                      <circle cx="420" cy="165" r="4" fill="#a855f7" />

                      {/* 凡例 */}
                      <rect x="350" y="50" width="10" height="10" fill="#3b82f6" />
                      <text x="365" y="60" fontSize="10" fill="currentColor">
                        技術スキル
                      </text>

                      <rect x="350" y="70" width="10" height="10" fill="#a855f7" />
                      <text x="365" y="80" fontSize="10" fill="currentColor">
                        リーダーシップ
                      </text>

                      {/* ツールチップ（初期状態では非表示） */}
                      <g className="chart-tooltip" opacity="0" transform="translate(0,0)">
                        <rect x="-50" y="-35" width="100" height="30" rx="5" fill="white" stroke="#a855f7" />
                        <text x="0" y="-15" fontSize="12" fill="#a855f7" textAnchor="middle" className="tooltip-text">
                          データ
                        </text>
                      </g>
                    </svg>
                  </div>

                  {/* インタラクティブコントロール */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2">
                    <button className="rounded-md border bg-background p-1 text-xs hover:bg-muted">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <line x1="8" y1="12" x2="16" y2="12" />
                      </svg>
                    </button>
                    <button className="rounded-md border bg-background p-1 text-xs hover:bg-muted">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <line x1="8" y1="12" x2="16" y2="12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* インタラクティブ機能のためのJavaScript */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          document.addEventListener('DOMContentLoaded', function() {
            // チャートポイントにホバーイベントを追加
            const chartPoints = document.querySelectorAll('.chart-point, .chart-bar, .chart-pie-slice');
            const tooltips = document.querySelectorAll('.chart-tooltip');
            
            chartPoints.forEach(point => {
              point.addEventListener('mouseenter', function(e) {
                const value = this.getAttribute('data-value');
                const category = this.getAttribute('data-category') || this.getAttribute('data-month') || this.getAttribute('data-range') || this.getAttribute('data-skill') || this.getAttribute('data-day');
                
                // 最も近いツールチップを取得
                const tooltip = this.closest('svg').querySelector('.chart-tooltip');
                const tooltipText = tooltip.querySelector('.tooltip-text');
                
                // ツールチップのテキストを設定
                tooltipText.textContent = \`\${category}: \${value}\`;
                
                // ツールチップの位置を設定
                const pointRect = this.getBoundingClientRect();
                const svgRect = this.closest('svg').getBoundingClientRect();
                
                const x = pointRect.left - svgRect.left + pointRect.width / 2;
                const y = pointRect.top - svgRect.top;
                
                tooltip.setAttribute('transform', \`translate(\${x}, \${y})\`);
                tooltip.setAttribute('opacity', '1');
              });
              
              point.addEventListener('mouseleave', function() {
                // 最も近いツールチップを取得して非表示にする
                const tooltip = this.closest('svg').querySelector('.chart-tooltip');
                tooltip.setAttribute('opacity', '0');
              });
            });
            
            // ズームボタンなどのインタラクティブコントロールの機能
            const zoomButtons = document.querySelectorAll('.rounded-md.border');
            zoomButtons.forEach(button => {
              button.addEventListener('click', function() {
                // 実際の実装では、ここにズーム機能などを追加
                console.log('インタラクティブコントロールがクリックされました');
              });
            });
          });
        `,
          }}
        />
      </CardContent>
    </Card>
  );
}
