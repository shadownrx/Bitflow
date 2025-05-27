import React from 'react';
import { Zap } from 'lucide-react';

interface LogoProps {
  color?: string;
}

export const Logo: React.FC<LogoProps> = ({ color = 'text-white' }) => {
  return (
    <a href="#\" className="flex items-center">
      <Zap className={`${color} mr-2`} size={24} />
      <span className={`${color} font-bold text-xl`}>BitFlow</span>
    </a>
  );
};