'use client';

import type React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BarChart,
  BookOpen,
  Calendar,
  BadgeIcon as Certificate,
  Home,
  MessageSquare,
  Settings,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  label?: string;
}

export function DashboardNav() {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    {
      title: 'ホーム',
      href: '/dashboard',
      icon: <Home className="mr-2 h-4 w-4" />,
    },
    {
      title: 'コース',
      href: '/dashboard/courses',
      icon: <BookOpen className="mr-2 h-4 w-4" />,
      label: '3',
    },
    {
      title: 'スケジュール',
      href: '/dashboard/schedule',
      icon: <Calendar className="mr-2 h-4 w-4" />,
    },
    {
      title: '成績',
      href: '/dashboard/grades',
      icon: <Certificate className="mr-2 h-4 w-4" />,
    },
    {
      title: 'ディスカッション',
      href: '/dashboard/discussions',
      icon: <MessageSquare className="mr-2 h-4 w-4" />,
      label: '新着',
    },
    {
      title: 'クラスメイト',
      href: '/dashboard/classmates',
      icon: <Users className="mr-2 h-4 w-4" />,
    },
    {
      title: '統計',
      href: '/dashboard/statistics',
      icon: <BarChart className="mr-2 h-4 w-4" />,
    },
    {
      title: '設定',
      href: '/dashboard/settings',
      icon: <Settings className="mr-2 h-4 w-4" />,
    },
  ];

  return (
    <ScrollArea className="h-[calc(100vh-4rem)] py-6">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">メインメニュー</h2>
        <div className="space-y-1">
          {navItems.map((item, index) => (
            <Button
              key={index}
              asChild
              variant={pathname === item.href ? 'secondary' : 'ghost'}
              className="w-full justify-start"
              size="sm"
            >
              <Link href={item.href} className="relative">
                {item.icon}
                {item.title}
                {item.label && (
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-primary px-1.5 py-0.5 text-[10px] font-medium text-primary-foreground">
                    {item.label}
                  </span>
                )}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}
