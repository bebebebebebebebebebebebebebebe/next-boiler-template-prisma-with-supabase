'use client';

import { useState } from 'react';
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ScrollArea } from '@/components/ui/scroll-area';

// 通知データの型定義
interface Notification {
  id: number;
  title: string;
  description: string;
  time: string;
  read: boolean;
  type: 'course' | 'assignment' | 'announcement' | 'message';
}

export function NotificationNav() {
  // 通知データ
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: '新しい課題が追加されました',
      description: 'Webデザインの基礎: 最終プロジェクト',
      time: '30分前',
      read: false,
      type: 'assignment',
    },
    {
      id: 2,
      title: 'コースの更新',
      description: 'データ分析入門: 新しい教材が追加されました',
      time: '2時間前',
      read: false,
      type: 'course',
    },
    {
      id: 3,
      title: 'お知らせ',
      description: 'システムメンテナンスのお知らせ: 12月1日 午前2時〜4時',
      time: '昨日',
      read: true,
      type: 'announcement',
    },
    {
      id: 4,
      title: '新しいメッセージ',
      description: '鈴木先生からのメッセージがあります',
      time: '2日前',
      read: true,
      type: 'message',
    },
  ]);

  // 未読通知の数を計算
  const unreadCount = notifications.filter((notification) => !notification.read).length;

  // 通知を既読にする関数
  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    );
  };

  // すべての通知を既読にする関数
  const markAllAsRead = () => {
    setNotifications(notifications.map((notification) => ({ ...notification, read: true })));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
              {unreadCount}
            </span>
          )}
          <span className="sr-only">通知を表示</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end" forceMount>
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>通知</span>
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" className="h-auto text-xs font-normal" onClick={markAllAsRead}>
              すべて既読にする
            </Button>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <ScrollArea className="h-[300px]">
          <DropdownMenuGroup>
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <DropdownMenuItem
                  key={notification.id}
                  className={`flex flex-col items-start gap-1 p-3 ${!notification.read ? 'bg-muted/50' : ''}`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex w-full justify-between">
                    <span className="font-medium">{notification.title}</span>
                    <span className="text-xs text-muted-foreground">{notification.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{notification.description}</p>
                  {!notification.read && <div className="mt-1 self-end rounded-full bg-blue-500 h-2 w-2" />}
                </DropdownMenuItem>
              ))
            ) : (
              <div className="p-4 text-center text-muted-foreground">通知はありません</div>
            )}
          </DropdownMenuGroup>
        </ScrollArea>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="justify-center" asChild>
          <a href="/dashboard/notifications" className="w-full text-center">
            すべての通知を見る
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
