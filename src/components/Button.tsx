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
    <div className='background'>
      <div className='button-border-outside'>
        <div className='button-border-shadow' />
        <div className='button-border-slice-left'>
          <div className='button-border-left' />
        </div>
        <div className='button-border-slice-right'>
          <div className='button-border-right' />
        </div>
        <button className='button-border-inside'>{children}</button>
      </div>
    </div>
  );
};
