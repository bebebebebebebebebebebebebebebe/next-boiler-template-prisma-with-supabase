'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import GoogleButtonIcon from './icons/GoogleButtonIcon';

export type AuthAction = 'signup' | 'login';

export interface ProviderStyle {
  name: string;
  bgColor: string;
  textColor: string;
  hoverBgColor: string;
  hoverBorderColor: string;
  icon: React.ReactNode;
}

export interface ProviderButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  provider: ProviderStyle;
  textContent: string;
  className?: string;
}

const BaseFormButtonWithIcon: FC<ProviderButtonProps> = ({ className, onClick, provider, textContent, ...props }) => {
  return (
    <Button
      type="button"
      variant="outline"
      onClick={onClick}
      className={cn(
        provider.bgColor,
        provider.textColor,
        'border-gray-300',
        provider.hoverBgColor,
        provider.hoverBorderColor,
        'flex items-center justify-center shadow-sm',
        className,
      )}
      {...props}
    >
      {provider.icon}
      {textContent}
    </Button>
  );
};

export default BaseFormButtonWithIcon;
