import React, { useState } from 'react';
import '../global.scss';
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
  const [isHover, setHover] = useState(false);

  return (
    <div className='background'>
      <div className='button-border-outside'>
        <div className='button-border-shadow' />
        <div
          className='button-border-slice-left'
          style={
            {
              '--left': isHover ? '8px' : '16px',
            } as any
          }
        >
          <div className='button-border-left' />
        </div>
        <div
          className='button-border-slice-right'
          style={
            {
              '--right': isHover ? '8px' : '16px',
            } as any
          }
        >
          <div className='button-border-right' />
        </div>
        <button
          className='button-border-inside'
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {children}
        </button>
      </div>
    </div>
  );
};
