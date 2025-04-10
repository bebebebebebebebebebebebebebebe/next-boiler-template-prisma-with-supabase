'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { DashboardNav } from './dashboard-nav';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">メニューを開く</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <SheetHeader className="border-b pb-4">
          <SheetTitle className="text-left">
            <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
              <span className="font-bold">E-Learning Platform</span>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="py-4">
          <DashboardNav />
        </div>
      </SheetContent>
    </Sheet>
  );
}
