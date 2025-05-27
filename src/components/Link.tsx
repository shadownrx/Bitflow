import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  isButton?: boolean;
  color?: string;
  className?: string;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ 
  href, 
  children, 
  isButton = false, 
  color = 'text-white',
  className = '',
  onClick
}) => {
  if (isButton) {
    return (
      <a 
        href={href}
        onClick={onClick}
        className={`inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 ${className}`}
      >
        {children}
      </a>
    );
  }
  
  return (
    <a 
      href={href}
      onClick={onClick}
      className={`font-medium hover:text-blue-500 transition-colors duration-300 ${color} ${className}`}
    >
      {children}
    </a>
  );
};