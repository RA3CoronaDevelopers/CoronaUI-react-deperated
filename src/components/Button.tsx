import React from 'react';
import './button.scss';

export interface IButtonProps {
  color?: string;
  variant?: 'filled' | 'outlined' | 'void';
  onClick?: () => any;
  className?: string;
  children?: any;
}

export const Button: React.FC<IButtonProps> = ({
  color = '#777',
  variant = 'filled',
  onClick = () => {
    return;
  },
  className,
  children,
}) => {
  return (
    <div className="button-outside">
      {children}
      <div className="button-inside" onClick={onClick} />
    </div>
  );
};
